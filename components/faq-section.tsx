"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cómo puedo reservar un traslado?",
    answer: "Podés reservar tu traslado de forma rápida y sencilla a través de WhatsApp. Simplemente contactanos con los detalles de tu viaje (fecha, hora, origen, destino y cantidad de pasajeros) y te confirmaremos la disponibilidad y el precio.",
  },
  {
    question: "¿Con cuánta anticipación debo reservar?",
    answer: "Recomendamos reservar con al menos 24 horas de anticipación para garantizar disponibilidad. Sin embargo, para temporada alta o grupos grandes, sugerimos reservar con mayor anticipación.",
  },
  {
    question: "¿Qué formas de pago aceptan?",
    answer: "Aceptamos efectivo (pesos argentinos, dólares y reales), tarjetas de crédito/débito, y transferencias bancarias. Los precios son finales y sin cargos ocultos.",
  },
  {
    question: "¿Los precios incluyen peajes y estacionamiento?",
    answer: "Sí, todos nuestros precios incluyen peajes, estacionamiento y entrada al parque cuando corresponde. No hay costos adicionales sorpresa.",
  },
  {
    question: "¿Qué pasa si mi vuelo se retrasa?",
    answer: "Monitoreamos todos los vuelos en tiempo real. Si tu vuelo se retrasa, ajustamos automáticamente el horario de recogida sin costo adicional.",
  },
  {
    question: "¿Ofrecen servicio de traslados nocturnos?",
    answer: "Sí, brindamos servicio las 24 horas, los 7 días de la semana. Para traslados nocturnos (después de las 22:00 hs), por favor consultá disponibilidad con anticipación.",
  },
  {
    question: "¿Puedo llevar equipaje voluminoso?",
    answer: "Sí, contamos con vehículos con amplio espacio para equipaje. Al momento de reservar, indicanos la cantidad y tipo de equipaje para asignarte el vehículo más adecuado.",
  },
  {
    question: "¿Hacen traslados a Brasil?",
    answer: "Sí, realizamos traslados a Foz do Iguaçu (Brasil). Te ayudamos con toda la documentación necesaria para el cruce de frontera.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Preguntas frecuentes
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              ¿Tenés dudas?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Encontrá respuestas a las preguntas más comunes sobre nuestros servicios.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
