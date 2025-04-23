# Onlook Studio – No-Auth Windows Install Guide

This guide walks you through setting up and running Onlook Studio on Windows, including all steps to bypass authentication for local development.

## Prerequisites
- **Git**
- **PowerShell**
- **Node.js** (optional, only Bun is required)
- **Bun** (will be installed by the script)

## Step-by-Step Installation

### 1. Clone the Repository
```
git clone https://github.com/onlook-dev/onlook.git
cd onlook
```

### 2. Install Bun (if not already installed)
```
powershell -c "irm bun.sh/install.ps1 | iex"
```

### 3. Install Windows Build Tools (if not already installed)
```
bun install --global --production windows-build-tools
```

### 4. Install All Dependencies (from the monorepo root)
```
bun i
```

### 5. Download Bun Runtime for Electron
```
bun run download_bun
```

### 6. Build Internal Packages (required for Electron)
```
bun run build:foundation
```

### 7. Copy Your .env File
- Copy your `.env` file to `apps/studio/.env` (see `apps/studio/.env.example` for required variables).

### 8. [Optional] Patch Authentication for Local Dev
- The script will patch `apps/studio/src/lib/auth/index.ts` to always bypass login.

### 9. Launch Onlook Studio
```
cd apps/studio
bun dev
```

---

## One-Click Install & Launch
Run the following script from the repo root to automate all steps above:
```
powershell -ExecutionPolicy Bypass -File .\onlook-windows-setup.ps1
```

---

## Troubleshooting
- If you see errors about missing packages (e.g., `@onlook/foundation`), ensure you ran the build steps from the root.
- If you want to restore authentication, revert the patch in `apps/studio/src/lib/auth/index.ts`.

---

