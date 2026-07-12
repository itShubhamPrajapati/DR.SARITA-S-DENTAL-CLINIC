import type { Metadata, Viewport } from "next"
import { Playfair_Display, Manrope } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"
import "./globals.css"
import { cn } from "@/lib/utils"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dr. Sarita's Dental Clinic | Best Dentist in Nalasopara East",
  description: "Top-rated dental clinic in Nalasopara East by Dr. Sarita Jangid & Dr. Sonu Jangid. Book appointment for Root Canal, Implants & Braces.",
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Dr. Sarita Dental",
  }
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // LocalBusiness JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dr. Sarita's Dental Clinic",
    "description": "Top-rated dental clinic in Nalasopara East by Dr. Sarita Jangid & Dr. Sonu Jangid. Book appointment for Root Canal, Implants & Braces.",
    "image": "https://www.doctorsaritadental.com/images/hero.png",
    "telephone": ["+917219777569", "+919822824889", "+918080362823"],
    "email": "DOCTORSARITAJANGID@GMAIL.COM",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no.13, Citizen apt, near Lijjat papad, Vijay Nagar, Damodar Nagar, Nalasopara East",
      "addressLocality": "Vasai-Virar",
      "addressRegion": "Maharashtra",
      "postalCode": "401209",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.427425,
      "longitude": 72.824162
    },
    "url": "https://www.doctorsaritadental.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "13:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "17:30",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "14:00"
      }
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Dr. Sarita Jangid",
        "jobTitle": "Dental Surgeon"
      },
      {
        "@type": "Person",
        "name": "Dr. Sonu Jangid",
        "jobTitle": "Dental Surgeon"
      }
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", manrope.variable, playfair.variable)}>
        {/* Inject JSON-LD local business schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <FloatingWhatsApp />
        {/* Google Analytics component */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
