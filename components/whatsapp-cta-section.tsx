"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/5493757521382?text=Hola!%20Me%20gustaría%20reservar%20un%20traslado."

export function WhatsAppCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="relative px-8 py-16 md:py-20 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8"
            >
              <MessageCircle className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Reservá tu traslado
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
              Contactanos por WhatsApp y asegurá tu viaje con la mejor atención personalizada.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-6 text-lg shadow-lg"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Escribir por WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
