# Portfolio Site Audit — akashdev.pro
**Date:** May 30, 2026  
**Status:** Work in progress — active refinement phase

---

## 1. Overview

This is a personal portfolio and freelance sales site for **Akash Yadav**, a Full-Stack Engineer and SaaS builder based in Bangalore.

- **Live URL:** https://akashdev.pro  
- **Framework:** Next.js 14 (App Router, SSR/SSG)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS + CSS custom tokens (`tokens.css`)  
- **Animation:** Framer Motion  
- **Fonts:** Fraunces (display), Plus Jakarta Sans (body/UI), JetBrains Mono (Google Fonts)  
- **Theme:** Single light theme — no dark mode / toggle (removed May 30, 2026)  
- **Content source:** `src/data/content.ts` — single TypeScript file, fully typed  
- **Deployment:** Production domain `akashdev.pro`

---

## 2. Page Structure

| Route | File | Purpose | Status |
|---|---|---|---|
| `/` | `src/app/page.tsx` | Homepage — hero, featured work, services, process, stack, writing preview, CTA (testimonials removed) | ✅ Working |
| `/work` | `src/app/work/page.tsx` | All 5 projects as clean scannable rows (screenshots live on detail pages) | ✅ Working |
| `/work/[slug]` | `src/app/work/[slug]/page.tsx` | Individual project detail pages — renders body, meta, stack, visual, links | ✅ Working |
| `/about` | `src/app/about/page.tsx` | Bio, photo, grouped skill tags (no rating bars), experience timeline, principles | ✅ Working |
| `/writing` | `src/app/writing/page.tsx` | Grid of 7 article cards | ✅ Working |
| `/writing/[slug]` | `src/app/writing/[slug]/page.tsx` | Individual article pages | ⚠️ Only `logic-first-ai` has a real page; others are stubs |
| `/writing/logic-first-ai` | `src/app/writing/logic-first-ai/page.tsx` | Full article — Logic-First AI hypothesis | ✅ Working |
| `/contact` | `src/app/contact/page.tsx` | Contact form, engagement types, channels | ✅ Working |
| `*` | `src/app/not-found.tsx` | 404 page | ✅ Working |

---

## 3. Component Inventory

### Layout
| Component | File | Notes |
|---|---|---|
| Header | `src/components/layout/Header.tsx` | Sticky, glass blur, mobile menu, "Available" CTA |
| Footer | `src/components/layout/Footer.tsx` | Credit + Source/Contact links from `content.ts` |

### Sections
| Component | File | Notes |
|---|---|---|
| Hero | `src/components/sections/Hero.tsx` | Tagline, intro, stats grid, photo, CTA buttons |
| ContactBlock | `src/components/sections/ContactBlock.tsx` | Channels list + contact form |
| CodeSnippet | `src/components/sections/CodeSnippet.tsx` | Imported in About — currently used for principles display |

### UI
| Component | File | Notes |
|---|---|---|
| Badge | `src/components/ui/Badge.tsx` | Tech stack + status labels |
| Button | `src/components/ui/Button.tsx` | Reusable button |
| ExperienceRow | `src/components/ui/ExperienceRow.tsx` | Timeline entry in About |
| FadeIn | `src/components/ui/FadeIn.tsx` | Framer Motion scroll reveal |
| PrincipleCard | `src/components/ui/PrincipleCard.tsx` | Engineering principle cards |
| SectionHeader | `src/components/ui/SectionHeader.tsx` | Numbered section titles |
| SkillBar | `src/components/ui/SkillBar.tsx` | Animated skill level bar |
| WorkRow | `src/components/ui/WorkRow.tsx` | Project card with screenshot, stack badges, status |
| WritingCard | `src/components/ui/WritingCard.tsx` | Article card for writing grid |

---

## 4. Content Source (`src/data/content.ts`)

All site content is managed from one typed file. Sections:

