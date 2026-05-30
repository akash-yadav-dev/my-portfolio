import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        'bg-sunken': 'var(--bg-sunken)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-subtle': 'var(--fg-subtle)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        accent: 'var(--accent)',
        'accent-fg': 'var(--accent-fg)',
        'accent-soft': 'var(--accent-soft)',
        'accent-border': 'var(--accent-border)',
        'accent-dim': 'var(--accent-dim)',
        'accent-hover': 'var(--accent-hover)',
        success: 'var(--success)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1200px',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.04em',
        snug: '-0.02em',
        wide: '0.06em',
        wider: '0.12em',
      },
      lineHeight: {
        none: '0.92',
        tight: '0.95',
        snug: '1.1',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-out infinite',
        blink: 'blink 1.1s steps(1) infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.2,0.8,0.2,1) both',
        'fade-in': 'fade-in 0.4s ease both',
      },
      keyframes: {
        'pulse-dot': {
          '0%': { boxShadow: '0 0 0 0 rgb(140 74 53 / 0.5)' },
          '70%': { boxShadow: '0 0 0 12px rgb(140 74 53 / 0)' },
          '100%': { boxShadow: '0 0 0 0 rgb(140 74 53 / 0)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '14px',
        xl: '22px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
