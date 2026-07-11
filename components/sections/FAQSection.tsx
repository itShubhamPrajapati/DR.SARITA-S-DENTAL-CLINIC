"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Does a root canal treatment hurt?",
    answer: "No. With advanced local anesthetics and modern rotary endodontic systems, root canal treatments are extremely comfortable—comparable to receiving a standard dental filling. Dr. Sarita specializes in completely painless therapies."
  },
  {
    question: "How long do dental implants last?",
    answer: "With consistent oral hygiene and routine dental checkups, dental implants are designed to last a lifetime. The biocompatible titanium post integrates organically into your jawbone, providing a permanent, highly stable foundation."
  },
  {
    question: "What are the clinic's operating hours?",
    answer: "We welcome patients Monday through Saturday: 10:00 AM - 01:30 PM and 05:30 PM - 09:30 PM. On Sundays, we are open for prioritized morning treatments: 11:00 AM - 02:00 PM."
  },
  {
    question: "How does the WhatsApp Booking System work?",
    answer: "Our booking system is direct and secure. Fill out the concierge form below with your name, phone, date, slot, and treatment. Submitting compiles your requests into a pre-filled WhatsApp message, instantly connecting you to our front desk for rapid confirmation."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="py-12 md:py-24 bg-background border-b border-border/40">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-sans tracking-widest uppercase bg-primary/10 text-primary border border-primary/20">
            FAQ
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-[1.2] font-serif text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 font-sans leading-relaxed">
            Quick, professional answers to common patient concerns and clinic procedures.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="w-full max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-surface-container rounded-md overflow-hidden border border-border/20 transition-all duration-300"
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-medium text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                >
                  <span>{faq.question}</span>
                  <div className="p-1 rounded-full bg-background border border-border/30 text-foreground shrink-0 transition-transform">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 font-sans text-sm text-foreground/80 leading-relaxed border-t border-border/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
