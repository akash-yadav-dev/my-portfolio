import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { ContactBlock } from '@/components/sections/ContactBlock'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { WorkCard } from '@/components/ui/WorkCard'
import { WritingCard } from '@/components/ui/WritingCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { content } from '@/data/content'

export const metadata: Metadata = {
  title: `${content.profile.name} — ${content.profile.role}`,
  description:
    'Akash Yadav, freelance full stack developer. I build websites and web apps, including booking and ordering platforms, with six live products you can try. Based in Bangalore, open to remote freelance work.',
}

export default function HomePage() {
  const featured = content.projects.slice(0, 3)
  const recentWriting = content.writing.slice(0, 3)
  const { process, services } = content

  return (
    <>
      <Hero />

      {/* Featured Work */}
      <section className="py-16 border-t border-line">
        <FadeIn>
          <SectionHeader num="01" label="Selected Work" title={"A few projects\nI've worked on."} />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.06} className="h-full">
              <WorkCard project={project} index={i} />
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.15}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium border border-line-strong transition-all duration-200 hover:border-fg hover:bg-bg-sunken group"
            >
              All projects
              <span className="transition-transform duration-200 group-hover:translate-x-1 opacity-50">→</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Services */}
      <section className="py-16 border-t border-line">
        <FadeIn>
          <SectionHeader num="02" label={services.title} title="How I can help you." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.items.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.06}>
              <article className="h-full p-6 rounded-lg border border-line transition-all duration-200 hover:border-line-strong hover:-translate-y-0.5">
                <h3 className="font-display font-semibold tracking-snug mb-2" style={{ fontSize: 'clamp(21px,2.4vw,26px)' }}>{service.title}</h3>
                <p className="text-fg-muted text-[15px] leading-relaxed">{service.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 border-t border-line">
        <FadeIn>
          <SectionHeader num="03" label={process.title} title="From idea to launch." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.06}>
              <article className="h-full p-6 rounded-lg border border-line bg-bg-sunken">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--accent-dim)' }}>0{i + 1}</p>
                <h3 className="font-display text-2xl font-semibold tracking-snug mb-2">{step.title}</h3>
                <p className="text-fg-muted text-sm leading-relaxed">{step.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 border-t border-line">
        <FadeIn>
          <SectionHeader num="04" label="Stack" title="What I use to build." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { group: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
            { group: 'Backend', items: ['NestJS', 'Go', 'Node.js', 'PostgreSQL'] },
            { group: 'Infra & DevOps', items: ['Docker', 'Kubernetes', 'Redis', 'CI/CD'] },
          ].map((col) => (
            <div key={col.group}>
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-subtle mb-3">{col.group}</div>
              <div className="flex flex-wrap gap-2">
                {col.items.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[12px] px-2.5 py-1 rounded-sm border"
                    style={{ background: 'var(--accent-soft)', borderColor: 'var(--accent-border)', color: 'var(--accent)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="py-16 border-t border-line">
        <FadeIn>
          <SectionHeader num="05" label="Latest Writing" title="Things I write about." />
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium border border-line-strong transition-all duration-200 hover:border-fg hover:bg-bg-sunken group"
            >
              All writing
              <span className="transition-transform duration-200 group-hover:translate-x-1 opacity-50">→</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Contact CTA */}
      <section className="py-16 border-t border-line">
        <FadeIn>
          <ContactBlock />
        </FadeIn>
      </section>
    </>
  )
}
