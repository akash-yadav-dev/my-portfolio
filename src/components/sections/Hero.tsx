import Link from 'next/link'
import { cn, parseRichText } from '@/lib/utils'
import { content } from '@/data/content'

export function Hero() {
  const { profile, stats } = content
  const taglineParts = parseRichText(profile.tagline)

  return (
    <section className="py-16 md:py-20">
      {/* Meta bar */}
      <div className="hero-reveal flex gap-5 flex-wrap font-mono text-[11px] text-fg-muted mb-8">
        <span className="flex items-center gap-2">
          <span className="pulse-dot" />
          {profile.available}
        </span>
        <span>{profile.location}</span>
        <span>{profile.siteVersion}</span>
        <span>{profile.lastShipped}</span>
      </div>

      {/* Heading */}
      <h1
        className="hero-reveal font-display font-semibold mb-5"
        style={{
          fontSize: 'clamp(72px,12vw,168px)',
          letterSpacing: '-0.05em',
          lineHeight: '0.9',
          whiteSpace: 'pre-line',
        }}
      >
        {taglineParts.map((part, i) =>
          part.type === 'accent' ? (
            <em key={i} className="not-italic text-accent cursor-blink">
              {part.content}
            </em>
          ) : (
            <span key={i}>{part.content}</span>
          )
        )}
      </h1>

      {/* Sub */}
      <p
        className="hero-reveal text-fg-muted mb-8 leading-[1.35]"
        style={{ fontSize: 'clamp(18px,2vw,24px)', maxWidth: '60ch' }}
      >
        {profile.intro}
      </p>

      {/* CTAs */}
      <div className="hero-reveal flex gap-3 flex-wrap items-center">
        <Link
          href="/contact"
          className="btn-accent-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 group"
          style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
        >
          Start a project
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border border-line-strong transition-all duration-200 hover:border-fg hover:bg-bg-sunken group"
        >
          See selected work
          <span className="transition-transform duration-200 group-hover:translate-x-1 opacity-50">→</span>
        </Link>
      </div>

      {/* Stats — 4-col desktop, 2-col mobile with correct borders */}
      <dl className="hero-reveal grid grid-cols-2 md:grid-cols-4 mt-16 border-t border-line">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              'py-5 pr-5 border-r border-line',
              // Mobile 2-col: even-indexed items (0,2) keep right border; odd-indexed (1,3) remove it
              i % 2 === 1 && 'border-r-0 md:border-r border-line',
              // Desktop: last item never has right border
              i === stats.length - 1 && 'md:border-r-0',
            )}
          >
            <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-subtle mb-2">
              {stat.label}
            </dt>
            <dd className="font-display text-3xl font-semibold tracking-snug m-0">
              {stat.value}
              {stat.suffix && (
                <small className="font-mono text-[11px] text-fg-muted font-normal ml-1.5">
                  {stat.suffix}
                </small>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
