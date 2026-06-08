import Features from "@/components/features"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Solutions from "@/components/solutions"
import Gallery from "@/components/gallery"
import ChooseUs from "@/components/choose-us"
import Chatbot from "@/components/chatbot"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <Solutions />
      <Features />
      <Gallery />
      <ChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  )
}
