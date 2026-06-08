"use client"
import { useRef } from "react"
import { motion } from "motion/react"
import { CircleArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <section className="relative flex h-dvh w-full items-center justify-center overflow-hidden px-3 lg:px-6">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-dvh w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/80" />

      <div className="relative z-20 flex w-full flex-col gap-6 p-3 lg:gap-10 lg:p-6">
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-lexend text-4xl font-bold"
        >
          Design & Delivery of Your Villa Interiors
          <br />
          <span className="text-primary">Made Simple</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="max-w-md text-sm leading-relaxed lg:text-lg"
        >
          Kitchens, closets, doors, and premium uPVC windows designed,
          manufactured, and installed by one trusted Emirati factory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <Button className="group h-12 gap-3 bg-white px-6 text-black hover:bg-white hover:text-black">
            Get Your FREE 3D Design Now
            <CircleArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
