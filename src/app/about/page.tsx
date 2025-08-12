import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Baaz Jhaj - AI Engineer & Systems Builder',
  description: 'Learn about Baaz Jhaj, an AI Engineer & Systems Builder specializing in edge AI, model compression, and real-world deployment of machine learning systems. Expert in wildfire detection, translation platforms, and AI alignment research.',
  keywords: [
    'Baaz Jhaj',
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
    'About Baaz Jhaj',
    'Baaz Jhaj Background',
    'AI Engineer Portfolio'
  ],
  openGraph: {
    title: 'About Baaz Jhaj - AI Engineer & Systems Builder',
    description: 'Learn about Baaz Jhaj, an AI Engineer & Systems Builder specializing in edge AI, model compression, and real-world deployment of machine learning systems.',
    url: 'https://baazjhaj.com/about',
    siteName: 'Baaz Jhaj Studios',
    images: [
      {
        url: '/images/profile.png',
        width: 2400,
        height: 1260,
        alt: 'Baaz Jhaj - AI Engineer & Systems Builder',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Baaz Jhaj - AI Engineer & Systems Builder',
    description: 'Learn about Baaz Jhaj, an AI Engineer & Systems Builder specializing in edge AI, model compression, and real-world deployment of machine learning systems.',
    images: ['/images/profile.png'],
  },
  alternates: {
    canonical: 'https://baazjhaj.com/about',
  },
}

export default function About() {
  return (
    <>
      {/* Structured Data for About Page */}
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
              "name": "Arizona State University"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Baaz Jhaj Studios"
            },
            "hasOccupation": {
              "@type": "Occupation",
              "name": "AI Engineer",
              "description": "Design and deploy edge AI systems for remote environments"
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-gray-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column - Profile Image & Links */}
            <div className="flex flex-col">
              <div className="self-start">
                <Image
                  src="/images/profile.png"
                  alt="Baaz Jhaj - AI Engineer & Systems Builder"
                  width={400}
                  height={400}
                  className="rounded-lg mb-6"
                  quality={95}
                />
              </div>
              <div className="space-y-3">
                <a 
                  href="mailto:baazjhaj@gmail.com" 
                  className="block text-gray-50 hover:text-gray-300 transition-colors"
                  aria-label="Email Baaz Jhaj"
                >
                  Email
                </a>
                <a 
                  href="https://github.com/bjhaj" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-50 hover:text-gray-300 transition-colors"
                  aria-label="Baaz Jhaj's GitHub profile"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/baaz-jhaj/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-50 hover:text-gray-300 transition-colors"
                  aria-label="Baaz Jhaj's LinkedIn profile"
                >
                  LinkedIn
                </a>
                <Link 
                  href="/Baaz-Jhaj-Resume.pdf"
                  target="_blank"
                  className="block text-gray-50 hover:text-gray-300 transition-colors"
                  aria-label="Download Baaz Jhaj's resume"
                >
                  Resume (PDF)
                </Link>
              </div>
            </div>

            {/* Second Column - Empty */}
            <div></div>

            {/* Third & Fourth Columns - Content */}
            <div className="lg:col-span-2 space-y-8 mt-16">
              <div>
                <h1 className="text-3xl font-bold text-gray-50 mb-4">
                  Baaz Jhaj
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I design intelligent systems that push the edge of what's possible. My focus is on edge AI, model 
                  optimization, and systems that can operate reliably in resource-constrained 
                  real-world scenarios. I aim to improve lives with my work.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-50 mb-3">
                  What I Do
                </h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• Design and deploy edge AI systems for remote environments</li>
                  <li>• Create AI systems for social impact</li>
                  <li>• Develop AI solutions for businesses and people who can't afford enterprise solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}