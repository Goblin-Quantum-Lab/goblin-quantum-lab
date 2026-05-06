import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/goblin-quantum-lab/docs',
    component: ComponentCreator('/goblin-quantum-lab/docs', 'c5d'),
    routes: [
      {
        path: '/goblin-quantum-lab/docs',
        component: ComponentCreator('/goblin-quantum-lab/docs', '1e7'),
        routes: [
          {
            path: '/goblin-quantum-lab/docs',
            component: ComponentCreator('/goblin-quantum-lab/docs', '379'),
            routes: [
              {
                path: '/goblin-quantum-lab/docs/assessments/',
                component: ComponentCreator('/goblin-quantum-lab/docs/assessments/', '6fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/assessments/',
                component: ComponentCreator('/goblin-quantum-lab/docs/assessments/', '2e8'),
                exact: true
              },
              {
                path: '/goblin-quantum-lab/docs/intro',
                component: ComponentCreator('/goblin-quantum-lab/docs/intro', '302'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/labs/',
                component: ComponentCreator('/goblin-quantum-lab/docs/labs/', 'fce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/labs/',
                component: ComponentCreator('/goblin-quantum-lab/docs/labs/', '319'),
                exact: true
              },
              {
                path: '/goblin-quantum-lab/docs/learning-pathways/',
                component: ComponentCreator('/goblin-quantum-lab/docs/learning-pathways/', 'e67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/learning-pathways/',
                component: ComponentCreator('/goblin-quantum-lab/docs/learning-pathways/', 'f75'),
                exact: true
              },
              {
                path: '/goblin-quantum-lab/docs/quantum-foundations/',
                component: ComponentCreator('/goblin-quantum-lab/docs/quantum-foundations/', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/report-writing/',
                component: ComponentCreator('/goblin-quantum-lab/docs/report-writing/', '308'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/report-writing/',
                component: ComponentCreator('/goblin-quantum-lab/docs/report-writing/', '381'),
                exact: true
              },
              {
                path: '/goblin-quantum-lab/docs/safety/',
                component: ComponentCreator('/goblin-quantum-lab/docs/safety/', '5a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/safety/',
                component: ComponentCreator('/goblin-quantum-lab/docs/safety/', 'c0e'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/goblin-quantum-lab/',
    component: ComponentCreator('/goblin-quantum-lab/', '78a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
