"use client"
import {
  BrickWall,
  CircleArrowRight,
  Factory,
  GitCompareArrows,
  ImagePlay,
  PencilRuler,
  Wrench,
} from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"

const problems = [
  { label: "Quality Problems" },
  { label: "Delays during execution" },
  { label: "Poor value for money" },
  { label: "Weak after-sales support" },
]

const features = [
  {
    icon: <GitCompareArrows />,
    title: "Multiple Interior Systems",
    description:
      "One Factory. Kitchens, wardrobes, doors, and premium window systems—manufactured together in one facility for coordinated villa interiors.",
  },
  {
    icon: <PencilRuler />,
    title: "Coordinated Design",
    description:
      "Our designers ensure that kitchens, closets, doors, & window systems complement each other in style & proportion.",
  },
  {
    icon: <Wrench />,
    title: "After-Sales Support & Maintenance",
    description:
      "Our team installs every product with precision to ensure the final result reflects the original design.",
  },
  {
    icon: <Factory />,
    title: "Precision Manufacturing & Installation",
    description:
      "Manufactured in-house. Installed with precision. One accountable team.",
  },
]

const steps = [
  {
    label: "Upload Floor Plan",
    icon: <BrickWall />,
  },
  {
    label: "Get 3D Design",
    icon: <PencilRuler />,
  },
  {
    label: "Live Design Edit",
    icon: <ImagePlay />,
  },
]

export default function Features() {
  return (
    <section className="relative bg-white px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl rounded-3xl bg-muted p-8 md:p-14">
        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
          Why Villa Interior Projects Often Become Difficult?
        </h2>
        <p className="mb-7 text-sm leading-relaxed text-gray-400 md:text-base">
          When interior systems are sourced from multiple suppliers, the process
          becomes fragmented, making it difficult to coordinate a consistent
          final result. The lack of commitment leads to:
        </p>

        <div className="mb-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {problems.map((p) => (
            <div key={p.label} className="flex items-center gap-2">
              <CircleArrowRight
                size={18}
                className="shrink-0 text-gray-400"
                strokeWidth={1.5}
              />
              <span className="font-semibold text-white">{p.label}</span>
            </div>
          ))}
        </div>

        <div className="relative mb-10 overflow-hidden rounded-2xl">
          <video
            src="/hero-video.mp4"
            controls
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
          <div className="md:w-52 md:shrink-0">
            <h3 className="text-2xl leading-snug font-bold text-white">
              The Ideal Factory
              <br />
              Approach
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                className="rounded-2xl border border-white/[0.08] bg-white/5 p-5"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-primary">
                  {f.icon}
                </div>
                <h4 className="mb-2 font-semibold text-white">{f.title}</h4>
                <p className="text-sm leading-relaxed text-gray-400">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl">
        <Image
          src="/features/kitchen.jpg"
          alt="kitchen interior"
          className="absolute inset-0 h-full w-full object-cover"
          width={1200}
          height={800}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-8 p-8 md:p-14 lg:flex-row lg:items-center">
          {/* Left: text */}
          <div className="flex-1">
            <h3 className="mb-1 text-2xl font-bold text-white md:text-3xl">
              Design Your Villa Interiors
            </h3>
            <h3 className="mb-4 text-2xl font-bold text-[#4dd8e0] md:text-3xl">
              Before Spending a Dirham
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-gray-300 md:text-base">
              Upload your villa floor plan and collaborate live with our
              designers to create a full 3D interior concept within an hour.
            </p>

            {/* Checkmarks */}
            <div className="mb-6 grid grid-cols-2 gap-x-6 gap-y-2">
              {["No guessing", "No Expensive Redesigns", "No Delays"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4dd8e0]">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>

            <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Start Your 3D Interior Design
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/50">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6h7M6.5 3l3 3-3 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Right: step cards */}
          <div className="flex flex-row justify-center gap-3 md:gap-4">
            {steps.map((step) => (
              <div
                key={step.label}
                className="flex w-28 flex-col items-center gap-4 rounded-2xl border border-[#4dd8e0]/50 bg-white/5 p-5 text-center backdrop-blur-sm md:w-36"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4dd8e0]">
                  {step.icon}
                </div>
                <span className="text-sm leading-tight font-semibold text-white">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
