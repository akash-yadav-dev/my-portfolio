import Link from 'next/link'
import { Badge } from './Badge'
import type { Project } from '@/data/content'

interface WorkRowProps {
  project: Project
  index: number
}

export function WorkRow({ project, index }: WorkRowProps) {
  const idx = String(index + 1).padStart(2, '0')

  return (
    <Link
      href={`/work/${project.slug}`}
      className="work-row group relative grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_200px_60px] gap-4 md:gap-5 py-8 border-t border-line last:border-b last:border-line items-baseline transition-[padding] duration-200 hover:pl-4 cursor-pointer"
    >
      <div className="work-row-bar" />

      <span className="font-mono text-[11px] text-fg-subtle pt-1">{'// '}{idx}</span>

      <div>
        <h3 className="font-display text-[clamp(28px,4vw,44px)] font-semibold tracking-tight leading-[1.05] mb-3 transition-colors duration-100 group-hover:text-accent">
          {project.name}
        </h3>
        <p className="text-fg-muted text-base max-w-[56ch] leading-relaxed mb-3">
          {project.summary}
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          <Badge status={project.status} />
        </div>
      </div>

      <span className="hidden md:block font-mono text-[11px] text-fg-muted">
        {project.year}
      </span>

      <span className="hidden md:block font-mono text-xl text-fg-muted text-right transition-all duration-200 group-hover:translate-x-1.5 group-hover:text-accent">
        →
      </span>
    </Link>
  )
}
