"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/5493757521382"

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#traslados", label: "Traslados" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#flota", label: "Flota" },
  { href: "#faq", label: "Preguntas Frecuentes" },
]

const services = [
  "Desde tu hotel a Cataratas",
  "Foz do Iguaçu (Brasil)",
  "Hito Tres Fronteras",
  "Ruinas de San Ignacio",
  "Saltos del Moconá",
  "Tours de Compras en CDE",
  "Trekking y Aventuras",
  "Traslados a medida",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="#inicio" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-background tracking-tight">
                  VIVÍ CATARATAS
                </span>
                <span className="text-sm text-primary font-medium tracking-widest uppercase">
                  Traslados
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Servicio de traslados premium en Puerto Iguazú. Seguridad, confort y puntualidad para que tu viaje sea perfecto.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-background mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Puerto Iguazú, Misiones<br />Argentina
                </span>
              </li>
              <li>
                <a
                  href="tel:+5493757521382"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +54 9 3757 521382
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vivicataratastraslados.com"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  info@vivicataratastraslados.com
                </a>
              </li>
            </ul>

            {/* Map Preview */}
            <div className="mt-6 rounded-xl overflow-hidden border border-background/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57387.62897099!2d-54.62!3d-25.60!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6ea0a0a0a0a0a%3A0x0a0a0a0a0a0a0a0a!2sPuerto%20Iguaz%C3%BA%2C%20Misiones%2C%20Argentina!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
                width="100%"
                height="120"
                style={{ border: 0, filter: "brightness(0.8) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación en Puerto Iguazú"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Viví Cataratas Traslados. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Política de privacidad
            </Link>
            <Link href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
