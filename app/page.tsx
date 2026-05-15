import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { FleetSection } from "@/components/fleet-section"
import { FAQSection } from "@/components/faq-section"
import { WhatsAppCTASection } from "@/components/whatsapp-cta-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <FleetSection />
      <FAQSection />
      <WhatsAppCTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
