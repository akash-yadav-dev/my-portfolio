import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { content } from '@/data/content'

// Display serif — hero & section titles
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

// Body / UI sans
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

// Tags, numbers, code
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: `%s — ${content.profile.name}`,
    default: `${content.profile.name} — ${content.profile.role}`,
  },
  description:
    'Freelance full stack engineer for booking and transactional platforms, SaaS, and web apps. More than three years of experience and six live products. Available for project based work. Based in Bangalore, open to remote.',
  metadataBase: new URL('https://akashdev.pro'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: content.profile.name,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Providers>
          <Header />
          <div className="max-w-site mx-auto px-6 md:px-10 lg:px-14">
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
