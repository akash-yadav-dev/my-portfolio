import type { Metadata } from 'next'
import { ContactBlock } from '@/components/sections/ContactBlock'
import { FadeIn } from '@/components/ui/FadeIn'
import { content } from '@/data/content'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Akash Yadav. Available for freelance and project work. Email is the fastest way to reach me.',
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
          I usually take on projects that run from about four to twelve weeks, and I am also open to hourly or ongoing work for the right fit. I work best with teams building websites and apps, especially booking and ordering platforms. Email is the fastest way to reach me, and I reply within a day.
        </p>
      </section>

      <section className="pb-16 border-t border-line pt-10">
        <FadeIn>
          <ContactBlock />
        </FadeIn>
      </section>
    </>
  )
}
