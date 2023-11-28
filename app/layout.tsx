import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'
import Hero from './Hero'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web-LKG',
  description: 'Layanan Kolaborasi global',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Hero/>
        {children}
        </body>
    </html>
  )
}
