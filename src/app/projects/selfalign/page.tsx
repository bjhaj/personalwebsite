'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

export default function SelfAlign() {
  const [showSubheading, setShowSubheading] = useState(false)
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [scrollProgress, setScrollProgress] = useState(0)
  
  // Self-Alignment Training Loop animation state
  const [currentStage, setCurrentStage] = useState(0)
  const [loopActive, setLoopActive] = useState(false)
  const [showGitHubButton, setShowGitHubButton] = useState(false)
  const [reachedStages, setReachedStages] = useState(new Set())

  // Training loop stages
  const trainingStages = [
    { 
      id: 'data-generation', 
      label: 'Data Generation', 
      icon: '🔄',
      description: 'Generate synthetic training examples'
    },
    { 
      id: 'self-filtering', 
      label: 'Self-Filtering', 
      icon: '🔍',
      description: 'Filter high-quality responses'
    },
    { 
      id: 'fine-tuning', 
      label: 'Fine-Tuning', 
      icon: '⚡',
      description: 'Update model parameters'
    },
    { 
      id: 'evaluation', 
      label: 'Evaluation', 
      icon: '📊',
      description: 'Assess alignment performance'
    },
    { 
      id: 'adaptation', 
      label: 'Adaptation', 
      icon: '🎯',
      description: 'Adjust alignment strategies'
    }
  ]

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
            
            // For Why SelfAlign section, trigger sequential animations
            const id = entry.target.id
            if (id === 'why-selfalign-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'why-selfalign-content'])), 300)
            }
            
            // Start training loop animation when section becomes visible
            if (id === 'training-loop-section') {
              setLoopActive(true)
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

  // Training loop animation effect
  useEffect(() => {
    if (!loopActive) return

    const interval = setInterval(() => {
      setCurrentStage(prev => {
        const nextStage = (prev + 1) % trainingStages.length
        // Track reached stages for mobile persistence
        setReachedStages(prevReached => new Set([...prevReached, prev, nextStage]))
        return nextStage
      })
    }, 1200) // 12 seconds / 5 stages = 2.4 seconds per stage

    // Show GitHub button after one full cycle (12 seconds)
    const buttonTimer = setTimeout(() => {
      setShowGitHubButton(true)
    }, 6000) // 6 seconds for first half of loop

    return () => {
      clearInterval(interval)
      clearTimeout(buttonTimer)
    }
  }, [loopActive, trainingStages.length])

  // Helper function to check if we're in transition period (last 0.4s of each stage)
  const isInTransition = (stageIndex: number) => {
    if (!loopActive) return false
    const currentTime = Date.now() % 12000 // 12 second loop
    const stageStart = stageIndex * 2400
    const stageEnd = stageStart + 2400
    const transitionStart = stageEnd - 400 // Last 0.4 seconds
    return currentTime >= transitionStart && currentTime < stageEnd
  }

  // Helper function to check if a stage should be visible (has been reached in current cycle)
  const isStageVisible = (stageIndex: number) => {
    if (!loopActive) return false
    return currentStage >= stageIndex
  }

  // Helper function to check if an arrow should be visible
  const isArrowVisible = (arrowIndex: number) => {
    if (!loopActive) return false
    return currentStage > arrowIndex || isInTransition(arrowIndex)
  }

  // Helper function to check if a stage should stay visible on mobile (once reached, stays visible)
  const isStageVisibleMobile = (stageIndex: number) => {
    if (!loopActive) return false
    // On mobile, once we've reached a stage, keep it visible
    return reachedStages.has(stageIndex) || currentStage >= stageIndex
  }

  // Helper function to check if a stage should be animating (current stage or stay animating on mobile)
  const isStageAnimating = (stageIndex: number) => {
    if (!loopActive) return false
    return currentStage === stageIndex
  }

  // Combined function for stage visibility (desktop vs mobile behavior)
  const getStageVisibility = (stageIndex: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      // Mobile: once reached, stay visible
      return isStageVisibleMobile(stageIndex)
    } else {
      // Desktop: progressive reveal/hide
      return isStageVisible(stageIndex)
    }
  }

  // Helper function for icon animations - keep animating on mobile once reached
  const getIconAnimation = (stageIndex: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      // Mobile: keep animating if stage has been reached
      return reachedStages.has(stageIndex) || currentStage === stageIndex
    } else {
      // Desktop: only animate when current stage
      return currentStage === stageIndex
    }
  }

  const isVisible = (id: string) => visibleElements.has(id)

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/selfalign-banner.webp"
            alt="SelfAlign abstract neural network visualization"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-8 animate-fade-in">
            SelfAlign
          </h1>
          <div className={`transition-opacity duration-1000 ${showSubheading ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 tracking-wide">
              AI that learns to align itself.
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

      {/* Why SelfAlign? */}
      <section className="py-12 bg-black">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title */}
            <div 
              id="why-selfalign-title"
              data-animate
              className={`transition-all duration-1000 ease-out ${
                isVisible('why-selfalign-title') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                Why SelfAlign?
              </h2>
            </div>

            {/* Right Column - Content */}
            <div 
              id="why-selfalign-content"
              data-animate
              className={`transition-all duration-1000 ease-out delay-300 ${
                isVisible('why-selfalign-content') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-medium text-blue-400 mb-3">The Alignment Problem Is Urgent</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      As large language models grow more powerful, so does the risk of misalignment—where an AI's behavior subtly or dramatically deviates from human intent. Current alignment methods rely heavily on human feedback, require extensive manual tuning, and often reflect the values of whoever trained the model, rather than those of the user. This makes it hard to trust these systems, especially in high-stakes or cross-cultural settings.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-400 mb-3">SelfAlign explores a different path.</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Instead of hand-crafting alignment through static rules or curated labels, SelfAlign aims to build AI systems that can learn, monitor, and adjust their own alignment behavior over time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-400 mb-3">Custom Alignment, Minimal Oversight</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      SelfAlign is built to give users control—letting them define a model's persona, values, and behavioral constraints, and then train models to follow those instructions through synthetic supervised fine-tuning (SFT) and self-RLHF. It reduces dependence on expensive human feedback loops by generating, filtering, and optimizing its own alignment data.
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-medium text-blue-400 mb-3">Lightweight, Adaptable, Auditable</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      By using LoRA/QLoRA adapters, SelfAlign makes it easy to steer alignment in a modular, parameter-efficient way. These adapters can be plugged into existing LLMs to reflect different user values or application needs. And with built-in tools for tracking alignment drift, value generalization, and ethical compliance, the system remains transparent and accountable during training and deployment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-400 mb-3">Toward Safer, More Responsible AI</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      SelfAlign provides a research framework to test alignment strategies under real constraints: How do we align models at scale, without supervision? How can we ensure alignment holds under stress, ambiguity, or cultural variation? What mechanisms help AI systems notice and correct their own misalignment? These are the questions SelfAlign was built to explore. Because safe AI shouldn't just follow instructions—it should understand why they matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Alignment Training Loop */}
      <section className="py-20 bg-black" id="training-loop-section" data-animate>
        <div className="max-w-8xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Self-Alignment Training Loop
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              A continuous process where AI systems learn to align themselves through synthetic data generation, 
              self-filtering, and iterative improvement.
            </p>
          </div>

          {/* Responsive Animation Container - Horizontal on desktop, Vertical on mobile */}
          <div className="relative overflow-hidden bg-gray-900/50 rounded-2xl p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:justify-between space-y-6 md:space-y-0 md:space-x-8">
              
              {/* Stage 1: Define Values & Persona */}
              <div className={`flex-1 flex flex-col items-center transition-all duration-500 ${
                getStageVisibility(0) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <div className={`w-20 h-20 md:w-24 md:h-24 bg-blue-100 rounded-2xl flex items-center justify-center mb-3 md:mb-4 transition-all duration-500 ${
                  isStageAnimating(0) ? 'scale-110 bg-blue-200 shadow-lg shadow-blue-300/30' : 'scale-100'
                }`}>
                  <div className="relative">
                    {/* Gear Icon */}
                    <div className={`text-2xl md:text-3xl text-blue-600 ${isStageAnimating(0) ? 'animate-spin' : ''}`} 
                         style={{ animation: isStageAnimating(0) ? 'spin 2s linear infinite' : 'none' }}>
                      ⚙️
                    </div>
                    {/* Sliders */}
                    <div className="absolute -bottom-2 -right-2 space-y-0.5">
                      <div className="w-3 h-0.5 bg-blue-300 rounded-full relative">
                        <div className={`w-0.5 h-0.5 bg-blue-600 rounded-full absolute transition-all duration-1000 ${
                          isStageAnimating(0) ? 'left-2' : 'left-0.5'
                        }`}></div>
                      </div>
                      <div className="w-3 h-0.5 bg-blue-300 rounded-full relative">
                        <div className={`w-0.5 h-0.5 bg-blue-600 rounded-full absolute transition-all duration-1000 ${
                          isStageAnimating(0) ? 'left-1' : 'left-2'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xs md:text-sm font-medium text-blue-300 text-center mb-1">Define Values & Persona</h3>
                <p className="text-xs text-gray-400 text-center max-w-32">Configure desired model behavior</p>
              </div>

              {/* Arrow 1->2 - Responsive direction */}
              <div className={`transition-all duration-500 ${
                isArrowVisible(0) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              } ${isInTransition(0) ? 'scale-110' : ''}`}>
                <div className="text-gray-400 text-xl md:text-2xl">
                  <span className="block md:hidden">↓</span>
                  <span className="hidden md:block">→</span>
                </div>
              </div>

              {/* Stage 2: Generate Synthetic Data */}
              <div className={`flex-1 flex flex-col items-center transition-all duration-500 ${
                getStageVisibility(1) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <div className={`w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-2xl flex items-center justify-center mb-3 md:mb-4 transition-all duration-500 ${
                  isStageAnimating(1) ? 'scale-110 bg-green-200 shadow-lg shadow-green-300/30' : 'scale-100'
                }`}>
                  <div className="flex space-x-1">
                    <div className={`w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                      getIconAnimation(1) ? 'opacity-100 scale-100' : 'opacity-40 scale-75'
                    }`} style={{ transitionDelay: getIconAnimation(1) ? '0ms' : '0ms' }}>
                      💬
                    </div>
                    <div className={`w-2.5 h-2.5 md:w-3 md:h-3 bg-green-600 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                      getIconAnimation(1) ? 'opacity-100 scale-100' : 'opacity-40 scale-75'
                    }`} style={{ transitionDelay: getIconAnimation(1) ? '300ms' : '0ms' }}>
                      💬
                    </div>
                    <div className={`w-2.5 h-2.5 md:w-3 md:h-3 bg-green-700 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                      getIconAnimation(1) ? 'opacity-100 scale-100' : 'opacity-40 scale-75'
                    }`} style={{ transitionDelay: getIconAnimation(1) ? '600ms' : '0ms' }}>
                      💬
                    </div>
                  </div>
                </div>
                <h3 className="text-xs md:text-sm font-medium text-green-300 text-center mb-1">Generate Synthetic Data</h3>
                <p className="text-xs text-gray-400 text-center max-w-32">Create training examples from values</p>
              </div>

              {/* Arrow 2->3 */}
              <div className={`transition-all duration-500 ${
                isArrowVisible(1) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              } ${isInTransition(1) ? 'scale-110' : ''}`}>
                <div className="text-gray-400 text-xl md:text-2xl">
                  <span className="block md:hidden">↓</span>
                  <span className="hidden md:block">→</span>
                </div>
              </div>

              {/* Stage 3: Fine-Tune on Data */}
              <div className={`flex-1 flex flex-col items-center transition-all duration-500 ${
                getStageVisibility(2) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <div className={`w-20 h-20 md:w-24 md:h-24 bg-purple-100 rounded-2xl flex items-center justify-center mb-3 md:mb-4 transition-all duration-500 ${
                  isStageAnimating(2) ? 'scale-110 bg-purple-200 shadow-lg shadow-purple-300/30' : 'scale-100'
                }`}>
                  <div className="grid grid-cols-3 gap-1">
                    {/* Input layer */}
                    <div className="flex flex-col space-y-1">
                      <div className={`w-1 h-1 md:w-1.5 md:h-1.5 bg-purple-400 rounded-full transition-all duration-200 ${
                        getIconAnimation(2) ? 'animate-pulse bg-purple-300' : ''
                      }`} style={{ animationDelay: getIconAnimation(2) ? '0ms' : '0ms' }}></div>
                      <div className={`w-1 h-1 md:w-1.5 md:h-1.5 bg-purple-400 rounded-full transition-all duration-200 ${
                        getIconAnimation(2) ? 'animate-pulse bg-purple-300' : ''
                      }`} style={{ animationDelay: getIconAnimation(2) ? '100ms' : '0ms' }}></div>
                      <div className={`w-1 h-1 md:w-1.5 md:h-1.5 bg-purple-400 rounded-full transition-all duration-200 ${
                        getIconAnimation(2) ? 'animate-pulse bg-purple-300' : ''
                      }`} style={{ animationDelay: getIconAnimation(2) ? '200ms' : '0ms' }}></div>
                    </div>
                    {/* Hidden layer */}
                    <div className="flex flex-col space-y-1">
                      <div className={`w-1 h-1 md:w-1.5 md:h-1.5 bg-purple-500 rounded-full transition-all duration-200 ${
                        getIconAnimation(2) ? 'animate-pulse bg-purple-400' : ''
                      }`} style={{ animationDelay: getIconAnimation(2) ? '300ms' : '0ms' }}></div>
                      <div className={`w-1 h-1 md:w-1.5 md:h-1.5 bg-purple-500 rounded-full transition-all duration-200 ${
                        getIconAnimation(2) ? 'animate-pulse bg-purple-400' : ''
                      }`} style={{ animationDelay: getIconAnimation(2) ? '400ms' : '0ms' }}></div>
                    </div>
                    {/* Output layer */}
                    <div className="flex flex-col space-y-1 items-center">
                      <div className={`w-1 h-1 md:w-1.5 md:h-1.5 bg-purple-600 rounded-full transition-all duration-200 ${
                        getIconAnimation(2) ? 'animate-pulse bg-purple-500' : ''
                      }`} style={{ animationDelay: getIconAnimation(2) ? '500ms' : '0ms' }}></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xs md:text-sm font-medium text-purple-300 text-center mb-1">Fine-Tune on Data</h3>
                <p className="text-xs text-gray-400 text-center max-w-32">Learn from synthetic examples</p>
              </div>

              {/* Arrow 3->4 */}
              <div className={`transition-all duration-500 ${
                isArrowVisible(2) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              } ${isInTransition(2) ? 'scale-110' : ''}`}>
                <div className="text-gray-400 text-xl md:text-2xl">
                  <span className="block md:hidden">↓</span>
                  <span className="hidden md:block">→</span>
                </div>
              </div>

              {/* Stage 4: Self-Optimize Responses */}
              <div className={`flex-1 flex flex-col items-center transition-all duration-500 ${
                getStageVisibility(3) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <div className={`w-20 h-20 md:w-24 md:h-24 bg-orange-100 rounded-2xl flex items-center justify-center mb-3 md:mb-4 transition-all duration-500 ${
                  isStageAnimating(3) ? 'scale-110 bg-orange-200 shadow-lg shadow-orange-300/30' : 'scale-100'
                }`}>
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex space-x-1">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-orange-300 rounded-full flex items-center justify-center text-xs">A</div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-orange-400 rounded-full flex items-center justify-center text-xs">B</div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-orange-500 rounded-full flex items-center justify-center text-xs">C</div>
                    </div>
                    <div className={`text-sm md:text-lg transition-all duration-300 ${
                      getIconAnimation(3) ? 'animate-bounce opacity-100 scale-110' : 'opacity-40 scale-75'
                    }`}>
                      👍
                    </div>
                  </div>
                </div>
                <h3 className="text-xs md:text-sm font-medium text-orange-300 text-center mb-1">Self-Optimize Responses</h3>
                <p className="text-xs text-gray-400 text-center max-w-32">Select preferred outputs</p>
              </div>

              {/* Arrow 4->5 */}
              <div className={`transition-all duration-500 ${
                isArrowVisible(3) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              } ${isInTransition(3) ? 'scale-110' : ''}`}>
                <div className="text-gray-400 text-xl md:text-2xl">
                  <span className="block md:hidden">↓</span>
                  <span className="hidden md:block">→</span>
                </div>
              </div>

              {/* Stage 5: Track Alignment Drift */}
              <div className={`flex-1 flex flex-col items-center transition-all duration-500 ${
                getStageVisibility(4) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <div className={`w-20 h-20 md:w-24 md:h-24 bg-pink-100 rounded-2xl flex items-center justify-center mb-3 md:mb-4 transition-all duration-500 ${
                  isStageAnimating(4) ? 'scale-110 bg-pink-200 shadow-lg shadow-pink-300/30' : 'scale-100'
                }`}>
                  <div className="relative w-10 h-10 md:w-12 md:h-12">
                    {/* Gauge background */}
                    <div className="w-full h-5 md:h-6 bg-gray-300 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"></div>
                    </div>
                    {/* Needle - starts at left (❌), sweeps to right (✅) when stage is active */}
                    <div className={`absolute top-0 w-0.5 h-5 md:h-6 bg-gray-700 rounded-full transition-all duration-1500 ${
                      isStageAnimating(4) ? 'left-6 md:left-8' : 'left-1.5 md:left-2'
                    }`}></div>
                    {/* Labels */}
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>❌</span>
                      <span>✅</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xs md:text-sm font-medium text-pink-300 text-center mb-1">Track Alignment Drift</h3>
                <p className="text-xs text-gray-400 text-center max-w-32">Monitor value consistency</p>
              </div>
            </div>
          </div>

          {/* GitHub Button */}
          <div className={`text-center mt-12 transition-all duration-1000 ease-out ${
            showGitHubButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a 
              href="https://github.com/bjhaj/SelfAlign" 
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
      </section>
    </div>
  )
}
