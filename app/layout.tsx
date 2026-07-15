import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/components/cart-context'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'



export const metadata: Metadata = {
  title: 'Cunita Bebe | Muebles Infantiles Premium',
  description: 'Muebleria especializada en muebles infantiles para bebes. Cunas funcionales, roperos, comodas y decoracion para la habitacion de tu bebe.',
  keywords: 'cunas, muebles bebe, muebles infantiles, cuna funcional, ropero bebe, comoda bebe, decoracion infantil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`bg-background`}>
      <body className="font-sans antialiased">
        <CartProvider>
          
            {children}
          <Footer />
          <WhatsAppButton />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
