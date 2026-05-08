import type { Metadata } from 'next'
import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { content } from '@/data/content'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: `%s — ${content.profile.name}`,
    default: `${content.profile.name} — ${content.profile.role}`,
  },
  description: content.profile.intro,
  metadataBase: new URL('https://akashyadav.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: content.profile.name,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <div className="max-w-site mx-auto px-6">
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
