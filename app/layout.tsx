import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

import cn from "~/libs/cn"
import GoogleAnalytics from "./GoogleAnalytics"
import Navbar from "@/molecules/Navbar"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://dhafit.vercel.app"),
  title: {
    default: "Dhafit Farenza",
    template: "%s | Dhafit Farenza",
  },
  description: "Translator & full-stack developer specializing in building web applications.",
  openGraph: {
    title: "Dhafit Farenza",
    description: "Translator & full-stack developer specializing in building web applications.",
    url: "https://dhafit.vercel.app",
    siteName: "Dhafit Farenza",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Dhafit Farenza",
    card: "summary_large_image",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
      )}
      <body
        className={cn(
          montserrat.className,
          "bg-[#1c1e1f] text-gray-300 w-full max-w-3xl mx-auto px-5 mt-3 mb-6"
        )}
      >
        <Navbar />
        <main className="mt-12">{children}</main>
      </body>
    </html>
  )
}
