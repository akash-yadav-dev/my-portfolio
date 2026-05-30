import type { Metadata } from 'next'
import { WorkRow } from '@/components/ui/WorkRow'
import { FadeIn } from '@/components/ui/FadeIn'
import { content } from '@/data/content'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects: SaaS, Shopify apps, open-source tools, and large-scale React platforms. All built and shipped by Akash Yadav.',
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
          Things I&apos;ve shipped.
        </h1>
        <p className="text-fg-muted leading-[1.6] max-w-[58ch]" style={{ fontSize: 'clamp(16px,1.5vw,19px)' }}>
          Most are live and still running. A few are open source, and one is the day job platform that taught me how to keep things fast at scale. The last few are in active development. Open any of them for the longer story.
        </p>
      </section>

      {/* Work list */}
      <section className="pb-24">
        <div className="flex flex-col">
          {content.projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.06}>
              <WorkRow project={project} index={i} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
