/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a set of docs in the left sidebar of each doc page
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // But you can create a sidebar manually
  tutorialSidebar: [
    'intro',
    {
      label: 'Learning Pathways',
      type: 'category',
      items: [
        'learning-pathways/index',
      ],
    },
    {
      label: 'Quantum Foundations',
      type: 'category',
      items: [
        'quantum-foundations/index',
      ],
    },
    {
      label: 'Labs',
      type: 'category',
      items: [
        'labs/index',
      ],
    },
    {
      label: 'Assessments',
      type: 'category',
      items: [
        'assessments/index',
      ],
    },
    {
      label: 'Report Writing',
      type: 'category',
      items: [
        'report-writing/index',
      ],
    },
    {
      label: 'Safety',
      type: 'category',
      items: [
        'safety/index',
      ],
    },
  ],
};

export default sidebars;
