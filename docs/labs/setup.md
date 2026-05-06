# Lab Setup Guide

This guide provides instructions for setting up your local environment to run the Goblin Quantum Lab practical sessions.

## Recommended Setup

We recommend using Python 3.8+ and a virtual environment to manage your dependencies.

### 1. Install Python

Ensure you have Python 3.8 or newer installed on your system. You can download it from [python.org](https://www.python.org/downloads/) or use a package manager.

### 2. Create a Virtual Environment

It's good practice to create a virtual environment for each project to avoid dependency conflicts.

```bash
python3 -m venv gql-env
source gql-env/bin/activate  # On Windows, use `gql-env\Scripts\activate`
```

### 3. Install Core Libraries

Our labs primarily use Qiskit and/or Cirq. Install them using pip:

```bash
pip install qiskit
pip install cirq
```

### 4. Install Jupyter Notebook (Optional but Recommended)

Many labs are provided as Jupyter Notebooks for an interactive experience.

```bash
pip install jupyter
```

To start a Jupyter Notebook server:

```bash
jupyter notebook
```

### 5. Clone the Repository

If you haven't already, clone the Goblin Quantum Lab repository:

```bash
git clone https://github.com/Goblin-Quantum-Lab/goblin-quantum-lab.git
cd goblin-quantum-lab
```

### 6. Navigate to Lab Files

Lab files are located in the `lab-files/` directory. Each lab will have its own subdirectory.

```bash
cd lab-files/your-first-lab
```

## Alternative Setups

### Cloud-Based Environments

Platforms like IBM Quantum Experience, Google Colab, or Amazon Braket provide cloud-based environments where you can run quantum circuits without local setup. Refer to their respective documentation for setup instructions.

### Docker

For a fully isolated and reproducible environment, you can use Docker. A `Dockerfile` might be provided in specific lab directories.

## Troubleshooting

- **Missing packages**: Ensure your virtual environment is activated and you've run `pip install -r requirements.txt` if provided.
- **Python version issues**: Verify you are using the correct Python version with `python --version`.
- **Network issues**: Check your internet connection if installing packages or accessing cloud resources.

For more help, refer to the main [Lab FAQ](/docs/labs/faq) or open an issue on GitHub.
