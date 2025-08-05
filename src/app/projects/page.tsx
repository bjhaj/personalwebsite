'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false)

  const projects = [
    {
      title: "SmokeNet",
      subtitle: "Wildfire Detection System",
      description: "Edge AI system for real-time wildfire detection using knowledge distillation and LoRa networks.",
      tags: "Edge AI • LoRa • PyTorch • Knowledge Distillation",
      image: "/images/smokenet-banner.webp",
      link: "/projects/smokenet"
    },
    {
      title: "Translatica",
      subtitle: "Translation Platform",
      description: "AI-powered translation system bridging language barriers with advanced natural language processing.",
      tags: "NLP • Translation • AI • Platform",
      image: "/images/translatica-banner.webp",
      link: "/projects/translatica"
    },
    {
      title: "SelfAlign",
      subtitle: "AI Alignment Research",
      description: "Research framework for self-aligning AI systems with human values and preferences.",
      tags: "AI Alignment • Research • ML Safety • Ethics",
      image: "/images/selfalign-banner.webp",
      link: "/projects/selfalign"
    },
    {
      title: "DistillKit",
      subtitle: "Knowledge Distillation Framework",
      description: "Comprehensive PyTorch toolkit for model compression and edge deployment optimization.",
      tags: "Library/Toolkit • Edge AI • Knowledge Distillation • Quantization",
      image: "/images/distillkit-banner.jpg",
      link: "/projects/distillkit"
    }
  ]

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <>
      {/* Structured Data for Projects Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Projects by Baaz Jhaj",
            "description": "AI Engineer & Systems Builder projects including wildfire detection, translation platforms, and AI alignment research",
            "url": "https://baazjhaj.com/projects",
            "author": {
              "@type": "Person",
              "name": "Baaz Jhaj"
            },
            "hasPart": [
              {
                "@type": "CreativeWork",
                "name": "SmokeNet",
                "description": "Edge AI system for real-time wildfire detection using knowledge distillation and LoRa networks",
                "url": "https://baazjhaj.com/projects/smokenet",
                "creator": {
                  "@type": "Person",
                  "name": "Baaz Jhaj"
                }
              },
              {
                "@type": "CreativeWork",
                "name": "Translatica",
                "description": "AI-powered translation system bridging language barriers with advanced natural language processing",
                "url": "https://baazjhaj.com/projects/translatica",
                "creator": {
                  "@type": "Person",
                  "name": "Baaz Jhaj"
                }
              },
              {
                "@type": "CreativeWork",
                "name": "SelfAlign",
                "description": "Research framework for self-aligning AI systems with human values and preferences",
                "url": "https://baazjhaj.com/projects/selfalign",
                "creator": {
                  "@type": "Person",
                  "name": "Baaz Jhaj"
                }
              },
              {
                "@type": "CreativeWork",
                "name": "DistillKit",
                "description": "Comprehensive PyTorch toolkit for model compression and edge deployment optimization",
                "url": "https://baazjhaj.com/projects/distillkit",
                "creator": {
                  "@type": "Person",
                  "name": "Baaz Jhaj"
                }
              }
            ]
          })
        }}
      />
      
      <div className="bg-gray-950 min-h-screen md:h-screen flex flex-col md:justify-center p-2 py-4 md:py-2">
        <div className="max-w-4xl mx-auto w-full">
          {/* Desktop: 2x2 Grid, Mobile: 4x1 Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-10 h-auto md:h-[80vh]">
            {projects.map((project, index) => (
              <Link 
                key={index}
                id={`project-${index}`}
                data-project
                href={project.link}
                className="group bg-gray-900 border border-gray-800 rounded overflow-hidden hover:border-indigo-500 transition-all duration-300 flex flex-col h-[75vh] md:h-full md:max-h-[40vh] opacity-100 translate-y-0"
                aria-label={`View ${project.title} project - ${project.subtitle}`}
              >
                <div className="h-1/2 relative flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 flex-1 flex flex-col min-h-0">
                  <div className="mb-2">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-50 group-hover:text-indigo-400 transition-colors line-clamp-1">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 text-sm line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm leading-normal flex-1 line-clamp-3 mb-0 md:mb-2">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {project.tags}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
