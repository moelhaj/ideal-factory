"use client"
import { useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react"
import { Button } from "./ui/button"
import Image from "next/image"
import { Menu, PhoneCall, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { label: "Our Service", href: "/" },
  { label: "Our Projects", href: "/" },
  { label: "About Us", href: "/" },
  { label: "Contact Us", href: "/" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const { scrollY } = useScroll()
  const latestScrollRef = useRef(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const difference = latest - latestScrollRef.current
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0)
      latestScrollRef.current = latest
    }
  })

  const variants = {
    hidden: { y: "-100%" },
    visible: { y: "0%" },
  }
  return (
    <motion.header
      animate={isHidden ? "hidden" : "visible"}
      variants={variants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed z-50 flex w-full justify-center p-3 lg:p-6"
    >
      <nav className="flex w-full flex-col rounded-lg bg-black/45 px-3 py-3 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <Button
              onClick={() => setMobileOpen((prev) => !prev)}
              variant="ghost"
              aria-label="Open menu"
              className="lg:hidden"
            >
              {mobileOpen ? <X /> : <Menu />}
            </Button>

            <ul className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="transition-colors hover:text-primary"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/">
            <Image
              src="/logo.png"
              alt="Ideal Factory Logo"
              width={100}
              height={100}
            />
            <span className="sr-only">Ideal Factory</span>
          </Link>

          <div className="flex justify-end">
            <Button size="lg">
              <PhoneCall />
              <span className="hidden lg:inline">Start your project</span>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-3 rounded-2xl px-6 py-4 lg:hidden"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-white/85 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
