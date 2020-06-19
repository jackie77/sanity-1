export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eec12aac32f3d3199cad3be',
                  title: 'Sanity Studio',
                  name: 'sanity-1-studio',
                  apiId: 'd8e409d7-616d-43cd-b86e-6acdb66413fe'
                },
                {
                  buildHookId: '5eec12aa38650a37e6406d87',
                  title: 'Blog Website',
                  name: 'sanity-1',
                  apiId: 'a2f1d690-42d5-43df-b2bb-d6fb42e6085b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jackie77/sanity-1',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-1.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
