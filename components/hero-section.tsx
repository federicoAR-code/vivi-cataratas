"use client"

import { motion } from "framer-motion"
import { Clock, Shield, Users, MessageCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: Clock, label: "Puntualidad", description: "Siempre a tiempo" },
  { icon: Shield, label: "Seguridad", description: "Viajes seguros" },
  { icon: Users, label: "Atención personalizada", description: "Servicio premium" },
]

const WHATSAPP_URL = "https://wa.me/5493757521382?text=Hola!%20Me%20gustaría%20reservar%20un%20traslado."

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Iguazú Falls */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_72efue72efue72ef-uKmsD9aq3YUvjjfcW8muM12HwutWHe.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-transparent to-foreground/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm border border-primary/30">
              Puerto Iguazú, Misiones
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2"
          >
            <span className="text-white drop-shadow-lg">VIVÍ CATARATAS</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-primary drop-shadow-lg"
          >
            TRASLADOS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md"
          >
            Seguridad, confort y puntualidad para que tu viaje sea perfecto.
          </motion.p>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12"
          >
            {features.map((feature, index) => (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-2 group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-300"
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <span className="text-sm font-medium text-white">{feature.label}</span>
                <span className="text-xs text-white/70">{feature.description}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-xl"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Reservar por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg"
            >
              <a href="#traslados">
                Nuestros Traslados
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#traslados"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Descubrir</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
