export interface Profile {
  name: string
  handle: string
  initial: string
  logo: string
  role: string
  tagline: string
  intro: string
  location: string
  available: string
  lastShipped: string
  siteVersion: string
  email: string
  github: string
  signal: string
  writingUrl: string
}

export interface Stat {
  label: string
  value: string
  suffix?: string
}

export interface NavItem {
  label: string
  href: string
}

export interface ProjectLink {
  label: string
  href: string
}

export type ProjectStatus = 'live' | 'acquired' | 'open-source' | 'sunset'

export interface Project {
  slug: string
  name: string
  year: string
  tagline: string
  summary: string
  body: string
  stack: string[]
  status: ProjectStatus
  links: ProjectLink[]
}

export interface Experience {
  when: string
  role: string
  where: string
  note: string
}

export interface Skill {
  name: string
  level: number
}

export interface Article {
  slug: string
  date: string
  readTime: string
  title: string
  excerpt: string
}

export interface Principle {
  n: string
  title: string
  body: string
}

export interface ContactChannel {
  label: string
  value: string
  href: string
}

export interface SiteData {
  profile: Profile
  stats: Stat[]
  nav: NavItem[]
  projects: Project[]
  experience: Experience[]
  skills: Skill[]
  writing: Article[]
  about: {
    intro: string
    body: string[]
    principles: Principle[]
  }
  contact: {
    headline: string
    body: string
    channels: ContactChannel[]
  }
  footer: {
    credit: string
    links: { label: string; href: string }[]
  }
}

