import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Feza Mattresses — Premium Sleep Comfort",
    template: "%s | Feza Mattresses"
  },
  description: "Experience the ultimate in sleep comfort with Feza Mattresses. Premium quality mattresses designed for perfect rest and support — wake up refreshed every morning.",
  keywords: ["Mattresses", "Sleep", "Comfort", "Premium Mattresses", "Beds", "Sleep Solutions", "Orthopedic Support", "Quality Sleep"],
  authors: [{ name: "Feza Mattresses" }],
  creator: "Feza Mattresses",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fezamattresses.com",
    title: "Feza Mattresses — Premium Sleep Comfort",
    description: "Experience the ultimate in sleep comfort with Feza Mattresses. Premium quality mattresses designed for perfect rest and support — wake up refreshed every morning.",
    siteName: "Feza Mattresses",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feza Mattresses — Premium Sleep Comfort",
    description: "Experience the ultimate in sleep comfort with Feza Mattresses. Premium quality mattresses designed for perfect rest and support — wake up refreshed every morning.",
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
