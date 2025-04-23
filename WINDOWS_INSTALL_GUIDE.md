# Onlook Studio – Windows Install Guide

This guide will help you set up and run Onlook Studio on Windows using a single, unified script. All dependencies, patching, and build steps are automated for you.

## Prerequisites
- **Git**
- **PowerShell** (comes with Windows)
- **Bun** (will be installed automatically if missing)

## Quick Start (Recommended)

From your repo root, run:

```powershell
powershell -ExecutionPolicy Bypass -File .\setup.ps1
```

This script will:
- Check for and install Bun if needed
- Install all dependencies
- Download the Bun runtime for Electron
- Warn if `.env` is missing (see `.env.example` for required variables)
- Build the project
- Patch authentication for local development (if needed)

After setup completes, you can launch Onlook Studio with:

```powershell
cd apps/studio
bun dev
```

---

## Manual Steps (Advanced/Debugging)
If you prefer to run steps manually, see the script contents in `setup.ps1` for the sequence of commands.

---

## Troubleshooting
- If you see errors about missing packages (e.g., `@onlook/foundation`), ensure you ran the setup script from the repo root.
- If you want to restore authentication, revert the patch in `apps/studio/src/lib/auth/index.ts`.

---

- If you see errors about missing packages (e.g., `@onlook/foundation`), ensure you ran the build steps from the root.
- If you want to restore authentication, revert the patch in `apps/studio/src/lib/auth/index.ts`.

---

