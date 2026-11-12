<!-- README.md -->
# Akash Portfolio

A personal portfolio built with **Astro 5**, TypeScript, and Tailwind CSS. Fully static output, no framework JS on the page.

## Tech Stack

- Astro 5 (static output)
- TypeScript
- Tailwind CSS
- Self-hosted fonts via `@fontsource` (Fraunces, Plus Jakarta Sans, JetBrains Mono)
- `@astrojs/sitemap` for XML sitemap

## Design System

Single light theme — no dark mode / theme toggle (removed deliberately for a clean, professional, consistent look). The full spec lives in `public/akashdev_portfolio_design_system.html`.

- **Fonts** (self-hosted via `@fontsource`): Fraunces (display serif), Plus Jakarta Sans (body/UI), JetBrains Mono (tags, numbers, code)
- **Palette**: warm cream paper (`#fff8f3`) with a single terracotta/clay accent (`#8c4a35`), matched to the artist-ada reference site. Tokens: `--accent`, `--accent-soft`, `--accent-border`, `--accent-dim`, `--accent-hover`.
- **Tokens**: defined once in `src/styles/globals.css` `:root` (surfaces, text, borders, accent, semantic) and surfaced to Tailwind in `tailwind.config.ts`
- **Brand mark / favicon**: `public/favicon.svg` and `public/apple-icon.svg`
- **Type scale**: hero/headings cap around 56–68px (deliberately not oversized); body 15–19px
- **Screenshots**: live project screenshots in `public/uploads/*.png`, captured with Playwright at 1280×800 @2x. Projects without a screenshot (izmo, ConsentPulse, TrackProbe) render a themed placeholder instead; izmo links to the company site `izmocars.com`.
- **Work cards**: the shared `WorkCard` renders a screenshot, a corner status badge, stack tags, and a 3-line-clamped summary. It's used in a responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) on both `/work` (all projects) and the homepage "Selected Work" section (first 3, "All projects" button centered below). `/work` adds a header trust strip (3+ years, 400K+ records, 6 live products).
- **Status badges**: pinned to the top-right corner of each card so they read at a glance. Not-yet-live projects carry an accented `Coming soon` badge (the `upcoming` status).
- **Animations**: scroll-reveal via a small `IntersectionObserver` script (`src/scripts/reveal.ts`) — no animation library.
- **Layout**: global horizontal gutter is `px-6 md:px-10 lg:px-14`.

## Positioning

The site is tuned to convert **freelance clients building booking / ticketing / transactional platforms**. The strongest proof point is the izmo day-job platform (400K+ records, performance at scale), backed by the products built end to end. Copy lives in `src/data/content.ts` (single source of truth for everything except projects).

**Tone**: copy is written in plain, simple language for a non-technical audience, framed around "what I've worked on / done" rather than developer jargon.

## Projects: how they stay in sync

Projects are **auto-synced from your GitHub repos** — you never edit the site by hand to add a project.

The flow:

1. **Each project repo** gets a `project.yml` manifest (see `docs/project.yml.template`): name, tagline, summary, body, stack, status, live URL, screenshot.
2. **`src/data/projects/registry.yml`** is the curation layer — it lists which repos appear on the site (include/exclude, overrides, and `manual:` entries for projects with no repo).
3. **`scripts/sync-projects.mjs`** reads the registry, fetches each repo's `project.yml` + metadata via the GitHub API, and regenerates `src/data/projects/projects.generated.json`.
4. **`.github/workflows/sync-projects.yml`** runs it weekly (Monday 03:00 UTC) + on manual dispatch, and opens/updates a single PR (`chore/sync-projects`) with the changes. Merge the PR to publish; close it to skip.

**One-time setup:**

- Create a fine-grained PAT with **contents read** on your project repos (private ones too) and **contents write + pull-requests write** on `my-portfolio`. Add it as the `GH_SYNC_TOKEN` repo secret.
- Add `project.yml` to each project repo (copy `docs/project.yml.template`).

Run locally:

```bash
npm run sync        # fetch + regenerate (writes file)
npm run sync:dry    # preview changes without writing
node scripts/sync-projects.mjs --token <PAT> --dry-run
```

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

### 4. Preview the production build

```bash
npm run preview
```

### 5. Type-check

```bash
npm run check
```

## Project Structure

- `src/pages` — Astro routes (`index.astro`, `work/`, `writing/`, `about`, `contact`, `404`)
- `src/layouts/BaseLayout.astro` — shared HTML shell (head, fonts, header, footer, reveal script)
- `src/components` — Astro components (`layout/`, `sections/`, `ui/`, `article/`)
- `src/data/content.ts` — Site-wide copy and config (profile, nav, services, writing, contact)
- `src/data/projects/` — **Projects**: `registry.yml` (curation), `projects.generated.json` (auto-generated), `index.ts` + `types.ts`
- `public/uploads/` — Project screenshot PNGs served as static assets
- `scripts/sync-projects.mjs` — The sync pipeline script
- `docs/` — Project documentation (see below)

## Documentation (`docs/`)

| File | Description |
|---|---|
| `docs/site-audit.md` | Full audit: pages, components, assets, known issues, tech decisions |
| `docs/content-inventory.md` | Complete record of all published content and gaps |
| `docs/improvement-backlog.md` | Prioritised list of outstanding improvements (P1 → P3) |
| `docs/assets-inventory.md` | All static assets — active, legacy, and needed |
| `docs/writing-logic-first-ai.md` | Full source for the Logic-First AI article |
| `docs/project.yml.template` | Manifest template for adding a project to the portfolio |
| `docs/legacy/portfolio.json` | Archived pre-Astro project data (legacy schema) |

## Notes

- The `writing/logic-first-ai` page is implemented as a dedicated static route.
- Dynamic writing routes skip reserved slugs to avoid duplicate static generation.
- `next-themes`, Framer Motion, and the old `src/app/` Next.js code were removed in the Astro migration.

## Deployment

Deploys to **Vercel** (custom domain `akashdev.pro`). Astro is auto-detected — the build runs `npm run build` → `dist/`. Deploy on merge to `main`; the weekly sync PR is the natural checkpoint for project updates.
