# Reproducibility Standards

This document outlines the standards for ensuring reproducibility in all experiments and projects conducted within the Goblin Quantum Lab.

## Principles of Reproducibility

- **Transparency**: Clearly document all steps, assumptions, and decisions.
- **Completeness**: Provide all necessary code, data, and environment details.
- **Verifiability**: Allow others to independently verify your results.
- **Portability**: Design experiments to be easily transferable to different environments.

## Key Practices

### 1. Version Control

- Use Git for all code and documentation.
- Commit frequently with clear, descriptive messages.
- Tag significant milestones (e.g., releases, major experiment versions).

### 2. Environment Management

- Specify all software dependencies, including exact versions (e.g., `package.json`, `requirements.txt`).
- Use virtual environments (e.g., `venv`, `conda`) to isolate project dependencies.
- Document the operating system and hardware used if relevant.

### 3. Code and Scripts

- Write clean, well-commented code.
- Organize code logically into modules or functions.
- Provide clear instructions on how to run your code.
- Include unit tests where appropriate.

### 4. Data Management

- Store raw data separately from processed data.
- Document data sources, collection methods, and any preprocessing steps.
- Make data publicly available when possible and appropriate.
- Use persistent identifiers for datasets.

### 5. Experiment Documentation

- Clearly state the objective and hypothesis of each experiment.
- Detail the experimental procedure step-by-step.
- Record all parameters, configurations, and random seeds used.
- Document any deviations from the planned procedure.

### 6. Reporting Results

- Present results clearly and unambiguously.
- Include all relevant figures, tables, and statistical analyses.
- Discuss limitations and potential sources of error.
- Ensure conclusions are supported by evidence.

## Tools for Reproducibility

- **Git/GitHub**: For version control and collaboration.
- **Docker/Containers**: For encapsulating environments.
- **Jupyter Notebooks**: For combining code, output, and narrative.
- **Renku/Code Ocean**: Platforms for reproducible research.

## Checklist for Reproducible Work

Before finalizing your work, ensure the following:

- [ ] All code is under version control.
- [ ] Dependencies and environment are clearly specified.
- [ ] Code is well-commented and organized.
- [ ] Data sources and processing steps are documented.
- [ ] Experiment parameters and random seeds are recorded.
- [ ] Results are clearly presented and supported by evidence.
- [ ] Instructions for reproduction are provided.

---

For general safety guidelines, refer to the main [Safety and Experiment Discipline](/docs/safety) document.
