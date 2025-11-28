import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Shanu's Dental — Comfortable Dentistry",
    template: "%s | Shanu's Dental"
  },
  description: "Modern dental treatment without pain and fear — in a calm atmosphere, with care for every member of your family.",
  keywords: ["Dentist", "Dental Clinic", "Implantation", "Veneers", "Teeth Whitening", "Orthodontics", "Dental Care", "Comfortable Dentistry"],
  authors: [{ name: "Shanu's Dental" }],
  creator: "Shanu's Dental",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shanusdental.ae",
    title: "Shanu's Dental — Comfortable Dentistry",
    description: "Modern dental treatment without pain and fear — in a calm atmosphere, with care for every member of your family.",
    siteName: "Shanu's Dental",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanu's Dental — Comfortable Dentistry",
    description: "Modern dental treatment without pain and fear — in a calm atmosphere, with care for every member of your family.",
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
