import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Whytee Stitches - Premium Fashion Brand',
  description: 'Discover exclusive fashion collections that blend elegance with contemporary style. Whytee Stitches brings you premium quality clothing crafted with precision.',
  keywords: 'fashion, clothing, premium fashion, designer wear, Whytee Stitches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
