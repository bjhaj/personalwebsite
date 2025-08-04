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
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'mobile-flow-1'])), 1200)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'mobile-flow-2'])), 1800)
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
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/smokenet-banner.webp"
            alt="Smoky forest landscape"
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
                      Wildfires are becoming more frequent, intense, and destructive. In 2023 alone, over 2.6 million acres burned in the U.S., causing billions in damages and displacing thousands. Globally, wildfires release more carbon dioxide than all annual traffic emissions combined—fueling climate change and creating a dangerous feedback loop. Yet traditional detection methods, like satellites, often spot fires hours after ignition, when it's already too late.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-orange-400 mb-3">Real-Time Early Detection</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Every minute matters. The sooner a fire is detected, the more likely it can be contained. SmokeNet detects smoke in its earliest visible stages—often before satellites register thermal signatures—giving responders a critical head start.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-orange-400 mb-3">Built for Real-World Deployment</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Built for real-world deployment, SmokeNet runs without internet, without grid power, and without ideal conditions. Its lightweight, distilled machine learning model operates directly on-device, making fast and reliable decisions in remote, high-risk environments where surveillance is otherwise impossible.
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
                      Once smoke is detected, SmokeNet sends an alert within seconds, using low-power, long-range LoRa radios to relay messages across disconnected terrain—reaching emergency responders without needing cellular or satellite connectivity.
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
                className={`hidden lg:flex flex-col items-center justify-center space-y-3 transition-all duration-600 ease-out delay-300 ${
                  isVisible('transform-1') 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`}
              >
                {/* Enhanced dynamic compression visualization */}
                <div className="flex space-x-4 items-center">
                  <div 
                    className={`bg-orange-500/80 rounded-lg transition-all duration-500 ease-out delay-400 relative overflow-hidden ${
                      isVisible('transform-1') ? 'w-8 h-8' : 'w-16 h-16'
                    }`}
                  >
                    {/* Compression particles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-300 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  
                  <div className="text-purple-400 text-4xl animate-spin">⚙️</div>
                  
                  <div 
                    className={`bg-purple-500/80 rounded-lg transition-all duration-500 ease-out delay-500 relative overflow-hidden ${
                      isVisible('transform-1') ? 'w-4 h-4' : 'w-3 h-3'
                    }`}
                  >
                    {/* Compressed particles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1 h-1 bg-purple-300 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <span className="text-purple-400 text-sm font-medium animate-pulse">Compressing Model Size...</span>
                
                {/* Enhanced compression progress bar */}
                <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
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
                className={`hidden lg:flex flex-col items-center justify-center space-y-3 transition-all duration-600 ease-out delay-800 ${
                  isVisible('transform-2') 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`}
              >
                {/* Enhanced deployment visualization */}
                <div className="relative">
                  <div className="w-8 h-8 bg-green-500/60 rounded-full animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-8 h-8 bg-green-400/30 rounded-full animate-ping"></div>
                  <div className="absolute top-1 left-1 w-6 h-6 bg-green-300/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <span className="text-green-400 text-sm font-medium animate-pulse">Deploying to Edge...</span>
                
                {/* Deployment progress dots */}
                <div className="flex space-x-1">
                  <div 
                    className={`w-2 h-2 bg-green-400 rounded-full transition-all duration-300 ease-out delay-900 ${
                      isVisible('transform-2') ? 'opacity-100' : 'opacity-30'
                    }`}
                  ></div>
                  <div 
                    className={`w-2 h-2 bg-green-400 rounded-full transition-all duration-300 ease-out delay-1000 ${
                      isVisible('transform-2') ? 'opacity-100' : 'opacity-30'
                    }`}
                  ></div>
                  <div 
                    className={`w-2 h-2 bg-green-400 rounded-full transition-all duration-300 ease-out delay-1100 ${
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

          {/* Mobile flow indicators */}
          <div className="lg:hidden flex flex-col items-center mt-8 space-y-6">
            <div 
              id="mobile-flow-1"
              className={`transition-all duration-600 ease-out delay-800 ${
                isVisible('mobile-flow-1') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="w-8 h-px bg-gradient-to-r from-orange-400 to-purple-400"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            <div 
              id="mobile-flow-2"
              className={`transition-all duration-600 ease-out delay-1000 ${
                isVisible('mobile-flow-2') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-8 h-px bg-gradient-to-r from-purple-400 to-green-400"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Block */}
      <section className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div 
              id="stat-1"
              data-animate
              className={`bg-black/50 p-8 rounded-lg text-center transition-all duration-1000 ease-out ${
                isVisible('stat-1') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
              }`}
            >
              <div className="text-4xl md:text-5xl font-light text-green-400 mb-4">97%</div>
              <p className="text-xl text-gray-300">fire detection accuracy</p>
            </div>
            
            <div 
              id="stat-2"
              className={`bg-black/50 p-8 rounded-lg text-center transition-all duration-1000 ease-out ${
                isVisible('stat-2') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
              }`}
            >
              <div className="text-4xl md:text-5xl font-light text-blue-400 mb-4">2.3MB</div>
              <p className="text-xl text-gray-300">model size</p>
            </div>
            
            <div 
              id="stat-3"
              className={`bg-black/50 p-8 rounded-lg text-center transition-all duration-1000 ease-out ${
                isVisible('stat-3') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
              }`}
            >
              <div className="text-4xl md:text-5xl font-light text-purple-400 mb-4">81x</div>
              <p className="text-xl text-gray-300">smaller</p>
            </div>
            
            <div 
              id="stat-4"
              className={`bg-black/50 p-8 rounded-lg text-center transition-all duration-1000 ease-out ${
                isVisible('stat-4') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
              }`}
            >
              <div className="text-4xl md:text-5xl font-light text-orange-400 mb-4">Edge</div>
              <p className="text-xl text-gray-300">deployable</p>
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
              <Link 
                href="https://github.com/bjhaj/SmokeNet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 transition-all duration-300 text-lg tracking-wide"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


