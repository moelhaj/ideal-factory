"use client"
import { Check, Phone } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

const points = [
  "One factory for kitchens, wardrobes, doors, and premium window systems.",
  "Fast 3D design before production",
  "Precision manufacturing with European machinery",
  "Solutions designed for UAE villas",
]

export default function ChooseUs() {
  return (
    <section className="bg-white px-4 py-12 md:px-8 lg:px-16">
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-3xl"
        style={{
          background:
            "linear-gradient(135deg, #1a3a3a 0%, #0d2a2a 50%, #0a2020 100%)",
        }}
      >
        <div className="flex flex-col items-center gap-0 md:flex-row">
          <div className="relative flex min-h-[240px] w-full shrink-0 items-end justify-center md:w-[45%]">
            <Image
              src="/choose-us/kitchen-3d.png"
              alt="3D kitchen illustration"
              className="w-full max-w-sm translate-y-6 object-contain md:max-w-full"
              width={1000}
              height={800}
            />
          </div>

          <div className="flex-1 px-8 py-12 md:px-10 md:py-14">
            <h2 className="mb-6 text-3xl leading-tight font-bold text-white md:text-4xl">
              Why Villa Owners Choose
              <br />
              Ideal Factory
            </h2>

            <ul className="mb-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white">
                    <Check className="size-3 text-primary" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/85 md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="h-12 bg-white px-6 text-primary hover:bg-white/90"
            >
              <Phone size={16} className="text-primary" />
              Start Your Free 3D Design
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
