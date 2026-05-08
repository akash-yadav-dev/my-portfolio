import Link from 'next/link'
import { content } from '@/data/content'

export function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-4 py-12 mt-12 border-t border-line font-mono text-[11px] text-fg-muted">
      <span>{content.footer.credit}</span>
      <nav className="flex gap-5">
        {content.footer.links.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-fg transition-colors duration-100">
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  )
}
