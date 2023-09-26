// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'STUDS Design System',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://studs.strongtie.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Simpson Strong-Tie', // Usually your GitHub org/user name.
  projectName: 'studs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          versions: {
            current: {
              label: '0.0.1',
              path: '',
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('@studs/styles/studs-base.css'),
          ],
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],
  themes: ['@docusaurus/theme-live-codeblock'],
  clientModules: [require.resolve('./src/global.ts')],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'STUDS',
        logo: {
          alt: 'Simpson Strong-Tie',
          src: 'img/sst_logo.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/getting-started/installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Simpson Strongtie',
                href: 'https://www.strongtie.com/',
              },
              {
                label: 'Strongtie UX',
                href: 'https://ux.strongtie.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/strongtie',
              },
            ],
          },
          {
            title: 'More Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/studs-ui/studs',
              },
              {
                label: 'Storybook',
                href: `https://studs-staging.strongtie.com/storybook/?path=/docs/example-introduction--docs`,
              },
            ],
          },
        ],
        logo: {
          alt: 'Simpson Strong-Tie',
          src: 'img/hangerman.svg',
          width: 100,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Simpson Strong-Tie, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
