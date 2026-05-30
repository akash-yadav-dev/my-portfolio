import Link from 'next/link'
import { parseRichText } from '@/lib/utils'
import { content } from '@/data/content'

export function ContactBlock() {
  const { contact, profile } = content
  const headlineParts = parseRichText(contact.headline)

  return (
    <div
      className="px-8 md:px-14 py-14 md:py-16 rounded-xl overflow-hidden"
      style={{ background: 'var(--fg)', color: 'var(--bg)' }}
    >
      <h2
        className="font-display font-semibold mb-6"
        style={{
          fontSize: 'clamp(30px,4.5vw,52px)',
          lineHeight: '1.05',
          letterSpacing: '-0.02em',
          whiteSpace: 'pre-line',
        }}
      >
        {headlineParts.map((part, i) =>
          part.type === 'accent' ? (
            <em key={i} className="not-italic text-accent">
              {part.content}
            </em>
          ) : (
            <span key={i}>{part.content}</span>
          )
        )}
      </h2>

      <p
        className="mb-6 leading-[1.4] max-w-[50ch]"
        style={{ fontSize: 'clamp(16px,1.5vw,19px)', opacity: 0.65 }}
      >
        {contact.body}
      </p>

      <Link
        href={`mailto:${profile.email}`}
        className="btn-accent-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 group"
        style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
      >
        {profile.email}
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </Link>

      <dl
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 pt-8 font-mono text-[11px]"
        style={{ borderTop: '1px solid rgba(128,128,128,0.2)' }}
      >
        {contact.channels.map((ch) => (
          <div key={ch.label}>
            <dt
              className="uppercase tracking-[0.12em] mb-1.5"
              style={{ opacity: 0.45, fontSize: '10px' }}
            >
              {ch.label}
            </dt>
            <dd className="m-0">
              <Link
                href={ch.href}
                className="text-accent border-b border-current hover:opacity-80 transition-opacity"
              >
                {ch.value}
              </Link>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
