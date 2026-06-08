"use client"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { motion } from "motion/react"

const cards = [
  {
    title: "Kitchens",
    description: "Designed for daily use, built for long-term performance",
    image: "/solutions/kitchen.png",
    icon: "/svg/kitchen.svg",
  },
  {
    title: "Wardrobes & Closets",
    description: "Structured storage that stays organized over time",
    image: "/solutions/closet.png",
    icon: "/svg/dressing-table.svg",
  },
  {
    title: "Interior Doors",
    description: "Precise finishes that hold up with everyday use",
    image: "/solutions/door.png",
    icon: "/svg/doors.svg",
  },
  {
    title: "Premium Window Systems",
    description: "Sealed systems for better comfort and control",
    image: "/solutions/windows.jpg",
    icon: "/svg/kitchen.svg",
  },
]

export default function Solutions() {
  return (
    <div className="relative h-[280vh] lg:h-[280dvh]">
      <div className="absolute sticky inset-0 top-0 h-screen w-full">
        <Image
          src="/solutions/solutions-villa.jpg"
          alt="Solutions Villa"
          className="h-full w-full object-cover"
          fill
        />
        <div className="absolute inset-0 h-screen w-full bg-black/80" />
      </div>

      <div className="absolute inset-0 z-10 flex min-h-screen w-full flex-col items-center justify-center px-3 lg:px-6">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-2 font-lexend text-3xl font-bold text-white lg:text-4xl">
            Our Solutions <br /> We provide all types of integrated
          </h2>
          <p className="mt-6 font-lexend text-3xl font-bold text-primary lg:text-4xl">
            KITCHEN | CLOSET | DOOR Services
          </p>

          <div className="mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                className="overflow-hidden rounded-2xl bg-muted"
              >
                <div className="relative h-52 overflow-hidden sm:h-64 md:h-72">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    fill
                  />
                  <div className="absolute top-4 left-4 rounded-xl bg-white/90 p-2.5 shadow">
                    <Image
                      src={card.icon}
                      alt={`${card.title} icon`}
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="relative flex flex-col p-4 md:p-6">
                  <h3 className="mb-1 text-lg font-bold text-white md:mb-1.5 md:text-2xl">
                    {card.title}
                  </h3>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs break-words text-accent md:text-sm">
                      {card.description}
                    </p>
                    <Button size="lg">
                      <ArrowRight size={18} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-8 text-center md:mt-12"
          >
            <Button size="lg" className="h-12">
              Explore Our Projects
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
