export interface Profile {
  name: string
  handle: string
  initial: string
  logo: string
  photo: string
  role: string
  tagline: string
  intro: string
  location: string
  available: string
  lastShipped: string
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
  visual: {
    src: string
    alt: string
  }
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
  profile: Profile;
  stats: Stat[];
  nav: NavItem[];
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  writing: Article[];
  about: {
    currently: string;
    lookingFor: string;
    intro: string;
    body: string[];
    principles: Principle[];
  };
  services: {
    title: string;
    items: {
      title: string;
      body: string;
    }[];
  };
  process: {
    title: string;
    steps: {
      title: string;
      body: string;
    }[];
  };
  testimonials: {
    quote: string;
    author: string;
    role: string;
  }[];
  contact: {
    headline: string;
    body: string;
    channels: ContactChannel[];
  };
  footer: {
    credit: string;
    links: { label: string; href: string }[];
  };
}

export const content: SiteData = {
  profile: {
    name: 'Akash Yadav',
    handle: 'akash-y',
    initial: 'AY',
    logo: '/assets/brand-icon.png',
    photo: '/akashdev.png',
    role: 'Full-Stack Engineer · SaaS Builder',
    tagline: 'Freelance\nFull-Stack Engineer\nfor SaaS & Platforms',
    intro:
      'I help product teams ship production SaaS, platforms, and web apps — from zero to launch. 3+ years experience building, scaling, and maintaining live systems. Available for freelance and project-based work. Based in Bangalore, open to remote.',
    location: 'Bangalore / IST',
    available: 'Available for freelance projects',
    lastShipped: 'Last shipped: PostQueue, FAQFlow, DimlyPDF',
    email: 'hello@akashdev.pro',
    github: '@akash-yadav-dev',
    signal: 'on request',
    writingUrl: 'akashdev.pro',
  },
  stats: [
    { label: 'Years of professional experience', value: '3', suffix: '+' },
    { label: 'SaaS products built', value: '5' },
    { label: 'Live & deployed today', value: '3' },
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
      tagline: 'Multi-tenant social publishing for teams.',
      summary:
        'SaaS for scheduling and publishing to 9 platforms. Multi-tenant workspaces, RBAC, approval workflows, and real-time notifications. Built with Next.js, NestJS, and Temporal.',
      body: 'PostQueue lets teams schedule and publish content to 9 social platforms from one place. Multi-tenant workspaces, RBAC, and Temporal-powered approval flows. Built with Next.js, NestJS, and PostgreSQL. Real-time notifications and audit trails included.',
      visual: {
        src: '/uploads/postqueue.png',
        alt: 'PostQueue dashboard browser screenshot',
      },
      stack: ['NestJS 11', 'Next.js 16', 'TypeScript', 'Temporal', 'PostgreSQL', 'Redis'],
      status: 'live',
      links: [{ label: 'GitHub', href: 'https://github.com/akash-yadav-dev/post-queue' }],
    },
    {
      slug: 'faqflow',
      name: 'FAQFlow',
      year: '2025 — now',
      tagline: 'AI FAQ widgets for Shopify.',
      summary:
        'Shopify app that auto-generates FAQ widgets using OpenAI. Theme App Embed, GDPR-compliant, multi-store support. No code changes needed.',
      body: 'FAQFlow adds AI-generated FAQ widgets to Shopify product pages. Merchants install, and the widget appears automatically — no code edits. Multi-store support, GDPR webhooks, and OpenAI-powered content. Built for Shopify App Store review.',
      visual: {
        src: '/uploads/faqflow.png',
        alt: 'FAQFlow product FAQ widget browser screenshot',
      },
      stack: ['Next.js 16', 'TypeScript', 'Shopify', 'Supabase', 'OpenAI'],
      status: 'live',
      links: [{ label: 'GitHub', href: 'https://github.com/akash-yadav-dev/faqflow' }],
    },
    {
      slug: 'dimlypdf',
      name: 'DimlyPDF',
      year: '2025',
      tagline: 'PDF dark mode, client-side.',
      summary:
        'Free tool to convert PDFs to dark mode in the browser. No uploads, works offline, preserves links and bookmarks. Built with MuPDF WebAssembly.',
      body: 'DimlyPDF converts PDFs to dark mode entirely in your browser. No uploads, no server, no data leaves your device. Four dark themes, selectable text, and preserved links/bookmarks. Works offline, deployable as a static site.',
      visual: {
        src: '/uploads/dimlypdf.png',
        alt: 'DimlyPDF live site — free PDF dark mode converter',
      },
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
      tagline: 'Jira-style project management.',
      summary:
        'Open-source kanban, sprints, and custom workflows. Go backend (Clean Architecture), Next.js frontend, PostgreSQL, Redis, and Kubernetes.',
      body: 'MyTodo is an open-source project management platform: kanban boards, sprints, and custom workflows. Go backend (Clean Architecture), Next.js frontend, PostgreSQL, Redis, and Kubernetes. Real-time notifications and integrations.',
      visual: {
        src: '/assets/projects/mytodo-kanban.svg',
        alt: 'MyTodo kanban board screenshot preview',
      },
      stack: ['Go', 'Gin', 'Next.js', 'PostgreSQL', 'Redis', 'Kubernetes'],
      status: 'open-source',
      links: [{ label: 'GitHub', href: 'https://github.com/akash-yadav-dev/mytodo' }],
    },
    {
      slug: 'izmo',
      name: 'izmo',
      year: '2022 — now',
      tagline: 'Car dealership inventory at scale.',
      summary:
        'React.js platform for managing 400k+ vehicle records and leads across Europe/US. Performance-critical, privacy-compliant, and highly customizable.',
      body: 'izmo powers inventory and lead management for car dealerships in Europe and the US. 400k+ vehicle records, React.js frontend, Storybook components, and JSON-driven customization. Backend APIs in NestJS/Express. Privacy-compliant consent flows.',
      visual: {
        src: '/assets/projects/izmo-inventory.svg',
        alt: 'izmo inventory management UI screenshot preview',
      },
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
      note: 'Own frontend delivery in a cross-functional product team for a large dealership platform. Shipped reusable React systems, improved inventory performance for 400k+ records, and delivered privacy-compliant consent flows across markets.',
    },
    {
      when: '2024 — now',
      role: 'Independent SaaS Builder · Freelance-style product work',
      where: 'Remote',
      note: 'Designed and shipped PostQueue, FAQFlow, and DimlyPDF from idea to production. Worked across product discovery, architecture, full-stack implementation, deployment, and iteration based on user feedback.',
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
    currently:
      'Currently building PostQueue and opening up more project-based freelance work with product teams.',
    lookingFor:
      'I enjoy projects where product clarity and technical execution both matter: SaaS builds, platform foundations, and user-facing systems that need to scale cleanly.',
    intro:
      'I am based in Bangalore and have been building software professionally for 3+ years. I like full-stack work because it lets me stay close to real user problems while still going deep on system design and backend reliability.',
    body: [
      'By day I work at izmo Ltd in Bangalore, owning frontend delivery for a large car dealership platform and contributing to the NestJS APIs behind it. Outside work, I build and ship products end-to-end: PostQueue (multi-tenant social publishing with Temporal workflows), FAQFlow (Shopify AI app), and DimlyPDF (client-side PDF tool using MuPDF WebAssembly).',
      'I reach for Go when I want performance without ceremony, and TypeScript when teams need predictable delivery at speed. I care about clean APIs, reliable deploys, and code that the next engineer can understand quickly.',
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
  services: {
    title: 'What I build',
    items: [
      {
        title: 'Full-Stack SaaS Development',
        body: 'End-to-end product builds using Next.js, NestJS, Go, and PostgreSQL, from first scope to production launch.',
      },
      {
        title: 'API Design & Backend Systems',
        body: 'REST and event-driven APIs, multi-tenant architecture, background jobs, and Temporal-powered workflows.',
      },
      {
        title: 'Frontend Engineering',
        body: 'React and Next.js interfaces, reusable component systems, and performance-focused delivery for production apps.',
      },
      {
        title: 'Shopify App Development',
        body: 'Theme app extensions, OAuth flows, GDPR webhooks, and multi-store support built to Shopify review standards.',
      },
    ],
  },
  process: {
    title: 'How I work with clients',
    steps: [
      {
        title: 'Discovery',
        body: 'Align on outcome, constraints, and success metrics before writing implementation code.',
      },
      {
        title: 'Build',
        body: 'Ship in focused milestones with clear updates, demos, and practical tradeoff decisions.',
      },
      {
        title: 'Ship',
        body: 'Production release with observability, handoff notes, and stability checks in place.',
      },
      {
        title: 'Iterate',
        body: 'Refine based on usage data and feedback to improve reliability and user outcomes.',
      },
    ],
  },
  testimonials: [
    {
      quote:
        'Akash is a rare engineer who combines product sense with technical depth. He shipped our MVP in weeks, handled every integration, and communicated clearly throughout. Highly recommended for any SaaS build.',
      author: 'S. Kumar',
      role: 'Founder · SaaS Startup',
    },
    {
      quote:
        'Delivered a complex Shopify app from scratch, handled all review requirements, and iterated fast on feedback. Would work with again.',
      author: 'A. Mehta',
      role: 'E-commerce Lead',
    },
  ],
  contact: {
    headline: "Let's build something that ships.",
    body: 'Available for freelance and project-based work. I reply within 24 hours. Email or use the form.',
    channels: [
      { label: 'Email', value: 'hello@akashdev.pro', href: 'mailto:hello@akashdev.pro' },
      { label: 'GitHub', value: '@akash-yadav-dev', href: 'https://github.com/akash-yadav-dev' },
      { label: 'Signal', value: 'on request', href: '' },
    ],
  },
  footer: {
    credit: '© 2026 Akash Yadav. All rights reserved.',
    links: [
      { label: 'Source', href: 'https://github.com/akash-yadav-dev/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
