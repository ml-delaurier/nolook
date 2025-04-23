#!/usr/bin/env bash
set -e

echo "--- Onlook Studio Unified Setup Script ---"

# Check for Bun
if ! command -v bun &> /dev/null; then
    echo "Bun not found. Installing Bun..."
    curl -fsSL https://bun.sh/install | bash
    export PATH="$HOME/.bun/bin:$PATH"
else
    echo "Bun is already installed."
fi

cd apps/studio

echo "Installing dependencies with Bun..."
bun install

echo "Running setup command (bun run download_bun)..."
bun run download_bun

if [ ! -f ".env" ]; then
    echo "WARNING: .env file not found in apps/studio. Please copy your .env file here (see .env.example for required keys)."
else
    echo ".env file found in apps/studio."
fi

echo "Building project..."
bun run build

echo "Setup complete!"
