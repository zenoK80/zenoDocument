// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

// import Heading from '@theme/Heading';
// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/blog">
//             🐒 introduction 🐒
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// --- 1. 커스텀 SVG 아이콘 (설치 불필요, 고급스러운 라인 스타일) ---
const Icons = {
  Logo: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  ),
  Map: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
  ),
  Layers: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
  ),
  Archive: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
  ),
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
  ),
  Cpu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
  ),
  Code: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  ),
  Server: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
  ),
  BookOpen: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
  )
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="홈"
      description="배움의 기록과 공유">
      
      {/* [스타일 시스템 설명]
        :root - 라이트 모드 색상 정의
        [data-theme='dark'] - 다크 모드 색상 정의 (자동 전환됨)
      */}
      <style>{`
        :root {
          --home-bg: #ffffff;
          --home-text: #1a1a1d;
          --home-subtext: #63636f;
          --home-primary: #3726E5;
          --home-primary-dark: #2a1f9e;
          --home-card-bg: #f8f9fa;
          --home-card-border: #e9ecef;
          --home-card-hover-shadow: 0 10px 40px -10px rgba(55, 38, 229, 0.15);
        }
        
        [data-theme='dark'] {
          --home-bg: #0b0b0c;
          --home-text: #ffffff;
          --home-subtext: #a1a1aa;
          --home-primary: #5548FF;
          --home-primary-dark: #3726E5;
          --home-card-bg: #161618;
          --home-card-border: #27272a;
          --home-card-hover-shadow: 0 10px 40px -10px rgba(85, 72, 255, 0.1);
        }

        .home-wrapper {
          background-color: var(--home-bg);
          color: var(--home-text);
          transition: background-color 0.3s ease, color 0.3s ease;
          width: 100%;
          overflow-x: hidden;
        }

        /* --- Hero Section --- */
        .hero-section {
          padding: 8rem 1.5rem 6rem;
          text-align: center;
          position: relative;
        }

        .hero-bg-glow {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(55, 38, 229, 0.15) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(55, 38, 229, 0.05);
          border: 1px solid rgba(55, 38, 229, 0.2);
          border-radius: 99px;
          color: var(--home-primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }

        .hero-title span {
          color: var(--home-primary);
        }

        .hero-desc {
          font-size: 1.125rem;
          color: var(--home-subtext);
          line-height: 1.7;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2.5rem;
          background: var(--home-primary);
          color: white !important;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none !important;
          transition: all 0.2s ease;
          box-shadow: 0 4px 15px rgba(55, 38, 229, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(55, 38, 229, 0.4);
          background: var(--home-primary-dark);
        }

        /* --- Features Section --- */
        .features-section {
          padding: 4rem 1.5rem;
          background: var(--home-bg);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          padding: 1.6rem;
          background: var(--home-card-bg);
          border: 1px solid var(--home-card-border);
          border-radius: 20px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: var(--home-bg);
          border-radius: 16px;
          color: var(--home-primary);
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--home-text);
        }

        .feature-text {
          color: var(--home-subtext);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* --- Tracks Section (Main) --- */
        .tracks-section {
          padding: 6rem 1.5rem;
          background: var(--home-bg);
          border-top: 1px solid var(--home-card-border);
        }

        .section-header {
          max-width: 1200px;
          margin: 0 auto 3rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--home-card-border);
        }

        .section-title h2 {
          font-size: 2rem;
          font-weight: 800;
          margin: 0 0 0.5rem 0;
        }

        .section-title p {
          margin: 0;
          color: var(--home-subtext);
        }

        .view-all {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          color: var(--home-primary);
          text-decoration: none !important;
        }

        .tracks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .track-card {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          background: var(--home-card-bg);
          border: 1px solid var(--home-card-border);
          border-radius: 16px;
          text-decoration: none !important;
          transition: all 0.2s ease;
          height: 100%;
        }

        .track-card:hover {
          border-color: var(--home-primary);
          box-shadow: var(--home-card-hover-shadow);
          transform: translateY(-3px);
        }

        .track-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(55, 38, 229, 0.1);
          border-radius: 12px;
          color: var(--home-primary);
          margin-bottom: 1.5rem;
        }

        .track-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--home-text);
          margin-bottom: 0.5rem;
        }

        .track-desc {
          font-size: 0.9rem;
          color: var(--home-subtext);
          line-height: 1.5;
          margin: 0;
        }
      `}</style>

      <main className="home-wrapper">
        {/* --- Hero Section --- */}
        <section className="hero-section">
          <div className="hero-bg-glow"></div>
          <div className="hero-content">
            <div className="hero-badge">
              <Icons.Logo /> <span>ZENO DOCUMENT</span>
            </div>
            <h1 className="hero-title">
              학습을 기록하고<br />
              <span>지식을 공유합니다</span>
            </h1>
            <p className="hero-desc">
              관심 분야의 이론, 기술등을 학습하고<br />
              체계적으로 정리하여 기록합니다.
            </p>
            {/* 링크 수정: 실제 문서 진입점인 'Computer Science' intro로 연결 */}
            <Link to="/blog" className="cta-button">
              사이트 소개글
            </Link>
          </div>
        </section>

        {/* --- Features Section --- */}
        <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Icons.Map /></div>
              <h3 className="feature-title">체계적 정리</h3>
              <p className="feature-text">
                하나의 커리큘럼 순서를 구성하여<br />
                기초 이론부터 실무 기술까지 정리합니다.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Icons.Layers /></div>
              <h3 className="feature-title">폭넓은 스펙트럼</h3>
              <p className="feature-text">
                컴퓨터 기초와 웹 개발 기술뿐만 아니라<br />
                수학, 영어 등 기초 학문까지 정리합니다.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Icons.Archive /></div>
              <h3 className="feature-title">성장 아카이브</h3>
              <p className="feature-text">
                여러 정보와 지식을 통해 더 나은<br />
                기술자로 나아가는 여정을 담습니다.
              </p>
            </div>
          </div>
        </section>

        {/* --- Major Tracks (링크 실제 경로로 수정됨) --- */}
        <section className="tracks-section">
          <div className="section-header">
            <div className="section-title">
              <h2>주요 학습 트랙</h2>
              <p>핵심 분야별로 정리된 문서를 확인하세요.</p>
            </div>
          </div>

          <div className="tracks-grid">
            {/* 1. CS */}
            <Link to="/docs/computer-since/0_data-base/database-overview" className="track-card">
              <div className="track-icon"><Icons.Cpu /></div>
              <h3 className="track-title">Computer Science</h3>
              <p className="track-desc">
                컴퓨터구조, 자료구조 등<br />
                개발의 근간이 되는 필수 이론
              </p>
            </Link>

            {/* 2. Web Frontend */}
            <Link to="/docs/web-front/7_javascript/js-introduction" className="track-card">
              <div className="track-icon"><Icons.Code /></div>
              <h3 className="track-title">Web Frontend</h3>
              <p className="track-desc">
                React, Next.js, Tailwind CSS 등<br />
                모던 웹 인터페이스 구축 기술
              </p>
            </Link>

            {/* 3. Web Backend */}
            <Link to="/docs/web-back/0_laravel/laravel-intro" className="track-card">
              <div className="track-icon"><Icons.Server /></div>
              <h3 className="track-title">Backend & Server</h3>
              <p className="track-desc">
                Laravel, Node.js 백엔드<br />
                서버 아키텍처 및 API 설계
              </p>
            </Link>

            {/* 4. Self Taught (Liberal Arts) */}
            <Link to="/docs/self-taught/0_basic-statistics/basic-statistics-intro" className="track-card">
              <div className="track-icon"><Icons.BookOpen /></div>
              <h3 className="track-title">ETC</h3>
              <p className="track-desc">
                수학, 영어, 한국사 등<br />
                개발 외적인 기초 소양과 독학 기록
              </p>
            </Link>

            {/* 5. Design */}
            <Link to="/docs/self-taught/0_basic-statistics/basic-statistics-intro" className="track-card">
              <div className="track-icon"><Icons.BookOpen /></div>
              <h3 className="track-title">Design</h3>
              <p className="track-desc">
                디자인 이론, 자격증과<br />
                디자인 툴 공식 문서 사용법
              </p>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}