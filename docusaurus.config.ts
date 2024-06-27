import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {translate} from '@docusaurus/Translate';

const organizationName = "MicroEdgeCerts";
const projectName = "microedgecerts.github.io";

const config: Config = {
  title: 'Micro Edge Certs',
  tagline: 'Your skill your control',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://microedgecerts.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja','en'],
    localeConfigs: {
      ja: {
        label: '日本語',
      },
      en: {
        label: 'English',
      },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'standard',
        path: 'standard',
        routeBasePath: 'standard',
        sidebarPath: require.resolve('./sidebarsStandard.js'),
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/MECHero.jpg',
    navbar: {
      title: 'MicroEdgeCerts',
      logo: {
        alt: 'MicroEdgeCerts Logo',
        src: 'img/card.jpg',
      },
      items: [
        {to: '/blog/summary', label: 'Blog', position: 'left'},
         
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Document',
        }
        /*
        {
          to: "docs/intro",
          activeBasePath: "docs",
          label:"Document",
          position: "left",
        }*/,
        {
          to: "standard/intro",
          activeBasePath: "standard",
          label: "Standard",
          position: "left",
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/MicroEdgeCerts/microedgecerts.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Works',
          items: [
            {
              label: 'TechnicalSummary',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/MicroEdgeCerts',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MicroEdgeCerts',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MicroEdgeCerts, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
      {
        docs: {
          sidebarPath: './sidebars.js',
        }
      },

    ],
  } satisfies Preset.ThemeConfig,
 
};

export default config;
