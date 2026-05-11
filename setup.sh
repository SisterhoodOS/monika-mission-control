#!/bin/bash
# Monika's Mission Control — one-time setup
# Paste this whole block into your terminal and press Enter

set -e

REPO="https://github.com/SisterhoodOS/monika-mission-control.git"
DIR="$HOME/monika-mc"

echo ""
echo "Setting up Monika's Mission Control..."
echo ""

# Check for git
if ! command -v git &> /dev/null; then
  echo "Git is not installed. Download from: https://git-scm.com/download/mac"
  echo "Install it, then run this script again."
  exit 1
fi

# Clone the repo
if [ -d "$DIR/.git" ]; then
  echo "Already set up — pulling latest..."
  git -C "$DIR" pull
else
  git clone "$REPO" "$DIR"
  echo "✓ Downloaded to $DIR"
fi

# Add a deploy alias to shell profile
PROFILE="$HOME/.zshrc"
[ ! -f "$PROFILE" ] && PROFILE="$HOME/.bash_profile"

ALIAS_LINE="alias mc-deploy='cd ~/monika-mc && git add -A && git commit -m \"\${1:-update}\" && git push && echo \"✓ Live: https://sisterhoodos.github.io/monika-mission-control/\"'"

if ! grep -q "mc-deploy" "$PROFILE" 2>/dev/null; then
  echo "" >> "$PROFILE"
  echo "# Monika Mission Control" >> "$PROFILE"
  echo "$ALIAS_LINE" >> "$PROFILE"
  echo "✓ Added mc-deploy command to your terminal"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  All done. Here's how to use it:"
echo ""
echo "  1. Edit files in:  ~/monika-mc/"
echo "     - index.html        (main dashboard)"
echo "     - kb-sisterhood.html (strategy KB)"
echo "     - kb-marketing.html  (marketing KB)"
echo "     - kb-saha-synergy.html"
echo ""
echo "  2. Preview in browser:"
echo "     open ~/monika-mc/index.html"
echo ""
echo "  3. Deploy your changes:"
echo "     cd ~/monika-mc && ./deploy.sh \"what I changed\""
echo ""
echo "  Your site: https://sisterhoodos.github.io/monika-mission-control/"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
