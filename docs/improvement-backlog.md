# Improvement Backlog — akashdev.pro
**Last updated:** May 30, 2026  

Prioritised list of outstanding improvements. Work through these in order of priority when refining the site.

---

## Redesign pass — May 30, 2026 (design-system adoption + live projects)

Brought the codebase in line with the design system, retuned toward booking/ticketing freelance clients, and rebuilt the project set around the real deployed sites. See `Done ✅` for the full list. **Still open / handed back to Akash:**

- **Email forwarding** — set up `hello@akashdev.pro` → Gmail via Cloudflare Email Routing before sharing the site (see README).
- **ConsentPulse / TrackProbe** — add live links + screenshots once they have presentable public sites (currently shown as `Upcoming` with themed placeholders).
- **izmo** — corporate/internal product; no screenshot by design. The detail page links to the company site `https://www.izmocars.com/` instead of a platform screenshot.

### Polish pass (later same day)
- izmo: added live link to `izmocars.com`, reworded summary around 3+ years of web development, management, and performance plus 400K+ records.
- Home stats: first label now "Years of web development and management"; removed the vertical separator borders between stats.
- Increased global horizontal gutter (`px-6 md:px-10 lg:px-14`) so content is not tight against the left edge.
- Placeholder copy made symbol-free (no middots): "Corporate platform, internal product", "In active development".

### Theme
Accent moved from amber to **terracotta/clay `#8c4a35` on warm cream `#fff8f3`**, matched to the artist-ada reference site. Light theme only.

### Project set (ranked, working first)
1. ImgToolz `Live` · 2. DimlyPDF `Live` · 3. PostQueue `Beta` · 4. UnitCraft `Live` · 5. FAQFlow `Beta` · 6. izmo `Corporate` · 7. Artist Ada `Building now` · 8. ConsentPulse `Upcoming` · 9. TrackProbe `Upcoming`

Homepage features the top 3. All five live/beta sites have real Playwright screenshots in `public/uploads/`; live links are wired in `content.ts`.

---

## Priority 1 — Critical (Breaks trust or functionality)

### P1-1: Add live URLs for PostQueue and FAQFlow
**Problem:** Both "Live" projects have no clickable live link — only GitHub. A client clicking through sees no working demo.  
**Action:** Add the deployed URLs to each project's `links` array in `content.ts` once confirmed.  
```ts
// PostQueue
{ label: 'Live', href: 'https://[domain].akashdev.pro' }
// FAQFlow  
{ label: 'App Store', href: 'https://apps.shopify.com/[slug]' }
```

### P1-2: Write full article bodies for 6 stub articles
**Problem:** Clicking any writing article except `logic-first-ai` leads to a page with no content — poor experience.  
**Action:** Write MDX or TSX content for each slug, or at minimum add a "coming soon" state so the page doesn't look broken. Articles in priority order:
1. `saas-multi-tenancy` — directly related to PostQueue (showcase piece)
2. `wasm-in-the-browser` — directly related to DimlyPDF (showcase piece)
3. `shopify-app-gotchas` — directly related to FAQFlow (showcase piece)
4. `nestjs-vs-express`
5. `temporal-workflows`
6. `interface-is-an-API`

### P1-3: Verify Source link repo is public
**Problem:** Footer "Source" links to `https://github.com/akash-yadav-dev/portfolio` — if private, it will 404 for visitors.  
**Action:** Make the repo public, or change the link.

---

## Priority 2 — Important (Affects professional impression)

### P2-1: Add missing projects
**Problem:** Snipify (AI SaaS, GPT-4 + Whisper + Stripe) is a flagship project per `portfolio.json` but is not on the site. Other built products are also absent.  
**Action:** 
- Confirm which projects are deployed or have public repos
- Add to `content.ts` projects array with real screenshots
- Candidates: Snipify, PixelForge, any others with live URLs

### P2-2: Replace MyTodo and izmo SVG placeholders with real visuals
**Problem:** MyTodo and izmo show SVG illustrations instead of real screenshots — looks inconsistent with the other 3 projects.  
**Action:**
- **MyTodo:** Run locally and capture a screenshot of the kanban board, save to `public/uploads/mytodo.png`
- **izmo:** izmo is a client product — use a cropped/anonymised screenshot of the public-facing dealership widget, or create a composed visual. Save to `public/uploads/izmo.png`
- Update `content.ts` visual src for both

