# Phase 1 — Discuss: Content Calendar Integration

## Goal
Integrate Sisterhood OS May 12-31 content calendar into Mission Control so Monika can use it as a UI-friendly terminal replacement for the Google Sheet.

## Existing Architecture (brownfield)
- Single-page app: `index.html` with sidebar nav + section panels.
- Two panel modes: `content-mode` (inline rendered JS) and `frame-mode` (iframe to kb-*.html).
- State: `localStorage['monika-mc-v1']` JSON. Has `notes`, `leads`, `log`, `kanban`, `stats`, `todaysFocus`.
- Brand system: CSS custom properties (--clay, --sage, --gold, --pearl, --rose, --workspace), Cormorant Garamond + Inter.
- Nav groups: Command / Knowledge Base / Personal.
- Owner-user is Monika (Bahasa primary, English UI). Sophia is the builder.

## Decisions

### 1. Placement in nav
Add new top-level group **Content** with single entry **Content Calendar**. Lives between "Command" and "Knowledge Base". This emphasizes it as an active operational tool, not reference material.

### 2. Panel mode
`content-mode` (inline). Calendar must be interactive — filtering, expand-rows, status toggles. iframe is wrong for this.

### 3. Data shape
Calendar data embedded inline as a JS const at the bottom of `index.html` (`const CONTENT_CALENDAR = [...]`). 20 carousel posts + 24 reels. Single source of truth. Update by editing the file (matches the rest of the site's pattern).

Each post object:
```
{ id, date, type: 'carousel'|'reel', slot, phase, pillar, title, hook, caption, hashtags, slides|script, broll }
```

### 4. Interactivity (v1 scope)
- View toggle: **Carousels** | **Reels** (tabs)
- Filters: by **phase** (4 phases) and by **pillar** (6 pillars)
- Expandable row: shows full caption, hashtags, slides (carousels) or script + b-roll + caption (reels)
- Status toggle per post: **Draft → Scheduled → Posted** (3-cycle button, saved to localStorage)
- Quick-copy buttons: caption, hashtags
- Countdown widgets: next masterclass (May 17 done by build time, May 31, SPC June 6)
- Header card: brand rules reminder (no em dashes, no commanding tone, no hype, no scarcity)
- Link out to source Google Sheet

### 5. State extension
Add `contentCalendar: { postStatus: { [postId]: 'draft'|'scheduled'|'posted' } }` to state.

### 6. Out of scope (v2)
- Editing post content inline (read-only for v1; source of truth stays the Sheet → updates via editing this file)
- Pushing to Airtable/Notion (separate task)
- Drag-drop scheduling
- Push notifications for posting times
- Auto-sync from Google Sheet (would need a build step)

### 7. Brand rules embedded
Hard rules from the sheet are surfaced in a small ALWAYS-VISIBLE card at the top of the calendar page:
- No em dashes
- No commanding tone
- No hype phrases
- No scarcity manipulation
- CTA: "Comment MASTERCLASS to save your spot."

### 8. Local file
Also save a clean markdown copy at `~/sisterhood-os-social/content-calendar/2026-05_may12-31.md` for the social-media-manager skill to consume in future runs.

## Out of Scope (this task)
- Airtable push (RUBE deprecating May 15)
- Notion push (user can request separately)
- Sprint Monitor masterclass milestones (user can request separately)

## Files Touched
- NEW: `~/sisterhood-os-social/content-calendar/2026-05_may12-31.md`
- MODIFY: `~/projects/monika-mission-control/index.html` (add nav entry + panel + JS + data)

## Verify Criteria
- Open `index.html` locally, click "Content Calendar" nav, page renders.
- Both Carousels + Reels tabs show all rows.
- Phase + Pillar filters work.
- Expand row shows full caption + slides/script.
- Status cycle button persists across page reloads.
- Copy-caption + copy-hashtags buttons work.
- Pushed to GitHub, live URL renders identically.
