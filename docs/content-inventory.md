# Content Inventory — akashdev.pro
**Last updated:** May 30, 2026  
**Source of truth:** `src/data/content.ts`

This document records everything currently published on the site, gaps in content, and what needs to be added or updated.

---

## Profile

| Field | Current Value | Notes |
|---|---|---|
| Name | Akash Yadav | ✅ |
| Role | Full-Stack Engineer · SaaS Builder | ✅ |
| Tagline | Freelance / Full-Stack Engineer / for SaaS & Platforms | ✅ |
| Photo | `/akashdev.png` | ✅ Real headshot in hero + about |
| Email | hello@akashdev.pro | ✅ |
| GitHub | @akash-yadav-dev | ✅ |
| Location | Bangalore / IST | ✅ |
| Availability | Available for freelance projects | ✅ |
| Signal | on request | ✅ |

---

## Stats (Hero Section)

| Label | Value |
|---|---|
| Years of professional experience | 3+ |
| SaaS products built | 5 |
| Live & deployed today | 3 |
| Vehicle records managed | 400K+ |

---

## Projects (5 listed)

### 1. PostQueue
- **Slug:** `postqueue`  
- **Year:** 2025 — now  
- **Status:** Live  
- **Tagline:** Multi-tenant social publishing for teams  
- **Stack:** NestJS 11, Next.js 16, TypeScript, Temporal, PostgreSQL, Redis  
- **Visual:** `/uploads/postqueue.png` ✅ Real screenshot  
- **Links:**
  - GitHub: https://github.com/akash-yadav-dev/post-queue
  - ❌ **Live URL missing** — no public domain listed
- **Notes:** Flagship product. Multi-tenant, RBAC, Temporal workflows, 9 platforms.

### 2. FAQFlow
- **Slug:** `faqflow`  
- **Year:** 2025 — now  
- **Status:** Live  
- **Tagline:** AI FAQ widgets for Shopify  
- **Stack:** Next.js 16, TypeScript, Shopify, Supabase, OpenAI  
- **Visual:** `/uploads/faqflow.png` ✅ Real screenshot  
- **Links:**
  - GitHub: https://github.com/akash-yadav-dev/faqflow
  - ❌ **Live URL missing** — not listed (Shopify App Store listing?)
- **Notes:** Theme App Embed, GDPR-compliant, multi-store.

### 3. DimlyPDF
- **Slug:** `dimlypdf`  
- **Year:** 2025  
- **Status:** Open source  
- **Tagline:** PDF dark mode, client-side  
- **Stack:** React 18, TypeScript, Vite, MuPDF, Tailwind CSS  
- **Visual:** `/uploads/dimlypdf.png` ✅ Live screenshot from site  
- **Links:**
  - GitHub: https://github.com/akash-yadav-dev/dimlypdf
  - Live: https://dimlypdf.akashdev.pro ✅
- **Notes:** Only project with a confirmed live public URL.

### 4. MyTodo
- **Slug:** `mytodo`  
- **Year:** 2025 — now  
- **Status:** Open source  
- **Tagline:** Jira-style project management  
- **Stack:** Go, Gin, Next.js, PostgreSQL, Redis, Kubernetes  
- **Visual:** `/assets/projects/mytodo-kanban.svg` ⚠️ SVG placeholder — no real screenshot  
- **Links:**
  - GitHub: https://github.com/akash-yadav-dev/mytodo
  - ❌ **Live URL missing**
- **Notes:** Go backend with Clean Architecture and DDD.

### 5. izmo
- **Slug:** `izmo`  
- **Year:** 2022 — now  
- **Status:** Live (employer project)  
- **Tagline:** Car dealership inventory at scale  
- **Stack:** React.js, TypeScript, NestJS, Node.js, Storybook, SCSS  
- **Visual:** `/assets/projects/izmo-inventory.svg` ⚠️ SVG placeholder  
- **Links:** ❌ None listed (private/commercial product)
- **Notes:** 400K+ vehicle records. izmo Ltd client project — no public repo or live URL shareable.

