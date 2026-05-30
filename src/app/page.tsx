import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { ContactBlock } from '@/components/sections/ContactBlock'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { WorkRow } from '@/components/ui/WorkRow'
import { WritingCard } from '@/components/ui/WritingCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { content } from '@/data/content'

export const metadata: Metadata = {
  title: `${content.profile.name} — ${content.profile.role}`,
  description:
    'Akash Yadav — Full-stack engineer for hire. I build production SaaS using Next.js, NestJS, and Go. Based in Bangalore, open to remote freelance work.',
}

export default function HomePage() {
  const featured = content.projects.slice(0, 3)
  const recentWriting = content.writing.slice(0, 3)
  const { process, services, testimonials } = content

  return (
    <>
      <Hero />

      {/* Skills (grouped) */}
      <section className="py-16 border-t border-line">
        <FadeIn>
          <SectionHeader num="01" label="Skills" title="What I use to build." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-mono text-[11px] text-fg-muted mb-1">Frontend</div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">React.js</span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">Next.js</span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">TypeScript</span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">Tailwind CSS</span>
            </div>
          </div>
          <div>
            <div className="font-mono text-[11px] text-fg-muted mb-1">Backend</div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">NestJS</span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">Go</span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">Node.js</span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">PostgreSQL</span>
            </div>
          </div>
          <div>
            <div className="font-mono text-[11px] text-fg-muted mb-1">DevOps</div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">Docker</span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">Kubernetes</span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">CI/CD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 border-t border-line">
        <FadeIn>
          <SectionHeader num="02" label="Selected Work" title={"Things I've shipped\nthat are still running."} />
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

      {/* Process */}
      <section className="py-24 border-t border-line">
        <FadeIn>
          <SectionHeader num="02" label={process.title} title="Discovery to delivery." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <article className="h-full p-6 rounded-lg border border-line bg-bg-sunken">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-subtle mb-3">0{i + 1}</p>
                <h3 className="font-display text-2xl font-semibold tracking-snug mb-3">{step.title}</h3>
                <p className="text-fg-muted text-sm leading-relaxed">{step.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-t border-line">
        <FadeIn>
          <SectionHeader num="03" label={services.title} title="What you can hire me for." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.items.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <article className="p-6 rounded-lg border border-line transition-all duration-200 hover:border-line-strong hover:-translate-y-0.5">
                <h3 className="font-display text-[clamp(24px,3.2vw,34px)] font-semibold tracking-tight mb-3">{service.title}</h3>
                <p className="text-fg-muted text-base leading-relaxed">{service.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-line">
        <FadeIn>
          <SectionHeader num="04" label="What people say" title="Social proof, in plain words." />
        </FadeIn>
        <div className="grid grid-cols-1 gap-5">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.author} delay={i * 0.08}>
              <blockquote className="p-6 md:p-8 rounded-lg border border-line bg-bg-sunken">
                <p className="text-fg leading-relaxed mb-4" style={{ fontSize: 'clamp(18px,2vw,24px)' }}>
                  “{testimonial.quote}”
                </p>
                <footer className="font-mono text-[11px] text-fg-muted uppercase tracking-[0.1em]">
                  {testimonial.author} · {testimonial.role}
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="py-24 border-t border-line">
        <FadeIn>
          <SectionHeader num="05" label="Latest Writing" title="Notes on building." />
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
