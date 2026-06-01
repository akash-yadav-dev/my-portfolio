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

export type ProjectStatus =
  | 'live'
  | 'beta'
  | 'open-source'
  | 'building'
  | 'upcoming'
  | 'corporate'
  | 'acquired'
  | 'sunset'

export interface Project {
  slug: string
  name: string
  year: string
  tagline: string
  summary: string
  body: string
  visual?: {
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
    logo: '/icon.svg',
    photo: '/akashdev.png',
    role: 'Full-Stack Developer · Websites & Apps',
    tagline: 'I build websites and apps\nthat {people actually use}.',
    intro:
      'I am a full stack developer with more than three years of experience building websites and web apps. I have worked on large platforms used by people every day, kept a system of over 400,000 records running fast and smooth, and built and launched my own products from scratch. I enjoy turning an idea into something real that works well and is easy to use.',
    location: 'Bangalore, India · Remote-friendly',
    available: 'Open for freelance projects',
    email: 'hello@akashdev.pro',
    github: '@akash-yadav-dev',
    signal: 'on request',
    writingUrl: 'akashdev.pro',
  },
  stats: [
    { label: 'Years building for the web', value: '3', suffix: '+' },
    { label: 'Live products you can try', value: '6' },
    { label: 'Records handled smoothly', value: '400K', suffix: '+' },
    { label: 'Projects in progress now', value: '3' },
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
      slug: 'imgtoolz',
      name: 'ImgToolz',
      year: '2025 to now',
      tagline: 'Fourteen image tools that run in the browser.',
      summary:
        'A free image toolkit that compresses, resizes, converts, and crops images entirely in the browser. Nothing is uploaded, so files never leave the device and results come back in seconds.',
      body: 'ImgToolz is a free image toolkit that runs completely in the browser using the HTML5 Canvas API. People can compress a photo down to a target size, resize for the web, convert between WebP, JPG, and PNG, and crop, all without an account and without a single upload.\n\nBecause every operation happens on the device, the work stays private and fast. It also handles batch processing of several images at once with a single ZIP download, which makes it genuinely useful for everyday tasks.',
      visual: {
        src: '/uploads/imgtoolz.png',
        alt: 'ImgToolz home page, a free in browser image toolkit',
      },
      stack: ['Next.js', 'TypeScript', 'Canvas API', 'Tailwind CSS'],
      status: 'live',
      links: [{ label: 'Live', href: 'https://imgtoolz.akashdev.pro/' }],
    },
    {
      slug: 'dimlypdf',
      name: 'DimlyPDF',
      year: '2025 to now',
      tagline: 'Private PDF tools that convert to dark mode in seconds.',
      summary:
        'A free PDF toolkit that converts documents to dark mode and also compresses, merges, and splits files, all inside the browser. Files stay on the device, and links and text stay selectable.',
      body: 'DimlyPDF turns any PDF into a comfortable dark mode for night reading, and it also compresses, merges, and splits files. Everything runs in the browser, so documents never reach a server and stay completely private.\n\nIt is built on a WebAssembly build of MuPDF, keeps links and bookmarks intact, works offline, and runs as a simple static site. The project is open source.',
      visual: {
        src: '/uploads/dimlypdf.png',
        alt: 'DimlyPDF home page, a free private PDF dark mode converter',
      },
      stack: ['React', 'TypeScript', 'Vite', 'MuPDF', 'WebAssembly'],
      status: 'live',
      links: [
        { label: 'Live', href: 'https://dimlypdf.akashdev.pro/' },
        { label: 'GitHub', href: 'https://github.com/akash-yadav-dev/dimlypdf' },
      ],
    },
    {
      slug: 'postqueue',
      name: 'PostQueue',
      year: '2025 to now',
      tagline: 'One command center to schedule and publish across platforms.',
      summary:
        'A social publishing platform for teams that drafts, reviews, schedules, and publishes content across nine platforms. It is built around reliable queues, automatic retries, and approval workflows. Accounts and the core scheduling flow are live while the rest is built out.',
      body: 'PostQueue gives teams one place to plan and publish content across nine platforms instead of posting by hand. It is built around a queue and retry model so posts go out reliably, with approval workflows and timezone aware planning for groups working together.\n\nThe backend uses durable workflows for the publishing pipeline, with multi tenant workspaces and secure token handling. Sign up, sign in, and the core scheduling flow are live, and more of the product is being added.',
      visual: {
        src: '/uploads/postqueue.png',
        alt: 'PostQueue marketing site and product dashboard',
      },
      stack: ['NestJS', 'Next.js', 'TypeScript', 'Temporal', 'PostgreSQL', 'Redis'],
      status: 'beta',
      links: [
        { label: 'Live', href: 'https://www.postqueuehq.com/' },
        { label: 'GitHub', href: 'https://github.com/akash-yadav-dev/post-queue' },
      ],
    },
    {
      slug: 'unitcraft',
      name: 'UnitCraft',
      year: '2025 to now',
      tagline: 'CSS tools made for everyday front-end work.',
      summary:
        'A set of more than twenty six CSS utilities for developers. It converts units, generates fluid type with clamp, does viewport math, and checks color contrast, all in the browser with no signup.',
      body: 'UnitCraft is a focused toolkit for front end developers. It converts between px, rem, em, and viewport units, generates fluid typography with clamp, helps with Tailwind spacing, and checks WCAG color contrast.\n\nEverything runs in the browser with instant results and no accounts, which makes it a quick daily reference while building responsive interfaces.',
      visual: {
        src: '/uploads/unitcraft.png',
        alt: 'UnitCraft home page, in browser CSS tools for developers',
      },
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      status: 'live',
      links: [{ label: 'Live', href: 'https://unitcraft.akashdev.pro/' }],
    },
    {
      slug: 'faqflow',
      name: 'FAQFlow',
      year: '2025 to now',
      tagline: 'A smart FAQ widget for any Shopify store in minutes.',
      summary:
        'A Shopify app that adds an AI assisted FAQ widget to a store in a couple of minutes to cut support tickets. The marketing site is live and the app is preparing for the Shopify App Store.',
      body: 'FAQFlow lets a merchant add a smart FAQ widget to a Shopify store in under two minutes, which reduces repetitive support questions and helps shoppers find answers faster. It drafts FAQs from the product catalog with AI, tracks deflection and unanswered searches, and matches the store brand without any code.\n\nIt is built to Shopify review standards with secure OAuth, privacy webhooks, and multi store support. The public site is live and the app is preparing for its Shopify App Store listing.',
      visual: {
        src: '/uploads/faqflow.png',
        alt: 'FAQFlow marketing site and analytics dashboard',
      },
      stack: ['Next.js', 'TypeScript', 'Shopify', 'Supabase', 'OpenAI'],
      status: 'beta',
      links: [
        { label: 'Live', href: 'https://faqflow.shop/' },
        { label: 'GitHub', href: 'https://github.com/akash-yadav-dev/faqflow' },
      ],
    },
    {
      slug: 'izmo',
      name: 'izmo',
      year: '2022 to now',
      tagline: 'High volume dealership platform at scale.',
      summary:
        'More than three years of web development, ongoing management, and performance improvement on a high volume dealership platform. I have direct experience keeping a system of more than 400,000 records fast and stable, which is exactly what a booking or ticketing platform needs.',
      body: 'izmo is my day job, where I have spent more than three years on web development, day to day management, and performance improvement for a dealership platform used across Europe and the US. I work across the full stack, from a reusable React component system and JSON driven customization on the frontend to the backend APIs in NestJS and Express, all over more than 400,000 vehicle records.\n\nThe hard part is performance at scale, which means fast filtering, pagination, and rendering over very large datasets, along with privacy compliant consent flows across markets. The product itself is internal, so the link goes to the company site rather than a screenshot of the platform.',
      stack: ['React.js', 'TypeScript', 'NestJS', 'Node.js', 'Storybook', 'SCSS'],
      status: 'corporate',
      links: [{ label: 'Live site', href: 'https://www.izmocars.com/' }],
    },
    {
      slug: 'artist-ada',
      name: 'Artist Ada',
      year: '2026 to now',
      tagline: 'A marketplace that connects Indian artisans with collectors.',
      summary:
        'A marketplace that brings traditional Indian craftsmanship to a wider audience, connecting artisans with collectors through artist profiles, craft categories, and workshops. The interface is live and the functionality is being built now.',
      body: 'Artist Ada is a marketplace for Indian craftsmanship that helps collectors discover artisans by craft, region, and reputation, with artist profiles, workshops, and curated collections. This is the project I am focused on right now.\n\nThe full interface is live with the visual design and structure in place, and the data and core functionality are being implemented next.',
      visual: {
        src: '/uploads/artist-ada.png',
        alt: 'Artist Ada marketplace home page for Indian craftsmanship',
      },
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      status: 'building',
      links: [{ label: 'Live', href: 'https://artist-ada.vercel.app/' }],
    },
    {
      slug: 'consentpulse',
      name: 'ConsentPulse',
      year: '2026',
      tagline: 'Automated checks for cookie and consent compliance.',
      summary:
        'A compliance tool that audits a website for cookies, network requests, and Google Consent Mode, then reports whether tracking behaves correctly before and after consent. In active development.',
      body: 'ConsentPulse checks how a website handles privacy. It loads a site in a controlled browser, watches the cookies it sets and the network requests it makes, and verifies Google Consent Mode, so teams can see whether tracking actually respects user choices.\n\nEach run is classified with clear evidence and a confidence level, so a clean no tracking result reads as a pass rather than an empty report. It is currently in active development.',
      stack: ['Next.js', 'TypeScript', 'Playwright', 'PostgreSQL'],
      status: 'upcoming',
      links: [],
    },
    {
      slug: 'trackprobe',
      name: 'TrackProbe',
      year: '2026',
      tagline: 'GA4 and GTM auditing that checks what really fires.',
      summary:
        'An analytics auditing tool that compares what is configured in Google Analytics and Tag Manager with what actually fires in the browser during a crawl, then scores the gaps, duplicates, and consent issues in a report you can export. In active development.',
      body: 'TrackProbe audits Google Analytics and Tag Manager setups on real websites. Instead of trusting the admin settings alone, it crawls pages in a controlled browser, captures the analytics calls that actually fire, and compares them against the configuration and the reported volume.\n\nEvents are marked as verified, production confirmed, suspected gaps, or unreached, with clear reliability when bot protection limits the crawl. The result is a scored report you can export. It is currently in active development.',
      stack: ['Next.js', 'TypeScript', 'Playwright', 'Google APIs'],
      status: 'upcoming',
      links: [],
    },
  ],
  experience: [
    {
      when: 'Dec 2022 to now',
      role: 'Associate Software Engineer · izmo Ltd',
      where: 'Bangalore · IN',
      note: 'I work across the full stack on a large car dealership platform used across Europe and the US, building both the parts people see in React and the APIs behind them in NestJS. I made the inventory pages much faster across more than 400,000 records and handled privacy and consent across different markets.',
    },
    {
      when: '2024 to now',
      role: 'Independent product and freelance work',
      where: 'Remote',
      note: 'Designed and built ImgToolz, DimlyPDF, UnitCraft, PostQueue, and FAQFlow from idea to launch. I handled everything myself, from planning and design to building, launching, and improving them based on real feedback.',
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
        body: 'Making websites quick and responsive even when there is a lot of data, so your users never have to wait around. Proven on a platform with more than 400,000 records.',
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
      { label: 'Source', href: 'https://github.com/akash-yadav-dev/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
