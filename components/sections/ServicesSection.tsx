"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Activity, 
  Sparkles, 
  Smile, 
  Paintbrush, 
  ShieldCheck, 
  HeartCrack,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "Advanced Root Canal",
    description: "Utilizing rotary endodontics for a completely painless, single-visit root canal experience that saves your natural tooth and halts decay.",
    duration: "60 mins",
    price: "From ₹3,500",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Sparkles,
    title: "Enamel Whitening",
    description: "Lifts deep organic enamel stains safely in under an hour, using premium medical-grade whitening gels that restore a bright, confident smile.",
    duration: "45 mins",
    price: "From ₹5,000",
    color: "bg-secondary-container/20 text-secondary"
  },
  {
    icon: Smile,
    title: "Invisible Orthodontics",
    description: "Aligns misaligned teeth comfortably with customized clear aligners or traditional aesthetic systems, designed around your facial profile.",
    duration: "Consultation",
    price: "From ₹25,000",
    color: "bg-tertiary-container/20 text-tertiary"
  },
  {
    icon: Paintbrush,
    title: "Ultrasonic Scaling",
    description: "A gentle ultrasonic plaque therapy targeting bacterial biofilms under the gums, followed by micro-polishing to secure fresh oral health.",
    duration: "45 mins",
    price: "From ₹1,500",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: ShieldCheck,
    title: "Titanium Implants",
    description: "Permanent bio-compatible titanium tooth roots placed with precision surgical guides, securing natural chewing strength and preventing bone loss.",
    duration: "Consultation",
    price: "From ₹20,000",
    color: "bg-secondary-container/20 text-secondary"
  },
  {
    icon: HeartCrack,
    title: "Painless Extraction",
    description: "Conservative, atraumatic management of impacted wisdom teeth under localized sedation, focusing on tissue preservation and rapid recovery.",
    duration: "45 mins",
    price: "From ₹1,200",
    color: "bg-tertiary-container/20 text-tertiary"
  }
]

export default function ServicesSection() {
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
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  }

  return (
    <section 
      id="services" 
      className="py-[120px] bg-background border-b border-border/40"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-sans tracking-widest uppercase bg-primary/10 text-primary border border-primary/20">
            Curated Services
          </div>
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.3] md:leading-[1.2] font-serif text-foreground">
            Boutique Services & Treatment
          </h2>
          <p className="text-sm md:text-base text-foreground/75 font-sans leading-relaxed">
            Experience advanced diagnostics and painless restorative care designed to secure your long-term dental health.
          </p>
        </div>

        {/* 3-Column Interactive Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-surface-container rounded-md p-8 border border-border/10 shadow-xs hover:shadow-ambient flex flex-col justify-between h-[340px] group transition-shadow duration-300 cursor-pointer"
                onClick={handleBookClick}
              >
                <div className="space-y-5">
                  {/* Icon with soft background circle */}
                  <div className={`p-3.5 rounded-full inline-block ${service.color}`}>
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-medium text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    {/* Explicit 3-line detailed copy with line clamp */}
                    <p className="text-sm text-foreground/75 font-sans leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: pricing, duration, and hover arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-border/20 mt-auto">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-semibold font-sans tracking-wider uppercase text-foreground/50">
                      {service.duration}
                    </span>
                    <span className="text-sm font-semibold font-sans text-primary">
                      {service.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold font-sans tracking-widest uppercase text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-5px] group-hover:translate-x-0">
                    <span>Book</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
