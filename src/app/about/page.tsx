import type { Metadata } from 'next'
import Image from 'next/image'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ExperienceRow } from '@/components/ui/ExperienceRow'
import { PrincipleCard } from '@/components/ui/PrincipleCard'
import { SkillBar } from '@/components/ui/SkillBar'
import { CodeSnippet } from '@/components/sections/CodeSnippet'
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
              className="font-display font-semibold tracking-tight m-0"
              style={{ fontSize: 'clamp(48px,7vw,96px)', lineHeight: '0.95', letterSpacing: '-0.04em' }}
            >
              Freelance Full-Stack Engineer
              <br />
              for SaaS & Platforms
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
              <p className="text-fg leading-relaxed mb-4" style={{ fontSize: 'clamp(18px,1.7vw,22px)' }}>
                I help product teams ship production SaaS, platforms, and web apps — from zero to launch. 3+ years experience building, scaling, and maintaining live systems. Available for freelance and project-based work. Based in Bangalore, open to remote.
              </p>
              <p className="text-fg-muted leading-relaxed mb-4" style={{ fontSize: 'clamp(16px,1.5vw,19px)' }}>
                Previously: izmo Ltd (car dealership platform, 400k+ records, React/NestJS), PostQueue (multi-tenant social publishing, Temporal workflows), FAQFlow (Shopify AI app), DimlyPDF (client-side PDF tool, MuPDF WebAssembly).
              </p>
              <p className="text-fg-muted leading-relaxed mb-0" style={{ fontSize: 'clamp(16px,1.5vw,19px)' }}>
                I enjoy projects where product clarity and technical execution both matter: SaaS builds, platform foundations, and user-facing systems that need to scale cleanly.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="p-6 rounded-lg border border-line" style={{ background: 'var(--bg-sunken)' }}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-subtle mb-4">
                Skills — grouped
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
          <SectionHeader num="—" label="Principles" title="How I work." />
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
          <SectionHeader num="—" label="Experience" title="A list, well set." />
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
