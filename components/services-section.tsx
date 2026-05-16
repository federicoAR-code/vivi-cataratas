"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Hotel, Flag, Globe, Landmark, Waves, ShoppingBag, TreePine, Settings, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Hotel, 
    title: "Desde tu hotel a Cataratas",
    description: "Conexión directa entre tu hotel y el Parque Nacional Iguazú con horarios flexibles y comodidad premium.",
    image: "/hotel.jpeg",
  },
  {
    icon: Globe,
    title: "Foz do Iguaçu (Brasil)",
    description: "Cruzá la frontera y descubrí el lado brasileño de las Cataratas con documentación incluida.",
    image: "/brasli.jpeg",
  },
  {
    icon: Flag,
    title: "Hito Tres Fronteras",
    description: "Visitá el emblemático punto donde confluyen Argentina, Brasil y Paraguay.",
    image: "/hito.jpeg",
  },
  {
    icon: Landmark,
    title: "Ruinas de San Ignacio",
    description: "Explorá las históricas misiones jesuíticas, Patrimonio de la Humanidad por la UNESCO.",
    image: "/ruinas.jpeg",
  },
  {
    icon: Waves,
    title: "Saltos del Moconá",
    description: "Descubrí los impresionantes saltos longitudinales únicos en el mundo sobre el río Uruguay.",
    image: "/mocona.jpeg",
  },
  {
    icon: ShoppingBag,
    title: "Tours de Compras en CDE (Paraguay)",
    description: "Disfrutá de compras en Ciudad del Este con traslado seguro y guía de las mejores zonas comerciales.",
    image: "/cde.jpeg",
  },
  {
    icon: TreePine,
    title: "Trekking y Aventuras en la Selva",
    description: "Viví la experiencia de la selva misionera con traslados a senderos y actividades de aventura.",
    image: "/selva.jpeg",
  },
  {
    icon: Settings,
    title: "Traslados a medida",
    description: "Servicios personalizados para grupos, eventos corporativos o necesidades especiales.",
    image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=2944&auto=format&fit=crop",
  },
]

const WHATSAPP_URL = "https://wa.me/5493757521382?text=Hola!%20Me%20gustaría%20más%20información%20sobre%20"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="traslados" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Nuestros servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Traslados en Puerto Iguazú
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios de transporte para que tu experiencia en las Cataratas sea inolvidable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-primary hover:text-primary/80 hover:bg-transparent"
                  >
                    <a 
                      href={`${WHATSAPP_URL}${encodeURIComponent(service.title)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Más información
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
