<!-- README.md -->
# Akash Portfolio

A personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (mobile menu only)

## Design System

Single light theme — no dark mode / theme toggle (removed deliberately for a clean, professional, consistent look). The full spec lives in `public/akashdev_portfolio_design_system.html`.

- **Fonts** (via `next/font/google`): Fraunces (display serif), Plus Jakarta Sans (body/UI), JetBrains Mono (tags, numbers, code)
- **Palette**: warm cream paper (`#fff8f3`) with a single terracotta/clay accent (`#8c4a35`), matched to the artist-ada reference site. Tokens: `--accent`, `--accent-soft`, `--accent-border`, `--accent-dim`, `--accent-hover`.
- **Tokens**: defined once in `src/app/globals.css` `:root` (surfaces, text, borders, accent, semantic) and surfaced to Tailwind in `tailwind.config.ts`
- **Brand mark / favicon**: `src/app/icon.svg` and `src/app/apple-icon.svg` (terracotta square, cream "A"), auto-served by Next.js
- **Type scale**: hero/headings cap around 56–68px (deliberately not oversized); body 15–19px
- **Screenshots**: live project screenshots in `public/uploads/*.png`, captured with Playwright at 1280×800 @2x. Projects without a screenshot (izmo, ConsentPulse, TrackProbe) render a themed placeholder instead; izmo links to the company site `izmocars.com`.
- **Layout**: global horizontal gutter is `px-6 md:px-10 lg:px-14`. Hero stats have no separator borders.

## Positioning

The site is tuned to convert **freelance clients building booking / ticketing / transactional platforms**. The strongest proof point is the izmo day-job platform (400K+ records, performance at scale), backed by shipped SaaS products. Copy lives in `src/data/content.ts` (single source of truth).

## Contact email — setup required before sharing

The site displays and links `hello@akashdev.pro`. To make it actually receive mail (recommended, free):

1. In Cloudflare (DNS for `akashdev.pro`) → **Email → Email Routing**
2. Add a route: `hello@akashdev.pro` → forward to `akashyadav171156@gmail.com`
3. Verify the destination address from the email Cloudflare sends

Until forwarding is set up, mail to `hello@akashdev.pro` will bounce. A custom-domain address reads far more professionally to clients than a raw Gmail, which is why it's the default.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development


```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Start production server

```bash
npm run start
```

### 5. Lint

```bash
npm run lint
```

## Project Structure

- `src/app` — App Router routes and page-level composition
- `src/components` — Shared UI and layout components
- `src/data/content.ts` — Typed, central content source (single source of truth for all copy, projects, and config)
- `public/uploads/` — Project screenshot PNGs served as static assets
- `public/assets/` — Brand icon and legacy SVG project placeholders
- `docs/` — Project documentation (see below)

## Documentation (`docs/`)

| File | Description |
|---|---|
| `docs/site-audit.md` | Full audit: pages, components, assets, known issues, tech decisions |
| `docs/content-inventory.md` | Complete record of all published content and gaps |
| `docs/improvement-backlog.md` | Prioritised list of outstanding improvements (P1 → P3) |
| `docs/assets-inventory.md` | All static assets — active, legacy, and needed |
| `docs/writing-logic-first-ai.md` | Full source for the Logic-First AI article |
- `public/assets` - Static assets served by Next.js

## Notes

- The `writing/logic-first-ai` page is implemented as a dedicated static route.
- Dynamic writing routes skip reserved slugs to avoid duplicate static generation.

## Deployment

This app can be deployed on Vercel or any Node.js host that supports Next.js.

## Repository Setup

If you are setting up this repository for the first time:

```bash
git init
git remote add origin git@github.com:akash-yadav-dev/my-portfolio.git
git branch -M main
git add .
git commit -m "feat: initial portfolio setup"
git push -u origin main
```
