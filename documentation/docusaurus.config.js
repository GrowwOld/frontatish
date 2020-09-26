module.exports = {
  title: 'Frontatish',
  tagline: 'A collection of common ui components for react-native apps',
  url: 'https://groww.github.io',
  baseUrl: '/frontatish/',
  favicon: 'img/favicon.ico',
  organizationName: 'Groww', // Usually your GitHub org/user name.
  projectName: 'frontatish', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'frontatish',
      logo: {
        alt: 'frontatish',
        src: 'img/groww_logo.svg',
      },
      links: [
        {
          to: 'docs/installation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Groww/frontatish',
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
      copyright: `Copyright © ${new Date().getFullYear()} Groww, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Groww/frontatish/edit/alpha/docs/documentation',
        },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
};
