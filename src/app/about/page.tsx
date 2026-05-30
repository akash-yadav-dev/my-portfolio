import type { Metadata } from 'next'
import Image from 'next/image'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ExperienceRow } from '@/components/ui/ExperienceRow'
import { PrincipleCard } from '@/components/ui/PrincipleCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { content } from '@/data/content'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Akash Yadav — freelance full-stack engineer for SaaS, platforms, and web apps. 3+ years experience. Based in Bangalore, open to remote.',
}

export default function AboutPage() {
  const { about, skills, experience } = content

  return (
    <>
      {/* Page head */}
      <section className="pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_140px] gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-fg-muted uppercase tracking-[0.06em] mb-5">
              <span className="w-6 h-px bg-accent" />
              About
            </div>
            <h1
              className="font-display font-semibold m-0"
              style={{ fontSize: 'clamp(34px,5vw,56px)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
            >
              Full-stack engineer who
              <br />
              ships platforms that hold up.
            </h1>
          </div>

          <div className="w-[120px] h-[120px] rounded-full overflow-hidden border border-line bg-bg-sunken mx-0 lg:mx-auto">
            <Image
              src={content.profile.photo}
              alt={`${content.profile.name} profile photo`}
              width={240}
              height={240}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Bio + Skills */}
      <section className="pb-24 border-t border-line pt-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <FadeIn>
            <div>
              <p className="text-fg leading-relaxed mb-4" style={{ fontSize: 'clamp(17px,1.6vw,20px)' }}>
                I am a full stack engineer with more than three years building production web apps. By day I own frontend delivery on a platform that manages more than 400,000 records, so I spend a lot of time on the things that make or break a booking or transactional system. That means keeping data fast at scale, handling state cleanly, and shipping work that does not fall over.
              </p>
              <p className="text-fg-muted leading-relaxed mb-4" style={{ fontSize: 'clamp(15px,1.4vw,18px)' }}>
                Outside the day job I ship products end to end. ImgToolz, DimlyPDF, and UnitCraft are live tools that run entirely in the browser. PostQueue is a team scheduling platform built on durable queues and retries, and FAQFlow is a Shopify app preparing for its store listing. Across all of them the pattern is the same. Reliable flows, clean APIs, and a launch that actually runs.
              </p>
              <p className="text-fg-muted leading-relaxed mb-0" style={{ fontSize: 'clamp(15px,1.4vw,18px)' }}>
                I am based in Bangalore and work remotely with product teams. The best fit is a build where product clarity and technical execution both matter, such as booking and ticketing platforms, SaaS, and user facing systems that need to scale cleanly. Right now I am focused on Artist Ada, with ConsentPulse and TrackProbe in progress.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="p-6 rounded-lg border border-line" style={{ background: 'var(--bg-sunken)' }}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-subtle mb-4">
Stack I reach for
              </h4>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="font-mono text-[11px] text-fg-muted mb-1">Frontend</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded">React.js</span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded">Next.js</span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded">TypeScript</span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded">Tailwind CSS</span>
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[11px] text-fg-muted mb-1 mt-3">Backend</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded">NestJS</span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded">Go</span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded">Node.js</span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded">PostgreSQL</span>
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[11px] text-fg-muted mb-1 mt-3">DevOps</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded">Docker</span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded">Kubernetes</span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded">CI/CD</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 border-t border-line">
        <FadeIn>
          <SectionHeader num="01" label="Principles" title="How I work." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {about.principles.map((principle, i) => (
            <FadeIn key={principle.n} delay={i * 0.08}>
              <PrincipleCard principle={principle} />
            </FadeIn>
          ))}
        </div>
      </section>



      {/* Experience */}
      <section className="py-24 border-t border-line">
        <FadeIn>
          <SectionHeader num="02" label="Experience" title="A list, well set." />
        </FadeIn>
        <div className="flex flex-col">
          {experience.map((exp, i) => (
            <FadeIn key={exp.when + exp.role} delay={i * 0.06}>
              <ExperienceRow exp={exp} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
