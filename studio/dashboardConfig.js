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
                  buildHookId: '5dba03839a4d94b6485e9f00',
                  title: 'Sanity Studio',
                  name: 'esten-patrick-studio',
                  apiId: '8dd6cf3d-a8ce-464d-b3d9-b4118c297866'
                },
                {
                  buildHookId: '5dba03843b233098a1de9582',
                  title: 'Blog Website',
                  name: 'esten-patrick',
                  apiId: '339d8f16-a8c3-440a-915d-16fb0a52f239'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/estenp/sanity-sapper-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://esten-patrick.netlify.com',
            category: 'apps'
          }
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
