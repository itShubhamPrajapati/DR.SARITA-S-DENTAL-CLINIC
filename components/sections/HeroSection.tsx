"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, ShieldCheck, Award, Heart } from "lucide-react"

// Live Timing Badge checking IST
function LiveStatusBadge() {
  const [status, setStatus] = useState<{ isOpen: boolean; text: string } | null>(null)

  useEffect(() => {
    const getDayName = (dayNum: number): string => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      return days[dayNum]
    }

    const checkStatus = () => {
      const now = new Date()
      const utc = now.getTime() + now.getTimezoneOffset() * 60000
      const istOffset = 5.5 * 3600000 // IST is UTC + 5:30
      const istDate = new Date(utc + istOffset)

      const day = istDate.getDay() // 0 = Sun, 1 = Mon, ..., 6 = Sat
      const hours = istDate.getHours()
      const minutes = istDate.getMinutes()
      const currentMinutes = hours * 60 + minutes

      const isMonSat = day >= 1 && day <= 6
      const isSun = day === 0

      let isOpen = false
      let statusText = ""

      // 1. Check if open right now
      if (isMonSat) {
        if ((currentMinutes >= 600 && currentMinutes < 810) || (currentMinutes >= 1050 && currentMinutes < 1290)) {
          isOpen = true
          statusText = "Open Now"
        }
      } else if (isSun) {
        if (currentMinutes >= 660 && currentMinutes < 840) {
          isOpen = true
          statusText = "Open Now"
        }
      }

      if (isOpen) {
        setStatus({ isOpen, text: statusText })
        return
      }

      // 2. If closed, find the next opening time
      for (let offset = 0; offset <= 7; offset++) {
        const checkDate = new Date(istDate)
        checkDate.setDate(istDate.getDate() + offset)
        const checkDay = checkDate.getDay()

        if (checkDay >= 1 && checkDay <= 6) {
          // Mon-Sat
          if (offset === 0) {
            if (currentMinutes < 600) {
              statusText = "Closed - Opens today at 10:00 AM"
              break
            }
            if (currentMinutes < 1050) {
              statusText = "Closed - Opens today at 05:30 PM"
              break
            }
          } else {
            const dayLabel = offset === 1 ? "tomorrow" : getDayName(checkDay)
            statusText = `Closed - Opens ${dayLabel} at 10:00 AM`
            break
          }
        } else if (checkDay === 0) {
          // Sunday
          if (offset === 0) {
            if (currentMinutes < 660) {
              statusText = "Closed - Opens today at 11:00 AM"
              break
            }
          } else {
            const dayLabel = offset === 1 ? "tomorrow" : "Sunday"
            statusText = `Closed - Opens ${dayLabel} at 11:00 AM`
            break
          }
        }
      }

      setStatus({ isOpen: false, text: statusText || "Closed" })
    }

    checkStatus()
    const interval = setInterval(checkStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  if (!status) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-sans tracking-widest uppercase bg-surface-container text-foreground/50 border border-border/40">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/30"></span>
        Checking status...
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-bold font-sans tracking-widest uppercase border transition-colors ${
        status.isOpen
          ? "bg-primary-container/10 text-primary border-primary/20"
          : "bg-surface-container text-foreground/60 border-border/40"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full relative flex ${
          status.isOpen ? "bg-primary" : "bg-foreground/40"
        }`}
      >
        {status.isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        )}
      </span>
      {status.text}
    </span>
  )
}

export default function HeroSection() {
  const handleBookClick = () => {
    const element = document.getElementById("appointment")
    if (element) {
      const offset = 90
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  }

  return (
    <section 
      id="hero" 
      className="relative overflow-hidden bg-background pt-36 md:pt-[190px] pb-24 md:pb-[130px] border-b border-border/40"
    >
      {/* Editorial layout background accent */}
      <div className="absolute top-0 right-0 w-[42%] h-[65%] bg-surface-container/30 rounded-bl-[240px] -z-10" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authoritative Copy & Trust signals */}
          <motion.div 
            className="lg:col-span-7 space-y-8 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag Badges */}
            <motion.div className="flex flex-wrap gap-3 items-center" variants={itemVariants}>
              <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-[10px] font-bold font-sans tracking-widest uppercase bg-secondary-container/20 text-secondary border border-secondary-container/30">
                ⭐ 39+ All 5-Star Reviews
              </span>
              <LiveStatusBadge />
            </motion.div>

            {/* Premium Editorial Heading */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-[44px] md:text-[68px] font-bold leading-[1.1] md:leading-[1.05] tracking-[-0.03em] font-serif text-foreground">
                Advanced & Painless <br />
                <span className="text-primary">Dental Sanctuary</span>
              </h1>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-sans max-w-xl">
                Experience clinical excellence and boutique restoration led by Dr. Sarita & Dr. Sonu Jangid. Our clinic combines painless rotary endodontics with a calming environment to redefine your treatment expectations.
              </p>
            </motion.div>

            {/* Enterprise Trust Badges Row */}
            <motion.div 
              className="flex flex-wrap gap-x-8 gap-y-4 pt-2 border-t border-border/40"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 text-[10px] font-bold font-sans tracking-widest uppercase text-foreground/90">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                <span>Certified Implantologists</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold font-sans tracking-widest uppercase text-foreground/90">
                <Award className="h-5 w-5 text-primary shrink-0" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold font-sans tracking-widest uppercase text-foreground/90">
                <Heart className="h-4.5 w-4.5 text-primary shrink-0 fill-current" />
                <span>Painless Treatments</span>
              </div>
            </motion.div>

            {/* Enhanced CTA Actions */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center pt-2"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="sm:w-auto w-full">
                <Button
                  onClick={handleBookClick}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-white font-sans text-xs uppercase tracking-widest font-semibold px-8 py-6 rounded-md shadow-xs hover:shadow-ambient transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4" /> Book Consultation
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="sm:w-auto w-full">
                <a
                  href="tel:9822824889"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-foreground/30 hover:border-foreground/85 text-foreground font-sans text-xs uppercase tracking-widest font-semibold px-8 py-5.5 rounded-md transition-all hover:bg-surface-container/30"
                >
                  <Phone className="h-4 w-4 text-primary" /> Call Now
                </a>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column: Interactive Archway Visual */}
          <motion.div 
            className="lg:col-span-5 flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.25 }}
          >
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[180px_180px_0_0] overflow-hidden border border-border/30 bg-surface-container shadow-ambient group cursor-pointer">
              <motion.div 
                className="w-full h-full relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <Image
                  src="/images/hero.png"
                  alt="Dr. Sarita's Dental Sanctuary clinic design"
                  fill
                  priority={true}
                  sizes="(max-w-7xl) 100vw, 450px"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
