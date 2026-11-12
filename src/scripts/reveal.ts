// Scroll-reveal — replaces Framer Motion's whileInView (same feel, zero framework JS).
// Elements with [data-reveal] fade up once when they enter the viewport.
// The CSS only hides them under html.js, so this runs after the html.js
// class is applied (script order in <head> guarantees it).
const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

function show(el: HTMLElement) {
  el.style.opacity = '1'
  el.style.transform = 'translateY(0)'
}

if (typeof IntersectionObserver !== 'undefined' && els.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          show(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.1, rootMargin: '-60px 0px' },
  )
  for (const el of els) observer.observe(el)

  // Elements already in view when the page loads: reveal immediately.
  // (The observer callback may not fire for already-visible elements.)
  for (const el of els) {
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < vh - 60 && rect.bottom > 0) show(el)
  }
} else {
  // No IntersectionObserver (very old browsers) — just show everything.
  for (const el of els) show(el)
}
