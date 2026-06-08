import type { Metadata } from "next"
import { Inter, Lexend } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ideal Factory",
  description:
    "One factory for kitchens, wardrobes, interior doors, and premium uPVC windows. Designed, manufactured, and installed by one trusted Emirati factory.",
  keywords:
    "kitchen design UAE, wardrobe closet Dubai, interior doors Abu Dhabi, uPVC windows UAE, villa interior design, modular kitchen",
  openGraph: {
    title: "Ideal Factory",
    description:
      "One factory for kitchens, wardrobes, interior doors, and premium uPVC windows. Designed, manufactured, and installed by one trusted Emirati factory.",
    type: "website",
    locale: "en_AE",
    siteName: "Ideal Factory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideal Factory",
    description:
      "One factory for kitchens, wardrobes, interior doors, and premium uPVC windows. Designed, manufactured, and installed by one trusted Emirati factory.",
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
      className={`${inter.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
