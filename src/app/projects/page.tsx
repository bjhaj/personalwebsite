'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(new Set())
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

    // Set up Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add project to visible set when it enters viewport
            setVisibleProjects(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { 
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -10% 0px' // Trigger when element is in top 90% of viewport
      }
    )

    // Observe all project elements after a small delay to ensure DOM is ready
    setTimeout(() => {
      const projectElements = document.querySelectorAll('[data-project]')
      projectElements.forEach(el => observer.observe(el))
    }, 100)

    return () => {
      window.removeEventListener('resize', checkMobile)
      observer.disconnect()
    }
  }, [])

  const isProjectVisible = (index: number) => visibleProjects.has(`project-${index}`)

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-6">
      <div className="max-w-7xl mx-auto h-full">
        {/* Desktop: 2x2 grid, Mobile: Single column with scroll animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:h-full md:max-h-[80vh]">
          {projects.map((project, index) => (
            <Link 
              key={index}
              id={`project-${index}`}
              data-project
              href={project.link}
              className={`group bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-indigo-500 transition-all duration-700 flex flex-col ${
                // Desktop: always visible, Mobile: fade in on scroll
                isMobile
                  ? (isProjectVisible(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10')
                  : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="aspect-video relative flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-gray-50 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.subtitle}
                  </p>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <p className="text-sm text-gray-500">
                  {project.tags}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
