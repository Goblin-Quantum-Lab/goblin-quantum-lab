/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a set of docs in the left sidebar of each doc page
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Learning Pathways",
      items: [
        "learning-pathways/index",
      ],
    },
    {
      type: "category",
      label: "Quantum Foundations",
      items: [
        "quantum-foundations/index",
      ],
    },
    {
      type: "category",
      label: "Labs",
      items: [
        "labs/index",
        "labs/faq",
        "labs/setup",
      ],
    },
    {
      type: "category",
      label: "Assessments",
      items: [
        "assessments/index",
      ],
    },
    {
      type: "category",
      label: "Report Writing",
      items: [
        "report-writing/index",
        "report-writing/examples",
        "report-writing/templates",
        "report-writing/tips",
      ],
    },
    {
      type: "category",
      label: "Safety",
      items: [
        "safety/index",
        "safety/conduct",
        "safety/reproducibility",
      ],
    },
    "CODE_OF_CONDUCT",
    "CONTRIBUTING",
    "BRAND_USAGE",
    "SECURITY",
    "faq",
  ],
};

export default sidebars;
