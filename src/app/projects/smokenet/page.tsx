'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

export default function SmokeNet() {
  const [showSubheading, setShowSubheading] = useState(false)
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [scrollProgress, setScrollProgress] = useState(0)
  const [brainAnimationComplete, setBrainAnimationComplete] = useState(false)

  useEffect(() => {
    // Trigger subheading fade-in after component mounts
    const timer = setTimeout(() => setShowSubheading(true), 800)

    // Track scroll progress for additional triggering
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)

    // Set up Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add element to visible set when it enters viewport
            setVisibleElements(prev => new Set([...prev, entry.target.id]))
            
            // For Why SmokeNet section, trigger sequential animations
            const id = entry.target.id
            if (id === 'why-smokenet-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'why-smokenet-content'])), 300)
            }
            
            // For intro concepts, trigger sequential animations
            if (id === 'intro-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'flow-line'])), 200)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-1'])), 400)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-1-text'])), 900)
              setTimeout(() => setBrainAnimationComplete(true), 1100)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'transform-1'])), 1000)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-2'])), 2000)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-2-text'])), 2500)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'transform-2'])), 2600)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-3'])), 3200)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-3-text'])), 3700)
            }
            
            // For stats, trigger sequential animations
            if (id === 'stat-1') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stat-2'])), 420)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stat-3'])), 840)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stat-4'])), 1260)
            }
          }
        })
      },
      { 
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -10% 0px' // Trigger when element is in top 90% of viewport
      }
    )

    // Observe all animated elements after a small delay to ensure DOM is ready
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('[data-animate]')
      animatedElements.forEach(el => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const isVisible = (id: string) => visibleElements.has(id)

  return (
    <>
      {/* Structured Data for SmokeNet Project */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SmokeNet",
            "description": "Edge AI system for real-time wildfire detection using knowledge distillation and LoRa networks",
            "url": "https://baazjhaj.com/projects/smokenet",
            "applicationCategory": "Environmental Monitoring",
            "operatingSystem": "Linux",
            "author": {
              "@type": "Person",
              "name": "Baaz Jhaj"
            },
            "creator": {
              "@type": "Person",
              "name": "Baaz Jhaj"
            },
            "dateCreated": "2024",
            "softwareVersion": "1.0",
            "featureList": [
              "Real-time wildfire detection",
              "Edge AI processing",
              "Knowledge distillation",
              "LoRa network communication",
              "Solar power operation",
              "97% detection accuracy",
              "81x model size reduction"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1"
            }
          })
        }}
      />
      
      <div className="bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/smokenet-banner.webp"
              alt="SmokeNet - Wildfire Detection System by Baaz Jhaj"
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-8 animate-fade-in">
              SmokeNet
            </h1>
            <div className={`transition-opacity duration-1000 ${showSubheading ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 tracking-wide">
                A system that watches the horizon.
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Why SmokeNet? */}
        <section className="py-12 bg-black">
          <div className="max-w-8xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Title */}
              <div 
                id="why-smokenet-title"
                data-animate
                className={`transition-all duration-1000 ease-out ${
                  isVisible('why-smokenet-title') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                  Why SmokeNet?
                </h2>
              </div>

              {/* Right Column - Content */}
              <div 
                id="why-smokenet-content"
                data-animate
                className={`transition-all duration-1000 ease-out delay-300 ${
                  isVisible('why-smokenet-content') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-lg font-medium text-orange-400 mb-3">The Problem is Growing</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Wildfires are becoming more frequent, intense, and destructive. In 2023 alone, over 2.6 million acres burned in the U.S., causing billions in damages and displacing thousands. Globally, wildfires release more carbon dioxide than all annual traffic emissions combined: fueling climate change and creating a dangerous feedback loop. Yet traditional detection methods, like satellites, often spot fires hours after ignition, when it's already too late.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-orange-400 mb-3">Real-Time Early Detection</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Every minute matters. The sooner a fire is detected, the more likely it can be contained. SmokeNet detects smoke in its earliest visible stages, giving responders a critical head start.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-orange-400 mb-3">Built for Real-World Deployment</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Built for real-world deployment, SmokeNet runs without internet, without grid power, and without ideal conditions. Its lightweight, distilled, quantized, and optimized machine learning model operates directly on-device, making fast and reliable decisions in remote, high-risk environments where surveillance is otherwise impossible.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-lg font-medium text-orange-400 mb-3">Smart Enough to Know the Difference</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Trained on real-world wildfire data, SmokeNet can distinguish true smoke from visual lookalikes like fog, dust, clouds, and lens flare, minimizing false positives and unnecessary dispatches.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-orange-400 mb-3">Immediate, Intelligent Alerts</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Once smoke is detected, SmokeNet sends an alert within seconds, using low-power, long-range LoRa radios to relay messages across disconnected terrain, reaching emergency responders without needing cellular or satellite connectivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introducing SmokeNet */}
        <section className="min-h-screen bg-black flex items-center justify-center px-6 pt-2 pb-10">
          <div className="max-w-8xl mx-auto px-4 w-full">
            <div className="mb-20">
              <h2 
                id="intro-title"
                data-animate
                className={`text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white transition-all duration-1000 ease-out ${
                  isVisible('intro-title') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
                }`}
              >
                Model Transformation Pipeline
              </h2>
            </div>
            
            {/* Continuous Flow Container */}
            <div className="relative">
              {/* Transformation Stages */}
              <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-4">
                
                {/* Stage 1: Heavyweight Learner */}
                <div 
                  id="stage-1"
                  className={`flex-1 text-center relative transition-all duration-600 ease-out delay-600 ${
                    isVisible('stage-1') 
                      ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                      : 'opacity-0 translate-y-[40px] scale-110 blur-sm'
                  }`}
                >
                  <div className="relative mb-6">
                    {/* Brain with simple hover effects - matches Knowledge Distilled style */}
                    <div 
                      className={`w-32 h-32 mx-auto bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-800 ease-out delay-300 cursor-pointer group relative ${
                        isVisible('stage-1') 
                          ? 'scale-100 opacity-100' 
                          : 'scale-[1.3] opacity-60'
                      }`}
                    >
                      <span className="text-5xl animate-pulse transition-transform duration-200 relative z-10" role="img" aria-label="Massive neural network">🧠</span>
                    </div>
                  </div>
                  
                  {/* Text loads last */}
                  <div 
                    id="stage-1-text"
                    className={`transition-all duration-500 ease-out ${
                      isVisible('stage-1-text') 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                      Heavyweight Learner
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xs mx-auto">
                      Massive neural network processes thousands of wildfire images to learn detection patterns.
                    </p>
                  </div>
                </div>

                {/* Transformation Zone 1 - Enhanced Compression Animation */}
                <div 
                  id="transform-1"
                  className={`flex flex-col items-center justify-center space-y-2 md:space-y-3 transition-all duration-600 ease-out delay-300 ${
                    isVisible('transform-1') 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-75'
                  }`}
                >
                  {/* Enhanced dynamic compression visualization */}
                  <div className="flex space-x-2 md:space-x-4 items-center">
                    <div 
                      className={`bg-orange-500/80 rounded-lg transition-all duration-500 ease-out delay-400 relative overflow-hidden ${
                        isVisible('transform-1') ? 'w-6 h-6 md:w-8 md:h-8' : 'w-12 h-12 md:w-16 md:h-16'
                      }`}
                    >
                      {/* Compression particles */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-300 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    
                    <div className="text-purple-400 text-2xl md:text-4xl animate-spin">⚙️</div>
                    
                    <div 
                      className={`bg-purple-500/80 rounded-lg transition-all duration-500 ease-out delay-500 relative overflow-hidden ${
                        isVisible('transform-1') ? 'w-3 h-3 md:w-4 md:h-4' : 'w-2 h-2 md:w-3 md:h-3'
                      }`}
                    >
                      {/* Compressed particles */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-purple-300 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <span className="text-purple-400 text-xs md:text-sm font-medium animate-pulse">Compressing Model Size...</span>
                  
                  {/* Enhanced compression progress bar */}
                  <div className="w-16 h-1.5 md:w-20 md:h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 transition-all duration-600 ease-out delay-400 ${
                        isVisible('transform-1') ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                  
                  {/* Size reduction indicator */}
                  <div className="text-xs text-gray-400 animate-pulse">
                    {isVisible('transform-1') ? '100MB → 2.3MB' : 'Starting compression...'}
                  </div>
                </div>

                {/* Stage 2: Knowledge Distilled */}
                <div 
                  id="stage-2"
                  className={`flex-1 text-center relative transition-all duration-600 ease-out delay-600 ${
                    isVisible('stage-2') 
                      ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                      : 'opacity-0 translate-y-[40px] scale-110 blur-sm'
                  }`}
                >
                  <div className="relative mb-6">
                    {/* Enhanced distillation flask with simple hover effects */}
                    <div 
                      className={`w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-800 ease-out delay-300 cursor-pointer group relative ${
                        isVisible('stage-2') 
                          ? 'scale-100 opacity-100' 
                          : 'scale-[1.3] opacity-60'
                      }`}
                    >
                      <span className="text-5xl animate-pulse transition-transform duration-200 relative z-10" role="img" aria-label="Knowledge distillation process">🧪</span>
                    </div>
                  </div>
                  
                  {/* Text loads last */}
                  <div 
                    id="stage-2-text"
                    className={`transition-all duration-500 ease-out ${
                      isVisible('stage-2-text') 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                      Knowledge Distilled
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xs mx-auto">
                      Intelligence compressed and refined into a lightweight model that retains the essence.
                    </p>
                  </div>
                </div>

                {/* Transformation Zone 2 - Enhanced Deployment Animation with Green Circle */}
                <div 
                  id="transform-2"
                  className={`flex flex-col items-center justify-center space-y-2 md:space-y-3 transition-all duration-600 ease-out delay-800 ${
                    isVisible('transform-2') 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-75'
                  }`}
                >
                  {/* Enhanced deployment visualization */}
                  <div className="relative">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500/60 rounded-full animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 bg-green-400/30 rounded-full animate-ping"></div>
                    <div className="absolute top-0.5 left-0.5 md:top-1 md:left-1 w-5 h-5 md:w-6 md:h-6 bg-green-300/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <span className="text-green-400 text-xs md:text-sm font-medium animate-pulse">Deploying to Edge...</span>
                  
                  {/* Deployment progress dots */}
                  <div className="flex space-x-1">
                    <div 
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full transition-all duration-300 ease-out delay-900 ${
                        isVisible('transform-2') ? 'opacity-100' : 'opacity-30'
                      }`}
                    ></div>
                    <div 
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full transition-all duration-300 ease-out delay-1000 ${
                        isVisible('transform-2') ? 'opacity-100' : 'opacity-30'
                      }`}
                    ></div>
                    <div 
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full transition-all duration-300 ease-out delay-1100 ${
                        isVisible('transform-2') ? 'opacity-100' : 'opacity-30'
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Stage 3: Field Deployed */}
                <div 
                  id="stage-3"
                  className={`flex-1 text-center relative transition-all duration-600 ease-out delay-900 ${
                    isVisible('stage-3') 
                      ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                      : 'opacity-0 translate-y-[40px] scale-110 blur-sm'
                  }`}
                >
                  <div className="relative mb-6">
                    {/* Compact forest deployment with simple hover effects */}
                    <div 
                      className={`w-28 h-28 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-800 ease-out delay-400 cursor-pointer group relative ${
                        isVisible('stage-3') 
                          ? 'scale-100 opacity-100' 
                          : 'scale-[1.3] opacity-60'
                      }`}
                    >
                      <span className="text-4xl animate-pulse transition-transform duration-200 relative z-10" role="img" aria-label="Forest deployment">🌲</span>
                      
                      {/* Solar panel indicator */}
                      <span 
                        className={`absolute -top-1 -right-1 text-sm transition-all duration-500 ease-out delay-1000 ${
                          isVisible('stage-3') 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-0'
                        }`}
                        role="img" 
                        aria-label="Solar powered"
                      >
                        ☀️
                      </span>
                    </div>
                  </div>
                  
                  {/* Text loads last */}
                  <div 
                    id="stage-3-text"
                    className={`transition-all duration-500 ease-out ${
                      isVisible('stage-3-text') 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                      Field Deployed
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xs mx-auto">
                      Compact model runs on solar-powered hardware, watching the forest horizon for smoke.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Block */}
        <section className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
          <div className="max-w-4xl">
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-16">
              <div 
                id="stat-1"
                data-animate
                className={`bg-black/50 p-4 md:p-8 rounded-lg text-center transition-all duration-1000 ease-out ${
                  isVisible('stat-1') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
                }`}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-light text-green-400 mb-2 md:mb-4">97%</div>
                <p className="text-sm md:text-xl text-gray-300">fire detection accuracy</p>
              </div>
              
              <div 
                id="stat-2"
                className={`bg-black/50 p-4 md:p-8 rounded-lg text-center transition-all duration-1000 ease-out ${
                  isVisible('stat-2') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
                }`}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-400 mb-2 md:mb-4">2.3MB</div>
                <p className="text-sm md:text-xl text-gray-300">model size</p>
              </div>
              
              <div 
                id="stat-3"
                className={`bg-black/50 p-4 md:p-8 rounded-lg text-center transition-all duration-1000 ease-out ${
                  isVisible('stat-3') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
                }`}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-light text-purple-400 mb-2 md:mb-4">81x</div>
                <p className="text-sm md:text-xl text-gray-300">smaller</p>
              </div>
              
              <div 
                id="stat-4"
                className={`bg-black/50 p-4 md:p-8 rounded-lg text-center transition-all duration-1000 ease-out ${
                  isVisible('stat-4') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
                }`}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-light text-orange-400 mb-2 md:mb-4">Edge</div>
                <p className="text-sm md:text-xl text-gray-300">deployable</p>
              </div>
            </div>
            
            {/* GitHub Button */}
            <div className="text-center">
              <div 
                id="final-button"
                data-animate
                className={`transition-all duration-1000 ease-out delay-1500 ${
                  isVisible('final-button') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
                }`}
              >
                <a 
                  href="https://github.com/bjhaj/SmokeNet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 hover:scale-105 font-medium text-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View the GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


