"""AUTO MAKER (Template) - DO NOT COMMIT SECRETS

- Finds *_raw.txt under docs/**
- Reads text safely across encodings (utf-8 / cp949 / utf-16 etc.)
- Calls Claude (Anthropic) to:
  - infer categories/folders
  - generate _category_.json and multiple .mdx files
- Writes outputs next to the raw file folder
- Moves processed *_raw.txt into docs/_trash/

SECURITY:
- DO NOT hardcode API keys in this file.
- Use env var ANTHROPIC_API_KEY.

Windows (CMD):
  setx ANTHROPIC_API_KEY "sk-ant-..."
  (restart terminal)

Run (from repo root):
  python tools/zenodoc_gen/auto_maker_template.py

Optional env:
  ZENODOC_MODEL=claude-3-5-sonnet-latest

"""

from __future__ import annotations

import json
import os
import re
import shutil
import subprocess
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, Optional

from anthropic import Anthropic


ROOT = Path(__file__).resolve().parents[2]
DOCS_DIR = ROOT / "docs"
TRASH_DIR = DOCS_DIR / "_trash"


def read_file_safely(path: Path) -> str:
    """Read any text file robustly (Windows: cp949/utf-16 mixed)."""
    data = path.read_bytes()
    encodings = [
        "utf-8-sig",
        "utf-8",
        "cp949",
        "euc-kr",
        "utf-16",
        "utf-16-le",
        "utf-16-be",
        "latin-1",
    ]
    for enc in encodings:
        try:
            return data.decode(enc)
        except UnicodeDecodeError:
            pass
    return data.decode("utf-8", errors="replace")


def call_claude(client: Anthropic, prompt: str) -> str:
    """Call Claude with model fallback."""
    env_model = os.getenv("ZENODOC_MODEL")
    models = [m for m in [env_model] if m] + [
        "claude-3-5-sonnet-latest",
        "claude-3-5-haiku-latest",
        "claude-3-haiku-20240307",
    ]

    last_err: Optional[Exception] = None
    for model in models:
        try:
            msg = client.messages.create(
                model=model,
                max_tokens=8192,
                messages=[{"role": "user", "content": prompt}],
            )
            out = []
            for b in msg.content:
                if getattr(b, "type", None) == "text":
                    out.append(b.text)
            return "\n".join(out).strip()
        except Exception as e:
            last_err = e
            continue

    raise RuntimeError(f"Claude call failed for all models. Last error: {last_err}")


def build_prompt(text_content: str, today_str: str) -> str:
    # NOTE: Replace this block with your full ZenoDoc prompt if you want.
    # Keep the 'JSON only' constraint at the end.
    return f"""당신은 IT 기술 문서 작성자이자 목차 구성 전문가입니다.
다음 [원본 텍스트]를 읽고, 내용을 분석하여 카테고리(폴더)와 문서(MDX)를 만들어주세요.

요구사항:
- 대상: 초보자/비전공자
- 용어는 쉬운 정의 + 예시/비유 포함
- Docusaurus MDX 문서로 작성
- 본문은 충분히 길게(최소 1,500자 권장)
- 중괄호/백틱 등은 MDX 문법 오류가 나지 않게 이스케이프
- JSX 컴포넌트 사용 금지
- 문서 끝에 작성일 표기: 작성일: {today_str}

[출력 형식 제한 - 매우 중요]
아래 JSON만 출력하세요. 다른 텍스트는 절대 출력하지 마세요.

{{
  "categories": [
    {{
      "folder_name": "1-topic",
      "category_json": {{
        "label": "1주차: 주제",
        "position": 1,
        "link": {{
          "type": "generated-index",
          "description": "초보자도 이해하기 쉬운 설명"
        }}
      }},
      "mdx_files": [
        {{
          "filename": "1-concept.mdx",
          "content": "---\\ntitle: \\\"제목\\\"\\ndescription: \\\"설명\\\"\\nslug: \\\"/path\\\"\\nsidebar_label: \\\"라벨\\\"\\ndate: \\\"{today_str}\\\"\\n---\\n\\n# 제목\\n\\n본문...\\n\\n---\\n\\n작성일: {today_str}"
        }}
      ]
    }}
  ]
}}

[원본 텍스트 시작]
{text_content}
[원본 텍스트 끝]
"""


def parse_json_from_text(text: str) -> Dict[str, Any]:
    m = re.search(r"\{.*\}", text, re.DOTALL)
    if m:
        return json.loads(m.group(0))
    return json.loads(text)


def main() -> None:
    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key:
        raise SystemExit("ANTHROPIC_API_KEY 환경변수가 없습니다. Windows CMD: setx ANTHROPIC_API_KEY \"sk-ant-...\" 후 터미널 재실행")

    client = Anthropic(api_key=api_key)
    TRASH_DIR.mkdir(parents=True, exist_ok=True)

    raw_files = []
    for root, _dirs, files in os.walk(DOCS_DIR):
        if str(TRASH_DIR) in root:
            continue
        for fn in sorted(files):
            if fn.endswith("_raw.txt"):
                raw_files.append(Path(root) / fn)

    if not raw_files:
        print("⚠️  docs/ 아래에 *_raw.txt 파일이 없습니다.")
        return

    today_str = datetime.now().strftime("%Y-%m-%d")

    for raw_path in raw_files:
        print(f"\n🎯 발견! {raw_path.name}")
        text_content = read_file_safely(raw_path)
        if not text_content.strip():
            print("  -> 비어있음, 스킵")
            continue

        prompt = build_prompt(text_content, today_str)
        try:
            result_text = call_claude(client, prompt)
            data = parse_json_from_text(result_text)
        except Exception as e:
            (ROOT / "error_log.txt").write_text(str(e) + "\n\n" + (locals().get("result_text", "")), encoding="utf-8")
            print(f"  ❌ 실패: {e}")
            continue

        categories = data.get("categories")
        if not isinstance(categories, list) or not categories:
            print("  ❌ categories 없음, 스킵")
            continue

        parent_dir = raw_path.parent
        for cat in categories:
            folder_name = cat.get("folder_name") or "unknown"
            target_dir = parent_dir / folder_name
            target_dir.mkdir(parents=True, exist_ok=True)

            cat_json = cat.get("category_json") or {}
            (target_dir / "_category_.json").write_text(
                json.dumps(cat_json, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )

            mdx_files = cat.get("mdx_files") or []
            for mdx in mdx_files:
                fn = mdx.get("filename") or "doc.mdx"
                content = mdx.get("content") or ""
                (target_dir / fn).write_text(content + "\n", encoding="utf-8")

            label = cat_json.get("label", folder_name)
            print(f"  -> 📂 {label} 생성 완료 ({len(mdx_files)}개)")

        # move raw file to trash
        dest = TRASH_DIR / raw_path.name
        shutil.move(str(raw_path), str(dest))
        print("  -> 🗑️  원본 파일 _trash 이동")

    # optional git automation (disabled by default)
    if os.getenv("ZENODOC_GIT_PUSH") == "1":
        print("\n🚀 Git commit & push...")
        subprocess.run(["git", "add", "docs"], cwd=ROOT)
        subprocess.run(["git", "commit", "-m", f"chore(zenodoc): auto-generate ({today_str})"], cwd=ROOT)
        subprocess.run(["git", "push"], cwd=ROOT)


if __name__ == "__main__":
    main()
