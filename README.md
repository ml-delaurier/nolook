
## Local Development Setup (All Platforms)

Onlook Studio now supports a unified, automated setup for both Unix/macOS/Linux and Windows users. Build artifacts are generated locally and are not committed to git.

### Prerequisites
- **Git**
- **PowerShell** (comes with Windows, required for Windows users)
- **Bun** (will be installed automatically if missing)

### Quick Start

#### For Unix/macOS/Linux:

```bash
bash setup.sh
```

#### For Windows (PowerShell):

```powershell
powershell -ExecutionPolicy Bypass -File .\setup.ps1
```

These scripts will:
- Check for and install Bun if needed
- Install all dependencies
- Download the Bun runtime for Electron
- Warn if `.env` is missing (see `.env.example` for required variables)
- Build the project
- Patch authentication for local development (if needed)

After setup completes, launch Onlook Studio:

```bash
cd apps/studio
bun dev
```

### Advanced/Manual Steps
If you prefer to run steps manually, see the script contents in `setup.ps1` or `setup.sh` for the sequence of commands.

### Troubleshooting
- If you see errors about missing packages (e.g., `@onlook/foundation`), ensure you ran the setup script from the repo root.
- If you want to restore authentication, revert the patch in `apps/studio/src/lib/auth/index.ts`.
- If you encounter other issues, see the setup scripts for troubleshooting steps or reach out via GitHub Issues or Discord.
bun dev
```

### Notes
- Build outputs (e.g., `dist/`, `build/`, `apps/studio/dist-electron/`) are .gitignored and must be generated locally.
