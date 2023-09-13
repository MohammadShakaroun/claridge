import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: 'Claridge',
  description: 'claridge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-gradient-to-r from-cyan-100 to-blue-300 font-popins'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
