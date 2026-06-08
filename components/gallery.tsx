"use client"
import { useState, useRef } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

const filters = ["All", "Kitchen", "Closet", "Door", "uPVC Windows"] as const
type Filter = (typeof filters)[number]

type GalleryItem = {
  id: number
  category: Exclude<Filter, "All">
  src: string
  alt: string
  colSpan?: number
  rowSpan?: number
  placeholder: string
}

const items: GalleryItem[] = [
  {
    id: 1,
    category: "Kitchen",
    src: "/gallery/kitchen-1.png",
    alt: "Luxury kitchen with island",
    rowSpan: 2,
    placeholder: "#2a1f14",
  },
  {
    id: 2,
    category: "uPVC Windows",
    src: "/gallery/windows-1.jpg",
    alt: "uPVC window facade with pool view",
    placeholder: "#1a2a2a",
  },
  {
    id: 3,
    category: "Kitchen",
    src: "/gallery/kitchen-2.png",
    alt: "Modern gray kitchen",
    placeholder: "#1e1e22",
  },
  {
    id: 4,
    category: "uPVC Windows",
    src: "/gallery/living-1.jpg",
    alt: "Bright living room windows",
    colSpan: 2,
    placeholder: "#1a2020",
  },
  {
    id: 5,
    category: "Closet",
    src: "/gallery/closet-1.png",
    alt: "Walk-in closet with warm lighting",
    placeholder: "#221a14",
  },
  {
    id: 6,
    category: "Door",
    src: "/gallery/door-1.png",
    alt: "Carved wooden interior door",
    placeholder: "#1e1814",
  },
  {
    id: 7,
    category: "Door",
    src: "/gallery/living-2.jpg",
    alt: "Classic living room with chandelier",
    placeholder: "#1a1820",
  },
]

export default function Gallery() {
  const [active, setActive] = useState<Filter>("All")
  const scrollRef = useRef<HTMLDivElement>(null)

  const filtered =
    active === "All" ? items : items.filter((item) => item.category === active)
  const isBento = active === "All"

  const scrollBy = (dir: -1 | 1) => {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" })
  }

  return (
    <section className="bg-muted px-4 py-16 md:px-8 lg:px-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Designed. Built. Delivered
        </h2>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActive(filter)}
            variant={active === filter ? "default" : "outline"}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="mx-auto hidden max-w-5xl md:block">
        {isBento ? (
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "260px 260px 320px",
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-lg"
                style={{
                  gridColumn: item.colSpan ? `span ${item.colSpan}` : undefined,
                  gridRow: item.rowSpan ? `span ${item.rowSpan}` : undefined,
                  background: item.placeholder,
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = "none"
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="aspect-square overflow-hidden rounded-lg"
                style={{ background: item.placeholder }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = "none"
                  }}
                />
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-3 py-16 text-center text-white/40">
                No projects in this category yet.
              </p>
            )}
          </div>
        )}
      </div>

      <div className="relative md:hidden">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory [scrollbar-width:none] gap-3 overflow-x-auto pb-3 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              className="aspect-square w-[75vw] shrink-0 snap-center overflow-hidden rounded-lg"
              style={{ background: item.placeholder }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.display = "none"
                }}
              />
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="w-full py-16 text-center text-white/40">
              No projects in this category yet.
            </p>
          )}
        </div>

        <Button
          onClick={() => scrollBy(-1)}
          size="icon"
          className="absolute top-1/2 -left-1 flex -translate-y-1/2 text-white"
        >
          <ChevronLeft size={18} />
        </Button>
        <Button
          onClick={() => scrollBy(1)}
          size="icon"
          className="absolute top-1/2 -right-1 flex -translate-y-1/2 text-white"
        >
          <ChevronRight size={18} />
        </Button>
      </div>

      <div className="mt-10 text-center">
        <Button size="lg">
          Explore Projects
          <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  )
}
