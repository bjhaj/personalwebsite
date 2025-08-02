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
    const timer = setTimeout(() => setShowSubheading(true), 1400)

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
            
            // For damage section, trigger sequential animations
            const id = entry.target.id
            if (id === 'damage-1') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'damage-2'])), 1400)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'damage-3'])), 2800)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'damage-4'])), 4200)
            }
            
            // For intro concepts, trigger sequential animations
            if (id === 'intro-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'flow-line'])), 350)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-1'])), 600)      // Brain first
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-1-text'])), 3400) // Brain text after shrinking is complete
              setTimeout(() => setBrainAnimationComplete(true), 4100)                                // Enable brain hover after animation is complete
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'transform-1'])), 3800)  // Compression starts
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-2'])), 6400)     // Test tube
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-2-text'])), 6900) // Test tube text
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'transform-2'])), 7400)  // Deployment
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-3'])), 7900)    // Tree
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-3-text'])), 8400) // Tree text
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'mobile-flow-1'])), 1400)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'mobile-flow-2'])), 2100)
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
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -20% 0px' // Trigger earlier, when element is 20% from bottom of viewport
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
            The season starts earlier now.
          </h1>
          <div className={`transition-opacity duration-2000 ${showSubheading ? 'opacity-100' : 'opacity-0'}`}>
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

      {/* The Damage */}
      <section className="min-h-screen bg-black flex flex-col justify-center items-center px-6">
        <div className="max-w-4xl text-center space-y-20">
          <div 
            id="damage-1"
            data-animate
            className={`transition-all duration-[2500ms] ease-out ${
              isVisible('damage-1') 
                ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
            }`}
          >
            <p className="text-4xl md:text-6xl lg:text-7xl font-light text-white">
              12.7 million acres burned last year
            </p>
          </div>
          
          <div 
            id="damage-2"
            className={`transition-all duration-[3200ms] ease-out ${
              isVisible('damage-2') 
                ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                : 'opacity-0 translate-y-[80px] scale-90 blur-md'
            }`}
          >
            <p className="text-4xl md:text-6xl lg:text-7xl font-light text-white">
              $180B in damages
            </p>
          </div>
          
          <div 
            id="damage-3"
            className={`transition-all duration-[3500ms] ease-out ${
              isVisible('damage-3') 
                ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                : 'opacity-0 translate-y-[80px] scale-90 blur-md'
            }`}
          >
            <p className="text-4xl md:text-6xl lg:text-7xl font-light text-white">
              Entire towns gone
            </p>
          </div>
          
          <div 
            id="damage-4"
            className={`transition-all duration-[3500ms] ease-out ${
              isVisible('damage-4') 
                ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                : 'opacity-0 translate-y-[80px] scale-90 blur-md'
            }`}
          >
            <p className="text-4xl md:text-6xl lg:text-7xl font-light text-orange-400">
              Detection still comes too late
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <div 
            id="problem-1"
            data-animate
            className={`transition-all duration-[3200ms] ease-out delay-[700ms] ${
              isVisible('problem-1') 
                ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12 text-gray-300">
              Current detection relies on satellites
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-400">
              By the time smoke is visible from space, precious hours have already passed. 
              Ground crews scramble to respond. Sometimes it's already too late.
            </p>
          </div>
        </div>
      </section>

      {/* Introducing SmokeNet */}
      <section className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-20">
            <h2 
              id="intro-title"
              data-animate
              className={`text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white transition-all duration-[3200ms] ease-out ${
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
                className={`flex-1 text-center relative transition-all duration-[2100ms] ease-out ${
                  isVisible('stage-1') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[40px] scale-110 blur-sm'
                }`}
              >
                {/* Morphing container */}
                <div className="relative mb-6">
                  {/* Large brain that shrinks over time with enhanced hover effects */}
                  <div 
                    className={`w-40 h-40 mx-auto bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl ${
                      brainAnimationComplete ? 'hover:scale-125 hover:shadow-orange-500/70 hover:shadow-2xl cursor-pointer group' : ''
                    } relative ${
                      isVisible('stage-1') 
                        ? 'scale-100 opacity-100' 
                        : 'scale-[3] opacity-80'
                    }`}
                    style={{
                      transition: isVisible('stage-1') 
                        ? 'transform 4000ms ease-out 1000ms, opacity 4000ms ease-out 1000ms, box-shadow 300ms ease-out' 
                        : 'transform 4000ms ease-out 1000ms, opacity 4000ms ease-out 1000ms'
                    }}
                  >
                    <span className={`text-7xl animate-pulse ${brainAnimationComplete ? 'group-hover:animate-bounce group-hover:scale-110' : ''} transition-transform duration-300 relative z-10`} role="img" aria-label="Massive neural network">🧠</span>
                    
                    {/* Enhanced hover glow effect */}
                    {brainAnimationComplete && (
                      <div className="absolute inset-0 bg-orange-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse group-hover:scale-110"></div>
                    )}
                    
                    {/* Pulsing ring effect on hover */}
                    {brainAnimationComplete && (
                      <div className="absolute inset-0 border-4 border-orange-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
                    )}
                  </div>
                  
                  {/* Complexity indicators inside the brain circle */}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-[1400ms] ease-out delay-[2100ms] ${
                      isVisible('stage-1') 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-0'
                    }`}
                  >
                    <div className="flex space-x-1 absolute top-3 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
                
                {/* Text loads last */}
                <div 
                  id="stage-1-text"
                  className={`transition-all duration-[2000ms] ease-out ${
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
                className={`hidden lg:flex flex-col items-center justify-center space-y-3 transition-all duration-[2100ms] ease-out delay-[1050ms] ${
                  isVisible('transform-1') 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`}
              >
                {/* Enhanced dynamic compression visualization */}
                <div className="flex space-x-4 items-center">
                  <div 
                    className={`bg-orange-500/80 rounded-lg transition-all duration-[1400ms] ease-out delay-[1260ms] relative overflow-hidden ${
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
                    className={`bg-purple-500/80 rounded-lg transition-all duration-[1400ms] ease-out delay-[1400ms] relative overflow-hidden ${
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
                    className={`h-full bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 transition-all duration-[2100ms] ease-out delay-[1260ms] ${
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
                className={`flex-1 text-center relative transition-all duration-[2100ms] ease-out delay-[1540ms] ${
                  isVisible('stage-2') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[40px] scale-110 blur-sm'
                }`}
              >
                <div className="relative mb-6">
                  {/* Enhanced distillation flask with standardized hover effects */}
                  <div 
                    className={`w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-[2100ms] ease-out delay-[1680ms] hover:scale-125 hover:shadow-purple-500/70 hover:shadow-2xl cursor-pointer group relative ${
                      isVisible('stage-2') 
                        ? 'scale-100 opacity-100' 
                        : 'scale-[2] opacity-60'
                    }`}
                    style={{
                      transition: isVisible('stage-2') 
                        ? 'transform 3000ms ease-out 500ms, opacity 3000ms ease-out 500ms, box-shadow 300ms ease-out' 
                        : 'transform 3000ms ease-out 500ms, opacity 3000ms ease-out 500ms'
                    }}
                  >
                    <span className="text-5xl animate-pulse group-hover:animate-bounce group-hover:scale-110 transition-transform duration-300 relative z-10" role="img" aria-label="Knowledge distillation process">🧪</span>
                    
                    {/* Enhanced hover glow effect */}
                    <div className="absolute inset-0 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse group-hover:scale-110"></div>
                    
                    {/* Pulsing ring effect on hover */}
                    <div className="absolute inset-0 border-4 border-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
                  </div>
                </div>
                
                {/* Text loads last */}
                <div 
                  id="stage-2-text"
                  className={`transition-all duration-[2000ms] ease-out ${
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
                className={`hidden lg:flex flex-col items-center justify-center space-y-3 transition-all duration-[2800ms] ease-out delay-[2030ms] ${
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
                    className={`w-2 h-2 bg-green-400 rounded-full transition-all duration-[700ms] ease-out delay-[2380ms] ${
                      isVisible('transform-2') ? 'opacity-100' : 'opacity-30'
                    }`}
                  ></div>
                  <div 
                    className={`w-2 h-2 bg-green-400 rounded-full transition-all duration-[700ms] ease-out delay-[2590ms] ${
                      isVisible('transform-2') ? 'opacity-100' : 'opacity-30'
                    }`}
                  ></div>
                  <div 
                    className={`w-2 h-2 bg-green-400 rounded-full transition-all duration-[700ms] ease-out delay-[2800ms] ${
                      isVisible('transform-2') ? 'opacity-100' : 'opacity-30'
                    }`}
                  ></div>
                </div>
              </div>

              {/* Stage 3: Field Deployed */}
              <div 
                id="stage-3"
                className={`flex-1 text-center relative transition-all duration-[2100ms] ease-out delay-[2520ms] ${
                  isVisible('stage-3') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[40px] scale-110 blur-sm'
                }`}
              >
                <div className="relative mb-6">
                  {/* Compact forest deployment with standardized hover effects */}
                  <div 
                    className={`w-28 h-28 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-[2100ms] ease-out delay-[2660ms] hover:scale-125 hover:shadow-green-500/70 hover:shadow-2xl cursor-pointer group relative ${
                      isVisible('stage-3') 
                        ? 'scale-100 opacity-100' 
                        : 'scale-[2] opacity-60'
                    }`}
                    style={{
                      transition: isVisible('stage-3') 
                        ? 'transform 3000ms ease-out 500ms, opacity 3000ms ease-out 500ms, box-shadow 300ms ease-out' 
                        : 'transform 3000ms ease-out 500ms, opacity 3000ms ease-out 500ms'
                    }}
                  >
                    <span className="text-4xl animate-pulse group-hover:animate-bounce group-hover:scale-110 transition-transform duration-300 relative z-10" role="img" aria-label="Forest deployment">🌲</span>
                    
                    {/* Enhanced hover glow effect */}
                    <div className="absolute inset-0 bg-green-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse group-hover:scale-110"></div>
                    
                    {/* Pulsing ring effect on hover */}
                    <div className="absolute inset-0 border-4 border-green-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
                    
                    {/* Solar panel indicator */}
                    <span 
                      className={`absolute -top-1 -right-1 text-sm transition-all duration-[1400ms] ease-out delay-[2940ms] ${
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
                  className={`transition-all duration-[2000ms] ease-out ${
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
              className={`transition-all duration-[2100ms] ease-out delay-[2100ms] ${
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
              className={`transition-all duration-[2100ms] ease-out delay-[2800ms] ${
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
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            id="stat-1"
            data-animate
            className={`bg-black/50 p-8 rounded-lg text-center transition-all duration-[3200ms] ease-out ${
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
            className={`bg-black/50 p-8 rounded-lg text-center transition-all duration-[3200ms] ease-out ${
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
            className={`bg-black/50 p-8 rounded-lg text-center transition-all duration-[3200ms] ease-out ${
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
            className={`bg-black/50 p-8 rounded-lg text-center transition-all duration-[3200ms] ease-out ${
              isVisible('stat-4') 
                ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
            }`}
          >
            <div className="text-4xl md:text-5xl font-light text-orange-400 mb-4">Edge</div>
            <p className="text-xl text-gray-300">deployable</p>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <div 
            id="final-quote"
            data-animate
            className={`transition-all duration-[3500ms] ease-out delay-[1050ms] ${
              isVisible('final-quote') 
                ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                : 'opacity-0 translate-y-[80px] scale-90 blur-md'
            }`}
          >
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed mb-12 text-gray-100">
              "SmokeNet won't stop climate change. But it might buy us 10 minutes. 
              And sometimes, 10 minutes saves a town."
            </blockquote>
            
            <div 
              id="final-button"
              data-animate
              className={`transition-all duration-[3200ms] ease-out delay-[2800ms] ${
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


