# Assets Inventory — akashdev.pro
**Last updated:** May 30, 2026

Complete record of all static assets, their purpose, current status, and action needed.

---

## Public Assets (`public/`)

These are served at the root URL by Next.js.

### Root public
| File | URL | Used By | Status |
|---|---|---|---|
| `akashdev.png` | `/akashdev.png` | Hero, About (profile photo) | ✅ Active |
| `assets/brand-icon.png` | `/assets/brand-icon.png` | Header logo | ✅ Active |
| `assets/profile-headshot.svg` | `/assets/profile-headshot.svg` | — | ❌ Unused — delete |

### Project Visuals — Real Screenshots (`public/uploads/`)
| File | URL | Project | Status |
|---|---|---|---|
| `postqueue.png` | `/uploads/postqueue.png` | PostQueue | ✅ Active (835 KB) |
| `faqflow.png` | `/uploads/faqflow.png` | FAQFlow | ✅ Active (23 KB) |
| `dimlypdf.png` | `/uploads/dimlypdf.png` | DimlyPDF | ✅ Active, live screenshot (153 KB) |

### Project Visuals — SVG Placeholders (`public/assets/projects/`)
| File | URL | Project | Status |
|---|---|---|---|
| `postqueue-ui.svg` | `/assets/projects/postqueue-ui.svg` | PostQueue | ⚠️ Superseded by PNG — keep until cleanup |
| `faqflow-widget.svg` | `/assets/projects/faqflow-widget.svg` | FAQFlow | ⚠️ Superseded by PNG — keep until cleanup |
| `dimlypdf-before-after.svg` | `/assets/projects/dimlypdf-before-after.svg` | DimlyPDF | ⚠️ Superseded by PNG — keep until cleanup |
| `mytodo-kanban.svg` | `/assets/projects/mytodo-kanban.svg` | MyTodo | ⚠️ Still in use — replace with real screenshot |
| `izmo-inventory.svg` | `/assets/projects/izmo-inventory.svg` | izmo | ⚠️ Still in use — replace with real or composed screenshot |

---

## Root (Non-public) Assets

These files are at the project root and are **not** served by Next.js.

| File | Purpose | Status |
|---|---|---|
| `tokens.css` | CSS custom property design tokens (light/dark vars) | ✅ Active — used via globals.css |
| `content.json` | Legacy data file for old HTML portfolio | ❌ Legacy — move to `_legacy/` or delete |
| `portfolio.js` | Legacy vanilla JS renderer for old HTML site | ❌ Legacy — move to `_legacy/` or delete |
| `site.css` | Legacy CSS for old HTML site | ❌ Legacy — move to `_legacy/` or delete |
| `uploads/` (root) | Original upload drop folder | ⚠️ Contents copied to `public/uploads/` — this folder can be cleared |

---

## Assets Needed (Not Yet Created)

| Asset | For | Priority | Notes |
|---|---|---|---|
| `public/uploads/mytodo.png` | MyTodo project card | High | Run project locally and capture kanban board screenshot at 1280×720 |
| `public/uploads/izmo.png` | izmo project card | Medium | Use cropped/anonymised dealership widget screenshot |
| `public/uploads/snipify.png` | Snipify (if added) | Medium | Capture when project is added to site |
| OG image (`public/og-image.png`) | Site-wide social sharing | Low | 1200×630 branded card |
| Per-project OG images | Social sharing for work pages | Low | Optional — one per project |

---

## Screenshot Guidelines

When capturing screenshots for project visuals, follow these standards for visual consistency:

- **Dimensions:** 1280 × 720 (16:9)
- **Format:** PNG
- **Theme:** Match the project's own UI; the portfolio itself is a single light theme
- **State:** Show the most impressive/representative UI state
- **Naming:** Use the project slug, e.g., `postqueue.png`, `mytodo.png`
- **Location:** Save to `public/uploads/[slug].png`
- **Update content.ts:** Set `visual.src` to `/uploads/[slug].png`

---

## Favicon / Icons

| Asset | Status | Notes |
|---|---|---|
| Favicon | ⚠️ Not confirmed | Check `public/` for `favicon.ico` or `icon.png` — add if missing |
| Apple touch icon | ⚠️ Not confirmed | Add `public/apple-touch-icon.png` (180×180) for iOS |
| OG image | ❌ Missing | See Assets Needed above |
