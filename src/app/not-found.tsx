import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="font-mono text-[11px] text-fg-muted uppercase tracking-[0.06em] mb-5 flex items-center gap-3">
        <span className="w-6 h-px bg-accent" />
        404
      </div>
      <h1
        className="font-display font-semibold tracking-tight m-0 mb-4"
        style={{ fontSize: 'clamp(56px,9vw,112px)', lineHeight: '0.95', letterSpacing: '-0.04em' }}
      >
        No such page.
      </h1>
      <p className="text-fg-muted leading-[1.35] max-w-[50ch] mb-8" style={{ fontSize: 'clamp(18px,2vw,24px)' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border border-line-strong transition-all duration-200 hover:border-fg hover:bg-bg-sunken group"
      >
        ← Back home
      </Link>
    </section>
  )
}
