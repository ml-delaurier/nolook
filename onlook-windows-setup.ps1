# Onlook Studio One-Click Windows Setup Script
# This script automates full setup, build, local auth patch, and launch for Onlook Studio
# Run from the root of the repo: powershell -ExecutionPolicy Bypass -File .\onlook-windows-setup.ps1

Write-Host "--- Onlook Studio Automated Setup ---"

# 1. Install Bun if not present
if (-not (Get-Command bun -ErrorAction SilentlyContinue)) {
    Write-Host "Bun not found. Installing Bun..."
    powershell -c "irm bun.sh/install.ps1 | iex"
} else {
    Write-Host "Bun is already installed."
}

# 2. Install windows-build-tools if not present
$buildTools = bun pm ls --global | Select-String 'windows-build-tools'
if (-not $buildTools) {
    Write-Host "Installing Windows build tools (may take a while)..."
    bun install --global --production windows-build-tools
} else {
    Write-Host "Windows build tools already installed."
}

# 3. Install all dependencies from monorepo root
Write-Host "Installing all dependencies with Bun..."
bun i

# 4. Download Bun runtime for Electron
Write-Host "Downloading Bun runtime for Electron..."
bun run download_bun

# 5. Build internal foundation package
Write-Host "Building @onlook/foundation package..."
bun run build:foundation

# 6. Patch AuthManager to bypass login for local dev
$authFile = "apps/studio/src/lib/auth/index.ts"
if (Test-Path $authFile) {
    $content = Get-Content $authFile -Raw
    if ($content -notmatch "LOCAL DEV PATCH") {
        $patched = $content -replace "export class AuthManager {([\s\S]*?)constructor\(\) {([\s\S]*?)makeAutoObservable\(this\);([\s\S]*?)this.fetchUserMetadata\(\);([\s\S]*?)this.listenForAuthEvents\(\);([\s\S]*?)}", "// LOCAL DEV PATCH: Bypass authentication for local development`nexport class AuthManager {$1authenticated = true; // Always authenticated`n    userMetadata: UserMetadata | null = null;`n    isAuthEnabled = false; // Disable auth checks for local/dev`n`n    constructor() {`n        makeAutoObservable(this);`n        // Skip fetchUserMetadata and listenForAuthEvents for local/dev`n        // this.fetchUserMetadata();`n        // this.listenForAuthEvents();`n    }"
        Set-Content $authFile $patched
        Write-Host "AuthManager patched for local login bypass."
    } else {
        Write-Host "AuthManager already patched."
    }
} else {
    Write-Warning "AuthManager file not found—skipping patch."
}

# 7. Check for .env file
if (-not (Test-Path "apps/studio/.env")) {
    Write-Warning ".env file not found in apps/studio. Please copy your .env file here (see .env.example for required keys)."
    pause
}

# 8. Launch the app
Write-Host "Launching Onlook Studio (bun dev)..."
cd apps/studio
bun dev
