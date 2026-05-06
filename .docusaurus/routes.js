import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/goblin-quantum-lab/docs',
    component: ComponentCreator('/goblin-quantum-lab/docs', '194'),
    routes: [
      {
        path: '/goblin-quantum-lab/docs',
        component: ComponentCreator('/goblin-quantum-lab/docs', '53a'),
        routes: [
          {
            path: '/goblin-quantum-lab/docs',
            component: ComponentCreator('/goblin-quantum-lab/docs', 'fdf'),
            routes: [
              {
                path: '/goblin-quantum-lab/docs/assessments/',
                component: ComponentCreator('/goblin-quantum-lab/docs/assessments/', '6fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/BRAND_USAGE',
                component: ComponentCreator('/goblin-quantum-lab/docs/BRAND_USAGE', '744'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/CODE_OF_CONDUCT',
                component: ComponentCreator('/goblin-quantum-lab/docs/CODE_OF_CONDUCT', 'd0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/CONTRIBUTING',
                component: ComponentCreator('/goblin-quantum-lab/docs/CONTRIBUTING', '993'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/faq',
                component: ComponentCreator('/goblin-quantum-lab/docs/faq', '509'),
                exact: true,
                sidebar: "tutorialSidebar"
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
                path: '/goblin-quantum-lab/docs/labs/faq',
                component: ComponentCreator('/goblin-quantum-lab/docs/labs/faq', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/labs/setup',
                component: ComponentCreator('/goblin-quantum-lab/docs/labs/setup', '4ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/learning-pathways/',
                component: ComponentCreator('/goblin-quantum-lab/docs/learning-pathways/', 'e67'),
                exact: true,
                sidebar: "tutorialSidebar"
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
                path: '/goblin-quantum-lab/docs/report-writing/examples',
                component: ComponentCreator('/goblin-quantum-lab/docs/report-writing/examples', '61a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/report-writing/templates',
                component: ComponentCreator('/goblin-quantum-lab/docs/report-writing/templates', 'fc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/report-writing/tips',
                component: ComponentCreator('/goblin-quantum-lab/docs/report-writing/tips', 'a33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/safety/',
                component: ComponentCreator('/goblin-quantum-lab/docs/safety/', '5a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/safety/conduct',
                component: ComponentCreator('/goblin-quantum-lab/docs/safety/conduct', '49c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/safety/reproducibility',
                component: ComponentCreator('/goblin-quantum-lab/docs/safety/reproducibility', 'b98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/goblin-quantum-lab/docs/SECURITY',
                component: ComponentCreator('/goblin-quantum-lab/docs/SECURITY', 'a4a'),
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
    path: '/goblin-quantum-lab/',
    component: ComponentCreator('/goblin-quantum-lab/', '78a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
