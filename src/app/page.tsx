import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { ContactBlock } from '@/components/sections/ContactBlock'
import { CodeSnippet } from '@/components/sections/CodeSnippet'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { WorkRow } from '@/components/ui/WorkRow'
import { WritingCard } from '@/components/ui/WritingCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { content } from '@/data/content'

export const metadata: Metadata = {
  title: `${content.profile.name} — ${content.profile.role}`,
}

export default function HomePage() {
  const featured = content.projects.slice(0, 3)
  const recentWriting = content.writing.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Featured Work */}
      <section className="py-24 border-t border-line">
        <FadeIn>
          <SectionHeader num="01" label="Selected Work" title={"Things I've shipped\nthat are still running."} />
        </FadeIn>
        <div className="flex flex-col">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08}>
              <WorkRow project={project} index={i} />
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <div className="mt-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border border-line-strong transition-all duration-200 hover:border-fg hover:bg-bg-sunken group"
            >
              All projects
              <span className="transition-transform duration-200 group-hover:translate-x-1 opacity-50">→</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* How I Think — code snippet */}
      <section className="py-24 border-t border-line">
        <FadeIn>
          <SectionHeader num="02" label="How I Think" title={"A small thing,\nwritten carefully."} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <CodeSnippet />
        </FadeIn>
      </section>

      {/* Writing */}
      <section className="py-24 border-t border-line">
        <FadeIn>
          <SectionHeader num="03" label="Latest Writing" title="Notes on building." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recentWriting.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 0.08}>
              <WritingCard article={article} />
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div className="mt-8">
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border border-line-strong transition-all duration-200 hover:border-fg hover:bg-bg-sunken group"
            >
              All writing
              <span className="transition-transform duration-200 group-hover:translate-x-1 opacity-50">→</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Contact CTA */}
      <section className="py-24 border-t border-line">
        <FadeIn>
          <ContactBlock />
        </FadeIn>
      </section>
    </>
  )
}
