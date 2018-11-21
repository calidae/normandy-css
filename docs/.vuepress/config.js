module.exports = {
  title: 'NormandyCSS',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://rawgit.com/calidae/normandy-css/master/output.css',
      },
    ],
  ],
  themeConfig: {
    repo: 'calidae/normandy-css',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    nav: [{ text: 'User Guide', link: '/getting-started' }],
    sidebar: {
      '/': [
        '/getting-started',
        {
          title: 'User Guide',
          collapsable: false,
          children: [
            '/guide/les-7-capes-de-css',
            '/guide/sobre-els-objects',
            '/guide/namespaces',
            '/guide/nomenclatura-bem',
            '/guide/estructura-de-fitxers',
            '/guide/nesting',
            '/guide/encapsulament-de-frameworks',
            '/guide/no-ids',
          ],
        },
        {
          title: 'Utilities',
          collapsable: false,
          children: [
            '/reference/utilities/flexbox',
            '/reference/utilities/spacing',
            '/reference/utilities/text',
            '/reference/utilities/widths',
            '/reference/utilities/height',
            '/reference/utilities/colors',
          ],
        },
        {
          title: 'Objects',
          collapsable: false,
          children: [
            '/reference/objects/block',
            '/reference/objects/cover',
            '/reference/objects/list',
            '/reference/objects/media',
            '/reference/objects/wrapper',
          ],
        },
      ],
    },
  },
}
