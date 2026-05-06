---
sidebar_position: 8
---

# Goblin Quantum Lab Repository Architecture

Goblin Quantum Lab operates on a three-repository architecture designed to maintain clear separation of concerns, ensure assessment integrity, and protect learner privacy. This document explains the role of each repository and how they work together.

## The Three-Repository Model

The Goblin Quantum Lab ecosystem is built on a simple and effective doctrine:

| Repository | Role | Purpose |
|---|---|---|
| **goblin-quantum-lab** | **Teach** | Public learning site and coursework |
| **gql-private-assessment** | **Test** | Private assessment materials, hidden tests, answer keys, and grading logic |
| **gql-academy-operations** | **Manage** | Private operations records, learner/submission registers, and badge records |

This separation ensures that each repository has a clear, focused purpose and that sensitive materials remain protected.

## Repository Details

### 1. Public Repository: goblin-quantum-lab

**URL:** [https://github.com/Goblin-Quantum-Lab/goblin-quantum-lab](https://github.com/Goblin-Quantum-Lab/goblin-quantum-lab)

**Visibility:** Public

**Purpose:** This repository hosts all public learning content, including courses, labs, documentation, and resources. It is the primary interface for learners and the community.

**What It Contains:**
- Course modules and lessons
- Lab instructions and frameworks
- Learning pathways and guides
- Documentation and tutorials
- Community guidelines and policies
- Public assessment descriptions (without answers or hidden grading logic)

**What It Does NOT Contain:**
- Answer keys
- Hidden tests or evaluation scripts
- Official grading scripts
- Student personal records
- Private reviewer notes
- Badge award records
- Private operations documents

### 2. Private Repository: gql-private-assessment

**URL:** [https://github.com/Goblin-Quantum-Lab/gql-private-assessment](https://github.com/Goblin-Quantum-Lab/gql-private-assessment)

**Visibility:** Private

**Purpose:** This repository secures all assessment materials that must remain confidential to maintain assessment integrity and prevent cheating.

**What It Contains:**
- Answer keys for assessments
- Hidden test cases and evaluation scripts
- Official grading rubrics and marking guides
- Reviewer guidance and best practices
- Badge verification rules and criteria
- Assessment versioning by course and assessment ID

**What It Does NOT Contain:**
- Public course content
- Student personal records
- General operations records

### 3. Private Repository: gql-academy-operations

**URL:** [https://github.com/Goblin-Quantum-Lab/gql-academy-operations](https://github.com/Goblin-Quantum-Lab/gql-academy-operations)

**Visibility:** Private

**Purpose:** This repository manages internal operations, including learner tracking, submission records, badge awards, and internal planning.

**What It Contains:**
- Student/learner registers (template-based, no real data yet)
- Submission tracking registers
- Badge award records
- Completion registers
- Review workflow documentation
- Feedback templates and review logs
- Internal planning documents and checklists
- Course publishing workflows

**What It Does NOT Contain:**
- Hidden tests or answer keys (those belong in gql-private-assessment)
- Public course content (that belongs in goblin-quantum-lab)

## Workflow and Integration

### Assessment Workflow

The three repositories work together in a coordinated workflow:

1. **Public Learning** (goblin-quantum-lab): Students access course materials and lab instructions.
2. **Student Submission**: Students submit their work for assessment.
3. **Private Assessment** (gql-private-assessment): Reviewers use answer keys, hidden tests, and grading rubrics to evaluate submissions.
4. **Private Operations** (gql-academy-operations): Results are recorded, feedback is provided, and badge/completion decisions are made.
5. **Feedback to Student**: The student receives feedback and their recorded result.

### Key Principles

**Public Transparency:** The public repository is transparent about what assessments exist and what they evaluate, but does not reveal answers or hidden grading logic.

**Assessment Integrity:** Answer keys, hidden tests, and official grading materials are strictly private to ensure fair and honest assessment.

**Learner Privacy:** Student records, submission details, and badge awards are kept private in the operations repository.

**Clear Boundaries:** Each repository has a clearly defined scope, preventing accidental mixing of public and private content.

## Public Repository Rules

To maintain the integrity of the three-repository model, the public repository adheres to these rules:

- **No answer keys** are published.
- **No hidden tests or evaluation scripts** are published.
- **No official grading scripts** are published.
- **No student personal records** are published.
- **No private reviewer notes** are published.
- **No badge award records** are published.
- **No private operations documents** are published.

## Assessment Integrity

Public competency checks and assessments may include student-facing questions and instructions. However, **answer keys and official grading logic are not published**. **Official review materials belong only in the private assessment repository**. **Learner results and badge/completion records belong only in the private operations repository**.

If you discover that sensitive assessment materials have been accidentally exposed to the public repository, please report this as an **assessment integrity incident** immediately.

## Security and Privacy

Do not submit secrets, API keys, private data, or personal records to the public repository. Do not publish answer keys or hidden grading materials. Report any accidental exposure of assessment material as an integrity issue to the maintainers.

## Future Expansion

As Goblin Quantum Lab grows, additional repositories may be created for specific purposes (e.g., research, community contributions, or specialized content). However, the core three-repository model will remain the foundation of the project's architecture.

---

For more information about specific aspects of the architecture, please refer to the relevant policy documents in each repository or contact the maintainers.
