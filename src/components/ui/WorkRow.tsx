import Link from 'next/link'
import Image from 'next/image'
import { Badge } from './Badge'
import type { Project } from '@/data/content'

interface WorkRowProps {
  project: Project
  index: number
}

const placeholderLabel: Partial<Record<Project['status'], string>> = {
  corporate: 'Corporate platform, internal product',
  upcoming: 'In active development',
  building: 'Interface live, more coming',
}

export function WorkRow({ project, index }: WorkRowProps) {
  const idx = String(index + 1).padStart(2, '0')

  return (
    <Link
      href={`/work/${project.slug}`}
      className="work-row group relative grid md:grid-cols-[320px_1fr] gap-5 md:gap-8 items-center py-7 px-2 md:px-4 border-t border-line last:border-b last:border-line transition-colors duration-200 hover:bg-bg-sunken cursor-pointer"
    >
      <div className="work-row-bar" />

      {/* Visual or themed placeholder */}
      <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-line bg-bg-sunken">
        {project.visual ? (
          <Image
            src={project.visual.src}
            alt={project.visual.alt}
            width={1280}
            height={800}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-center px-4">
            <div>
              <span
                className="inline-grid place-items-center w-11 h-11 rounded-md font-display font-semibold text-base mb-3"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
              >
                {project.name.slice(0, 2)}
              </span>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-fg-subtle leading-relaxed">
                {placeholderLabel[project.status] ?? 'No public preview'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
          <span className="font-mono text-[12px] select-none" style={{ color: 'var(--accent-dim)' }}>
            {idx}
          </span>
          <h3
            className="font-display font-semibold tracking-snug leading-tight transition-colors duration-150 group-hover:text-accent"
            style={{ fontSize: 'clamp(20px,2.6vw,26px)' }}
          >
            {project.name}
          </h3>
          <span className="font-mono text-[11px] text-fg-subtle">{project.year}</span>
        </div>
        <p className="text-fg-muted text-[15px] leading-relaxed max-w-[58ch] mb-3">
          {project.summary}
        </p>
        <div className="flex gap-1.5 flex-wrap items-center">
          <Badge status={project.status} />
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </Link>
  )
}
