import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { join } from "node:path"
const config: Config = {
  title: 'SkyGame-Data',
  tagline: 'Documentation for SkyGame-Data by Silverfeelin',
  url: 'https://utils.skyhelper.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'SkyGamePlanner',
  projectName: 'SkyGame Data', 
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes:[],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@imnaiyar/typedoc-docusaurus-plugin',
      {
        projectRoot: join(__dirname, "../"),
        packages: ["."],
        typedocOptions: {
          tsconfig: '../tsconfig.json',
          includeVersion: true,
          excludePrivate: true,
          excludeExternals: true,
          excludeNotDocumented: false,
          disableSources: false,
        },
      },
    ],
  ],


  themeConfig: {
    navbar: {
      title: 'SkyGame Data',
      items: [
        {
          to: "/api",
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/silverfeelin/skygame-data',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/api',
            },
          ],
        },
      ],
    },
    prism: {
      defaultLanguage: "typescript",
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
