"use client"
import { useRef } from "react"
import { motion } from "motion/react"
import { Button } from "./ui/button"
import { CircleArrowRight } from "lucide-react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        onLoadedData={(e) => {
          ;(e.target as HTMLVideoElement).playbackRate = 0.6
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

      <div className="relative z-20 mx-6 flex w-full flex-col justify-center gap-6 p-3 lg:rounded-xl lg:bg-black/30 lg:p-6">
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="max-w-3xl text-3xl leading-tight font-bold text-white md:text-5xl lg:text-6xl"
        >
          Design & Delivery of Your Villa Interiors
          <br />
          <span className="text-primary">Made Simple</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="max-w-md text-sm leading-relaxed text-white/60 md:text-base lg:text-lg"
        >
          Kitchens, closets, doors, and premium uPVC windows designed,
          manufactured, and installed by one trusted Emirati factory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <Button
            size="lg"
            className="h-12 bg-white text-black hover:bg-white hover:text-black"
          >
            Get Your FREE 3D Design Now
            <CircleArrowRight />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/35 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
