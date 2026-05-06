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
      label: "Academy Architecture",
      items: [
        "academy-architecture/index",
      ],
    },
    {
      type: "category",
      label: "Learning Pathways",
      items: [
        "learning-pathways/index",
      ],
    },
    {
      type: "category",
      label: "Support Subjects",
      items: [
        "support-subjects/index",
        "support-subjects/ss-001-github-and-technical-workflow-basics",
        "support-subjects/ss-002-python-for-quantum-learners",
        "support-subjects/ss-003-probability-for-quantum-measurement",
        "support-subjects/ss-004-linear-algebra-for-quantum-computing",
        "support-subjects/ss-005-complex-numbers-and-quantum-states",
        "support-subjects/ss-006-scientific-report-writing-basics",
        "support-subjects/ss-007-reading-technical-documentation",
        "support-subjects/ss-008-research-evidence-and-reproducibility-basics",
      ],
    },
    {
      type: "category",
      label: "Enrolled Learners",
      items: [
        "enrolled-learners/index",
        "enrolled-learners/github-account-access",
      ],
    },
    {
      type: "category",
      label: "Quantum Foundations",
      items: [
        "quantum-foundations/index",
        {
          type: "category",
          label: "QF-101 Quantum Thinking",
          items: [
            "quantum-foundations/qf-101-quantum-thinking/index",
            "quantum-foundations/qf-101-quantum-thinking/module-01-classical-bits-and-qubits",
            "quantum-foundations/qf-101-quantum-thinking/module-02-probability-and-measurement",
            "quantum-foundations/qf-101-quantum-thinking/module-03-superposition",
            "quantum-foundations/qf-101-quantum-thinking/module-04-observing-results",
            "quantum-foundations/qf-101-quantum-thinking/module-05-common-quantum-misconceptions",
            "quantum-foundations/qf-101-quantum-thinking/module-06-first-experiment-discipline",
            "quantum-foundations/qf-101-quantum-thinking/labs",
            "quantum-foundations/qf-101-quantum-thinking/competency-check",
            "quantum-foundations/qf-101-quantum-thinking/report-task",
            "quantum-foundations/qf-101-quantum-thinking/badge-criteria",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Labs",
      items: [
        "labs/index",
        {
          type: "category",
          label: "Beginner Labs",
          items: [
            "labs/beginner/lab-001-single-qubit-measurement",
            "labs/beginner/lab-002-shot-count-observation",
          ],
        },
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
        "report-writing/beginner-lab-report-template",
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
