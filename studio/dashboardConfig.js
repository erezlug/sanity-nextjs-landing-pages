export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60eef05a85133745d98df341',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-161quyxv',
                  apiId: '9442898f-85b4-46d1-b8fb-dffd9a53be30'
                },
                {
                  buildHookId: '60eef05b4d1c2142d603227d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q57729je',
                  apiId: '04ee7b8e-c6f5-41b0-8359-7993b9c45e92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erezlug/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q57729je.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
