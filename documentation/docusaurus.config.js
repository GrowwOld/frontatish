module.exports = {
  title: 'viserion',
  tagline:
    'viserion is all in one repository of helpers and ui-kit for any react native projects',
  url: 'https://groww.github.io',
  baseUrl: '/viserion/',
  favicon: 'img/favicon.ico',
  organizationName: 'Groww', // Usually your GitHub org/user name.
  projectName: 'viserion', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'viserion',
      logo: {
        alt: 'viserion',
        src: 'img/groww_logo.svg',
      },
      links: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Groww/viserion',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://medium.com/groww-engineering',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/groww/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/_groww',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Groww/viserion/edit/alpha/docs/documentation',
        },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
};
