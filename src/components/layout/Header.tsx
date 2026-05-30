'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { content } from '@/data/content'

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className="sticky top-4 z-50 max-w-site mx-auto px-6 mt-5"
        style={{ position: 'sticky' }}
      >
        <div
          className="flex items-center justify-between px-5 py-3 rounded-full border border-line transition-shadow duration-200"
          style={{
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-mono text-[13px]">
            <span
              className="w-7 h-7 rounded-sm grid place-items-center overflow-hidden font-display font-semibold text-[11px]"
              style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
            >
              {content.profile.initial}
            </span>
            <span className="text-fg font-medium">{content.profile.name}</span>
          </Link>

          {/* Primary nav — desktop */}
          <nav className="hidden md:flex gap-6 font-mono text-[11px] text-fg-muted">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-100 hover:text-fg ${
                  isActive(item.href) ? 'text-fg' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-[0.06em] font-medium transition-all duration-200 hover:-translate-y-px"
              style={{
                background: 'var(--accent)',
                color: 'var(--accent-fg)',
              }}
            >
              Available
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-[34px] h-[34px] rounded-full border border-line-strong grid place-items-center text-fg"
              aria-label="Toggle menu"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                {menuOpen ? (
                  <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                ) : (
                  <>
                    <rect y="3" width="16" height="1.5" rx="0.75" />
                    <rect y="7.25" width="16" height="1.5" rx="0.75" />
                    <rect y="11.5" width="16" height="1.5" rx="0.75" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="fixed top-20 left-6 right-6 z-50 rounded-xl border border-line overflow-hidden md:hidden"
              style={{ background: 'var(--bg-elev)', boxShadow: 'var(--shadow-lg)' }}
            >
              {content.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between px-5 py-4 font-mono text-sm border-b border-line last:border-0 transition-colors hover:text-fg ${
                      isActive(item.href) ? 'text-fg' : 'text-fg-muted'
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
