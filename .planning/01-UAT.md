# Phase 4 — Verify: UAT Checklist

## Automated checks (passed)
- [x] `content-calendar.js` parses as JSON-compatible JS (20 carousels, 24 reels, 3 milestones)
- [x] No em dash violations in any caption/script (hard rule enforced)
- [x] HTML tag balance: 2 script tags, 1 style block, 10 section panels
- [x] Commit `6301d84` pushed to `SisterhoodOS/monika-mission-control` main
- [x] GitHub Pages deployed: live URL serves both new files (HTTP 200)
- [x] Live index.html contains: `panel-content-calendar`, `nav-content-calendar`, `content-calendar.js` script tag, `cc-milestones` element

## Manual checks (for Sophia/Monika)
Open https://sisterhoodos.github.io/monika-mission-control/

- [ ] Sidebar shows new "Content" group with "Content Calendar" entry
- [ ] Clicking Content Calendar opens the page
- [ ] Three milestone cards render with countdowns
- [ ] Hard rules card shows below milestones
- [ ] Carousels tab shows 20 posts; Reels tab shows 24
- [ ] Phase filter narrows carousel results
- [ ] Pillar filter narrows results in both tabs
- [ ] Status filter (Draft / Scheduled / Posted) narrows results
- [ ] Clicking a row expands it to show full caption + slides/script
- [ ] Copy buttons (Hook, Caption, Hashtags, Script) work; toast appears
- [ ] Status button cycles Draft → Scheduled → Posted on click
- [ ] Reload preserves status, open rows, and active tab
- [ ] Source Google Sheet link opens the source spreadsheet in new tab
- [ ] Mobile layout: row head wraps cleanly at <720px

## Known limitations
- Updates to post content require editing `assets/data/content-calendar.js` and re-pushing — no inline editor in v1
- No auto-sync from source Google Sheet
- Status state is per-browser (localStorage) — not shared across devices

## Next iteration ideas
- Inline edit caption / status notes (saved to localStorage)
- "Today's posts" widget on Dashboard pulling from this calendar
- Push reminders 30 min before each posting slot
- One-button "regenerate from sheet" that pulls the latest Google Sheet via Apps Script export
