import type { Metadata } from 'next'
import { WorkCard } from '@/components/ui/WorkCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { content } from '@/data/content'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'A selection of websites, web apps, and tools that Akash Yadav has built and worked on.',
}

export default function WorkPage() {
  return (
    <>
      {/* Page head */}
      <section className="pt-16 pb-12">
        <div className="flex items-center gap-3 font-mono text-[11px] text-fg-muted uppercase tracking-[0.06em] mb-5">
          <span className="w-6 h-px bg-accent" />
          Selected work · {content.projects.length} projects
        </div>
        <h1
          className="font-display font-semibold m-0 mb-4"
          style={{ fontSize: 'clamp(40px,6vw,64px)', lineHeight: '1.02', letterSpacing: '-0.02em' }}
        >
          Projects I&apos;ve worked on.
        </h1>
        <p className="text-fg-muted leading-[1.6] max-w-[58ch]" style={{ fontSize: 'clamp(16px,1.5vw,19px)' }}>
          Most of these are live and ready to use. A couple are open source, and one is the platform from my day job. A few are still in progress. Click any project to read more about it.
        </p>

        {/* Trust strip — proof at a glance */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8 pt-7 border-t border-line">
          <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-fg-subtle">
            Proven track record
          </span>
          <span className="text-fg-muted text-[15px]">
            <strong className="font-display font-semibold text-fg">3+ years</strong> building for the web
          </span>
          <span className="text-fg-muted text-[15px]">
            <strong className="font-display font-semibold text-fg">400K+</strong> records handled smoothly
          </span>
          <span className="text-fg-muted text-[15px]">
            <strong className="font-display font-semibold text-fg">6</strong> live products you can try today
          </span>
        </div>
      </section>

      {/* Work grid */}
      <section className="pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.06} className="h-full">
              <WorkCard project={project} index={i} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
