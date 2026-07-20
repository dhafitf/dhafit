import type { Metadata } from 'next'
import { Noto_Sans_Mono, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

import Navbar from '@/blocks/navbar'
import Footer from '@/sections/footer-section'
import cn from '~/libs/cn'
import GoogleAnalytics from './GoogleAnalytics'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const notoMono = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-noto-mono',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dhafit.vercel.app'),
  title: {
    default: 'Dhafit Farenza',
    template: '%s | Dhafit Farenza',
  },
  description: 'Translator & full-stack developer specializing in building web applications.',
  openGraph: {
    title: 'Dhafit Farenza',
    description: 'Translator & full-stack developer specializing in building web applications.',
    url: 'https://dhafit.vercel.app',
    siteName: 'Dhafit Farenza',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Dhafit Farenza',
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={cn(spaceGrotesk.variable, jakarta.variable, notoMono.variable)}>
      {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
      )}
      <body className='bg-background text-foreground font-body min-h-dvh antialiased flex flex-col'>
        <Navbar />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
