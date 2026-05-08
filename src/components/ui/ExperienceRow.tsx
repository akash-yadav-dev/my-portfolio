import type { Experience } from '@/data/content'

export function ExperienceRow({ exp }: { exp: Experience }) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-[180px_1fr_200px] gap-1.5 md:gap-5 py-5 border-t border-line last:border-b last:border-line items-baseline transition-[padding] duration-200 hover:pl-3">
      <span className="font-mono text-[11px] text-fg-muted">{exp.when}</span>
      <div>
        <h4 className="font-display text-xl font-semibold tracking-snug mb-1">{exp.role}</h4>
        <p className="text-fg-muted text-sm">{exp.note}</p>
      </div>
      <span className="font-mono text-[11px] md:text-right text-fg-muted">{exp.where}</span>
    </div>
  )
}
