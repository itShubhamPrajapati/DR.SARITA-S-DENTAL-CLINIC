"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const doctors = [
  {
    name: "Dr. Sarita Jangid",
    title: "B.D.S. Dental Surgeon",
    specialty: "Root Canal Specialist & Cosmetic Dentist",
    image: "/images/dr-sarita.png",
    description: "Highly recognized for performing painless root canals and artistic cosmetic smile restyling, merging clinical rigor with warm, patient-first care."
  },
  {
    name: "Dr. Sonu Jangid",
    title: "B.D.S. Dental Surgeon",
    specialty: "Implantologist & Orthodontics Expert",
    image: "/images/dr-sonu.png",
    description: "Specializes in modern tooth implants, orthodontic profile alignments, and complex extractions, focused on long-term facial structure restoration."
  }
]

export default function DoctorsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
      id="doctors" 
      className="py-12 md:py-24 bg-background border-b border-border/40"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-sans tracking-widest uppercase bg-primary/10 text-primary border border-primary/20">
            Specialists
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-[1.2] font-serif text-foreground">
            Meet Our Expert Surgeons
          </h2>
          <p className="text-sm sm:text-base text-foreground/75 font-sans leading-relaxed">
            Dr. Sarita & Dr. Sonu Jangid combine academic excellence with deep empathy, providing a personalized, anxiety-free dental experience.
          </p>
        </div>

        {/* Doctors Grid with Staggered Framer Motion */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-85px" }}
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <Card className="group h-full overflow-hidden border-none bg-surface-container text-foreground shadow-none rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
                
                {/* Doctor Portrait - Archway top crop with subtle hover zoom */}
                <div className="pt-8 px-8 flex justify-center bg-surface-container-low">
                  <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-t-xl overflow-hidden border border-border/20 bg-background/50">
                    <motion.div 
                      className="w-full h-full relative"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {/* TODO: Replace with real high-resolution, professionally lit photos of Dr. Sarita and Dr. Sonu before production */}
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        sizes="(max-w-7xl) 100vw, 300px"
                        className="object-cover object-top rounded-t-xl"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Doctor Details */}
                <CardContent className="p-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold font-sans tracking-widest uppercase text-secondary">
                      {doctor.title}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-foreground tracking-tight">
                      {doctor.name}
                    </h3>
                  </div>

                  <div className="inline-block">
                    <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary font-sans text-xs tracking-wider uppercase font-semibold px-3 py-1 rounded-full">
                      {doctor.specialty}
                    </Badge>
                  </div>

                  <p className="text-sm text-foreground/80 font-sans leading-relaxed pt-1">
                    {doctor.description}
                  </p>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
