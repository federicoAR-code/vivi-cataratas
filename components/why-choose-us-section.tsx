"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Car, Clock, CreditCard, Check } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Conductores profesionales",
    description: "Personal capacitado, bilingüe y con amplio conocimiento de la región.",
  },
  {
    icon: Car,
    title: "Vehículos confortables",
    description: "Flota moderna con aire acondicionado, WiFi y máximo confort.",
  },
  {
    icon: Clock,
    title: "Atención 24/7",
    description: "Disponibles las 24 horas, los 7 días de la semana para tu comodidad.",
  },
  {
    icon: CreditCard,
    title: "Precios claros",
    description: "Sin sorpresas ni cargos ocultos. Tarifas transparentes desde el inicio.",
  },
]

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2938&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Experiencia premium en cada traslado
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Con años de experiencia en el sector turístico de Puerto Iguazú, nos dedicamos a ofrecer 
              un servicio de excelencia que combina seguridad, puntualidad y atención personalizada.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2942&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-1">10+</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Años</div>
                  </div>
                  <div className="text-center border-x border-border/30">
                    <div className="text-3xl font-bold text-foreground mb-1">5K+</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Viajes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Seguro</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span className="font-semibold">Recomendado</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
