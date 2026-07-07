# Airbnb Listing Clone — Romantic Jacuzzi 1BHK Candolim

A pixel-perfect, desktop clone of the Airbnb listing page at
`https://airbnb-clone-umber-two.vercel.app`, reproducing the **listing page** and its two overlay
views — the **Photo Tour** and the **Lightbox** — with matching layout, typography, colour,
iconography, motion, and keyboard/accessibility behaviour.

Built with Claude Code (Opus 4.8) using purpose-built sub-agents and a skill — see
[`.claude/`](.claude/) and [`PROMPTS.md`](PROMPTS.md).

## The three views

| View | What it is | How to open |
|------|-----------|-------------|
| **Listing page** | Full property page: header, hero gallery, overview, guest-favourite card, host, highlights, description, where you'll sleep, amenities, interactive calendar, reviews, map, meet-your-host, things-to-know, footer. | `/` |
| **Photo Tour** | Full-screen mosaic gallery. | Click any hero image or **Show all photos** |
| **Lightbox** | Single-photo viewer with prev/next arrows, **← / →** keyboard nav, `n / total` counter, `Esc` to close. | Click any photo inside the Photo Tour |

## Tech stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** with an Airbnb design-token theme
- **next/font** (Inter, self-hosted) · **next/image** for optimised local assets
- No backend — all listing content lives in the frontend (`src/data/listing.ts`), per the task's
  "frontend storage is fine" allowance.

## Run it

```bash
cd airbnb-clone
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-checked, green)
npm run start    # serve the production build
```

Deploy: push to Vercel (zero-config) or any Node host — it's a standard Next.js app.

## Project structure

```
src/
  app/
    layout.tsx          # fonts + metadata
    globals.css         # design tokens, animations, base styles
    page.tsx            # renders <ListingPage/>
  components/
    ListingPage.tsx     # assembles the page + holds booking state + overlays
    Header.tsx  SubNav.tsx  Gallery.tsx
    Overview.tsx  Sleep.tsx  Amenities.tsx  Calendar.tsx  BookingCard.tsx
    Reviews.tsx  ReviewCard.tsx  LocationMap.tsx  MeetHost.tsx  ThingsToKnow.tsx  Footer.tsx
    PhotoTour.tsx  Lightbox.tsx          # overlay views
    Modal.tsx  AmenitiesModal.tsx  ReviewsModal.tsx
    icons.tsx  Laurel.tsx                # icon registry + logo/laurel/star
    ui-context.tsx      # overlay/modal state, body-scroll lock
  data/listing.ts       # all content (single source)
  lib/format.ts         # ₹ Indian-rupee formatting
docs/
  architecture.html|png|pdf             # production architecture diagram
  reference/                            # reference screenshots (source of truth)
.claude/
  agents/               # pixel-perfect-reviewer, component-architect,
                        # accessibility-auditor, reference-capture
  skills/fidelity-check # repeatable screenshot-diff polish loop
```

## Fidelity & behaviour details

- **Layout:** 1128px content container; hero 5-image grid with rounded outer corners; sticky
  booking card; a `fixed`, scroll-triggered sub-nav with **scroll-spy** (Photos/Amenities/Reviews/
  Location) that scrolls to and highlights the active section.
- **Interaction:** interactive two-month calendar (18–23 Oct range pre-selected, unavailable
  November dates greyed), guest stepper, expandable description/reviews, hover-darken on gallery
  images, gradient Reserve button.
- **Accessibility:** overlays/modals use `role="dialog"` + `aria-modal`, trap and restore focus,
  lock background scroll, close on `Esc`; the Lightbox adds `←/→` navigation and an `aria-live`
  photo counter; icon-only controls are labelled; one `<h1>` and a logical heading order.

## A note on the gallery photos

The reference is defended by a **Vercel Security Checkpoint + Kasada BotID** wall that blocks
automated extraction of the original listing images (the app JS bundle never loads under
automation — see [`.claude/agents/reference-capture.md`](.claude/agents/reference-capture.md)).
The photos here are therefore **thematically-matched, license-free stand-ins** (bundled locally in
`public/images/` so the app is fully self-contained and deployable). Everything else — layout,
copy, prices, ratings, host, reviews, amenities, calendar — mirrors the reference. Drop the real
assets into `public/images/` and update `src/data/listing.ts` to swap them in.

## Architecture diagram

See [`docs/architecture.png`](docs/architecture.png) / [`docs/architecture.pdf`](docs/architecture.pdf)
for the production-scale vacation-rental marketplace design (edge/CDN, edge SSR/ISR, API gateway,
microservices, sharded Postgres + Redis + Elasticsearch + S3, Kafka/stream/ML data platform,
multi-region Kubernetes, CI/CD, observability) and its scaling notes.
