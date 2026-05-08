import type { Principle } from '@/data/content'

export function PrincipleCard({ principle }: { principle: Principle }) {
  return (
    <div className="group p-6 border border-line rounded-lg transition-all duration-200 hover:border-line-strong hover:-translate-y-0.5 hover:shadow-md bg-bg">
      <div className="font-mono text-[11px] text-accent mb-3">{principle.n}</div>
      <h4 className="font-display text-xl font-semibold tracking-snug mb-2">{principle.title}</h4>
      <p className="text-fg-muted text-sm leading-relaxed">{principle.body}</p>
    </div>
  )
}