### P2-3: Add professional domain links to relevant projects
**Problem:** Some projects may be deployed on `*.akashdev.pro` subdomains but are not reflected in `content.ts`.  
**Action:** Audit all `*.akashdev.pro` subdomains in use:
- `dimlypdf.akashdev.pro` ✅ Listed  
- `postqueue.akashdev.pro`? — check  
- `faqflow.akashdev.pro`? — check  
- Any others?

### P2-4: Clean up legacy files from project root
**Problem:** `portfolio.js`, `content.json`, `site.css` are from the old vanilla HTML version and clutter the project root.  
**Action:** Move to `_legacy/` subfolder or delete if no longer needed. These are not referenced by Next.js.

### P2-5: Remove unused public assets
**Problem:** `public/assets/profile-headshot.svg` is unused. Three SVG project images are superseded by PNGs.  
**Action:**
- Delete `public/assets/profile-headshot.svg`
- Optionally archive (don't delete yet) the SVG project placeholders until all projects have real screenshots

---

## Priority 3 — Polish (Nice to have)

### P3-1: Add `priority` prop to the first WorkCard image
**Problem:** Next.js flags `/uploads/postqueue.png` as the LCP element — it should have `priority` to load faster.  
**Action:** Add a `priority` prop to `WorkCard.tsx` (passed for `index === 0`) so the homepage/work-grid first image loads eagerly.

### P3-2: Add LinkedIn to footer/contact ✅ Done (May 30, 2026)
LinkedIn now in `content.contact.channels` (replaced the "Signal on request" entry).

### P3-3: Add real testimonials as work grows
**Problem:** The 2 fabricated/anonymous testimonials were **removed** (May 30, 2026) — they read as fake and risked trust on a client-facing site. `content.testimonials` is now an empty array and the homepage section is gone.  
**Action:** Add named, real client testimonials to `content.testimonials` as they come in; re-add the homepage section to render them.

### P3-4: OG/social meta images
**Problem:** No per-page Open Graph images. Only default site meta is set.  
**Action:** Add `og:image` in `layout.tsx` pointing to a static OG card, and per-project images for work pages.

### P3-5: Improve project detail pages (`/work/[slug]`)
**Problem:** Project detail pages exist but appear to use a generic template. The `body` field from `content.ts` is available but check if it's being rendered.  
**Action:** Read `src/app/work/[slug]/page.tsx` and ensure body, links, stack, and visual are all fully rendered.

### P3-6: Update stats to reflect more projects
**Problem:** "SaaS products built: 5" but if Snipify + others are added, this becomes inaccurate.  
**Action:** Update `content.stats` after adding all projects.

---

## Done ✅

**Plain-language copy pass (Jun 1, 2026):**
- [x] Rewrote client-facing copy in simple, non-technical language for a broader (incl. Indian) audience, framed as "what I've worked on / done"
- [x] Removed "shipping" jargon from headings & blocks: work H1 "Things I've shipped" → "Projects I've worked on"; homepage section titles, trust strip, hero tagline/intro, stats labels all simplified
- [x] Contact headline "Let's build something that ships." → "Let's work together."; writing "Notes on building." → "Things I write about."
- [x] Simplified the Services and Process blocks and the About "How I work" principle cards (e.g. "Type everything" → "I keep the work clean", "Performance is UX" → "Speed matters")
- [x] `profile.role` → "Full-Stack Developer · Websites & Apps"; page/SEO meta descriptions reworded in plain language
- [x] Deeper technical wording kept only on project detail pages and Writing articles, where the audience expects it

**Homepage cards + corner status badges (Jun 1, 2026):**
- [x] Homepage "Selected Work" now uses the shared `WorkCard` grid (3-up on desktop, 2-up tablet, stacked on mobile) instead of the old row list
- [x] "All projects" button moved to centered below the cards (was bottom-left)
- [x] Status badge moved to the card's top-right corner (backdrop-blur pill) so `Coming soon` on ConsentPulse + TrackProbe stands out instead of blending with the stack tags
- [x] Deleted the now-unused `WorkRow.tsx` and its `.work-row` CSS

**Badges, equal-height cards, tighter spacing (Jun 1, 2026):**
- [x] `upcoming` status now shows an accented `Coming soon` badge so ConsentPulse + TrackProbe read as not-yet-live
- [x] About → "How I work" principle cards are equal height regardless of body length (`h-full` on `FadeIn` + `PrincipleCard`)
- [x] Reduced vertical rhythm site-wide: content sections `py-20`/`py-24` → `py-16`, last-section `pb-24` → `pb-16`, footer `py-12 mt-12` → `py-10 mt-8` (cuts the dead space above the footer)

**Work page card layout + trust strip (Jun 1, 2026):**
- [x] `/work` converted from a stacked list to a responsive card grid (1 / 2 / 3 cols) via new `WorkCard.tsx`
- [x] Each card shows the screenshot up top, then index/title/year, a 3-line-clamped summary (`line-clamp-3`), and status + stack badges
- [x] Added a header trust strip surfacing 3+ years experience, 400K+ records at scale, and 6 live products
- [x] Homepage featured-work section keeps the `WorkRow` row layout (cards are work-page only)

**Live projects + theme (May 30, 2026):**
- [x] Verified functionality of all 6 deployed sites and ranked them working-first
- [x] Rebuilt the project set: ImgToolz, DimlyPDF, PostQueue, UnitCraft, FAQFlow, izmo, Artist Ada, plus ConsentPulse and TrackProbe as `Upcoming` (P1-1 live links, P2-1 missing projects)
- [x] Captured clean Playwright screenshots of all 5 live/beta sites into `public/uploads/` (P2-2)
- [x] Added live URLs to every deployed project in `content.ts` (P1-1)
- [x] New status badges: `Beta`, `Building now`, `Upcoming`; izmo stays `Corporate work`
- [x] WorkRow now shows the screenshot with a themed placeholder fallback; detail pages render visual conditionally
- [x] Rethemed to terracotta/clay on cream, matched to artist-ada
- [x] New working favicon + brand mark (`src/app/icon.svg`, `apple-icon.svg`); removed the off-theme blue/purple brand PNG
- [x] Removed legacy files: `portfolio.js`, `content.json`, `site.css`, `tokens.css`, root `assets/` and `uploads/`, all `public/assets/projects/*.svg`, `profile-headshot.svg` (P2-4, P2-5)
- [x] Copy cleaned of em dashes in all visible body text per request

**Redesign pass (May 30, 2026):**
- [x] Adopted design-system fonts: Fraunces + Plus Jakarta Sans + JetBrains Mono (was Inter/Inter Tight)
- [x] Single light theme; removed dark mode, the theme toggle, `next-themes` provider, and `ThemeToggle.tsx`
- [x] Token system rewritten in `globals.css` as one light `:root` with a single warm amber accent
- [x] Fixed oversized headings everywhere (hero went from `clamp(...128px)` → `clamp(...60px)`; all page H1s 56–68px)
- [x] Hero rebalanced (smaller photo column, removed "Last shipped" line, italic-light accent word)
- [x] WorkRow rebuilt as clean scannable rows (no oversized inline screenshots)
- [x] Project statuses fixed — izmo now `corporate` ("Corporate work") not `live`; new `corporate` badge variant
- [x] Removed fake testimonials + skill-rating bars; homepage section order re-sequenced and renumbered
- [x] Copy retuned toward booking/ticketing/transactional clients (hero, services, about, work, contact)
- [x] LinkedIn added to contact channels; email standardized to `hello@akashdev.pro`
- [x] README + backlog updated; build + lint pass clean

**Earlier:**
- [x] Content data object fully restored in `content.ts` after accidental deletion
- [x] Upload images moved to `public/uploads/` (were inaccessible at root)
- [x] PostQueue, FAQFlow, DimlyPDF visual paths fixed with clean filenames
- [x] DimlyPDF live screenshot captured from `https://dimlypdf.akashdev.pro`
- [x] All TypeScript errors resolved in `content.ts`
- [x] Hero rewritten with real copy and photo
- [x] About page rewritten with grouped skills and photo
- [x] Contact page updated with engagement types
- [x] Services, process, testimonials sections added
- [x] Meta descriptions updated for all pages
- [x] Footer cleaned (no v8.0, Source link present)
- [x] Legacy doc renamed: `ml-initialhypothesis-plan.md` → `writing-logic-first-ai.md`
