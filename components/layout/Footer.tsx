"use client"

import React from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#121c2c] text-white/80 border-t border-[#121c2c]/10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-20 md:py-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Editorial Description */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xl md:text-2xl font-serif font-medium text-white tracking-tight">
              Dr. Sarita&apos;s Dental Clinic
            </h3>
            <p className="text-sm font-sans text-white/60 leading-relaxed">
              Dedicated to restorative wellness and painless precision dentistry. Experience an anxiety-free environment crafted to renew your dental health.
            </p>
            <div className="text-xs font-semibold tracking-widest font-sans uppercase text-secondary">
              Est. 2026 • Wellness Sanctuary
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-bold font-sans tracking-widest uppercase text-white">
              Contact & Address
            </h4>
            <ul className="space-y-4 text-sm font-sans text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:7219777569" className="hover:text-white transition-colors">
                    +91 72197 77569
                  </a>
                  <a href="tel:9822824889" className="hover:text-white transition-colors">
                    +91 98228 24889
                  </a>
                  <a href="tel:8080362823" className="hover:text-white transition-colors">
                    +91 80803 62823
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-primary shrink-0" />
                <a
                  href="mailto:DOCTORSARITAJANGID@GMAIL.COM"
                  className="hover:text-white transition-colors truncate"
                >
                  DOCTORSARITAJANGID@GMAIL.COM
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs">
                  Shop no.13, Citizen apt, near Lijjat papad, Vijay Nagar, Damodar Nagar, Nalasopara East, Vasai-Virar, Maharashtra 401209
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Business Hours Table */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-bold font-sans tracking-widest uppercase text-white">
              Business Hours
            </h4>
            <div className="text-xs font-sans space-y-4 text-white/70">
              <div className="flex flex-col border-b border-white/10 pb-2">
                <span className="font-semibold text-white/90 tracking-wide uppercase text-[9px] text-secondary">
                  Mon - Sat (Morning)
                </span>
                <span className="text-sm pt-0.5">10:00 AM - 01:30 PM</span>
              </div>
              <div className="flex flex-col border-b border-white/10 pb-2">
                <span className="font-semibold text-white/90 tracking-wide uppercase text-[9px] text-secondary">
                  Mon - Sat (Evening)
                </span>
                <span className="text-sm pt-0.5">05:30 PM - 09:30 PM</span>
              </div>
              <div className="flex flex-col border-b border-white/10 pb-2">
                <span className="font-semibold text-white/90 tracking-wide uppercase text-[9px] text-secondary">
                  Sunday (Morning)
                </span>
                <span className="text-sm pt-0.5">11:00 AM - 02:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-bold font-sans tracking-widest uppercase text-white">
              Our Location
            </h4>
            <div className="w-full h-44 rounded-md overflow-hidden border border-white/10 shadow-lg relative">
              <iframe
                title="Dr. Sarita&apos;s Dental Clinic Location Map"
                src="https://maps.google.com/maps?q=19.427425,72.824162&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-[1.05] invert-[0.9] hue-rotate-180"
              />
            </div>
          </div>

        </div>

        {/* Bottom Footer Credits */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-sans">
          <p>© {new Date().getFullYear()} Dr. Sarita&apos;s Dental Clinic. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white/60 transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white/60 transition-colors">Terms of Care</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