| Key | Type | Description |
|---|---|---|
| `profile` | `Profile` | Name, handle, photo, role, tagline, contact details |
| `stats` | `Stat[]` | 4 hero stats (years, products, live, scale) |
| `nav` | `NavItem[]` | 5 nav links |
| `projects` | `Project[]` | 5 projects (see Content Inventory) |
| `experience` | `Experience[]` | 3 timeline entries |
| `skills` | `Skill[]` | 7 skills with % level |
| `writing` | `Article[]` | 7 articles (excerpts + metadata only) |
| `about` | object | Bio intro, body paragraphs, 4 principles |
| `services` | object | 4 service offerings |
| `process` | object | 4-step client process |
| `testimonials` | array | Empty — real client quotes only (fakes removed May 30, 2026) |
| `contact` | object | Headline, body, 3 channels (Email, GitHub, LinkedIn) |
| `footer` | object | Credit, Source + Contact links |

---

## 5. Assets

### Public Static Assets
| Path | Description |
|---|---|
| `/akashdev.png` | Professional headshot — used in Hero and About |
| `/assets/brand-icon.png` | Brand/logo icon (Header) |
| `/assets/profile-headshot.svg` | Legacy SVG headshot — unused, can be removed |
| `/assets/projects/postqueue-ui.svg` | Legacy SVG — replaced by real screenshot |
| `/assets/projects/faqflow-widget.svg` | Legacy SVG — replaced by real screenshot |
| `/assets/projects/dimlypdf-before-after.svg` | Legacy SVG — replaced by real screenshot |
| `/assets/projects/mytodo-kanban.svg` | SVG placeholder — no real screenshot yet |
| `/assets/projects/izmo-inventory.svg` | SVG placeholder — no real screenshot yet |
| `/uploads/postqueue.png` | Real browser screenshot of PostQueue |
| `/uploads/faqflow.png` | Real browser screenshot of FAQFlow |
| `/uploads/dimlypdf.png` | Live screenshot from https://dimlypdf.akashdev.pro |

### Root-level (non-public, legacy)
| File | Description | Action |
|---|---|---|
| `content.json` | Legacy static HTML site data | Archive or remove |
| `portfolio.js` | Legacy vanilla JS renderer for old HTML site | Archive or remove |
| `site.css` | Legacy CSS for old HTML site | Archive or remove |
| `tokens.css` | Design tokens (CSS variables) — actively used | Keep |
| `uploads/` | Original upload folder at root (not served by Next.js) | Contents already copied to `public/uploads/` |

---

## 6. Known Issues

| # | Issue | Severity | Status |
|---|---|---|---|
| 1 | MyTodo visual is an SVG placeholder, not a real screenshot | Medium | Open |
| 2 | izmo visual is an SVG placeholder — client work, no public URL | Low | Open |
| 3 | Writing articles (6 of 7) have no full article body — slug pages are stubs | High | Open |
| 4 | `portfolio.js`, `content.json`, `site.css` are legacy files from previous HTML version still in root | Low | Open |
| 5 | `public/assets/profile-headshot.svg` is legacy and unused | Low | Open |
| 6 | 3 legacy SVGs in `public/assets/projects/` are superseded by PNGs but not removed | Low | Open |
| 7 | Footer "Source" link points to `https://github.com/akash-yadav-dev/portfolio` — verify repo is public | Medium | Open |
| 8 | Live URL for PostQueue and FAQFlow not listed (products may be behind auth or domain not set) | High | Open |
| 9 | Projects not yet listed that are deployed on professional domains | High | Open — see Content Inventory |

---

## 7. Tech Decisions Log

| Decision | Rationale |
|---|---|
| Single `content.ts` for all data | One place to update copy, projects, links — no CMS needed for a personal site |
| No database / headless CMS | Portfolio is infrequently updated; static TypeScript is faster and simpler |
| Static SVGs for some project visuals | Placeholders until real screenshots are captured |
| `/uploads/` in `public/` | Next.js only serves static assets from `public/`; original uploads dir was at project root (wrong) |
| Framer Motion for FadeIn + mobile menu only | Animation kept minimal — no route transitions or heavy orchestration |
| Single light theme, no `next-themes` | One polished theme reads cleaner/more professional than a toggle; removed May 30, 2026 |
