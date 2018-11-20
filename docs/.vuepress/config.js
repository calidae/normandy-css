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
    nav: [{ text: 'Guide', link: '/guide/getting-started' }],
    sidebar: {
      '/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '/guide/getting-started',
            '/guide/why-normandy',
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
          collapsable: true,
          children: [
            '/reference/utilities/flexbox',
            '/reference/utilities/spacing',
            '/reference/utilities/text',
            '/reference/utilities/widths',
            '/reference/utilities/height',
            '/reference/utilities/colors',
          ],
        },
      ],
    },
  },
}
