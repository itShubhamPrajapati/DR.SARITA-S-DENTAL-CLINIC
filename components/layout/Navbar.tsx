"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import GlassSurface from "@/components/ui/GlassSurface"

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
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    setIsOpen(false)

    const performScroll = () => {
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

    if (isMobile) {
      // Wait for the drawer animation (300ms) to complete to avoid layout shifts throwing off calculation
      setTimeout(performScroll, 320)
    } else {
      performScroll()
    }
  }

  const navItems = [
    { label: "Home", target: "hero" },
    { label: "Services", target: "services" },
    { label: "Doctors", target: "doctors" },
    { label: "Contact", target: "contact" }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent px-4 pointer-events-none">
      <GlassSurface
        backgroundOpacity={0.1}
        blur={15}
        borderRadius={24}
        className="max-w-6xl mx-auto mt-4 border border-white/20 pointer-events-auto"
        displace={20}
        height={80}
        opacity={0.8}
        width="100%"
      >
        <div className="flex items-center justify-between w-full px-8">
          
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
              <a
                key={item.label}
                href={`#${item.target}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.target)
                }}
                className="text-xs font-semibold tracking-widest font-sans uppercase text-foreground/70 hover:text-primary transition-colors cursor-pointer relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Book Appointment CTA */}
          <div className="hidden md:flex items-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="#appointment"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("appointment")
                }}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-primary hover:bg-primary/90 text-white font-sans text-xs uppercase tracking-widest font-semibold px-6 h-11 rounded-md shadow-xs transition-all flex items-center justify-center cursor-pointer"
                )}
              >
                Book Appointment
              </a>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center h-11 w-11 rounded-md text-foreground/80 hover:text-primary hover:bg-surface-container/50 transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </GlassSurface>

      {/* Mobile Navigation Drawer with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border border-border/40 relative z-50 pointer-events-auto max-w-6xl mx-auto mt-2 rounded-2xl shadow-lg"
          >
            <div className="px-5 pt-4 pb-8 space-y-4 flex flex-col items-start relative z-50 pointer-events-auto">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.target}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.target)
                  }}
                  className="w-full text-left py-3 text-xs font-semibold tracking-widest font-sans uppercase text-foreground/80 hover:text-primary transition-colors flex items-center min-h-[44px] cursor-pointer pointer-events-auto"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("appointment")
                }}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full bg-primary hover:bg-primary/90 text-white font-sans text-xs uppercase tracking-widest font-semibold h-11 rounded-md transition-all mt-2 flex items-center justify-center active:scale-95 duration-75 cursor-pointer pointer-events-auto"
                )}
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
