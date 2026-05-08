import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { content } from '@/data/content'

interface Props {
  params: { slug: string }
}

const RESERVED_WRITING_SLUGS = new Set(['logic-first-ai'])

export async function generateStaticParams() {
  return content.writing
    .filter((article) => !RESERVED_WRITING_SLUGS.has(article.slug))
    .map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (RESERVED_WRITING_SLUGS.has(params.slug)) return { title: 'Not found' }

  const article = content.writing.find((a) => a.slug === params.slug)
  if (!article) return { title: 'Not found' }
  return { title: article.title, description: article.excerpt }
}

export default function ArticlePage({ params }: Props) {
  if (RESERVED_WRITING_SLUGS.has(params.slug)) notFound()

  const article = content.writing.find((a) => a.slug === params.slug)
  if (!article) notFound()

  return (
    <section className="py-16 pb-24 max-w-[70ch]">
      <Link
        href="/writing"
        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-fg-muted mb-8 hover:text-accent transition-colors duration-100"
      >
        ← All writing
      </Link>

      <div className="flex items-center gap-4 font-mono text-[10px] text-fg-subtle uppercase tracking-[0.12em] mb-5">
        <span>{article.date}</span>
        <span>·</span>
        <span>{article.readTime} read</span>
      </div>

      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
        {article.title}
      </h1>

      <p className="text-fg-muted text-xl leading-relaxed border-l-2 pl-4 mb-8" style={{ borderColor: 'var(--accent)' }}>
        {article.excerpt}
      </p>

      <div
        className="p-8 rounded-lg border border-line text-center"
        style={{ background: 'var(--bg-sunken)' }}
      >
        <p className="font-mono text-[11px] text-fg-subtle mb-2">Full article</p>
        <p className="text-fg-muted text-sm">
          This article lives at{' '}
          <Link href="#" className="text-accent border-b border-current hover:opacity-80 transition-opacity">
            {content.profile.writingUrl}
          </Link>
        </p>
      </div>
    </section>
  )
}
