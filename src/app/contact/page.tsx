import type { Metadata } from 'next'
import { ContactBlock } from '@/components/sections/ContactBlock'
import { FadeIn } from '@/components/ui/FadeIn'
import { content } from '@/data/content'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <>
      {/* Page head */}
      <section className="pt-16 pb-12">
        <div className="flex items-center gap-3 font-mono text-[11px] text-fg-muted uppercase tracking-[0.06em] mb-5">
          <span className="w-6 h-px bg-accent" />
          Contact · {content.profile.available}
        </div>
        <h1
          className="font-display font-semibold tracking-tight m-0 mb-4"
          style={{ fontSize: 'clamp(56px,9vw,112px)', lineHeight: '0.95', letterSpacing: '-0.04em' }}
        >
          Let&apos;s build
          <br />
          something good.
        </h1>
      </section>

      <section className="pb-24 border-t border-line pt-10">
        <FadeIn>
          <ContactBlock />
        </FadeIn>
      </section>
    </>
  )
}
