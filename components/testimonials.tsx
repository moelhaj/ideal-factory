"use client"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "./ui/button"

const testimonials = [
  {
    id: 1,
    quote:
      "Working with Ideal Factory was the best decision for our villa. Every kitchen, closet and door felt like part of one coordinated whole.",
    name: "Khalid Al Mansoori",
    role: "Customer",
    avatar: "/testimonials/avatar-1.jpg",
  },
  {
    id: 2,
    quote:
      "Having one factory handle everything saved months of coordination and the finish quality is genuinely premium.",
    name: "Aisha Al Nuaimi",
    role: "Customer",
    avatar: "/testimonials/avatar-2.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-accent px-4 py-20 md:px-8 md:py-28 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:items-start md:gap-16 lg:flex-row">
          <div className="max-w-md flex-shrink-0">
            <p className="mb-3 text-sm font-semibold tracking-widest text-primary">
              Testimonials
            </p>
            <h2 className="mb-6 text-2xl leading-snug font-bold text-white md:text-3xl">
              What They&apos;re Talking About Company&nbsp;?
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-400">
              Real villa owners across the UAE have trusted Ideal Factory for
              kitchens, closets, doors and uPVC window systems.
            </p>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-zinc-400 text-zinc-400"
              >
                <ChevronLeft size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-white"
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <div className="flex snap-x snap-mandatory [scrollbar-width:none] gap-3 overflow-x-auto pb-3 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id + "-" + index}
                  className="flex flex-col justify-between rounded-2xl border border-white/8 bg-[#2d2829] p-6"
                >
                  <div className="mb-4">
                    <Quote />
                  </div>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-300 md:text-base">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-white/10">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          ;(e.target as HTMLImageElement).style.display = "none"
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[#4dd8e0]">
                        {testimonial.name}
                      </p>
                      <p className="text-xs tracking-wider text-gray-500 uppercase">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
