import Link from 'next/link'
import type { Article } from '@/data/content'

interface WritingCardProps {
  article: Article
}

export function WritingCard({ article }: WritingCardProps) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className="group block p-5 border border-line rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-md h-full"
      style={{ background: 'var(--bg)', display: 'block' }}
    >
      <div className="flex justify-between font-mono text-[10px] text-fg-subtle uppercase tracking-[0.12em] mb-3">
        <span>{article.date}</span>
        <span>{article.readTime}</span>
      </div>
      <h4
        className="font-display text-lg font-semibold leading-snug mb-3 transition-colors duration-100 group-hover:text-accent"
        style={{ letterSpacing: '-0.02em' }}
      >
        {article.title}
      </h4>
      <p className="text-fg-muted text-sm leading-relaxed">{article.excerpt}</p>
    </Link>
  )
}
