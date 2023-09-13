import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: 'Claridge',
  description: 'Claridge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-gradient-to-r from-blue-100 to-blue-400 font-popins'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
