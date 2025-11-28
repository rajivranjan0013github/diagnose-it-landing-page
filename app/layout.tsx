import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "Diagnose It - The Clinical Puzzle Game",
  description:
    "Master clinical diagnosis through engaging medical puzzles. Practice real-world cases, build confidence, and become a better diagnostician.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/diagnose-it-logo.png",
    apple: "/diagnose-it-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
