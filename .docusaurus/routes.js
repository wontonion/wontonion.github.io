import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'fe2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '164'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5bc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a9d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'afe'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e9f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '6fc'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '926'),
    exact: true
  },
  {
    path: '/blog/2023/12/01/hello-blog',
    component: ComponentCreator('/blog/2023/12/01/hello-blog', 'bfd'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '8be'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '72a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '29a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '0e1'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', '0cc'),
            exact: true
          },
          {
            path: '/docs/tags/blog',
            component: ComponentCreator('/docs/tags/blog', '63a'),
            exact: true
          },
          {
            path: '/docs/tags/docusaurus',
            component: ComponentCreator('/docs/tags/docusaurus', 'ebb'),
            exact: true
          },
          {
            path: '/docs/tags/github',
            component: ComponentCreator('/docs/tags/github', '326'),
            exact: true
          },
          {
            path: '/docs/tags/githubio',
            component: ComponentCreator('/docs/tags/githubio', 'fef'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'ecb'),
            routes: [
              {
                path: '/docs/githubio-blog-with-docusaurus',
                component: ComponentCreator('/docs/githubio-blog-with-docusaurus', '051'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/iterm2-beautify',
                component: ComponentCreator('/docs/iterm2-beautify', 'a43'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7a2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
