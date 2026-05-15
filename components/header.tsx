"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Script from "next/script"

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#traslados", label: "Traslados" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#flota", label: "Flota" },
  { href: "#faq", label: "Preguntas Frecuentes" },
]

// Google Translate language codes mapping
const languages = [
  { code: "es", gtCode: "es", name: "Español", flag: "🇪🇸" },
  { code: "zh", gtCode: "zh-CN", name: "中文 (Mandarín)", flag: "🇨🇳" },
  { code: "en", gtCode: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", gtCode: "hi", name: "हिन्दी (Hindi)", flag: "🇮🇳" },
  { code: "ar", gtCode: "ar", name: "العربية (Árabe)", flag: "🇸🇦" },
  { code: "fr", gtCode: "fr", name: "Français", flag: "🇫🇷" },
  { code: "bn", gtCode: "bn", name: "বাংলা (Bengalí)", flag: "🇧🇩" },
  { code: "pt", gtCode: "pt", name: "Português", flag: "🇧🇷" },
  { code: "ru", gtCode: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ur", gtCode: "ur", name: "اردو (Urdu)", flag: "🇵🇰" },
]

const WHATSAPP_URL = "https://wa.me/5493757521382?text=Hola!%20Me%20gustaría%20consultar%20sobre%20los%20traslados."

// Extend window to include Google Translate types
declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay: boolean },
          element: string
        ) => void
      }
    }
  }
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(languages[0])
  const [isGoogleTranslateReady, setIsGoogleTranslateReady] = useState(false)
  const langMenuRef = useRef<HTMLDivElement>(null)

  // Initialize Google Translate
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "es",
            autoDisplay: false,
          },
          "google_translate_element"
        )
        setIsGoogleTranslateReady(true)
      }
    }
  }, [])

  // Function to change language using Google Translate
  const changeLanguage = useCallback((langCode: string) => {
    const selectElement = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null

    if (selectElement) {
      selectElement.value = langCode
      selectElement.dispatchEvent(new Event("change"))
    } else {
      // Fallback: try using the Google Translate cookie approach
      const googleTranslateFrame = document.querySelector(
        "iframe.goog-te-menu-frame"
      ) as HTMLIFrameElement | null
      
      if (googleTranslateFrame?.contentDocument) {
        const links = googleTranslateFrame.contentDocument.querySelectorAll("a")
        links.forEach((link) => {
          if (link.getAttribute("href")?.includes(langCode)) {
            link.click()
          }
        })
      }
    }
  }, [])

  const handleLanguageSelect = (lang: typeof languages[0]) => {
    setSelectedLang(lang)
    setIsLangMenuOpen(false)
    
    // Trigger Google Translate
    if (lang.code === "es") {
      // Reset to original language
      const selectElement = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null
      if (selectElement) {
        selectElement.value = "es"
        selectElement.dispatchEvent(new Event("change"))
      }
      // Also try to click the "Show original" button if available
      const restoreButton = document.querySelector(".goog-te-banner-frame")
      if (restoreButton) {
        const iframe = restoreButton as HTMLIFrameElement
        const innerDoc = iframe.contentDocument || iframe.contentWindow?.document
        const showOriginal = innerDoc?.querySelector('button')
        showOriginal?.click()
      }
    } else {
      changeLanguage(lang.gtCode)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      {/* Google Translate Script */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden" />

      {/* Hide Google Translate banner and branding with global styles */}
      <style jsx global>{`
        .goog-te-banner-frame,
        .goog-te-balloon-frame,
        #goog-gt-tt,
        .goog-te-spinner-pos,
        .goog-tooltip,
        .goog-tooltip:hover,
        .goog-text-highlight {
          display: none !important;
        }
        
        body {
          top: 0 !important;
        }
        
        .goog-te-gadget {
          display: none !important;
        }
        
        .skiptranslate {
          display: none !important;
        }
        
        body > .skiptranslate {
          display: none !important;
        }
        
        .VIpgJd-ZVi9od-ORHb-OEVmcd {
          display: none !important;
        }
      `}</style>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-card/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#inicio" className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-tight notranslate">
                  VIVÍ CATARATAS
                </span>
                <span className="text-xs text-primary font-medium tracking-widest uppercase notranslate">
                  Traslados
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right Side: Language Selector + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative notranslate" ref={langMenuRef}>
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                >
                  <span className="text-lg">{selectedLang.flag}</span>
                  <span className="text-foreground">{selectedLang.code.toUpperCase()}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-card rounded-xl border border-border shadow-xl overflow-hidden z-50"
                    >
                      <div className="py-2 max-h-80 overflow-y-auto">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageSelect(lang)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${
                              selectedLang.code === lang.code ? 'bg-primary/10 text-primary' : 'text-foreground'
                            }`}
                          >
                            <span className="text-xl">{lang.flag}</span>
                            <span>{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card/98 backdrop-blur-md border-b border-border"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-foreground py-2 border-b border-border/50"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Language Selector */}
                <div className="py-2 border-b border-border/50 notranslate">
                  <span className="text-sm text-muted-foreground mb-2 block">Idioma</span>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedLang.code === lang.code
                            ? 'bg-primary/20 text-primary border border-primary/30'
                            : 'bg-secondary text-foreground'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.code.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-4"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Escribir por WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
