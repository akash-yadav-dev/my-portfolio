import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
    <section className="py-16 pb-16">
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
        className="font-display font-semibold m-0 mb-4"
        style={{ fontSize: 'clamp(40px,6vw,68px)', lineHeight: '1.02', letterSpacing: '-0.02em' }}
      >
        {project.name}
      </h1>

      <p className="text-fg-muted leading-[1.5] mb-8 max-w-[58ch]" style={{ fontSize: 'clamp(17px,1.6vw,21px)' }}>
        {project.tagline}
      </p>

      {project.visual ? (
        <div className="mb-8 rounded-xl overflow-hidden border border-line bg-bg-sunken">
          <Image
            src={project.visual.src}
            alt={project.visual.alt}
            width={1400}
            height={840}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      ) : (
        <div className="mb-8 rounded-xl border border-line bg-bg-sunken grid place-items-center text-center aspect-[16/8] px-6">
          <div>
            <span
              className="inline-grid place-items-center w-14 h-14 rounded-lg font-display font-semibold text-xl mb-4"
              style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
            >
              {project.name.slice(0, 2)}
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-subtle">
              {project.status === 'corporate'
                ? 'Corporate platform, internal product'
                : 'In active development'}
            </p>
          </div>
        </div>
      )}

      {/* Meta strip */}
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-5 py-5 border-t border-b border-line mb-10 font-mono text-[11px]">
        {[
          { label: 'Year', value: project.year },
          {
            label: 'Status',
            value: {
              live: 'Live in production',
              beta: 'Live, in beta',
              'open-source': 'Open source',
              building: 'Building now',
              upcoming: 'In development',
              corporate: 'Corporate work',
              acquired: 'Acquired',
              sunset: 'Sunset',
            }[project.status],
          },
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
