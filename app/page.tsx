import React from "react"
import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import DoctorsSection from "@/components/sections/DoctorsSection"
import Testimonials from "@/components/sections/Testimonials"
import FAQSection from "@/components/sections/FAQSection"
import AppointmentForm from "@/components/sections/AppointmentForm"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 scroll-smooth">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <DoctorsSection />
        <Testimonials />
        <FAQSection />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  )
}
