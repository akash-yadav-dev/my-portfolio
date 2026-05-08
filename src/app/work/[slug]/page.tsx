import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/Badge'
import { content } from '@/data/content'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return content.projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = content.projects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Project not found' }
  return { title: project.name, description: project.summary }
}

export default function ProjectPage({ params }: Props) {
  const project = content.projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const paragraphs = project.body.split('\n\n')

  return (
    <section className="py-16 pb-24">
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-fg-muted mb-8 hover:text-accent transition-colors duration-100"
      >
        ← All projects
      </Link>

      <div className="flex gap-2 flex-wrap mb-3">
        <Badge status={project.status} />
      </div>

      <h1
        className="font-display font-semibold tracking-tight leading-tight m-0 mb-4"
        style={{ fontSize: 'clamp(56px,9vw,112px)', lineHeight: '0.95', letterSpacing: '-0.04em' }}
      >
        {project.name}
      </h1>

      <p className="text-fg-muted leading-[1.35] mb-8 max-w-[60ch]" style={{ fontSize: 'clamp(18px,2vw,24px)' }}>
        {project.tagline}
      </p>

      {/* Meta strip */}
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-5 py-5 border-t border-b border-line mb-10 font-mono text-[11px]">
        {[
          { label: 'Year', value: project.year },
          { label: 'Status', value: project.status },
          { label: 'Stack', value: project.stack.join(', ') },
          { label: 'Role', value: 'Design + engineering' },
        ].map(({ label, value }) => (
          <div key={label}>
            <dt className="text-fg-subtle uppercase tracking-[0.12em] text-[10px] mb-1">{label}</dt>
            <dd className="m-0 text-fg">{value}</dd>
          </div>
        ))}
      </dl>

      {/* Body */}
      <div className="max-w-[70ch]">
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className="leading-[1.55] mb-4"
            style={{
              fontSize: 'clamp(16px,1.5vw,19px)',
              color: i === 0 ? 'var(--fg)' : 'var(--fg-muted)',
            }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Links */}
      {project.links.length > 0 && (
        <div className="flex gap-3 flex-wrap mt-8">
          {project.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.06em] border border-line-strong hover:border-fg hover:bg-bg-sunken transition-all duration-200 group"
            >
              {link.label}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
