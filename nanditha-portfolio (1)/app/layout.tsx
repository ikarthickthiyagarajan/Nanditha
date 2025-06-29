import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nanditha G S - Biotechnology Innovator",
  description:
    "Portfolio of Nanditha G S - Biotechnology researcher, microbiology expert, and scientific innovator pioneering the future of biological sciences.",
  keywords: "biotechnology, microbiology, research, scientist, innovation, molecular biology",
  authors: [{ name: "Nanditha G S" }],
  openGraph: {
    title: "Nanditha G S - Biotechnology Innovator",
    description: "Portfolio of Nanditha G S - Biotechnology researcher and scientific innovator",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
