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
    'About Akash Yadav — freelance full stack developer building websites and web apps. More than three years of experience. Based in Bangalore, open to remote work.',
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
              I build web apps
              <br />
              that people can rely on.
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
      <section className="pb-16 border-t border-line pt-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <FadeIn>
            <div>
              <p className="text-fg leading-relaxed mb-4" style={{ fontSize: 'clamp(17px,1.6vw,20px)' }}>
                I am a full stack developer with more than three years of experience building websites and web apps. In my day job I look after a large platform that handles over 400,000 records, so I have learned how to keep things fast, reliable, and easy to use even when there is a lot going on.
              </p>
              <p className="text-fg-muted leading-relaxed mb-4" style={{ fontSize: 'clamp(15px,1.4vw,18px)' }}>
                Outside of work I build my own products from start to finish. ImgToolz, DimlyPDF, and UnitCraft are free tools anyone can use right in their browser. PostQueue helps teams plan and schedule their social media posts, and FAQFlow is an app for online stores. They are all different, but the goal is always the same: something useful that simply works.
              </p>
              <p className="text-fg-muted leading-relaxed mb-0" style={{ fontSize: 'clamp(15px,1.4vw,18px)' }}>
                I am based in Bangalore and work with teams remotely. I enjoy projects like booking and ticketing websites, online products, and apps that need to stay fast as they grow. Right now I am focused on Artist Ada, with ConsentPulse and TrackProbe in progress.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="p-6 rounded-lg border border-line" style={{ background: 'var(--bg-sunken)' }}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-subtle mb-4">
Tools I work with
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
      <section className="py-16 border-t border-line">
        <FadeIn>
          <SectionHeader num="01" label="Principles" title="How I work." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {about.principles.map((principle, i) => (
            <FadeIn key={principle.n} delay={i * 0.08} className="h-full">
              <PrincipleCard principle={principle} />
            </FadeIn>
          ))}
        </div>
      </section>



      {/* Experience */}
      <section className="py-16 border-t border-line">
        <FadeIn>
          <SectionHeader num="02" label="Experience" title="Where I've worked." />
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
