import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConditionalNavigation from '@/components/ConditionalNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Baaz Jhaj - AI Engineer & Systems Builder | Portfolio',
    template: '%s | Baaz Jhaj'
  },
  description: 'Baaz Jhaj is an AI Engineer & Systems Builder specializing in edge AI, model compression, and real-world deployment of machine learning systems. Expert in wildfire detection, translation platforms, and AI alignment research.',
  keywords: [
    'Baaz Jhaj',
    'Baaz Jhaj AI Engineer',
    'Baaz Jhaj portfolio',
    'Baaz Jhaj machine learning',
    'Baaz Jhaj edge AI',
    'Baaz Jhaj wildfire detection',
    'Baaz Jhaj SmokeNet',
    'Baaz Jhaj Translatica',
    'AI Engineer',
    'Machine Learning Engineer',
    'Edge AI',
    'Model Compression',
    'Knowledge Distillation',
    'Wildfire Detection',
    'AI Translation',
    'AI Alignment',
    'PyTorch',
    'Deep Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Systems Builder',
    'ML Deployment',
    'Arizona State University',
    'ASU'
  ],
  authors: [{ name: 'Baaz Jhaj' }],
  creator: 'Baaz Jhaj',
  publisher: 'Baaz Jhaj Studios',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://baazjhaj.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://baazjhaj.com',
    title: 'Baaz Jhaj - AI Engineer & Systems Builder',
    description: 'AI Engineer & Systems Builder specializing in edge AI, model compression, and real-world deployment of machine learning systems.',
    siteName: 'Baaz Jhaj Studios',
    images: [
      {
        url: '/images/profile.png',
        width: 1200,
        height: 630,
        alt: 'Baaz Jhaj - AI Engineer & Systems Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baaz Jhaj - AI Engineer & Systems Builder',
    description: 'AI Engineer & Systems Builder specializing in edge AI, model compression, and real-world deployment of machine learning systems.',
    images: ['/images/profile.png'],
    creator: '@baazjhaj',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Baaz Jhaj" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        
        {/* Enhanced Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Baaz Jhaj",
              "jobTitle": "AI Engineer & Systems Builder",
              "description": "AI Engineer specializing in edge AI, model compression, and real-world deployment of machine learning systems",
              "url": "https://baazjhaj.com",
              "image": "https://baazjhaj.com/images/profile.png",
              "sameAs": [
                "https://github.com/bjhaj",
                "https://www.linkedin.com/in/baaz-jhaj/"
              ],
              "knowsAbout": [
                "Machine Learning",
                "Edge AI", 
                "Model Compression",
                "Knowledge Distillation",
                "PyTorch",
                "Computer Vision",
                "Natural Language Processing",
                "AI Alignment",
                "Systems Engineering",
                "Wildfire Detection",
                "AI Translation",
                "LoRa Networks",
                "Solar Power",
                "Embedded Systems"
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "Arizona State University",
                "url": "https://www.asu.edu"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Baaz Jhaj Studios"
              },
              "hasOccupation": {
                "@type": "Occupation",
                "name": "AI Engineer",
                "description": "Design and deploy edge AI systems for remote environments"
              },
              "knowsLanguage": ["English"],
              "nationality": {
                "@type": "Country",
                "name": "United States"
              }
            })
          }}
        />
        
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Baaz Jhaj Studios",
              "url": "https://baazjhaj.com",
              "description": "AI Engineer & Systems Builder specializing in edge AI, model compression, and real-world deployment of machine learning systems",
              "author": {
                "@type": "Person",
                "name": "Baaz Jhaj"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://baazjhaj.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ConditionalNavigation />
        <main className="pt-0">
          {children}
        </main>
      </body>
    </html>
  )
}
