import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ExperienceRow } from '@/components/ui/ExperienceRow'
import { PrincipleCard } from '@/components/ui/PrincipleCard'
import { SkillBar } from '@/components/ui/SkillBar'
import { FadeIn } from '@/components/ui/FadeIn'
import { content } from '@/data/content'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  const { about, skills, experience } = content

  return (
    <>
      {/* Page head */}
      <section className="pt-16 pb-12">
        <div className="flex items-center gap-3 font-mono text-[11px] text-fg-muted uppercase tracking-[0.06em] mb-5">
          <span className="w-6 h-px bg-accent" />
          About
        </div>
        <h1
          className="font-display font-semibold tracking-tight m-0"
          style={{ fontSize: 'clamp(56px,9vw,112px)', lineHeight: '0.95', letterSpacing: '-0.04em' }}
        >
          Generalist who
          <br />
          writes the schema first.
        </h1>
      </section>

      {/* Bio + Skills */}
      <section className="pb-24 border-t border-line pt-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <FadeIn>
            <div>
              <p className="text-fg leading-relaxed mb-4" style={{ fontSize: 'clamp(16px,1.5vw,19px)' }}>
                {about.intro}
              </p>
              {about.body.map((para, i) => (
                <p key={i} className="text-fg-muted leading-relaxed mb-4" style={{ fontSize: 'clamp(16px,1.5vw,19px)' }}>
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="p-6 rounded-lg border border-line" style={{ background: 'var(--bg-sunken)' }}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-subtle mb-4">
                Stack — current
              </h4>
              <div className="flex flex-col">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
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
