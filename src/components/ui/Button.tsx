import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  href?: string
  variant?: 'accent' | 'ghost'
  size?: 'default' | 'small'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Button({ href, variant = 'accent', size = 'default', children, className, onClick }: ButtonProps) {
  const base = cn(
    'inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap',
    size === 'small'
      ? 'px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.06em]'
      : 'px-6 py-3.5 text-sm',
    variant === 'accent'
      ? 'hover:-translate-y-0.5 active:translate-y-0'
      : 'border border-line-strong hover:border-fg hover:bg-bg-sunken',
    className
  )

  const style =
    variant === 'accent'
      ? { background: 'var(--accent)', color: 'var(--accent-fg)' }
      : {}

  if (href) {
    return (
      <Link href={href} className={base} style={style}>
        {children}
      </Link>
    )
  }

  return (
    <button className={base} style={style} onClick={onClick}>
      {children}
    </button>
  )
}
