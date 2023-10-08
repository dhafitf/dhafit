import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

import cn from "~/libs/cn"
import Navbar from "@/molecules/Navbar"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dhafit Farenza",
  description: "Translator & full-stack developer specializing in building web applications",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
