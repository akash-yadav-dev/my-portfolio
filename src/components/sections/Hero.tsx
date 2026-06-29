import Link from 'next/link'
import Image from 'next/image'
import { parseRichText } from '@/lib/utils'
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
      </div>

      <div
        className={
          profile.showPhoto
            ? 'grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-center'
            : 'max-w-3xl'
        }
      >
        <div>
          {/* Heading */}
          <h1
            className="hero-reveal font-display font-semibold mb-6"
            style={{
              fontSize: 'clamp(38px,6vw,60px)',
              letterSpacing: '-0.02em',
              lineHeight: '1.04',
              whiteSpace: 'pre-line',
            }}
          >
            {taglineParts.map((part, i) =>
              part.type === 'accent' ? (
                <em key={i} className="italic font-light text-accent">
                  {part.content}
                </em>
              ) : (
                <span key={i}>{part.content}</span>
              )
            )}
          </h1>

          {/* Sub */}
          <p
            className="hero-reveal text-fg-muted mb-8 leading-[1.6]"
            style={{ fontSize: 'clamp(16px,1.4vw,19px)', maxWidth: '52ch' }}
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
        </div>

        {profile.showPhoto && (
          <div className="hero-reveal">
            <div className="relative w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden border border-line bg-bg-sunken shadow-md">
              <Image
                src={profile.photo}
                alt={`${profile.name} headshot`}
                width={640}
                height={760}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        )}
      </div>

      {/* Stats — clean spacing, no separators */}
      <dl className="hero-reveal grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 mt-16 pt-8 border-t border-line">
        {stats.map((stat) => (
          <div key={stat.label}>
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
