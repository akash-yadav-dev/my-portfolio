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
    handle: 'akash-y',
    initial: 'AY',
    logo: '/assets/brand-icon.png',
    role: 'Full-Stack Engineer | SaaS Builder',
    tagline: 'Full-Stack\nengineer who\n{ships}',
    intro:
      'Building production-grade SaaS products using Next.js, NestJS, Go, and modern cloud-native tooling. 3+ years shipping at scale — from 400k-record inventory platforms to multi-tenant social publishing systems.',
    location: 'Bangalore / IST',
    available: 'Open to new opportunities',
    lastShipped: 'Last shipped: recently',
    siteVersion: 'v8.0 of this site',
    email: 'akashyadav171156@gmail.com',
    github: '@akash-yadav-dev',
    signal: 'on request',
    writingUrl: 'akashdev.pro',
  },
  stats: [
    { label: 'Years building', value: '3', suffix: '+' },
    { label: 'Projects shipped', value: '15', suffix: '+' },
    { label: 'Production SaaS built', value: '3' },
    { label: 'Vehicle records managed', value: '400K', suffix: '+' },
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
      slug: 'postqueue',
      name: 'PostQueue',
      year: '2025 — now',
      tagline: 'Multi-tenant social publishing platform.',
      summary:
        'Production SaaS for scheduling posts across 9 platforms — Twitter/X, Instagram, LinkedIn, Facebook, TikTok, YouTube, Threads, Pinterest, and Bluesky. Multi-tenant workspaces, RBAC, and Temporal-orchestrated approval workflows.',
      body: 'PostQueue is a production SaaS for scheduling and publishing content across nine social platforms. The backend is NestJS 11, with Temporal orchestrating multi-step approval workflows so posts move through the right review chain before going live.\n\nPostgreSQL handles multi-tenant data isolation with workspace-level separation. Redis powers caching and real-time notifications. Role-based access control lets workspace admins control exactly who can draft, approve, and publish.\n\nThe frontend is Next.js 16 with App Router. The entire stack is end-to-end TypeScript.',
      stack: ['NestJS 11', 'Next.js 16', 'TypeScript', 'Temporal', 'PostgreSQL', 'Redis'],
      status: 'live',
      links: [
        { label: 'GitHub', href: 'https://github.com/akash-yadav-dev/post-queue' },
      ],
    },
    {
      slug: 'faqflow',
      name: 'FAQFlow',
      year: '2025 — now',
      tagline: 'AI-powered FAQ widgets for Shopify stores.',
      summary:
        'Shopify app that auto-generates AI-powered FAQ widgets from product data. Theme App Embed injection with no code changes from merchants, GDPR webhook compliance, and multi-tenant store support.',
      body: 'FAQFlow is a Shopify app that generates FAQ sections for product pages using OpenAI. Merchants install the app and a Theme App Embed widget appears in their storefront automatically — no code changes, no liquid templates to edit.\n\nThe backend is Next.js 16 API routes backed by Supabase, with Shopify OAuth handling multi-tenant store isolation. GPT-4 generates the FAQ content, with cron jobs keeping widgets fresh as product descriptions change. GDPR webhooks handle mandatory data deletion requests automatically.\n\nBuilt to Shopify review standards for App Store submission.',
      stack: ['Next.js 16', 'TypeScript', 'Shopify', 'Supabase', 'OpenAI'],
      status: 'live',
      links: [
        { label: 'GitHub', href: 'https://github.com/akash-yadav-dev/faqflow' },
      ],
    },
    {
      slug: 'dimlypdf',
      name: 'DimlyPDF',
      year: '2025',
      tagline: 'PDF dark mode — 100% in the browser.',
      summary:
        'Free client-side PDF dark mode converter built on MuPDF WebAssembly. Four dark themes, text stays selectable, hyperlinks and bookmarks preserved. Handles 100MB files, works fully offline.',
      body: 'DimlyPDF converts PDF files to dark mode entirely in the browser — no uploads, no server, no data leaving the device. It uses MuPDF compiled to WebAssembly, so the heavy lifting runs in the user\'s own CPU.\n\nFour themes are available. Text stays selectable after conversion, hyperlinks and bookmarks are preserved, and files up to 100MB are handled without issue. Because everything is client-side, it works offline and can be deployed as a static site at zero hosting cost.',
      stack: ['React 18', 'TypeScript', 'Vite', 'MuPDF', 'Tailwind CSS'],
      status: 'open-source',
      links: [
        { label: 'GitHub', href: 'https://github.com/akash-yadav-dev/dimlypdf' },
        { label: 'Live', href: 'https://dimlypdf.akashdev.pro' },
      ],
    },
    {
      slug: 'mytodo',
      name: 'MyTodo',
      year: '2025 — now',
      tagline: 'Jira-like platform in Go and Next.js.',
      summary:
        'Production-grade project management platform with kanban boards, sprints, and custom workflows. Go backend with Clean Architecture and DDD, Next.js frontend, PostgreSQL, Redis, and Kubernetes deployment.',
      body: 'MyTodo is a Jira-inspired task management system built for real scale. The backend is Go with the Gin framework, following Clean Architecture with strict DDD layering — interface, application, domain, infrastructure.\n\nPostgreSQL handles persistence, Redis caching, and Elasticsearch powers full-text search. The system supports multi-tenant organisations, kanban boards, sprint planning, custom workflows, real-time WebSocket notifications, and GitHub/Slack integrations.\n\nThe frontend is Next.js with React Query. Deployment targets Kubernetes with Docker Compose for local development.',
      stack: ['Go', 'Gin', 'Next.js', 'PostgreSQL', 'Redis', 'Kubernetes'],
      status: 'open-source',
      links: [
        { label: 'GitHub', href: 'https://github.com/akash-yadav-dev/mytodo' },
      ],
    },
    {
      slug: 'izmo',
      name: 'izmo',
      year: '2022 — now',
      tagline: 'Scalable car dealership platform.',
      summary:
        'Large-scale React.js platform for car dealership inventory management and lead generation, handling 400,000+ vehicle records across dealer websites in Europe and the US.',
      body: 'izmo is the platform I have spent the last three years building at izmo Ltd. It powers inventory management and lead generation for car dealerships across Europe and the US.\n\nI own the frontend — a large React.js codebase with Storybook-documented components, JSON-config-driven dealer customization, and performance-critical inventory listing pages that handle 400,000+ vehicle records. On the backend I have shipped NestJS and Express services that power the APIs those pages consume.\n\nAlso implemented cookie-consent flows compliant with French and US privacy regulations.',
      stack: ['React.js', 'TypeScript', 'NestJS', 'Node.js', 'Storybook', 'SCSS'],
      status: 'live',
      links: [],
    },
  ],
  experience: [
    {
      when: 'Dec 2022 — now',
      role: 'Associate Software Engineer · izmo Ltd',
      where: 'Bangalore · IN',
      note: 'Owns the frontend of a large-scale car dealership platform serving inventory management and lead generation. Built reusable React components, optimized listing pages for 400k+ vehicle records, and implemented privacy-compliant cookie-consent flows.',
    },
    {
      when: '2018 — 2022',
      role: 'Bachelor of Engineering',
      where: 'Bangalore · IN',
      note: 'Studied engineering while building data pipeline and geospatial visualization projects — disaster news aggregation, satellite imagery annotation, and COVID-19 datathon work.',
    },
  ],
  skills: [
    { name: 'React.js / Next.js', level: 93 },
    { name: 'TypeScript / JavaScript', level: 91 },
    { name: 'NestJS / Express / Node.js', level: 82 },
    { name: 'HTML5 / CSS / Tailwind / SCSS', level: 88 },
    { name: 'PostgreSQL / Prisma', level: 76 },
    { name: 'Go', level: 62 },
    { name: 'Docker / Kubernetes / DevOps', level: 58 },
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
      slug: 'temporal-workflows',
      date: 'Mar 2026',
      readTime: '9 min',
      title: 'Why I use Temporal for anything with more than two steps.',
      excerpt:
        'Approval workflows, retry logic, and multi-step pipelines are where queues fall apart and Temporal earns its keep.',
    },
    {
      slug: 'saas-multi-tenancy',
      date: 'Jan 2026',
      readTime: '10 min',
      title: 'Multi-tenancy in Postgres: row-level vs. schema-per-tenant.',
      excerpt:
        'The tradeoffs I ran into building PostQueue — and why I landed on row-level with a workspace_id column.',
    },
    {
      slug: 'shopify-app-gotchas',
      date: 'Nov 2025',
      readTime: '7 min',
      title: 'Five Shopify app gotchas nobody warns you about.',
      excerpt:
        'Session tokens, GDPR webhooks, Theme App Extensions, and the review checklist — the surprises building FAQFlow.',
    },
    {
      slug: 'nestjs-vs-express',
      date: 'Sep 2025',
      readTime: '7 min',
      title: 'NestJS vs. Express: when the structure pays off.',
      excerpt:
        'After building APIs in both, here is where the extra ceremony of NestJS earns its keep — and where it does not.',
    },
    {
      slug: 'wasm-in-the-browser',
      date: 'Jul 2025',
      readTime: '6 min',
      title: 'Shipping MuPDF to the browser with WebAssembly.',
      excerpt:
        'How I compiled a C PDF library to WASM for DimlyPDF, and what the developer experience is actually like in 2025.',
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
      "I build production-grade SaaS products end-to-end — Next.js and React on the frontend, NestJS and Go on the backend, PostgreSQL and Redis for data. Three years of shipping at scale have taught me that owning the full stack is the fastest path to a good product.",
    body: [
      'By day I work at izmo Ltd in Bangalore, owning the frontend of a large car dealership platform and the NestJS APIs behind it — React components at scale, Storybook-documented, handling 400,000+ vehicle records. Outside of that I build SaaS products: PostQueue (multi-tenant social publishing with Temporal workflows), FAQFlow (Shopify AI app), and DimlyPDF (client-side PDF tool using MuPDF WebAssembly).',
      'I reach for Go when I want performance without ceremony — my MyTodo project uses it with Clean Architecture and DDD. I care about clean APIs, reliable deploys, and code that the next engineer can read without asking questions.',
    ],
    principles: [
      {
        n: '01',
        title: 'Own the full stack',
        body: 'Understanding both ends lets you make better tradeoffs. A slow page is often a bad query in disguise.',
      },
      {
        n: '02',
        title: 'Type everything',
        body: 'End-to-end TypeScript is not overhead — it is the cheapest form of documentation that stays accurate.',
      },
      {
        n: '03',
        title: 'Ship, then iterate',
        body: 'A working product with rough edges beats a perfect product that is still in development.',
      },
      {
        n: '04',
        title: 'Performance is UX',
        body: 'A fast page is a better page. Profile first, optimize second, never guess.',
      },
    ],
  },
  contact: {
    headline: 'Got something\n{worth building?}',
    body: "I'm open to new opportunities. Best fit: product-focused teams where I can own a meaningful slice of the stack — frontend, API, or both. Happy to talk full-time roles or contract.",
    channels: [
      {
        label: 'Email',
        value: 'akashyadav171156@gmail.com',
        href: 'mailto:akashyadav171156@gmail.com',
      },
      { label: 'GitHub', value: '@akash-yadav-dev', href: 'https://github.com/akash-yadav-dev' },
      { label: 'LinkedIn', value: 'akash-yadav', href: 'https://linkedin.com/in/akash-yadav-6b0a1b214/' },
    ],
  },
  footer: {
    credit: '© 2026 — designed and built by Akash Yadav. Type set in Inter Tight & JetBrains Mono.',
    links: [
      { label: 'GitHub', href: 'https://github.com/akash-yadav-dev' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/akash-yadav-6b0a1b214/' },
      { label: 'Source', href: '#' },
    ],
  },
}
