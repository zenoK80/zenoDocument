---
title: React 소개
description: React의 탄생 배경, 개발 철학, 주요 개념과 현황을 정리합니다.
slug: react-intro
sidebar_position: 0
---

# React란?

## 개요

React는 **사용자 인터페이스(UI)를 만들기 위한 JavaScript 라이브러리**입니다.  
2013년 Facebook(현 Meta)에서 공개한 오픈소스 프로젝트로, 현재 전 세계에서 가장 많이 사용되는 프론트엔드 기술 중 하나입니다.

:::tip 핵심 정의
React = 컴포넌트 기반 + 선언적 UI + Virtual DOM을 통한 효율적인 렌더링
:::

---

## React의 탄생 배경

### 당시의 문제 상황 (2010년대 초반)

Facebook의 뉴스피드는 **실시간으로 업데이트되는 복잡한 UI**였습니다:

- 좋아요, 댓글, 공유 등 수많은 인터랙션
- 광고, 알림 등 다양한 UI 컴포넌트
- 실시간으로 변경되는 데이터

**전통적인 DOM 조작 방식의 한계**:
- jQuery를 사용한 명령형 코드 → 코드 복잡도 폭발
- DOM 업데이트 비효율 → 성능 저하
- 컴포넌트 재사용 어려움 → 중복 코드 양산
- 데이터 흐름 추적 곤란 → 버그 증가

### Facebook의 고민

```
"사용자가 좋아요 버튼을 누르면, 
화면의 어떤 부분들을 어떻게 업데이트해야 하지?"
```

이 질문에서 React가 시작되었습니다.

---

## React의 개발 철학

React는 다음과 같은 소프트웨어 공학 원칙을 바탕으로 설계되었습니다:

### 1. 선언적 프로그래밍 (Declarative)

**명령형 (기존 방식)**:
- "버튼을 만들고, 텍스트를 넣고, 이벤트를 붙이고..."
- **어떻게(How)** 할지 단계별로 지시

**선언형 (React 방식)**:
- "클릭하면 이렇게 보여줘"
- **무엇을(What)** 보여줄지만 선언

**장점**: 코드 이해 쉬움, 버그 감소, 유지보수 용이

---

### 2. 컴포넌트 기반 아키텍처 (Component-Based)

**설계 패턴**: Composite Pattern (복합체 패턴)

UI를 **독립적이고 재사용 가능한 조각**으로 나눕니다:

```
전체 애플리케이션
  ↓
Header + Main + Footer
  ↓
Main = Sidebar + Content
  ↓
Content = PostList
  ↓
PostList = Post + Post + Post
```

**소프트웨어 공학 원칙**:
- **단일 책임 원칙 (SRP)**: 각 컴포넌트는 하나의 역할만
- **개방-폐쇄 원칙 (OCP)**: 확장 가능, 수정은 최소화
- **재사용성 (Reusability)**: DRY 원칙 준수

---

### 3. 단방향 데이터 흐름 (Unidirectional Data Flow)

**Flux 패턴** 기반:

```
Action → Dispatcher → Store → View
  ↑                              ↓
  └──────────────────────────────┘
```

**React의 단방향 흐름**:

```
부모 컴포넌트
  ↓ (Props)
자식 컴포넌트
  ↓ (Event)
부모 State 업데이트
  ↓
리렌더링
```

**장점**:
- 데이터 흐름 예측 가능
- 디버깅 쉬움
- 상태 관리 명확

---

### 4. Virtual DOM을 통한 성능 최적화

**문제**: 실제 DOM 조작은 매우 느림 (브라우저 리플로우/리페인트)

**React의 해결책**:

```
1. 메모리에 가상 DOM 생성 (빠름)
2. 변경 전후 비교 (Diffing Algorithm)
3. 최소한의 변경만 실제 DOM 반영
```

**알고리즘**: Reconciliation (재조정)
- O(n³) → O(n) 복잡도로 개선
- 휴리스틱 접근법 사용

---

## React의 주요 개념

### 컴포넌트 (Component)

UI의 독립적인 조각. 재사용 가능하며 자체 상태를 가질 수 있습니다.

```jsx
function Button() {
    return <button>클릭</button>;
}
```

---

### JSX (JavaScript XML)

JavaScript 안에서 마크업을 작성할 수 있는 문법 확장.

```jsx
const element = <h1>Hello, {name}</h1>;
```

**트랜스파일**: JSX → JavaScript (Babel)

---

### Props (Properties)

컴포넌트 간 데이터 전달 메커니즘. **읽기 전용**입니다.

```jsx
<Greeting name="철수" />
```

---

### State (상태)

컴포넌트의 동적 데이터. 변경되면 리렌더링이 발생합니다.

```jsx
const [count, setCount] = useState(0);
```

---

### Hook

함수 컴포넌트에서 상태와 생명주기를 사용할 수 있게 하는 함수.

- **useState**: 상태 관리
- **useEffect**: 부수 효과 처리
- **useContext**: 전역 상태 공유
- **useMemo**, **useCallback**: 성능 최적화

---

## React의 현황과 인기

### 사용 통계 (2024년 기준)

