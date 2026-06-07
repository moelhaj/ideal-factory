import { cn } from "@/lib/utils"
import type { Metadata } from "next"

import { Inter, Lexend } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const lexend = Lexend({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: "Ideal Factory | Villa Interior Design & Manufacturing UAE",
  description:
    "One factory for kitchens, wardrobes, interior doors, and premium uPVC windows. Designed, manufactured, and installed by one trusted Emirati factory.",
  keywords:
    "kitchen design UAE, wardrobe closet Dubai, interior doors Abu Dhabi, uPVC windows UAE, villa interior design, modular kitchen",
  openGraph: {
    title: "Ideal Factory | Villa Interior Design & Manufacturing UAE",
    description:
      "One factory for kitchens, wardrobes, interior doors, and premium uPVC windows.",
    type: "website",
    locale: "en_AE",
    siteName: "Ideal Factory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideal Factory",
    description: "Villa interior design & manufacturing UAE",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        inter.variable,
        "font-heading",
        lexend.variable
      )}
    >
      <body>{children}</body>
    </html>
  )
}
