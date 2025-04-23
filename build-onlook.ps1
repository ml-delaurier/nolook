
Write-Host "--- Onlook Studio Local Build Script ---"


if (-not (Get-Command bun -ErrorAction SilentlyContinue)) {
    Write-Host "Bun not found. Installing Bun..."
    powershell -c "irm bun.sh/install.ps1 | iex"
} else {
    Write-Host "Bun is already installed."
}


$buildTools = bun pm ls --global | Select-String 'windows-build-tools'
if (-not $buildTools) {
    Write-Host "Installing Windows build tools (may take a while)..."
    bun install --global --production windows-build-tools
} else {
    Write-Host "Windows build tools already installed."
}


Write-Host "Installing dependencies with Bun..."
cd apps/studio
bun i

Write-Host "Running setup command (bun run download_bun)..."
bun run download_bun

if (-not (Test-Path ".env")) {
    Write-Warning ".env file not found in apps/studio. Please copy your .env file here (see .env.example for required keys)."
} else {
    Write-Host ".env file found in apps/studio."
}


Write-Host "Starting Onlook Studio (bun dev)..."
bun dev