export const content: SiteData = {
  profile: {
    name: 'Akash Yadav',
    handle: 'akashyadav.dev',
    initial: 'AY',
    logo: '/assets/brand-icon.png',
    role: 'Fullstack engineer who ships',
    tagline: 'Fullstack\nengineer who\n{ships}',
    intro:
      'I build durable software for the web — from database schemas to type-safe APIs to interfaces people actually like. Currently independent, taking on a couple of projects this year.',
    location: 'Berlin / GMT+1',
    available: 'Available — May 2026',
    lastShipped: 'Last shipped: 2 days ago',
    siteVersion: 'v8.0 of this site',
    email: 'akash@akashyadav.dev',
    github: '@akash-y',
    signal: 'on request',
    writingUrl: 'notes.akashyadav.dev',
  },
  stats: [
    { label: 'Years building', value: '9', suffix: '+' },
    { label: 'Shipped projects', value: '40', suffix: '+' },
    { label: 'Open-source stars', value: '12k' },
    { label: 'Avg. p95 latency', value: '80', suffix: 'ms' },
  ],
  nav: [
    { label: 'Index', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Writing', href: '/writing' },
    { label: 'Contact', href: '/contact' },
  ],
  projects: [
    {
      slug: 'halcyon',
      name: 'Halcyon',
      year: '2026 — now',
      tagline: 'Observability for small teams.',
      summary:
        'A self-hostable observability pipeline for small teams. Replaces a $4k/mo Datadog bill with an $80/mo Hetzner box.',
      body: 'Halcyon is a self-hostable telemetry pipeline I started in early 2026 after one too many surprise observability bills. It ingests OpenTelemetry, stores in ClickHouse, and ships a SvelteKit UI that loads in under a second on a cold tab.\n\nI designed the schema first, the agent second, and the UI last. The agent is a single Rust binary; the UI is a thin client over a small JSON-RPC API.',
      stack: ['Rust', 'ClickHouse', 'SvelteKit'],
      status: 'live',
      links: [
        { label: 'Visit', href: '#' },
        { label: 'GitHub', href: '#' },
      ],
    },
    {
      slug: 'drift',
      name: 'Drift',
      year: '2024 — 2025',
      tagline: 'Keyboard-first invoicing.',
      summary:
        'Keyboard-first invoicing for freelancers. Local-first, end-to-end encrypted, exports to your accountant\'s preferred format. Acquired in 2025.',
      body: 'Drift was a small invoicing app I built for myself, then opened up to a few hundred other freelancers. Local-first by default, with optional encrypted sync. Acquired in early 2025 by a larger fintech.',
      stack: ['TypeScript', 'Tauri', 'SQLite'],
      status: 'acquired',
      links: [{ label: 'Case study', href: '#' }],
    },
    {
      slug: 'atlas',
      name: 'Atlas',
      year: '2023 — now',
      tagline: "Postgres migrations that don't ruin your night.",
      summary:
        "An open-source migration tool for Postgres that doesn't make you cry at 3am. 8.4k stars, used in production at three companies I know about.",
      body: "Atlas grew out of frustration with existing migration tools. It's a single Go binary, deterministic, and refuses to run a migration it can't reverse.",
      stack: ['Go', 'Postgres', 'CLI'],
      status: 'open-source',
      links: [
        { label: 'GitHub', href: '#' },
        { label: 'Docs', href: '#' },
      ],
    },
    {
      slug: 'ledger',
      name: 'Ledger',
      year: '2022 — 2024',
      tagline: 'Double-entry bookkeeping API.',
      summary:
        'A double-entry bookkeeping API for fintech startups. Handled $200M in transaction volume before sunset.',
      body: 'Ledger was a tiny but strict double-entry API I built with three other engineers. We sunset it in late 2024 when the parent company pivoted; the postmortem write-up is still some of my favorite writing.',
      stack: ['Elixir', 'Postgres', 'gRPC'],
      status: 'sunset',
      links: [],
    },
  ],
  experience: [
    {
      when: '2026 — now',
      role: 'Independent / Halcyon',
      where: 'Berlin · DE',
      note: 'Building observability tooling for small teams. Working with two design partners.',
    },
    {
      when: '2023 — 2026',
      role: 'Senior Fullstack Engineer · Linear',
      where: 'Remote · EU',
      note: 'Owned the editor, real-time sync, and a handful of API surfaces. Cut p95 from 800ms to 80ms.',
    },
    {
      when: '2021 — 2023',
      role: 'Founding Engineer · Drift (acquired)',
      where: 'SF · US',
      note: 'Built v0 → v1 of a developer-tools startup. Acquired in early 2023.',
    },
    {
      when: '2018 — 2021',
      role: 'Engineer · Stripe',
      where: 'Dublin · IE',
      note: 'Worked on Atlas (incorporation product) and the European billing stack.',
    },
    {
      when: '2016 — 2018',
      role: 'Engineer · A small agency',
      where: 'London · UK',
      note: 'Sites, tools, and the occasional CMS for clients you\'ve never heard of. The good kind of training.',
    },
  ],
  skills: [
    { name: 'TypeScript / Node', level: 96 },
    { name: 'Rust', level: 78 },
    { name: 'Postgres / SQL', level: 92 },
    { name: 'React / Svelte', level: 88 },
    { name: 'Go', level: 70 },
    { name: 'Elixir / OTP', level: 60 },
    { name: 'Infra / k8s / Terraform', level: 75 },
  ],
  writing: [
    {
      slug: 'logic-first-ai',
      date: 'May 2026',
      readTime: '18 min',
      title: 'Logic-First AI: A Hypothesis for Lightweight, High-Reasoning Systems',
      excerpt:
        'Can we build AI systems that reason well without being large, by separating the logic of reasoning from the storage of knowledge? A research hypothesis exploring modular AI architecture.',
    },
    {
      slug: 'schema-is-the-product',
      date: 'Mar 2026',
      readTime: '8 min',
      title: 'The schema is the product.',
      excerpt: 'Why I draw ER diagrams before mockups, and what happens when you don\'t.',
    },
    {
      slug: 'postgres-for-everything',
      date: 'Jan 2026',
      readTime: '12 min',
      title: 'Postgres for almost everything.',
      excerpt: 'The case for boring databases, with benchmarks from a real production workload.',
    },
    {
      slug: 'changelog-love-letter',
      date: 'Nov 2025',
      readTime: '5 min',
      title: 'A changelog is a love letter.',
      excerpt: 'What I learned writing one for three years at a small company.',
    },
    {
      slug: 'boring-on-purpose',
      date: 'Sep 2025',
      readTime: '6 min',
      title: 'Boring, on purpose.',
      excerpt: 'How I pick the most boring tool that could work, and why it usually does.',
    },
    {
      slug: 'writing-the-readme-first',
      date: 'Jul 2025',
      readTime: '4 min',
      title: 'Write the README first.',
      excerpt: 'A short ritual that has saved me weeks of misdirected work.',
    },
    {
      slug: 'interface-is-an-API',
      date: 'May 2025',
      readTime: '9 min',
      title: 'The interface is an API.',
      excerpt: 'Treating UI components like contracts changes how you design them.',
    },
  ],
  about: {
    intro:
      "I've spent the last nine years writing software at the boundary between systems and interfaces — places where a wrong abstraction in the database surfaces as a confusing UI three sprints later. I care about that boundary.",
    body: [
      'Most of my work has been at small companies (under 30 people), where the cost of a careless decision compounds quickly. I write boring code on purpose, ship it Mondays, and keep an honest changelog.',
      'Outside of work I run a small writing practice at notes.ada.dev, where I think out loud about software, infrastructure, and the occasional non-software thing.',
    ],
    principles: [
      {
        n: '01',
        title: 'Schema first',
        body: 'Sketch the data model before the UI. If the types are wrong, no design saves it.',
      },
      {
        n: '02',
        title: 'Boring on purpose',
        body: 'Pick the most boring tool that could work. Reach for novelty only when forced.',
      },
      {
        n: '03',
        title: 'Ship Mondays',
        body: 'Friday deploys are a smell. So is heroism. Plan for the boring path.',
      },
      {
        n: '04',
        title: 'Keep an honest log',
        body: 'If it shipped, it goes in the changelog. If it broke, it goes in the postmortem.',
      },
    ],
  },
  contact: {
    headline: 'Got something\n{worth building?}',
    body: "I'm taking on a couple of projects in the second half of 2026. Best fit: small teams (under 20), shipping a real product, where I'd be the second or third engineer in the room.",
    channels: [
      {
        label: 'Email',
        value: 'akash@akashyadav.dev',
        href: 'mailto:akash@akashyadav.dev',
      },
      { label: 'GitHub', value: '@akash-y', href: 'https://github.com' },
      { label: 'Signal', value: 'on request', href: '#' },
    ],
  },
  footer: {
    credit: '© 2026 — designed and built by Akash Yadav. Type set in Inter Tight & JetBrains Mono.',
    links: [
      { label: 'Design system', href: '#' },
      { label: 'RSS', href: '#' },
      { label: 'Source', href: '#' },
    ],
  },
}
