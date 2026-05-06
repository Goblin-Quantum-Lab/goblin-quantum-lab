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
      label: "Course Catalogue",
      items: [
        "course-catalogue/index",
      ],
    },
    {
      type: "category",
      label: "Course Access",
      items: [
        "course-access/public-vs-enrolled",
      ],
    },
    {
      type: "category",
      label: "Enrollment",
      items: [
        "enrollment/github-account-access",
        "enrolled-learners/index",
        "enrolled-learners/github-account-access",
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
      label: "Quantum Foundations",
      items: [
        "quantum-foundations/index",
        "quantum-foundations/qf-101-quantum-thinking/index",
      ],
    },
    {
      type: "category",
      label: "Setup",
      items: [
        "setup/index",
        "setup/local-python-environment",
        "setup/qiskit-local-simulator",
        "setup/no-cost-learning-rules",
        "setup/github-classroom-student-guide",
        "setup/troubleshooting",
      ],
    },
    {
      type: "category",
      label: "Q&A",
      items: [
        "qa/index",
        "qa/setup-faq",
        "qa/lab-faq",
        "qa/github-faq",
        "qa/cost-safety-faq",
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
    {
      type: "category",
      label: "Policies",
      items: [
        "BRAND_USAGE",
        "SECURITY",
      ],
    },
    "CODE_OF_CONDUCT",
    "CONTRIBUTING",
    "faq",
  ],
};

export default sidebars;
