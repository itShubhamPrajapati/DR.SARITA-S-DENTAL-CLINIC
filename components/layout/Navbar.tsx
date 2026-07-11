"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 90 // Height of navbar + some breathing room
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const navItems = [
    { label: "Home", target: "hero" },
    { label: "Services", target: "services" },
    { label: "Doctors", target: "doctors" },
    { label: "Contact", target: "contact" }
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/40 shadow-ambient py-4"
          : "bg-transparent border-b border-transparent py-6"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo - Playfair Display Editorial style */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 cursor-pointer select-none" 
            onClick={() => scrollToSection("hero")}
          >
            <span className="text-xl md:text-2xl tracking-tight font-serif text-foreground">
              <span className="text-primary font-semibold">Dr. Sarita&apos;s</span>
              <span className="font-light text-foreground/80 pl-1.5">Dental Clinic</span>
            </span>
          </motion.div>

          {/* Desktop Navigation - Concierge small tracked-out labels */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.target)}
                className="text-xs font-semibold tracking-widest font-sans uppercase text-foreground/70 hover:text-primary transition-colors cursor-pointer relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Book Appointment CTA */}
          <div className="hidden md:flex items-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => scrollToSection("appointment")}
                className="bg-primary hover:bg-primary/90 text-white font-sans text-xs uppercase tracking-widest font-semibold px-6 py-5 rounded-md shadow-xs transition-all"
              >
                Book Appointment
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-primary hover:bg-surface-container/50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background border-b border-border/40"
          >
            <div className="px-5 pt-2 pb-8 space-y-4 flex flex-col items-start">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.target)}
                  className="w-full text-left py-2 text-xs font-semibold tracking-widest font-sans uppercase text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("appointment")}
                className="w-full bg-primary hover:bg-primary/90 text-white font-sans text-xs uppercase tracking-widest font-semibold py-5 rounded-md transition-all mt-2"
              >
                Book Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
