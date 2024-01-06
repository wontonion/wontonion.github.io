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
    component: ComponentCreator('/blog', '475'),
    exact: true
  },
  {
    path: '/blog/2023/12/01/hello-blog',
    component: ComponentCreator('/blog/2023/12/01/hello-blog', 'bfd'),
    exact: true
  },
  {
    path: '/blog/2023/12/03/TS-dev-env-preparation',
    component: ComponentCreator('/blog/2023/12/03/TS-dev-env-preparation', '5e5'),
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
    component: ComponentCreator('/docs', '337'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '6ec'),
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
            component: ComponentCreator('/docs', 'b84'),
            routes: [
              {
                path: '/docs/002-01-terminal-beautify',
                component: ComponentCreator('/docs/002-01-terminal-beautify', 'b79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/002-02-git-management',
                component: ComponentCreator('/docs/002-02-git-management', '4e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/002-03-install-nodejs-and-pnpm',
                component: ComponentCreator('/docs/002-03-install-nodejs-and-pnpm', '8cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/002-04-add-TS-support',
                component: ComponentCreator('/docs/002-04-add-TS-support', '527'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/003-01-use-swc-compile-ts',
                component: ComponentCreator('/docs/003-01-use-swc-compile-ts', 'd7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/003-02-replace-express-to-fastify',
                component: ComponentCreator('/docs/003-02-replace-express-to-fastify', '588'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/003-03-01-self-defined-provider',
                component: ComponentCreator('/docs/003-03-01-self-defined-provider', '8a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/003-03-02-circular-dependency',
                component: ComponentCreator('/docs/003-03-02-circular-dependency', 'ab9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/003-03-03-inject-scope',
                component: ComponentCreator('/docs/003-03-03-inject-scope', '88b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/003-03-NestJS-providers',
                component: ComponentCreator('/docs/003-03-NestJS-providers', 'b04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/003-04-module-attribute',
                component: ComponentCreator('/docs/003-04-module-attribute', '4d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
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
                path: '/docs/NestJS-learning-note',
                component: ComponentCreator('/docs/NestJS-learning-note', 'aac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/note-for-typeorm',
                component: ComponentCreator('/docs/note-for-typeorm', '890'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/preparation-for-novice-programmer',
                component: ComponentCreator('/docs/preparation-for-novice-programmer', 'a1c'),
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
