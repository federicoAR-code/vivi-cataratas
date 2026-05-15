"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/5493757521382?text=Hola!%20Me%20gustaría%20consultar%20sobre%20los%20traslados."

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  )
}