---

## Projects NOT Yet Listed (Gaps)

These are built products that should be considered for addition. Verify deployment status and add to `content.ts` when ready:

| Project | Notes |
|---|---|
| **Snipify** | AI SaaS — YouTube to short-form clips. GPT-4 + Whisper + BullMQ + Stripe + Cloudflare R2. Flagged as flagship in `portfolio.json`. Add if deployed. |
| **PixelForge** | Listed in legacy `portfolio.json`. Add details. |
| Others | Review `src/data/portfolio.json` for full list of 11 meaningful projects |

---

## Experience Timeline (3 entries)

| Period | Role | Where |
|---|---|---|
| Dec 2022 — now | Associate Software Engineer · izmo Ltd | Bangalore · IN |
| 2024 — now | Independent SaaS Builder · Freelance-style product work | Remote |
| 2018 — 2022 | Bachelor of Engineering | Bangalore · IN |

---

## Skills (7 listed)

| Skill | Level |
|---|---|
| React.js / Next.js | 93% |
| TypeScript / JavaScript | 91% |
| NestJS / Express / Node.js | 82% |
| HTML5 / CSS / Tailwind / SCSS | 88% |
| PostgreSQL / Prisma | 76% |
| Go | 62% |
| Docker / Kubernetes / DevOps | 58% |

---

## Writing (7 articles)

| Slug | Title | Date | Read Time | Full Content? |
|---|---|---|---|---|
| `logic-first-ai` | Logic-First AI: A Hypothesis for Lightweight, High-Reasoning Systems | May 2026 | 18 min | ✅ Full article in `src/app/writing/logic-first-ai/page.tsx` + `docs/writing-logic-first-ai.md` |
| `temporal-workflows` | Why I use Temporal for anything with more than two steps | Mar 2026 | 9 min | ❌ Stub only |
| `saas-multi-tenancy` | Multi-tenancy in Postgres: row-level vs. schema-per-tenant | Jan 2026 | 10 min | ❌ Stub only |
| `shopify-app-gotchas` | Five Shopify app gotchas nobody warns you about | Nov 2025 | 7 min | ❌ Stub only |
| `nestjs-vs-express` | NestJS vs. Express: when the structure pays off | Sep 2025 | 7 min | ❌ Stub only |
| `wasm-in-the-browser` | Shipping MuPDF to the browser with WebAssembly | Jul 2025 | 6 min | ❌ Stub only |
| `interface-is-an-API` | The interface is an API | May 2025 | 9 min | ❌ Stub only |

---

## Services (4 offerings)

| Title | Summary |
|---|---|
| Full-Stack SaaS Development | End-to-end builds: Next.js, NestJS, Go, PostgreSQL — first scope to production |
| API Design & Backend Systems | REST + event-driven APIs, multi-tenant arch, Temporal workflows |
| Frontend Engineering | React/Next.js UIs, component systems, performance-focused delivery |
| Shopify App Development | Theme app extensions, OAuth, GDPR, multi-store support |

---

## Process (4 steps)

Discovery → Build → Ship → Iterate

---

## Testimonials (0)

The 2 anonymised/fabricated testimonials (S. Kumar, A. Mehta) were **removed on May 30, 2026** — they read as fake and risked trust on a client-facing portfolio. `content.testimonials` is now an empty array and the homepage section is removed.

*Action: add only real, named client testimonials as freelance work produces them, then re-add the homepage section.*

---

## Contact

- **Headline:** Let's build something that ships.
- **Email:** hello@akashdev.pro
- **GitHub:** @akash-yadav-dev
- **Signal:** on request

---

## Footer

- **Credit:** © 2026 Akash Yadav. All rights reserved.
- **Links:** Source (GitHub portfolio repo), Contact (/contact)
- ⚠️ Source link should point to a **public** GitHub repo — verify repo is public before launch.
