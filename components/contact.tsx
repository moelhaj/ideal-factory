"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handle = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((form) => ({ ...form, [event.target.name]: event.target.value }))

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    // handle submission
  }

  return (
    <section className="relative overflow-hidden bg-muted px-4 py-20 md:px-8 md:py-28 lg:px-20">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <div>
          <span className="mb-5 inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
            Get in touch
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Let&apos;s discuss your project!
          </h2>
          <p className="text-sm leading-relaxed text-gray-400 md:text-base">
            Contact us today and learn more about how our interior fit out &amp;
            custom manufacturing services can bring your ideas to life.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold text-white">
            We Love to Hear From You
          </h3>

          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                name="name"
                value={form.name}
                onChange={handle}
                placeholder="Your Name"
                required
                className="h-10 border-zinc-700"
              />
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handle}
                placeholder="Your Email"
                required
                className="h-10 border-zinc-700"
              />
            </div>

            {/* Phone */}
            <Input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handle}
              placeholder="Phone Number"
              className="h-10 border-zinc-700"
            />

            {/* Message */}
            <Textarea
              name="message"
              value={form.message}
              onChange={handle}
              placeholder="Message"
              rows={5}
              required
              className="resize-none border-zinc-700"
            />

            <Button type="submit" size="lg" className="w-fit px-10">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
