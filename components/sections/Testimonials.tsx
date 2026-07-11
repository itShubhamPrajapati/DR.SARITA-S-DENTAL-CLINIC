"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const reviews = [
  {
    name: "Anjali Sharma",
    role: "Patient (Root Canal)",
    text: "I was extremely anxious about my root canal treatment. Dr. Sarita explained the procedure so patiently, and the rotary endodontic tech made it completely painless. The clinic feels like a premium spa!",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    role: "Patient (Dental Implants)",
    text: "Got dental implants done by Dr. Sonu. His precision and attention to detail are remarkable. The recovery was incredibly fast, and my smile has never felt more natural. Highly recommended!",
    rating: 5
  },
  {
    name: "Pooja Jangid",
    role: "Patient (Scaling & Whitening)",
    text: "The scaling and whitening treatment here is top-notch. Quick, hygienic, and very professional. The live timing badge on their site was super helpful to check if they were open before visiting.",
    rating: 5
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [index])

  const handlePrev = () => {
    setDirection(-1)
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  // Animation configuration
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" as const }
    })
  }

  return (
    <section className="py-[120px] bg-surface-container/50 border-b border-border/40 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-sans tracking-widest uppercase bg-primary/10 text-primary border border-primary/20">
            Testimonials
          </div>
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.3] md:leading-[1.2] font-serif text-foreground">
            Patient Stories
          </h2>
          <p className="text-sm md:text-base text-foreground/70 font-sans leading-relaxed">
            Read real feedback from families who experienced our painless dental care.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-2xl min-h-[250px] flex items-center justify-center px-4">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-background p-8 md:p-12 rounded-md border border-border/10 shadow-ambient flex flex-col items-center text-center space-y-6"
            >
              {/* Star Rating */}
              <div className="flex gap-1 justify-center text-secondary">
                {[...Array(reviews[index].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-lg font-serif italic text-foreground/90 leading-relaxed font-medium">
                &ldquo;{reviews[index].text}&rdquo;
              </p>

              {/* Patient Details */}
              <div className="space-y-1">
                <h4 className="text-sm font-sans font-semibold tracking-wider text-foreground">
                  {reviews[index].name}
                </h4>
                <p className="text-xs font-sans text-primary font-medium tracking-wide">
                  {reviews[index].role}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-60px] p-3 rounded-full bg-background border border-border/40 hover:bg-surface-container text-foreground transition-all active:scale-95 shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-60px] p-3 rounded-full bg-background border border-border/40 hover:bg-surface-container text-foreground transition-all active:scale-95 shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>

      </div>
    </section>
  )
}
