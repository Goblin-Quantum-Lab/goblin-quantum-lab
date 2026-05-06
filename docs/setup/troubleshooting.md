---
sidebar_position: 6
---

# Troubleshooting

This page covers public-safe setup readiness issues for local beginner tooling.

Operating-system names are used only to identify the relevant setup path. Goblin Quantum Lab does not use third-party OS logos in course materials unless permission or an applicable brand-use licence has been recorded.

## `python` Is Not Recognized

Try:

```bash
python3 --version
```

On Windows, reinstall Python 3.11 or newer and select the option that adds Python to PATH. Then open a new terminal and run:

```bash
python --version
```

## `pip` Is Not Found

Use Python to run pip:

```bash
python -m pip --version
```

On macOS or Linux, you may need:

```bash
python3 -m pip --version
```

## Virtual Environment Activation Is Blocked On Windows

If PowerShell blocks activation, run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Then try:

```powershell
.\.venv\Scripts\Activate.ps1
```

Only change execution policy if you understand the local effect.

## Public Help Checklist

When asking for help, include:

- your operating system
- your Python version
- the command you ran
- the full public-safe error message
- which public setup page you are following

Do not include passwords, API keys, access tokens, secrets, private account details, protected assessment materials, enrolled-only instructions, or protected review material.

Ask for help with the [Lab help issue form](https://github.com/Goblin-Quantum-Lab/goblin-quantum-lab/issues/new?template=lab_help.yml).
