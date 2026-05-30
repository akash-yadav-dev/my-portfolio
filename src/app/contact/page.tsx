import type { Metadata } from 'next'
import { ContactBlock } from '@/components/sections/ContactBlock'
import { FadeIn } from '@/components/ui/FadeIn'
import { content } from '@/data/content'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Akash Yadav — freelance full-stack engineer. Available for project-based, hourly, or retainer work. Email is fastest.',
}

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
          style={{ fontSize: 'clamp(48px,7vw,96px)', lineHeight: '0.95', letterSpacing: '-0.04em' }}
        >
          Start a project, ask a question,
          <br />
          or just say hello.
        </h1>
        <p className="text-fg-muted leading-[1.45] max-w-[68ch]" style={{ fontSize: 'clamp(17px,1.6vw,20px)' }}>
          I work on project-based engagements (4–12 weeks), but can also support hourly or retainer setups for the right fit. Best for product-focused teams that need strong execution across frontend and backend. Email is fastest.
        </p>
      </section>

      <section className="pb-24 border-t border-line pt-10">
        <FadeIn>
          <ContactBlock />
        </FadeIn>
      </section>
    </>
  )
}
