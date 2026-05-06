---
sidebar_position: 2
---

# Local Python Environment

QF-101 enrolled work is designed for local beginner tooling. This page helps learners prepare Python without exposing enrolled lab files or assignment instructions.

Operating-system names are used only to identify the relevant setup path. Goblin Quantum Lab does not use third-party OS logos in course materials unless permission or an applicable brand-use licence has been recorded.

## Install Python

Install Python 3.11 or newer from the official Python website or your operating system package manager.

Check your version:

```bash
python --version
```

On some systems, use:

```bash
python3 --version
```

## Create A Virtual Environment

Windows PowerShell:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

macOS or Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

## Install Enrolled Course Requirements

Use only the requirements file or setup instructions supplied through the enrolled learner process. Do not install cloud SDKs, paid-service tooling, or credential packages for QF-101 unless a later advanced course explicitly requires them with clear warnings.

## Deactivate The Virtual Environment

When you are done:

```bash
deactivate
```

## Delete The Virtual Environment

If you want to clean up later, deactivate first, then delete `.venv`.

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force .venv
```

macOS or Linux:

```bash
rm -rf .venv
```

Do not delete source files, public docs, enrolled course files, or your own notes unless you are sure you no longer need them.
