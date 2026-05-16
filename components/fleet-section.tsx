"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const vehicles = [
  {
    name: "Auto Estándar",
    capacity: "1-4",
    description: "Ideal para parejas o pequeños grupos que buscan privacidad y comodidad. Fiat Cronos con equipamiento completo.",
    image: "/cronos.jpeg",
    features: ["Aire acondicionado", "Cargador USB", "Amplio baúl"],
  },
  {
    name: "Van Premium",
    capacity: "1-15",
    description: "Perfecta para familias y grupos medianos. Mercedes-Benz Sprinter con espacio amplio para equipaje.",
    image: "/sprinter.jpeg",
    features: ["Aire acondicionado", "Asientos reclinables", "Amplio equipaje"],
    featured: true,
  },
  {
    name: "Minibús",
    capacity: "1-35",
    description: "La mejor opción para grupos grandes, excursiones y eventos corporativos. Bus de turismo de larga distancia.",
    image: "/colectivo.jpeg",
    features: ["Aire acondicionado", "Micrófono", "Sistema de audio"],
  },
]

const WHATSAPP_URL = "https://wa.me/5493757521382?text=Hola!%20Me%20gustaría%20consultar%20sobre%20"

export function FleetSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="flota" className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Nuestra flota
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Vehículos para cada necesidad
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Contamos con una flota moderna y bien equipada para garantizar tu comodidad en cada viaje.
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <Card className={`group h-full bg-card border-border overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${vehicle.featured ? 'ring-2 ring-primary' : 'hover:border-primary/50'}`}>
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${vehicle.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Capacity Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground font-semibold px-3 py-1">
                      <Users className="w-4 h-4 mr-1" />
                      {vehicle.capacity} pasajeros
                    </Badge>
                  </div>

                  {vehicle.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-foreground text-background font-semibold px-3 py-1">
                        Más solicitado
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {vehicle.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {vehicle.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {vehicle.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    className={`w-full ${vehicle.featured ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-secondary hover:bg-secondary/80 text-foreground'} font-semibold`}
                  >
                    <a 
                      href={`${WHATSAPP_URL}${encodeURIComponent(vehicle.name)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Consultar disponibilidad
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
