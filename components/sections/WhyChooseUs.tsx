"use client"

import React from "react"
import { motion } from "framer-motion"
import { Award, Cpu, Heart } from "lucide-react"

const items = [
  {
    icon: Award,
    title: "10,000+ Smiles Restored",
    description: "Highly experienced endodontic and restorative care with years of clinical success, restoring perfect functionality and aesthetic brilliance."
  },
  {
    icon: Cpu,
    title: "State-of-the-Art Tech",
    description: "Equipped with high-precision rotary endodontics, digital radiography, and painless local anesthesia to elevate patient comfort."
  },
  {
    icon: Heart,
    title: "Anxiety-Free Sanctuary",
    description: "Designed from the ground up to feel like a premium spa, replacing typical clinic stress with organic minimalism and soothing ambiance."
  }
]

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  }

  return (
    <section className="py-12 md:py-24 bg-surface-container border-b border-border/40">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-sans tracking-widest uppercase bg-primary/10 text-primary border border-primary/20">
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-[1.2] font-serif text-foreground">
            A New Standard of Dental Care
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 font-sans leading-relaxed">
            We bridge clinical excellence with calming wellness hospitality, ensuring your journey is painless, precise, and completely reassuring.
          </p>
        </div>

        {/* 3-Column Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-background p-8 rounded-md shadow-xs hover:shadow-ambient transition-all duration-300 flex flex-col items-center text-center space-y-5 border border-border/10"
              >
                {/* Icon Container */}
                <div className="p-4 bg-primary/10 text-primary rounded-full">
                  <Icon className="h-6 w-6 stroke-[1.75]" />
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/75 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
