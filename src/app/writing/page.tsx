import type { Metadata } from 'next'
import { WritingCard } from '@/components/ui/WritingCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { content } from '@/data/content'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Technical writing on SaaS, multi-tenancy, workflows, and production systems by Akash Yadav. Notes on building real products.',
}

export default function WritingPage() {
  return (
    <>
      {/* Page head */}
      <section className="pt-16 pb-12">
        <div className="flex items-center gap-3 font-mono text-[11px] text-fg-muted uppercase tracking-[0.06em] mb-5">
          <span className="w-6 h-px bg-accent" />
          Writing · {content.writing.length} posts
        </div>
        <h1
          className="font-display font-semibold m-0 mb-4"
          style={{ fontSize: 'clamp(40px,6vw,64px)', lineHeight: '1.02', letterSpacing: '-0.02em' }}
        >
          Notes on building.
        </h1>
        <p className="text-fg-muted leading-[1.6] max-w-[58ch]" style={{ fontSize: 'clamp(16px,1.5vw,19px)' }}>
          Working notes on software, infrastructure, and the occasional non-software thing. New posts on irregular
          Mondays.
        </p>
      </section>

      {/* Grid */}
      <section className="pb-24 border-t border-line pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {content.writing.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 0.06}>
              <WritingCard article={article} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
