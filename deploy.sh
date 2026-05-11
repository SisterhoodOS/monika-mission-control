#!/bin/bash
# Monika's Mission Control — deploy helper
# Usage: ./deploy.sh "what I changed"

MSG="${1:-update}"
cd "$(dirname "$0")"

git add -A

if git diff --cached --quiet; then
  echo "Nothing to deploy — no changes."
  exit 0
fi

git commit -m "$MSG"
git push
echo ""
echo "✓ Live at: https://sisterhoodos.github.io/monika-mission-control/"
