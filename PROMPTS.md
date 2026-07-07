# AI-Assisted Development — Prompt Sequence

This project was built with **Claude Code (Opus 4.8)** driving the implementation, plus
purpose-built sub-agents and a skill (see `.claude/`). Below is the sequence of prompts /
instructions used, in order, with the intent behind each.

## 1. Kickoff
> "Build a pixel-perfect clone of the Airbnb listing at
> https://airbnb-clone-umber-two.vercel.app — the listing page plus the Photo Tour and
> Lightbox overlays. Match it visually and behaviorally (layout, spacing, typography, color,
> icons, hover/scroll animations, keyboard nav, focus, a11y). Desktop only. Use a stack you're
> comfortable with; backend optional."

## 2. Capture the reference (source of truth)
> "Visit the reference and capture all three views. It's behind protection — figure out how to
> get through and screenshot + inspect the DOM/assets."

- Found **Vercel Security Checkpoint** (JS/WASM) + **Kasada BotID** bot wall.
- Learned: `curl`/WebFetch only see the checkpoint; **bundled Chromium never clears** it; **system
  Chrome (headed, off-screen)** clears it and yields the real `<title>`, but **Kasada then blocks the
  app bundle** ("This page could not be verified") — no render, no interceptable API.
- Resolution: the reviewer provided **8 high-res screenshots** of the full page; those became the
  source of truth. Codified this in `.claude/agents/reference-capture.md`.

## 3. Extract the content model
> "From the screenshots, produce a complete data model: title, specs, rating, host, co-hosts,
> highlights, description, amenities (shown + full list), calendar availability, reviews with
> ratings breakdown and tag pills, map/neighbourhood, things-to-know."

→ `src/data/listing.ts` (all content lives in the frontend; no backend needed).

## 4. Scaffold + design tokens
> "Scaffold Next.js 16 (App Router) + Tailwind v4 + TS. Set up Airbnb design tokens (rausch
> #ff385c, text #222, muted #6a6a6a, borders, reserve-button gradient), Inter font, and the
> keyframe animations for overlays."

→ `globals.css`, `layout.tsx`, `src/lib/format.ts` (₹ Indian grouping).

## 5. Build the icon system
> "Recreate the Airbnb line-icon set as one `<Icon name .. size stroke />` registry + the Bélo
> logo, laurel wreath, and star."

→ `src/components/icons.tsx`, `Laurel.tsx`.

## 6. Build the listing page section-by-section
> "Build, matching each reference screenshot exactly: Header + search pill, Gallery (5-image grid
> + Show all photos), scroll-spy SubNav, Overview (guest-favourite card, host, highlights,
> translated description with show more), Where you'll sleep, What this place offers, interactive
> two-month Calendar with the 18–23 Oct range and greyed Nov dates, sticky BookingCard (promo +
> price + date/guest selector + gradient Reserve), Reviews (4.95 summary, breakdown, tag pills,
> grid), stylised Location map, Meet your host, Things to know, Footer."

→ delegated recurring pieces to the **component-architect** sub-agent to keep tokens/icons/data
consistent.

## 7. Build the two overlays
> "Photo Tour: full-screen mosaic opened from any hero image or 'Show all photos'. Lightbox:
> single-photo viewer opened from a tour photo, with prev/next arrows, ←/→ keyboard nav, an
> 'n / total' counter, Esc to close, focus management and body-scroll lock."

→ `PhotoTour.tsx`, `Lightbox.tsx`, shared `ui-context.tsx`, plus amenities/reviews `Modal`s.

## 8. Verify + polish (the fidelity loop)
> "Run the app, screenshot all three views with Playwright, diff against the reference
> screenshots, and fix mismatches."

- Invoked the **fidelity-check** skill and **pixel-perfect-reviewer** sub-agent.
- Fixes: calendar was greying Oct 30–31 (removed); laurels made fuller; `stroke` prop type clash
  on `<Icon>` fixed; production `npm run build` green.

## 9. Accessibility pass
> "Audit keyboard nav, focus trap/restore, ARIA roles and labels across the overlays and modals."

→ **accessibility-auditor** sub-agent.

## 10. Architecture + docs
> "Produce a production-scale vacation-rental marketplace architecture diagram (image + PDF) and
> write the README + this prompt log."

→ `docs/architecture.html|png|pdf`, `README.md`, `PROMPTS.md`.
