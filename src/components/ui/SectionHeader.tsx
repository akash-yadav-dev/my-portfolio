interface SectionHeaderProps {
  num: string
  label: string
  title: string
  desc?: string
}

export function SectionHeader({ num, label, title, desc }: SectionHeaderProps) {
  const lines = title.split('\n')

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 mb-12 items-baseline">
      <div className="font-mono text-[11px] text-fg-subtle tracking-[0.12em] uppercase">
        <span className="text-accent font-medium">{num}</span>
        <span className="mx-2">/</span>
        {label}
      </div>
      <div>
        <h2 className="font-display font-semibold m-0" style={{ fontSize: 'clamp(28px,4vw,42px)', letterSpacing: '-0.02em', lineHeight: '1.05' }}>
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        {desc && (
          <p className="text-fg-muted mt-3 max-w-[56ch] text-base">{desc}</p>
        )}
      </div>
    </div>
  )
}
