import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConditionalNavigation from '@/components/ConditionalNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Baaz Jhaj - Creative Technologist',
  description: 'AI Engineer & Systems Builder specializing in edge AI, model compression, and real-world deployment of machine learning systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConditionalNavigation />
        <main className="pt-0">
          {children}
        </main>
      </body>
    </html>
  )
}
