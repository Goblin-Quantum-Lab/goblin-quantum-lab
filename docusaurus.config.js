// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Goblin Quantum Lab',
  tagline: 'Free practical quantum computing education, from first qubit to disciplined experiment reports.',
  favicon: 'img/branding/gql-mark-g.png',

  // Set the production url of your site here
  url: 'https://Goblin-Quantum-Lab.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/goblin-quantum-lab/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Goblin-Quantum-Lab', // Usually your GitHub org/username.
  projectName: 'goblin-quantum-lab', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is in Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          editUrl:
            'https://github.com/Goblin-Quantum-Lab/goblin-quantum-lab/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/branding/gql-hero-banner.png',
      navbar: {
        logo: {
          alt: 'Goblin Quantum Lab Logo',
          src: 'img/branding/gql-logo-horizontal-wide.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Learning',
          },
          {
            to: '/docs/intro',
            label: 'Start Learning',
            position: 'left',
          },
          {
            to: '/docs/learning-pathways',
            label: 'Learning Pathways',
            position: 'left',
          },
          {
            href: 'https://github.com/Goblin-Quantum-Lab/goblin-quantum-lab',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learning',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Learning Pathways',
                to: '/docs/learning-pathways',
              },
              {
                label: 'Quantum Foundations',
                to: '/docs/quantum-foundations',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Labs',
                to: '/docs/labs',
              },
              {
                label: 'Assessments',
                to: '/docs/assessments',
              },
              {
                label: 'Report Writing',
                to: '/docs/report-writing',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Goblin-Quantum-Lab/goblin-quantum-lab',
              },
              {
                label: 'Contributing',
                to: '/docs/CONTRIBUTING',
              },
              {
                label: 'Brand Usage',
                to: '/docs/BRAND_USAGE',
              },
            ],
          },
        ],
        copyright: `Code licensed MIT. Educational content licensed CC BY-SA 4.0. Brand assets protected by project brand usage policy.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
