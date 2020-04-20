module.exports = {
  title: 'uikit',
  tagline: 'The tagline of my site',
  url: 'https://groww.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Groww', // Usually your GitHub org/user name.
  projectName: 'uikit', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'uikit',
      logo: {
        alt: 'uikit',
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
          href: 'https://github.com/Groww/uikit',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href:'https://groww.in/blog/',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
