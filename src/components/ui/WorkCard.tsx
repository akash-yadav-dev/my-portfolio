import Link from 'next/link'
import Image from 'next/image'
import { Badge } from './Badge'
import type { Project } from '@/data/content'

interface WorkCardProps {
  project: Project
  index: number
}

const placeholderLabel: Partial<Record<Project['status'], string>> = {
  corporate: 'Corporate platform, internal product',
  upcoming: 'In active development',
  building: 'Interface live, more coming',
}

export function WorkCard({ project, index }: WorkCardProps) {
  const idx = String(index + 1).padStart(2, '0')

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex flex-col h-full rounded-xl overflow-hidden border border-line bg-bg transition-all duration-200 hover:border-line-strong hover:-translate-y-1 hover:shadow-md cursor-pointer"
    >
      {/* Screenshot or themed placeholder.
          rounded-t-xl + translateZ(0) keep the scaled image clipped to the card's rounded corners on hover. */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl border-b border-line bg-bg-sunken [transform:translateZ(0)]">
        {/* Status badge — pinned to a corner so it reads at a glance, not lost among the stack tags */}
        <span className="absolute top-3 right-3 z-10 rounded-full bg-bg/80 backdrop-blur-sm shadow-sm">
          <Badge status={project.status} />
        </span>
        {project.visual ? (
          <Image
            src={project.visual.src}
            alt={project.visual.alt}
            width={1280}
            height={800}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
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
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-baseline gap-x-3 mb-2">
          <span className="font-mono text-[12px] select-none" style={{ color: 'var(--accent-dim)' }}>
            {idx}
          </span>
          <h3
            className="font-display font-semibold tracking-snug leading-tight transition-colors duration-150 group-hover:text-accent"
            style={{ fontSize: 'clamp(19px,2.2vw,23px)' }}
          >
            {project.name}
          </h3>
          <span className="font-mono text-[11px] text-fg-subtle ml-auto whitespace-nowrap">{project.year}</span>
        </div>
        <p className="text-fg-muted text-[14.5px] leading-relaxed mb-4 line-clamp-3">
          {project.summary}
        </p>
        <div className="mt-auto flex gap-1.5 flex-wrap items-center">
          {project.stack.slice(0, 3).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </Link>
  )
}
