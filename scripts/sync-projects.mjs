#!/usr/bin/env node
/**
 * Sync projects from GitHub repos into src/data/projects/projects.generated.json.
 *
 * Reads:
 *   - src/data/projects/registry.yml   → curation layer (owner, minPushedAt, repos[], manual[])
 *   - each repo's project.yml manifest → project content (via GitHub API, optional)
 *   - GitHub repo metadata             → fallback description/homepage/topics
 *
 * Writes:
 *   - src/data/projects/projects.generated.json (deterministic, idempotent)
 *   - optionally downloads visual.src into public/uploads/{slug}.png
 *
 * Usage:
 *   node scripts/sync-projects.mjs                      # writes file, exits 1 if changed
 *   node scripts/sync-projects.mjs --dry-run            # prints diff, writes nothing
 *   node scripts/sync-projects.mjs --token <GH_TOKEN>   # auth for private repos
 *   node scripts/sync-projects.mjs --no-fetch           # skip GitHub API (use manual entries only)
 *
 * Exit codes:
 *   0 = no changes
 *   1 = data changed (or error)
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import YAML from 'yaml'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const REGISTRY_PATH = path.join(ROOT, 'src', 'data', 'projects', 'registry.yml')
const OUTPUT_PATH = path.join(ROOT, 'src', 'data', 'projects', 'projects.generated.json')
const UPLOADS_DIR = path.join(ROOT, 'public', 'uploads')

const args = process.argv.slice(2)
const FLAGS = {
  dryRun: args.includes('--dry-run'),
  noFetch: args.includes('--no-fetch'),
}
const tokenArg = args[args.indexOf('--token') + 1]
const TOKEN = tokenArg && !tokenArg.startsWith('--') ? tokenArg : process.env.GH_SYNC_TOKEN

const API = 'https://api.github.com'
const VALID_STATUSES = new Set([
  'live',
  'beta',
  'open-source',
  'building',
  'upcoming',
  'corporate',
  'acquired',
  'sunset',
])

// ── Helpers ────────────────────────────────────────────────────────────────

function log(msg) {
  process.stdout.write(`[sync] ${msg}\n`)
}

function warn(msg) {
  process.stdout.write(`[sync][warn] ${msg}\n`)
}

async function ghFetch(pathname, { token = TOKEN } = {}) {
  const res = await fetch(`${API}${pathname}`, {
    headers: {
      'User-Agent': 'akash-portfolio-sync',
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })
  if (res.status === 404) return null
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status} on ${pathname}: ${await res.text()}`)
  }
  return res.json()
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Coerce any value into a valid ProjectStatus, with a sensible default.
function coerceStatus(v, fallback = 'live') {
  if (v && VALID_STATUSES.has(String(v).toLowerCase())) return String(v).toLowerCase()
  return fallback
}

// YAML flow/block scalars may arrive as strings with folded whitespace;
// normalize paragraph breaks for `body`.
function normalizeBody(body) {
  if (typeof body !== 'string') return ''
  return body
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function normalizeProject(raw, { repoName, repoMeta, manual }) {
  const stack = Array.isArray(raw.stack) ? raw.stack.map(String).filter(Boolean) : []
  const links = Array.isArray(raw.links)
    ? raw.links
        .map((l) => (typeof l === 'string' ? { label: 'Live', href: l } : l))
        .filter((l) => l && l.href)
    : []

  // Fallback: derive from repo metadata when manifest is thin.
  let name = raw.name
  let summary = raw.summary
  let status = coerceStatus(raw.status, 'live')
  if (!name && repoMeta?.name) name = repoMeta.name
  if (!summary && repoMeta?.description) summary = repoMeta.description
  // A repo with a homepage is "live"; without one it's likely "building"/"upcoming".
  if (!raw.status && repoMeta && !repoMeta.homepage) status = 'upcoming'
  if (links.length === 0 && repoMeta?.homepage) {
    links.push({ label: 'Live', href: repoMeta.homepage })
  }

  const slug = raw.slug || slugify(name || repoName || 'project')

  return {
    slug,
    name: String(name || slug),
    year: raw.year ? String(raw.year) : (repoMeta?.created_at ? repoMeta.created_at.slice(0, 4) : ''),
    tagline: raw.tagline ? String(raw.tagline) : '',
    summary: summary ? String(summary) : '',
    body: normalizeBody(raw.body),
    visual: raw.visual
      ? { src: String(raw.visual.src), alt: String(raw.visual.alt || raw.name || '') }
      : undefined,
    stack,
    status,
    links,
    ...(raw.category ? { category: String(raw.category) } : {}),
    ...(raw.explored ? { explored: true } : {}),
    // non-schema fields for downstream diffing only
    _source: manual ? 'manual' : 'repo',
  }
}

const STATUS_RANK = {
  live: 0,
  beta: 1,
  'open-source': 2,
  corporate: 3,
  building: 4,
  upcoming: 5,
  acquired: 6,
  sunset: 7,
}

function sortProjects(list) {
  return [...list].sort((a, b) => {
    const rank = STATUS_RANK[a.status] - STATUS_RANK[b.status]
    if (rank !== 0) return rank
    // year desc, fall back to name asc
    const yr = String(b.year || '').localeCompare(String(a.year || ''))
    if (yr !== 0) return yr
    return String(a.name).localeCompare(String(b.name))
  })
}

// Strip internal _source fields before writing.
function toOutput(projects) {
  return projects.map(({ _source, ...rest }) => rest)
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  const registryRaw = await readFile(REGISTRY_PATH, 'utf8')
  const registry = YAML.parse(registryRaw)

  const owner = registry.owner || 'akash-yadav-dev'
  const minPushedAt = registry.minPushedAt ? new Date(registry.minPushedAt) : null
  const repoEntries = Array.isArray(registry.repos) ? registry.repos : []
  const manualEntries = Array.isArray(registry.manual) ? registry.manual : []

  const output = []

  // 1. Manual entries always included (no repo fetch needed).
  for (const entry of manualEntries) {
    output.push(normalizeProject(entry, { manual: true }))
  }

  // 2. Repo-driven entries.
  const repoList = repoEntries.filter((r) => (typeof r === 'string' ? true : r.include !== false))
  const trackedList = repoEntries.filter((r) => typeof r !== 'string' && r.include === false)

  if (!FLAGS.noFetch) {
    for (const entry of repoList) {
      const repoName = typeof entry === 'string' ? entry : entry.repo
      if (!repoName) continue
      const override = typeof entry === 'string' ? {} : entry

      const repoMeta = await ghFetch(`/repos/${owner}/${repoName}`)
      if (!repoMeta) {
        warn(`repo not found (skipping): ${repoName}`)
        continue
      }

      // 2026 filter: ignore repos not touched since minPushedAt unless forceInclude.
      if (minPushedAt && !override.forceInclude) {
        const pushed = repoMeta.pushed_at ? new Date(repoMeta.pushed_at) : null
        if (pushed && pushed < minPushedAt) {
          log(`skipping stale repo (pushed ${repoMeta.pushed_at.slice(0, 10)}): ${repoName}`)
          continue
        }
      }

      // Fetch project.yml manifest if present.
      const contents = await ghFetch(`/repos/${owner}/${repoName}/contents/project.yml`)
      let manifest = {}
      if (contents && !Array.isArray(contents)) {
        try {
          const text = Buffer.from(contents.content, contents.encoding || 'base64').toString('utf8')
          manifest = YAML.parse(text) || {}
        } catch (err) {
          warn(`could not parse project.yml in ${repoName}: ${err.message}`)
        }
      }

      const merged = { ...manifest, ...pickOverrides(override) }
      const project = normalizeProject(merged, { repoName, repoMeta })
      if (override.featured) project.featured = true
      output.push(project)
    }
  } else {
    for (const entry of repoList) {
      const repoName = typeof entry === 'string' ? entry : entry.repo
      const override = typeof entry === 'string' ? {} : entry
      warn(`--no-fetch: skipping repo ${repoName} (not fetched)`)
      output.push(normalizeProject({ name: repoName, status: 'upcoming' }, { repoName, repoMeta: null }))
    }
  }

  const sorted = sortProjects(output)
  const serialized = JSON.stringify(toOutput(sorted), null, 2) + '\n'

  // 3. Download visuals referenced by repo manifests into public/uploads.
  if (!FLAGS.dryRun && !FLAGS.noFetch) {
    for (const p of output) {
      if (p.visual && /^https?:\/\//.test(p.visual.src)) {
        await downloadVisual(p.slug, p.visual.src)
      }
    }
  }

  // 4. Write only if changed.
  const prev = existsSync(OUTPUT_PATH) ? await readFile(OUTPUT_PATH, 'utf8') : null
  const changed = prev !== serialized

  if (FLAGS.dryRun) {
    log(`dry-run: ${changed ? 'CHANGED' : 'unchanged'} (${sorted.length} projects)`)
    if (changed && prev) {
      // Simple diff of top-level slugs.
      const prevSlugs = extractSlugs(prev)
      const nextSlugs = sorted.map((p) => p.slug)
      const added = nextSlugs.filter((s) => !prevSlugs.includes(s))
      const removed = prevSlugs.filter((s) => !nextSlugs.includes(s))
      if (added.length) log(`  + added: ${added.join(', ')}`)
      if (removed.length) log(`  - removed: ${removed.join(', ')}`)
    }
    process.exit(changed ? 1 : 0)
  }

  if (changed) {
    await writeFile(OUTPUT_PATH, serialized, 'utf8')
    log(`wrote ${OUTPUT_PATH} (${sorted.length} projects)`)
  } else {
    log(`no changes (${sorted.length} projects)`)
  }
  process.exit(changed ? 1 : 0)
}

function pickOverrides(override) {
  const keys = ['status', 'tagline', 'summary', 'year', 'featured', 'category', 'explored']
  const out = {}
  for (const k of keys) {
    if (override[k] !== undefined) out[k] = override[k]
  }
  return out
}

function extractSlugs(json) {
  try {
    return JSON.parse(json).map((p) => p.slug)
  } catch {
    return []
  }
}

async function downloadVisual(slug, url) {
  try {
    if (!existsSync(UPLOADS_DIR)) await mkdir(UPLOADS_DIR, { recursive: true })
    const res = await fetch(url, { headers: { 'User-Agent': 'akash-portfolio-sync' } })
    if (!res.ok) {
      warn(`could not download visual for ${slug}: HTTP ${res.status}`)
      return
    }
    const buf = Buffer.from(await res.arrayBuffer())
    const ext = path.extname(new URL(url).pathname) || '.png'
    const dest = path.join(UPLOADS_DIR, `${slug}${ext}`)
    await writeFile(dest, buf)
    log(`downloaded visual → ${path.relative(ROOT, dest)}`)
  } catch (err) {
    warn(`visual download failed for ${slug}: ${err.message}`)
  }
}

main().catch((err) => {
  process.stderr.write(`[sync][error] ${err.stack || err.message}\n`)
  process.exit(1)
})
