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
      description: "Edge AI system for early wildfire smoke detection in remote, off-grid environments.",
      tags: "Edge AI • LoRa • PyTorch • Knowledge Distillation",
      image: "/images/smokenet-banner.webp",
      link: "/projects/smokenet"
    },
    {
      title: "Translatica",
      subtitle: "Translation Platform",
      description: "Speech-to-speech translation platform that preserves a speaker's voice, tone, and presence across languages.",
      tags: "NLP • Translation • Speech Synthesis • AI • Platform",
      image: "/images/translatica-banner.png",
      link: "/projects/translatica"
    },
    {
      title: "SelfAlign",
      subtitle: "AI Alignment Research",
      description: "Transparent, customizable framework that gives individuals control over how AI thinks, speaks, and prioritizes truth.",
      tags: "AI Alignment • Research • ML Safety • Ethics",
      image: "/images/selfalignbanner.png",
      link: "/projects/selfalign"
    },
    {
      title: "DistillKit",
      subtitle: "PyTorch toolkit for model optimization",
      description: "Lightweight toolkit for compressing AI models to run efficiently on resource-constrained devices.",
      tags: "Library/Toolkit • Edge AI • Distillation • Quantization",
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
      
            <div className="bg-gray-950 min-h-screen flex flex-col p-2 py-4 md:py-2">
        <div className="max-w-4xl mx-auto w-full pt-6">
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

          {/* Footnote (bottom) */}
          <div className="mt-6 md:mt-8 flex items-center justify-center">
            <Link
              href="https://github.com/bjhaj/personalwebsite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View personal website source on GitHub"
              className="inline-flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <span className="text-xs md:text-sm">I also built this website</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.578v-2.234c-3.338.727-4.034-1.416-4.034-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.806 1.304 3.491.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.302 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.48 5.921.431.372.824 1.102.824 2.222v3.293c0 .319.192.694.802.576C20.563 21.799 24 17.302 24 12 24 5.371 18.629 0 12 0z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
