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
        width: 1200,
        height: 630,
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Section */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/profile.png"
                    alt="Baaz Jhaj - AI Engineer & Systems Builder"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-50 mb-4">
                      Building AI that works in the real world
                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      I design intelligent systems that push the edge of what's possible. My focus is on edge AI, model 
                      optimization, and systems that can operate reliably in resource-constrained 
                      real-world scenarios. I'm also deeply interested in developing systems with 
                      positive social impact that genuinely improve people's lives.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-50 mb-3">
                      What I Do
                    </h2>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Design and deploy edge AI systems for remote environments</li>
                      <li>• Develop model compression techniques (distillation, quantization)</li>
                      <li>• Build ML frameworks and toolkits for practical deployment</li>
                      <li>• Create AI systems for social impact (wildfire detection, translation)</li>
                      <li>• Develop AI solutions for businesses and people who can't afford enterprise solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Sidebar */}
            <div className="space-y-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-xl font-semibold text-gray-50 mb-4">
                  Technical Expertise
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-50 mb-2">Machine Learning</h3>
                    <p className="text-sm text-gray-300">
                      PyTorch, Knowledge Distillation, Model Quantization, Edge AI, Transformers
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-50 mb-2">Systems & Hardware</h3>
                    <p className="text-sm text-gray-300">
                      Raspberry Pi, LoRa Networks, Solar Power, Embedded Systems, Docker
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-50 mb-2">Development</h3>
                    <p className="text-sm text-gray-300">
                      Python, TypeScript, Next.js, Git, Linux, Cloud Deployment
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h2 className="text-xl font-semibold text-gray-50 mb-4">
                  Connect
                </h2>
                <div className="space-y-3">
                  <a 
                    href="mailto:baazjhaj@gmail.com" 
                    className="block text-indigo-500 hover:text-indigo-400 transition-colors"
                    aria-label="Email Baaz Jhaj"
                  >
                    Email
                  </a>
                  <a 
                    href="https://github.com/bjhaj" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-indigo-500 hover:text-indigo-400 transition-colors"
                    aria-label="Baaz Jhaj's GitHub profile"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/baaz-jhaj/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-indigo-500 hover:text-indigo-400 transition-colors"
                    aria-label="Baaz Jhaj's LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                  <Link 
                    href="/Baaz-Jhaj-Resume.pdf"
                    target="_blank"
                    className="block text-indigo-500 hover:text-indigo-400 transition-colors"
                    aria-label="Download Baaz Jhaj's resume"
                  >
                    Resume (PDF)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
