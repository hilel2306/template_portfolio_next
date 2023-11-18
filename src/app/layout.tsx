import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hilel Kinane - Fullstack developer',
  description: 'Hilel Kinane portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="dark" lang="en" className='bg-black'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
