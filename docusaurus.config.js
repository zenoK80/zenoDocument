// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'zenoDoc',
  tagline: 'zeno',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zeno', // Usually your GitHub org/user name.
  projectName: 'zenoDoc', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko','en', 'ja', 'es', 'fr' ,'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 10,            
          blogSidebarTitle: '전체',
          blogSidebarCount: 'ALL',      
          blogDescription: 'ZENO의 기술 블로그',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ZENO',
        logo: {
          alt: 'ZENO Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Introduce', position: 'left'},
          { label: 'Zeno-Css', position: 'right', href: 'https://github.com/zenoK80'},
          { label: 'Zeno-Motion', position: 'right',href: 'https://github.com/zenoK80'},
          { label: 'Zeno-Icon', position: 'right',href: 'https://github.com/zenoK80'},
          // { label: 'test', type: 'docSidebar', sidebarId: 'tutorialSidebar',position: 'right'},

          { label: '컴퓨터공학', position: 'left',activeBaseRegex: `/docs/computer-since`,
            items: [
              { label: '데이터베이스', type: 'docSidebar', sidebarId: 'dataBaseSidebar'},
              { label: '소프트웨어공학' ,type: 'docSidebar', sidebarId: 'softwareEngineeringSidebar'},
              { label: '자료구조',type: 'docSidebar', sidebarId: 'dataStructureSidebar' },
              { label: '컴퓨터구조',type: 'docSidebar', sidebarId: 'comStructureSidebar' },
              { label: 'C언어',type: 'docSidebar', sidebarId: 'cLanguageSidebar' },
            ],
          },
          { label: '웹프론트', position: 'left',activeBaseRegex: `/docs/web-front`,
            items: [
              { label: 'React',type: 'docSidebar', sidebarId: 'reactSidebar' },
              { label: 'Next.js',type: 'docSidebar', sidebarId: 'nextJsSidebar' },
              { label: 'TailwindCss',type: 'docSidebar', sidebarId: 'tailwindCssSidebar' },
              { label: 'Gsap',type: 'docSidebar', sidebarId: 'gsapSidebar' },
              { label: 'Three.js',type: 'docSidebar', sidebarId: 'threeJsSidebar' },
              { label: 'TypeScript',type: 'docSidebar', sidebarId: 'typeScriptSidebar' },

            ],
          },
          { label: '웹백엔드', position: 'left',activeBaseRegex: `/docs/web-back`,
            items: [
              { label: 'Laravel',type: 'docSidebar', sidebarId: 'laravelSidebar' },
            ],
          },
          // { href: 'https://github.com/zenoK80', label: 'GitHub', position: 'right',},
        ],
        
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portfolio',
            items: [
               {
                label: '포트폴리오',
                href: 'https://github.com/zenoK80',
              },
            ],
          },
          {
            title: 'Github',
            items: [
               {
                label: '깃허브',
                href: 'https://github.com/zenoK80',
              },
            ],
          },
          {
            title: 'Blog',
            items: [
              {
                label: '블로그',
                href: 'https://github.com/zenoK80',
              },
            ],
          },
          {
            title: 'Stock Contribute',
            items: [
               {
                label: '미리캔버스',
                href: 'https://www.miricanvas.com/v2/design?panel=ELEMENTS&q=@zenoK',
              },
              {
                label: '네이버 OGQ',
                href: 'https://ogqmarket.naver.com/creators/zeno',
              },
              {
                label: '어도비스톡',
                href: 'https://stock.adobe.com/kr/contributor/212833145/zeno?load_type=author&prev_url=detail',
              },
            ],
          },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} zenoDoc , Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
