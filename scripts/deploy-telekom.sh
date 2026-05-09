#!/usr/bin/env bash
# Deploy to Deutsche Telekom hosting at https://jorge-rodrigo.de/tangobuch
#
# Prerequisites:
#   1. SSH access to your Telekom webspace (key-based auth recommended)
#   2. Set these environment variables (or create .env.telekom):
#      TELEKOM_HOST    — e.g. home.telekom.de or ssh.wpxxx.securehostdns.com
#      TELEKOM_USER    — your Telekom username / webspace ID
#      TELEKOM_PATH    — remote document root, e.g. /www/htdocs/username or ~/html
#
# Usage:
#   source .env.telekom   # or export the vars manually
#   ./scripts/deploy-telekom.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
DIST_DIR="$PROJECT_DIR/dist-telekom"
REMOTE_TARGET="${TELEKOM_USER:?}@${TELEKOM_HOST:?}:${TELEKOM_PATH:?}/tangobuch"

echo "=== Building for Telekom (jorge-rodrigo.de/tangobuch) ==="
cd "$PROJECT_DIR"

# Clean previous Telekom build
rm -rf "$DIST_DIR"

# Build with Telekom config
pnpm astro build --config astro.config.telekom.mjs

# Astro outputs to dist/ by default; move to dist-telekom to avoid overwriting GH Pages build
mv dist "$DIST_DIR"

echo ""
echo "=== Uploading to Telekom ==="
echo "  Target: $REMOTE_TARGET"
echo ""

# Create the tangobuch directory on the remote if it doesn't exist
ssh "${TELEKOM_USER}@${TELEKOM_HOST}" "mkdir -p ${TELEKOM_PATH}/tangobuch"

# Rsync: archive mode, compress, delete extraneous files on remote
rsync -avz --delete "$DIST_DIR/" "$REMOTE_TARGET/"

echo ""
echo "=== Deploy complete ==="
echo "  https://jorge-rodrigo.de/tangobuch"
