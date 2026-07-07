---
name: fidelity-check
description: Screenshot the running clone across all three views and diff it against the reference screenshots to drive pixel-perfect polish. Use whenever UI has changed and you want an objective before/after visual comparison.
---

# Fidelity check

A repeatable loop to converge the clone onto the reference.

## Steps
1. **Serve.** Confirm the dev server: `curl -s -o /dev/null -w "%{http_code}" localhost:3000`.
   If not 200, run `npm run dev` (background) and wait for "Ready".
2. **Shoot.** Use Playwright (bundled Chromium is fine for localhost) at `1440×900`,
   `deviceScaleFactor: 2`. Capture, in order:
   - Listing top (hero + title + gallery)
   - Scrolled state (sub-nav visible, booking card)
   - Each content section (sleep, amenities, calendar, reviews, map, host, things-to-know)
   - Photo Tour overlay (open via "Show all photos")
   - Lightbox (open a tour photo; also press `→` to verify nav)
3. **Diff.** Compare each shot to the matching file in `docs/reference/`. Grade on:
   layout & alignment → spacing → typography → color → radius/shadow → icon → motion.
4. **Fix.** Apply the smallest change that closes the gap; prefer editing tokens in
   `globals.css` or `src/data/listing.ts` over per-component hacks.
5. **Repeat** until no visible mismatch remains.

## Guardrails
- One `h1`; container max-width `1128px`; reserve button uses `.btn-gradient`.
- Never introduce raw hex in JSX — use theme tokens.
- Keep changes reversible and typed; run `npm run build` before declaring done.

## Reference notes
The live reference is bot-walled (Vercel checkpoint + Kasada). Treat `docs/reference/*.png`
as the source of truth; see `.claude/agents/reference-capture.md` for capture details.
