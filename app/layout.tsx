import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Shanu's Dental — Comfortable Dentistry",
  description:
    "Modern dental treatment without pain and fear — in a calm atmosphere, with care for every member of your family.",
  generator: 'v0.app'
}

import { Preloader } from "@/components/preloader"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        <Preloader />
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
