"use client"
import { Globe, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const quickLinks = ["About Us", "Our Team", "Testimonials", "Projects"]

const explore = [
  "Walk in Closet",
  "Wardrobe Closet",
  "U-Shape Kitchen",
  "Pantry Kitchen",
  "Doors",
]

const contact = [
  { icon: Globe, label: "www.idealhome.ae", href: "/" },
  {
    icon: Mail,
    label: "info@idealhome.com",
    href: "mailto:info@idealhome.com",
  },
  { icon: Phone, label: "+971-000-00-000", href: "tel:+971000000000" },
  { icon: Phone, label: "971 (0)50 312 2300", href: "tel:+97150312300" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/solutions/kitchen.png"
          alt="Kitchen background"
          className="h-full w-full object-cover"
          fill
        />
        <div className="absolute inset-0 z-10 bg-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-8 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              {/* Logo mark */}
              <Image
                src="/logo.png"
                alt="Ideal Factory Logo"
                width={150}
                height={150}
                className="shrink-0"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Our kitchens may not be able to whisk you away to sun kissed
              foreign shores, but our collection boasts all the quality
              craftsmanship and style..
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-base font-bold text-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="text-sm transition hover:text-primary"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-bold text-primary">Explore</h4>
            <ul className="space-y-3">
              {explore.map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-sm transition hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-bold text-primary">Contact</h4>
            <ul className="space-y-3">
              {contact.map((contact) => (
                <li key={contact.label}>
                  <Link
                    href={contact.href}
                    className="flex items-center gap-2.5 text-sm transition hover:text-primary"
                  >
                    <contact.icon
                      size={16}
                      className="shrink-0 text-primary"
                      strokeWidth={1.6}
                    />
                    {contact.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-8 border-t border-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>Copyright ©2025 lumicore all rights reserved</p>
          <div className="flex gap-6">
            <Link href="/" className="transition hover:text-primary">
              Terms &amp; Condition
            </Link>
            <Link href="/" className="transition hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
