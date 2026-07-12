"use client"

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, MessageSquare, ShieldCheck } from "lucide-react"

// Strict input sanitization function
const sanitizeString = (val: string) => {
  return val
    .replace(/<[^>]*>/g, "") // Strip HTML tags
    .replace(/[^a-zA-Z0-9\s,.-]/g, "") // Strip special characters to prevent URL Injection
    .trim()
}

// Zod Validation Schema
const formSchema = z.object({
  name: z.string()
    .min(2, "Patient name must be at least 2 characters")
    .max(50, "Patient name cannot exceed 50 characters")
    .transform((val) => sanitizeString(val)),
  phone: z.string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d+$/, "Phone number must contain only numbers"),
  date: z.string().min(1, "Preferred date is required"),
  slot: z.string().min(1, "Please select a time slot"),
  treatment: z.string()
    .min(1, "Please select a treatment type")
    .transform((val) => sanitizeString(val))
})

type FormValues = z.infer<typeof formSchema>

export default function AppointmentForm() {
  const [cooldown, setCooldown] = useState(0)

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [cooldown])

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      slot: "",
      treatment: ""
    }
  })

  const onSubmit = (data: FormValues) => {
    if (cooldown > 0) return

    // Standardize date format (YYYY-MM-DD to DD-MM-YYYY) for readability on WhatsApp
    const dateObj = new Date(data.date)
    const formattedDate = isNaN(dateObj.getTime())
      ? data.date
      : `${String(dateObj.getDate()).padStart(2, "0")}-${String(
        dateObj.getMonth() + 1
      ).padStart(2, "0")}-${dateObj.getFullYear()}`

    // Construct WhatsApp message text
    const message = `New Appointment Request\n\nName: ${data.name}\nPhone: ${data.phone}\nDate: ${formattedDate}\nSlot: ${data.slot}\nTreatment: ${data.treatment}`

    // Construct WhatsApp URL
    const url = "https://wa.me/919822824889?text=" + encodeURIComponent(message)

    // Open WhatsApp in a new tab
    window.open(url, "_blank")

    // Start 60-second cooldown period
    setCooldown(60)
  }

  // Get tomorrow's date string in YYYY-MM-DD format to set min attribute on date input
  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  const inputStyles = "bg-[#FAF9F6] border border-border/40 focus:border-slate-400 focus:ring-2 focus:ring-slate-400 focus-visible:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-0 rounded-md h-11 px-4 text-sm transition-all [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:shadow-[0_0_0px_1000px_#FAF9F6_inset]"

  return (
    <section
      id="appointment"
      className="py-12 md:py-24 bg-surface-container/50 border-b border-border/40"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex justify-center">

        {/* Floating Concierge Booking Card with Warm Ambient shadow */}
        <div className="w-full max-w-2xl">
          <Card className="border-none bg-background text-foreground shadow-ambient rounded-md overflow-hidden p-2 sm:p-6">

            <CardHeader className="p-6 sm:p-10 pb-4 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-sans tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 self-start">
                <CalendarIcon className="h-3 w-3" /> Booking Request
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-semibold leading-[1.3] font-serif text-foreground">
                Schedule Your Visit
              </CardTitle>
              <CardDescription className="text-sm text-foreground/70 font-sans leading-relaxed">
                Provide your details below to request a prioritized appointment. Upon submitting, your information will be structured into a WhatsApp message to coordinate directly with our team.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 sm:p-10 pt-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">

                    {/* Patient Name */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[10px] font-bold font-sans tracking-widest uppercase text-foreground/80">
                            Patient Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              className={inputStyles}
                              autoComplete="name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-destructive pt-1" />
                        </FormItem>
                      )}
                    />

                    {/* Phone Number */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[10px] font-bold font-sans tracking-widest uppercase text-foreground/80">
                            Phone Number (10 digits)
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              maxLength={10}
                              className={inputStyles}
                              autoComplete="tel"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-destructive pt-1" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">

                    {/* Preferred Date */}
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[10px] font-bold font-sans tracking-widest uppercase text-foreground/80">
                            Preferred Date
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              min={getMinDate()}
                              className={`${inputStyles} w-full block`}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-destructive pt-1" />
                        </FormItem>
                      )}
                    />

                    {/* Preferred Slot */}
                    <FormField
                      control={form.control}
                      name="slot"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[10px] font-bold font-sans tracking-widest uppercase text-foreground/80">
                            Preferred Time Slot
                          </FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger className="bg-[#FAF9F6] border border-border/40 focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 focus-visible:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-400/20 focus-visible:ring-offset-0 rounded-md px-4 text-sm shadow-none h-11 w-full transition-all flex items-center justify-between">
                                <SelectValue placeholder="Select time slot" />
                              </SelectTrigger>
                              <SelectContent className="bg-background border border-border/40 font-sans">
                                <SelectItem value="Morning Slot (10:00 AM - 01:30 PM)">
                                  Morning Slot (10:00 AM - 01:30 PM)
                                </SelectItem>
                                <SelectItem value="Evening Slot (05:30 PM - 09:30 PM)">
                                  Evening Slot (05:30 PM - 09:30 PM)
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="text-xs text-destructive pt-1" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Treatment Type */}
                  <FormField
                    control={form.control}
                    name="treatment"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-[10px] font-bold font-sans tracking-widest uppercase text-foreground/80">
                          Treatment Required
                        </FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="bg-[#FAF9F6] border border-border/40 focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 focus-visible:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-400/20 focus-visible:ring-offset-0 rounded-md px-4 text-sm shadow-none h-11 w-full transition-all flex items-center justify-between">
                              <SelectValue placeholder="Select treatment type" />
                            </SelectTrigger>
                            <SelectContent className="bg-background border border-border/40 font-sans">
                              <SelectItem value="Root Canal Treatment">Root Canal Treatment</SelectItem>
                              <SelectItem value="Teeth Whitening">Teeth Whitening</SelectItem>
                              <SelectItem value="Orthodontics (Braces / Aligners)">Orthodontics (Braces / Aligners)</SelectItem>
                              <SelectItem value="Scaling & Polishing">Scaling & Polishing</SelectItem>
                              <SelectItem value="Dental Implants">Dental Implants</SelectItem>
                              <SelectItem value="Tooth Extraction">Tooth Extraction</SelectItem>
                              <SelectItem value="General Dental Consultation">General Dental Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage className="text-xs text-destructive pt-1" />
                      </FormItem>
                    )}
                  />

                  {/* Secure Notice */}
                  <div className="flex items-start gap-2.5 p-4 rounded-md bg-surface-container text-xs text-foreground/75 leading-relaxed font-sans border border-border/30">
                    <ShieldCheck className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span>
                      Your request is sanitized to prevent injection vulnerabilities. We value privacy: no personal health datasets are cached or stored on external servers.
                    </span>
                  </div>

                  {/* Submit button with Cooldown state */}
                  <motion.div whileHover={cooldown === 0 ? { scale: 1.01 } : {}} whileTap={cooldown === 0 ? { scale: 0.99 } : {}}>
                    <Button
                      type="submit"
                      disabled={cooldown > 0}
                      className="w-full bg-primary hover:bg-primary/95 text-white font-sans text-xs uppercase tracking-widest font-semibold h-11 rounded-md shadow-xs transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {cooldown > 0 ? (
                        `Resend Available in ${cooldown}s`
                      ) : (
                        <span className="flex items-center gap-2 justify-center">
                          <MessageSquare className="h-4 w-4" /> Book Appointment via WhatsApp
                        </span>
                      )}
                    </Button>
                  </motion.div>

                </form>
              </Form>
            </CardContent>

          </Card>
        </div>

      </div>
    </section>
  )
}
