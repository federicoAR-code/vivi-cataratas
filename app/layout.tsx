import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const viewport: Viewport = {
  themeColor: '#5FAF2D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Viví Cataratas Traslados | Traslados Premium en Puerto Iguazú',
  description: 'Servicio de traslados premium en Puerto Iguazú, Misiones, Argentina. Aeropuerto, hoteles, Cataratas del Iguazú y más. Seguridad, confort y puntualidad.',
  keywords: ['traslados', 'Puerto Iguazú', 'Cataratas del Iguazú', 'transporte turístico', 'aeropuerto', 'Argentina', 'turismo'],
  authors: [{ name: 'Viví Cataratas Traslados' }],
  openGraph: {
    title: 'Viví Cataratas Traslados | Traslados Premium en Puerto Iguazú',
    description: 'Servicio de traslados premium en Puerto Iguazú. Seguridad, confort y puntualidad para que tu viaje sea perfecto.',
    type: 'website',
    locale: 'es_AR',
  },
  robots: 'index, follow',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