| 지표 | 수치 |
|------|------|
| **GitHub Stars** | 220,000+ |
| **npm 주간 다운로드** | 2,000만+ |
| **StackOverflow 질문 수** | 500,000+ |
| **전 세계 개발자 사용률** | 40%+ (State of JS 2023) |

---

### 주요 사용 기업

**글로벌 기업**:
- Meta (Facebook, Instagram, WhatsApp)
- Netflix
- Airbnb
- Uber
- Dropbox
- Discord

**한국 기업**:
- 네이버
- 카카오
- 토스
- 당근마켓
- 야놀자

---

### 생태계

**프레임워크**:
- Next.js (SSR, SSG)
- Gatsby (정적 사이트)
- Remix (풀스택)

**상태 관리**:
- Redux
- Zustand
- Recoil
- MobX

**UI 라이브러리**:
- Material-UI
- Ant Design
- Chakra UI
- Tailwind CSS

**모바일**:
- React Native (iOS, Android)

---

## React가 해결한 문제들

### 1. UI 복잡도 관리

**문제**: jQuery 스파게티 코드  
**해결**: 컴포넌트로 분리 → 관심사 분리

---

### 2. 성능 문제

**문제**: 빈번한 DOM 업데이트로 느림  
**해결**: Virtual DOM + Diffing → 최소 업데이트

---

### 3. 코드 재사용성

**문제**: 중복 코드 양산  
**해결**: 컴포넌트 재사용 + Hook

---

### 4. 상태 관리

**문제**: 복잡한 데이터 흐름  
**해결**: 단방향 데이터 흐름 + Context API

---

## React의 디자인 패턴

React 개발에 자주 사용되는 패턴들:

### 1. Container-Presenter 패턴

로직과 UI 분리:

```jsx
// Container: 로직 담당
function UserContainer() {
    const [user, setUser] = useState(null);
    // ... 데이터 fetch 로직
    return <UserPresenter user={user} />;
}

// Presenter: UI만 담당
function UserPresenter({ user }) {
    return <div>{user?.name}</div>;
}
```

---

### 2. HOC (Higher-Order Component)

컴포넌트를 받아 새로운 컴포넌트를 반환:

```jsx
function withAuth(Component) {
    return function AuthComponent(props) {
        // 인증 로직
        return <Component {...props} />;
    };
}
```

---

### 3. Render Props

함수를 prop으로 전달:

```jsx
<DataProvider render={data => <Display data={data} />} />
```

---

### 4. Custom Hook

재사용 가능한 로직:

```jsx
function useFetch(url) {
    const [data, setData] = useState(null);
    // ... fetch 로직
    return data;
}
```

---

## React의 발전 과정

### 주요 버전 히스토리

| 버전 | 연도 | 주요 변화 |
|------|------|----------|
| **v0.3.0** | 2013 | 오픈소스 공개 |
| **v15** | 2016 | 주요 리팩토링 |
| **v16** | 2017 | Fiber 아키텍처 도입 |
| **v16.8** | 2019 | Hook 도입 🔥 |
| **v17** | 2020 | 점진적 업그레이드 지원 |
| **v18** | 2022 | Concurrent Rendering |
| **v19** | 2024 | Server Components (실험적) |

---

### Hook의 등장 (2019)

**문제**: 클래스 컴포넌트의 복잡성

**변화**:
```jsx
// Before (클래스)
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    // ...
}

// After (함수 + Hook)
function Counter() {
    const [count, setCount] = useState(0);
    // ...
}
```

**영향**: 함수 컴포넌트가 표준이 됨

---

## React의 경쟁 기술

### React vs Vue vs Angular

| 항목 | React | Vue | Angular |
|------|-------|-----|---------|
| **타입** | 라이브러리 | 프레임워크 | 프레임워크 |
| **개발사** | Meta | Evan You | Google |
| **학습 곡선** | 중간 | 낮음 | 높음 |
| **커뮤니티** | 가장 큼 | 큼 | 큼 |
| **채용 시장** | 가장 넓음 | 중간 | 중간 |
| **유연성** | 높음 | 중간 | 낮음 |

---

### React를 선택하는 이유

1. **가장 큰 생태계**: 풍부한 라이브러리와 도구
2. **활발한 커뮤니티**: 문제 해결 자료 많음
3. **React Native**: 모바일 앱도 개발 가능
4. **Meta의 지원**: 지속적인 업데이트
5. **취업 시장**: 가장 많은 채용 공고

---
### 추천 학습 자료

**공식 문서**:
- https://react.dev (영문)
- https://ko.react.dev (한국어)

**실습 환경**:
- CodeSandbox
- StackBlitz

**커뮤니티**:
- React 한국 사용자 그룹
- Stack Overflow
- Reddit r/reactjs

---

:::tip 학습 전 알아두기
React는 라이브러리이지 프레임워크가 아닙니다.  
따라서 **상태 관리, 라우팅 등은 별도 라이브러리**를 선택해야 합니다.  
이런 자유도가 React의 장점이자 초보자에게는 어려움이 될 수 있습니다.

하지만 **기초를 탄탄히 하면** 이 자유도가 큰 강점이 됩니다! 💪
:::

---