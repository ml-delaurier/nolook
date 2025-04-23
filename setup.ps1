Write-Host "--- Onlook Studio Unified Setup Script ---"

if (-not (Get-Command bun -ErrorAction SilentlyContinue)) {
    Write-Host "Bun not found. Installing Bun..."
    irm https://bun.sh/install.ps1 | iex
} else {
    Write-Host "Bun is already installed."
}

Set-Location apps/studio

Write-Host "Installing dependencies with Bun..."
bun install

Write-Host "Running setup command (bun run download_bun)..."
bun run download_bun

if (-not (Test-Path ".env")) {
    Write-Warning ".env file not found in apps/studio. Please copy your .env file here (see .env.example for required keys)."
} else {
    Write-Host ".env file found in apps/studio."
}

Write-Host "Building project..."
bun run build

Write-Host "Setup complete!"
