import { cn } from '@/lib/utils'
import type { ProjectStatus } from '@/data/content'

const statusConfig: Record<ProjectStatus, { label: string; dot?: string; accent?: boolean }> = {
  live: { label: 'Live', dot: 'var(--success)' },
  beta: { label: 'Beta', accent: true },
  'open-source': { label: 'Open source', accent: true },
  building: { label: 'Building now', accent: true },
  upcoming: { label: 'Coming soon', accent: true },
  corporate: { label: 'Corporate work' },
  acquired: { label: 'Acquired', accent: true },
  sunset: { label: 'Sunset' },
}

interface BadgeProps {
  status?: ProjectStatus
  children?: React.ReactNode
  className?: string
}

export function Badge({ status, children, className }: BadgeProps) {
  if (status) {
    const cfg = statusConfig[status]
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] tracking-[0.06em] uppercase border',
          cfg.accent
            ? 'text-accent'
            : 'border-line-strong text-fg-muted',
          className
        )}
        style={cfg.accent ? { background: 'var(--accent-soft)', borderColor: 'var(--accent-border)' } : {}}
      >
        {cfg.dot && (
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cfg.dot }} />
        )}
        {cfg.label}
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] tracking-[0.06em] uppercase border border-line-strong text-fg-muted',
        className
      )}
    >
      {children}
    </span>
  )
}
