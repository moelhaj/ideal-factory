"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Send, RotateCcw, X, Headphones } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

type Message = {
  id: number
  role: "bot" | "user"
  text: string
  suggestions?: string[]
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    role: "bot",
    text: "Hi there, welcome to Ideal Factory. We create custom kitchens, wardrobes, doors, interior woodworks, and premium uPVC windows for villas across the UAE — what are you looking for today?",
    suggestions: [
      "Just exploring",
      "I'd like to get a design idea",
      "Get a free quote",
      "See our projects",
    ],
  },
]

const BOT_RESPONSES: Record<string, Message> = {
  "just exploring": {
    id: 0,
    role: "bot",
    text: "No problem! Feel free to browse our website. If you have any questions about our kitchens, wardrobes, doors, or uPVC windows, I'm here to help.",
    suggestions: ["Tell me about your kitchens", "What's your process?"],
  },
  "i'd like to get a design idea": {
    id: 0,
    role: "bot",
    text: "Great! We offer free 3D design consultations. Our team will visit your villa, take measurements, and create a custom 3D design at no cost. Would you like to book a consultation?",
    suggestions: ["Yes, book a consultation", "Tell me more first"],
  },
  "get a free quote": {
    id: 0,
    role: "bot",
    text: "We'd love to give you a free quote! Please share your contact details or visit our Contact page and our team will reach out within 24 hours.",
    suggestions: ["Go to Contact page", "Tell me about pricing"],
  },
  "see our projects": {
    id: 0,
    role: "bot",
    text: "We've completed hundreds of villa projects across the UAE. You can browse our gallery above, or I can tell you about specific project types.",
    suggestions: ["Kitchen projects", "Wardrobe projects", "uPVC Windows"],
  },
  default: {
    id: 0,
    role: "bot",
    text: "Thanks for your message! For detailed inquiries, our team is available on WhatsApp or through our Contact page. We typically respond within a few hours.",
    suggestions: ["Contact us", "Start over"],
  },
}

function getBotResponse(input: string): Message {
  const lower = input.toLowerCase().trim()
  const match = Object.keys(BOT_RESPONSES).find(
    (key) => key !== "default" && lower.includes(key)
  )
  const response = match ? BOT_RESPONSES[match] : BOT_RESPONSES["default"]
  return { ...response, id: Date.now() }
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  function reset() {
    setMessages(INITIAL_MESSAGES)
    setInput("")
  }

  function sendMessage(text: string) {
    if (!text.trim()) return
    const userMsg: Message = { id: Date.now(), role: "user", text: text.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, getBotResponse(text)])
    }, 900)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed right-4 bottom-24 z-50 flex w-[360px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 sm:right-6"
          >
            <div className="flex items-center justify-between gap-3 border-b border-zinc-200 bg-white px-4 py-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15">
                <Image
                  src="/logo.png"
                  alt="Ideal Factory"
                  width={28}
                  height={28}
                />
              </div>
              <p className="text-xs font-semibold text-zinc-900">
                Hi there! How can we help you?
              </p>
              <div className="ml-auto flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={reset}
                  aria-label="Restart conversation"
                  className="hover:bg-primary/10"
                >
                  <RotateCcw size={16} className="text-zinc-400" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="hover:bg-primary/10"
                >
                  <X size={16} className="text-zinc-400" />
                </Button>
              </div>
            </div>

            <div
              className="flex flex-1 flex-col gap-3 overflow-y-auto bg-zinc-100 px-4 py-4"
              style={{ maxHeight: 380 }}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex flex-col gap-2",
                    message.role === "user" ? "items-end" : "items-start"
                  )}
                >
                  {message.role === "bot" && (
                    <p className="text-[11px] font-semibold text-zinc-400">
                      AI
                    </p>
                  )}
                  <div
                    className={cn(
                      "max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                      message.role === "bot"
                        ? "bg-white text-zinc-800 shadow-sm"
                        : "bg-primary text-white"
                    )}
                  >
                    {message.text}
                  </div>
                  {message.suggestions && (
                    <div className="flex w-full flex-col gap-2">
                      {message.suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => sendMessage(suggestion)}
                          className="w-full rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-left text-sm text-zinc-700 transition hover:border-primary hover:text-primary"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {typing && (
                <div className="flex flex-col items-start gap-1">
                  <p className="text-[11px] font-semibold text-zinc-400">
                    Typing
                  </p>
                  <div className="flex gap-1 rounded-2xl bg-white px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-2 w-2 rounded-full bg-zinc-300"
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-zinc-100 bg-white px-4 py-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message"
                rows={2}
                className="w-full resize-none bg-transparent text-sm text-zinc-800 placeholder-zinc-400 outline-none"
              />
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-zinc-400">
                  Press Enter to send
                </span>
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim()}
                  className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90 disabled:opacity-40"
                >
                  <Send size={14} />
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open chat"
        className="fixed right-4 bottom-4 z-50 h-12 w-12 cursor-pointer overflow-hidden rounded-full shadow-xl ring-2 ring-white transition hover:scale-105 sm:right-6"
      >
        <div className="absolute inset-0 bg-primary" />
        <Headphones className="absolute inset-0 m-auto text-white" />
      </button>
    </>
  )
}
