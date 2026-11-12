export interface Profile {
  name: string
  handle: string
  initial: string
  logo: string
  photo: string
  showPhoto: boolean
  role: string
  tagline: string
  intro: string
  location: string
  available: string
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

import type { Project } from './projects'
import { projects } from './projects'

export type { Project, ProjectLink, ProjectStatus } from './projects'

export interface Experience {
  when: string
  role: string
  where: string
  note: string
  highlights?: string[]
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
    logo: '/icon.svg',
    photo: '/akashdev.png',
    showPhoto: false,
    role: 'Full-Stack Developer · Websites & Apps',
    tagline: 'I build websites and apps\nthat {people actually use}.',
    intro:
      'I am a full stack developer with 4 years of experience building websites and web apps. At my day job I work on a large car dealership platform used across Europe, where I made the vehicle pages much faster and built an AI page builder. I also build and launch my own products, including AI tools, from scratch. I enjoy turning an idea into something real that works well and is easy to use.',
    location: 'Bangalore, India · Remote-friendly',
    available: 'Open for freelance projects',
    email: 'hello@akashdev.pro',
    github: '@akash-yadav-dev',
    signal: 'on request',
    writingUrl: 'akashdev.pro',
  },
  stats: [
    { label: 'Years building for the web', value: '4', suffix: '+' },
    { label: 'Live products you can try', value: '7' },
    { label: 'Lighthouse speed score', value: '80', suffix: '+' },
    { label: 'Projects in progress now', value: '3' },
  ],
  nav: [
    { label: 'Index', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Writing', href: '/writing' },
    { label: 'Contact', href: '/contact' },
  ],
  projects,
  experience: [
    {
      when: 'Apr 2026 to now',
      role: 'Software Engineer, Full Stack · izmo Ltd',
      where: 'Bangalore · IN',
      note: 'Promoted to full stack ownership on a large car dealership platform used across Europe. I built an AI page builder that lets editors drag and drop pages while AI creates the page setup the backend needs. I am moving old JSP and Razor pages to Next.js, and I build features end to end with Java, Spring Boot and SQL.',
      highlights: [
        'Built an AI-assisted drag and drop page builder for the CMS: AI (OpenAI GPT-6 Luna) reads existing brand settings and creates page structure in the exact format the backend stores.',
        'Leading the move of legacy JSP and ASP.NET Razor (.cshtml) pages with plain JavaScript to Next.js, React and TypeScript.',
        'Delivered a vehicle emissions disclosure feature for environmental rules, from the database and Spring service layer to the listing and detail pages.',
        'Extended the multi-brand theming engine (per-brand settings, logos, colours and fonts), covered by JUnit and Mockito tests.',
      ],
    },
    {
      when: 'Dec 2022 to Mar 2026',
      role: 'Associate Software Engineer, Full Stack · izmo Ltd',
      where: 'Bangalore · IN',
      note: 'Built the vehicle search pages end to end, from the NestJS APIs to the React and Redux screens with filters and sorting. Raised the speed score of big inventory pages from about 45 to over 80, built shared components used by 13 car brands, and handled cookie consent for France and the US.',
      highlights: [
        'Built vehicle inventory search end to end: NestJS REST APIs for filtering, sorting and pagination, plus an e-commerce style React and Redux interface.',
        'Raised the Lighthouse performance score of big inventory pages from 45-50 to 80+ by reworking how vehicle data is loaded and shown.',
        'Built JSON-driven site settings and a shared library of accessible components, so 13 car brands change layouts and branding without code changes.',
        'Shipped cookie consent flows for French and US privacy rules across dealer websites.',
      ],
    },
    {
      when: '2024 to now',
      role: 'Independent product and freelance work',
      where: 'Remote',
      note: 'Designed and launched BrowserZap, MRRdue, AI Search Audit, Consent Validator, UnitConverterOne, TryFreeCalculator and ImageConverter from idea to launch, and built a marketplace site for a client. Several are AI tools, including MCP servers that let AI agents work safely with real data and a real browser. I handled everything myself, from planning and design to launch and improvements.',
      highlights: [
        'BrowserZap: an MCP server, Node.js bridge and Chrome extension that let AI agents work in your own browser, with approval before risky actions.',
        'MRRdue: failed payment recovery for Stripe and Dodo Payments, with an OAuth 2.1 MCP server for AI assistants.',
        'AI Search Audit: checks whether AI search engines can read a site, using 27 rules and a 17-crawler access matrix.',
        'TryFreeCalculator (40 calculators) and UnitConverterOne (58 converters): free static tools that show the formula behind every answer.',
      ],
    },
    {
      when: '2018 to 2022',
      role: 'Bachelor of Engineering',
      where: 'Bangalore · IN',
      note: 'Studied engineering while working on data and mapping projects, including disaster news tracking, satellite image labelling, and COVID-19 data challenges.',
    },
  ],
  skills: [
    { name: 'React.js / Next.js', level: 93 },
    { name: 'TypeScript / JavaScript', level: 91 },
    { name: 'NestJS / Express / Node.js', level: 82 },
    { name: 'AI / LLM integration (OpenAI, RAG, MCP)', level: 80 },
    { name: 'Java / Spring Boot', level: 72 },
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
        'The tradeoffs I ran into building PostQueue, and why I landed on row level with a workspace_id column.',
    },
    {
      slug: 'shopify-app-gotchas',
      date: 'Nov 2025',
      readTime: '7 min',
      title: 'Five Shopify app gotchas nobody warns you about.',
      excerpt:
        'Session tokens, GDPR webhooks, Theme App Extensions, and the review checklist, the surprises that came up building FAQFlow.',
    },
    {
      slug: 'nestjs-vs-express',
      date: 'Sep 2025',
      readTime: '7 min',
      title: 'NestJS vs. Express: when the structure pays off.',
      excerpt:
        'After building APIs in both, here is where the extra ceremony of NestJS earns its keep, and where it does not.',
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
      'Currently building AI features at izmo, growing MRRdue and BrowserZap, and opening up more project-based freelance work with product teams.',
    lookingFor:
      'I enjoy projects where product clarity and technical execution both matter: SaaS builds, platform foundations, and user-facing systems that need to scale cleanly.',
    intro:
      'I am based in Bangalore and have been building software professionally for 4 years. I like full-stack work because it lets me stay close to real user problems while still going deep on system design and backend reliability.',
    body: [
      'By day I am a full stack software engineer at izmo Ltd in Bangalore, working on a large car dealership platform across Java and Spring Boot, NestJS, React and Next.js. I built an AI page builder for our CMS and I am moving legacy JSP pages to Next.js. Outside work, I build and ship products end to end: MRRdue (revenue recovery with an MCP server for AI clients), AI Search Audit (how visible a site is to AI search), BrowserZap (lets AI agents use your own browser safely), and FAQFlow (Shopify AI app).',
      'I reach for Go when I want performance without ceremony, and TypeScript when teams need predictable delivery at speed. I care about clean APIs, reliable deploys, and code that the next engineer can understand quickly.',
    ],
    principles: [
      {
        n: '01',
        title: 'I handle the whole project',
        body: 'I work on both the parts people see and the parts behind the scenes, so everything fits together and nothing falls through the cracks.',
      },
      {
        n: '02',
        title: 'I keep the work clean',
        body: 'Clear, well organised work means fewer problems later and a product that is easy to grow as your needs change.',
      },
      {
        n: '03',
        title: 'I launch, then improve',
        body: 'A working product you can use today beats a perfect one that never gets finished. I launch early and keep making it better.',
      },
      {
        n: '04',
        title: 'Speed matters',
        body: 'A fast website is a better website. I make sure things load quickly and feel smooth for the people using them.',
      },
    ],
  },
  services: {
    title: 'What I build',
    items: [
      {
        title: 'Booking and order websites',
        body: 'Websites where people book, buy, or reserve something. I make sure the tricky parts work properly, like payments, availability, and avoiding double bookings, so nothing goes wrong for your customers.',
      },
      {
        title: 'Complete web applications',
        body: 'Full products built from start to finish, from the first idea all the way to a finished product your customers can use every day.',
      },
      {
        title: 'Fast, smooth websites',
        body: 'Making websites quick and responsive even when there is a lot of data, so your users never have to wait around. Proven on a car dealership platform, where I raised the speed score of big inventory pages from about 45 to over 80.',
      },
      {
        title: 'Reliable systems behind the scenes',
        body: 'The behind the scenes part that keeps everything running, handles many users at once, and updates in real time without breaking.',
      },
    ],
  },
  process: {
    title: 'How I work with clients',
    steps: [
      {
        title: 'Understand',
        body: 'We start by talking through what you need and what success looks like, before any work begins.',
      },
      {
        title: 'Build',
        body: 'I build in small steps with regular updates and demos, so you always know how things are going.',
      },
      {
        title: 'Launch',
        body: 'I get your product live and make sure it is stable, with clear notes on how everything works.',
      },
      {
        title: 'Improve',
        body: 'After launch I keep refining things based on how real people use it, so it keeps getting better over time.',
      },
    ],
  },
  // Real client testimonials only — add them here as they come in.
  testimonials: [],
  contact: {
    headline: "Let's work together.",
    body: 'I am available for freelance and project work. The best way to reach me is by email, and I usually reply within a day.',
    channels: [
      { label: 'Email', value: 'hello@akashdev.pro', href: 'mailto:hello@akashdev.pro' },
      { label: 'GitHub', value: '@akash-yadav-dev', href: 'https://github.com/akash-yadav-dev' },
      { label: 'LinkedIn', value: 'in/akash-yadav', href: 'https://www.linkedin.com/in/akash-yadav-6b0a1b214/' },
    ],
  },
  footer: {
    credit: '© 2026 Akash Yadav. All rights reserved.',
    links: [
      { label: 'Source', href: 'https://github.com/akash-yadav-dev/my-portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
