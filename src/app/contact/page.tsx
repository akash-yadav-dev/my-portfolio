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
          className="font-display font-semibold m-0 mb-4"
          style={{ fontSize: 'clamp(34px,5vw,56px)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
        >
          Start a project, ask a question,
          <br />
          or just say hello.
        </h1>
        <p className="text-fg-muted leading-[1.6] max-w-[64ch]" style={{ fontSize: 'clamp(16px,1.5vw,19px)' }}>
          I take project based engagements of roughly four to twelve weeks, and can also support hourly or retainer setups for the right fit. The best fit is a product team that needs strong execution across frontend and backend, and booking and transactional platforms especially. Email is fastest, and I reply within a day.
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
