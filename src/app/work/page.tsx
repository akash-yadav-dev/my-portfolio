import type { Metadata } from 'next'
import { WorkRow } from '@/components/ui/WorkRow'
import { FadeIn } from '@/components/ui/FadeIn'
import { content } from '@/data/content'

export const metadata: Metadata = { title: 'Work' }

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
          className="font-display font-semibold tracking-tight leading-tight m-0 mb-4"
          style={{ fontSize: 'clamp(56px,9vw,112px)', lineHeight: '0.95', letterSpacing: '-0.04em' }}
        >
          Things I&apos;ve
          <br />
          shipped.
        </h1>
        <p className="text-fg-muted leading-[1.35] max-w-[60ch]" style={{ fontSize: 'clamp(18px,2vw,24px)' }}>
          Most are still running. A couple are open source. One was acquired. Click any of them to read the longer
          story.
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
