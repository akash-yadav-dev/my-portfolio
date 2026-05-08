'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Skill } from '@/data/content'

export function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div
      ref={ref}
      className="grid grid-cols-[1fr_80px] items-center gap-4 font-mono text-[11px] py-2 border-b border-line last:border-0"
    >
      <span className="text-fg-muted">{skill.name}</span>
      <div className="h-1 bg-line rounded-full overflow-hidden">
        <motion.span
          className="block h-full rounded-full"
          style={{ background: 'var(--accent)' }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.06,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        />
      </div>
    </div>
  )
}
