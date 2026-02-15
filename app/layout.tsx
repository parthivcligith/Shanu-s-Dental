import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "James Badminton Academy — Elite Badminton Training",
    template: "%s | James Badminton Academy"
  },
  description: "Professional badminton academy offering elite training, coaching, and competitive programs for all skill levels. Master the sport with expert instructors.",
  keywords: ["Badminton Academy", "Badminton Training", "Badminton Coaching", "Badminton Lessons", "Sports Academy", "Badminton Club", "Competitive Badminton"],
  authors: [{ name: "James Badminton Academy" }],
  creator: "James Badminton Academy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamesbaadmintonacademy.com",
    title: "James Badminton Academy — Elite Badminton Training",
    description: "Professional badminton academy offering elite training, coaching, and competitive programs for all skill levels. Master the sport with expert instructors.",
    siteName: "James Badminton Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Badminton Academy — Elite Badminton Training",
    description: "Professional badminton academy offering elite training, coaching, and competitive programs for all skill levels. Master the sport with expert instructors.",
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
