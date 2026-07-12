"use client"

import React from "react"
import { motion } from "framer-motion"

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/917219777569?text=I%20would%20like%20to%20book%20a%20consultation"

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
      {/* Ripple/Ping Effect */}
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-[#25D366] opacity-40 animate-ping" />

      {/* Main Circular Button with Hover Effect */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[#25D366]/40 transition-shadow duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.46L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.003-2.637-1.03-5.114-2.909-6.995C16.249 1.865 13.766.833 11.13.833c-5.444 0-9.877 4.43-9.881 9.874-.001 1.77.476 3.5 1.38 5.02L1.65 21.825l6.095-1.597.002-.001-.1-.073zm8.993-6.108c-.24-.12-1.417-.699-1.637-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-.992-.367-1.89-1.168-.699-.624-1.171-1.396-1.308-1.637-.137-.24-.015-.369.106-.489.11-.108.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.195-.47-.393-.407-.54-.415-.137-.007-.294-.008-.451-.008-.157 0-.411.059-.626.294-.215.234-.822.804-.822 1.961 0 1.157.843 2.274.96 2.433.117.159 1.66 2.536 4.02 3.552.56.242 1.002.388 1.345.497.567.18 1.082.155 1.49.094.456-.068 1.417-.58 1.617-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
        </svg>
      </motion.div>
    </a>
  )
}
