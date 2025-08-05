'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const handleMouseMove = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        setIsTransitioning(true)
        
        // Smooth transition to work section
        setTimeout(() => {
          window.location.href = '/projects'
        }, 800) // 800ms transition time
      }
    }

    // Add mouse move listener
    document.addEventListener('mousemove', handleMouseMove)
    
    // Also trigger on scroll or touch
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        setIsTransitioning(true)
        
        setTimeout(() => {
          window.location.href = '/projects'
        }, 800)
      }
    }

    document.addEventListener('scroll', handleInteraction)
    document.addEventListener('touchstart', handleInteraction)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }
  }, [hasInteracted])

  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Baaz Jhaj - AI Engineer & Systems Builder",
            "description": "AI Engineer & Systems Builder specializing in edge AI, model compression, and real-world deployment of machine learning systems",
            "url": "https://baazjhaj.com",
            "mainEntity": {
              "@type": "Person",
              "name": "Baaz Jhaj",
              "jobTitle": "AI Engineer & Systems Builder",
              "description": "AI Engineer specializing in edge AI, model compression, and real-world deployment of machine learning systems",
              "image": "https://baazjhaj.com/images/profile.png",
              "sameAs": [
                "https://github.com/bjhaj",
                "https://www.linkedin.com/in/baaz-jhaj/"
              ]
            }
          })
        }}
      />
      
      <div className="h-screen bg-black overflow-hidden">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-background.jpg"
              alt="Baaz Jhaj - AI Engineer & Systems Builder"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              quality={90}
            />
          </div>
          
          {/* Transition overlay */}
          <div 
            className={`absolute inset-0 z-20 bg-black transition-opacity duration-800 ${
              isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </section>
      </div>
    </>
  )
}
