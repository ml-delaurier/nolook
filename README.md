
## Local Development Setup (All Platforms)

Onlook Studio now supports a unified, automated setup for both Unix/macOS/Linux and Windows users. Build artifacts are generated locally and are not committed to git.

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

### Notes
- Build outputs (e.g., `dist/`, `build/`, `apps/studio/dist-electron/`) are .gitignored and must be generated locally.
