'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Translatica() {
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [showSubheading, setShowSubheading] = useState(false)

  useEffect(() => {
    // Trigger subheading fade-in after component mounts
    const timer = setTimeout(() => setShowSubheading(true), 800)

    // Set up Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]))
            
            // Trigger sequential text animations for hero section
            const id = entry.target.id
            if (id === 'hero-title') {
              // Single hero animation - no sequential elements
            }
            
            // Trigger sequential animations for why section
            if (id === 'why-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'why-content'])), 400)
            }
            
            // Trigger sequential animations for pipeline section
            if (id === 'pipeline-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-transcribe'])), 400)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'arrow-1'])), 800)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-diarize'])), 1200)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'arrow-2'])), 1600)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-translate'])), 2000)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'arrow-3'])), 2400)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-respeak'])), 2800)
            }
            
            // Trigger sequential animations for architecture section
            if (id === 'architecture-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'architecture-subtitle'])), 200)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'architecture-grid'])), 500)
            }
            
            // Trigger sequential animations for achievements section
            if (id === 'achievements-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcomes-content'])), 400)
            }
            
            // Trigger sequential animations for outcomes section - animate from the web container
            if (id === 'outcomes-content') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcome-1'])), 300)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcome-2'])), 600)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcome-3'])), 900)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcome-4'])), 1200)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcome-5'])), 1500)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcome-6'])), 1800)
            }
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px'
      }
    )

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]')
    animatedElements.forEach(el => observer.observe(el))

    return () => {
      clearTimeout(timer)
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
            src="/images/translatica-banner.webp"
            alt="Translatica abstract communication visualization"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-8 animate-fade-in">
            Translatica
          </h1>
          <div className={`transition-opacity duration-1000 ${showSubheading ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 tracking-wide">
              What if translation felt human?
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

      {/* Why Translatica? */}
      <section className="bg-black px-6 pt-32 pb-32">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title */}
            <div 
              id="why-title"
              data-animate
              className={`transition-all duration-1000 ease-out ${
                isVisible('why-title') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                Why Translatica?
              </h2>
            </div>

            {/* Right Column - Content */}
            <div 
              id="why-content"
              data-animate
              className={`transition-all duration-1000 ease-out delay-300 ${
                isVisible('why-content') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-lg font-medium mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Language is Human Connection</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Language is one of the most powerful expressions of our humanity. It allows us to share not only information, but our inner lives: memories, emotions, humor, culture, and identity. Through language, we pass down history, express love and grief, resolve conflict, and create shared meaning.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">The Language Barrier</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Yet language can also be a boundary. When we cannot understand the words someone speaks, connection becomes harder to establish. Miscommunication, or silence, can make others feel foreign, distant, even threatening. This is not merely a social inconvenience; it has real consequences.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">The Human Cost</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Historically, the absence of a shared language has often enabled dehumanization. Psychological research and
military accounts suggest that soldiers are more likely to dehumanize enemies who speak an unfamiliar language or none at all. The linguistic gap creates distance, and that distance can dull empathy.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-lg font-medium mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Building Trust Through Voice</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        When someone speaks our language, or even tries to, we instinctively view them as more relatable and trustworthy. Language doesn't just carry words; it conveys identity, tone, and emotion. And when spoken in a familiar voice, it bridges not only linguistic divides but emotional ones as well.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Beyond Simple Translation</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        These insights form the foundation of the Translatica project. In an increasingly global world, the ability to communicate fluidly across languages, without losing the personality or presence of the speaker, has become deeply valuable. Real connection demands more than just translated words; it requires rhythm, tone, and voice.
                      </p>
                    </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="bg-black px-6 pt-32 pb-32">
        <div className="max-w-7xl w-full mx-auto">
          
          {/* Pipeline Title Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            
            {/* Left Half - Title */}
            <div 
              id="pipeline-title"
              data-animate
              className={`transition-all duration-700 ease-out ${
                isVisible('pipeline-title') 
                  ? 'opacity-100 translate-x-0 scale-100 blur-0' 
                  : 'opacity-0 translate-x-[-40px] scale-95 blur-sm'
              }`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4">
                How It Works
              </h2>
              <p className="text-xl md:text-2xl text-gray-400">
                A Modular Voice-Preserving Pipeline
              </p>
            </div>
            
            {/* Right Half - Empty for balance */}
            <div></div>
            
          </div>
          
          {/* Pipeline Stages */}
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-4">
            
            {/* Stage 1: Transcribe */}
            <div 
              id="stage-transcribe"
              data-animate
              className={`flex-1 text-center transition-all duration-800 ease-out ${
                isVisible('stage-transcribe') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-85 blur-sm'
              }`}
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl mb-6 transform transition-all duration-800 hover:scale-110 hover:shadow-purple-500/25">
                <span className="text-5xl" role="img" aria-label="Transcribe">🎤</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">Transcribe</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xs mx-auto mb-2">
                Convert speech to text with speaker awareness
              </p>
              <p className="text-indigo-400 text-sm font-medium">Whisper</p>
            </div>

            {/* Arrow 1 */}
            <div 
              id="arrow-1"
              className={`text-gray-600 text-4xl transition-all duration-600 ease-out ${
                isVisible('arrow-1') 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-[-30px] scale-75'
              }`}
            >
              <span className="hidden lg:block">→</span>
              <span className="block lg:hidden">↓</span>
            </div>

            {/* Stage 2: Diarize */}
            <div 
              id="stage-diarize"
              className={`flex-1 text-center transition-all duration-800 ease-out ${
                isVisible('stage-diarize') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-85 blur-sm'
              }`}
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl mb-6 transform transition-all duration-800 hover:scale-110 hover:shadow-green-500/25">
                <span className="text-5xl" role="img" aria-label="Diarize">👥</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">Diarize</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xs mx-auto mb-2">
                Identify and separate individual speakers
              </p>
              <p className="text-indigo-400 text-sm font-medium">PyAnnote</p>
            </div>

            {/* Arrow 2 */}
            <div 
              id="arrow-2"
              className={`text-gray-600 text-4xl transition-all duration-600 ease-out ${
                isVisible('arrow-2') 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-[-30px] scale-75'
              }`}
            >
              <span className="hidden lg:block">→</span>
              <span className="block lg:hidden">↓</span>
            </div>

            {/* Stage 3: Translate */}
            <div 
              id="stage-translate"
              className={`flex-1 text-center transition-all duration-800 ease-out ${
                isVisible('stage-translate') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-85 blur-sm'
              }`}
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl mb-6 transform transition-all duration-800 hover:scale-110 hover:shadow-orange-500/25">
                <span className="text-5xl" role="img" aria-label="Translate">🔄</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">Translate</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xs mx-auto mb-2">
                Convert text while preserving context and tone
              </p>
              <p className="text-indigo-400 text-sm font-medium">GPT-4</p>
            </div>

            {/* Arrow 3 */}
            <div 
              id="arrow-3"
              className={`text-gray-600 text-4xl transition-all duration-600 ease-out ${
                isVisible('arrow-3') 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-[-30px] scale-75'
              }`}
            >
              <span className="hidden lg:block">→</span>
              <span className="block lg:hidden">↓</span>
            </div>

            {/* Stage 4: Re-speak */}
            <div 
              id="stage-respeak"
              className={`flex-1 text-center transition-all duration-800 ease-out ${
                isVisible('stage-respeak') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-85 blur-sm'
              }`}
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl mb-6 transform transition-all duration-800 hover:scale-110 hover:shadow-pink-500/25">
                <span className="text-5xl" role="img" aria-label="Re-speak">🔊</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">Re-speak</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xs mx-auto mb-2">
                Generate speech in the original speaker's voice
              </p>
              <p className="text-indigo-400 text-sm font-medium">F5/UniAudio</p>
            </div>

          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="bg-black px-6 py-20 pb-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-8">
            
            {/* Left Half - Title */}
            <div>
              <h2 
                id="architecture-title"
                data-animate
                className={`text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-white transition-all duration-700 ease-out ${
                  isVisible('architecture-title') 
                    ? 'opacity-100 translate-x-0 scale-100 blur-0' 
                    : 'opacity-0 translate-x-[-40px] scale-95 blur-sm'
                }`}
              >
                System Architecture
              </h2>
              <p 
                id="architecture-subtitle"
                data-animate
                className={`text-xl md:text-2xl text-gray-400 transition-all duration-500 ease-out ${
                  isVisible('architecture-subtitle') 
                    ? 'opacity-100 translate-x-0 blur-0' 
                    : 'opacity-0 translate-x-[-40px] blur-sm'
                }`}
              >
                Cloud-Native, Scalable, Agile
              </p>
            </div>
            
            {/* Right Half - Empty for balance */}
            <div></div>
            
          </div>
          
          <div 
            id="architecture-grid"
            data-animate
            className={`transition-all duration-500 ease-out ${
              isVisible('architecture-grid') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[40px] blur-sm'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* UI Component */}
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <span className="text-2xl" role="img" aria-label="UI">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">UI</h3>
                <p className="text-indigo-400 font-medium">Vercel</p>
                <div className="mt-3 text-xs text-gray-400">Frontend & Deployment</div>
              </div>

              {/* Backend Component */}
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <span className="text-2xl" role="img" aria-label="Backend">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Backend</h3>
                <p className="text-indigo-400 font-medium">AWS Lambda</p>
                <div className="mt-3 text-xs text-gray-400">Serverless Functions</div>
              </div>

              {/* Storage/Auth Component */}
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <span className="text-2xl" role="img" aria-label="Storage">🔐</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Storage/Auth</h3>
                <p className="text-indigo-400 font-medium">Supabase</p>
                <div className="mt-3 text-xs text-gray-400">Database & Authentication</div>
              </div>

              {/* Pipeline Component */}
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <span className="text-2xl" role="img" aria-label="Pipeline">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Pipeline</h3>
                <p className="text-indigo-400 font-medium">Modular orchestration</p>
                <div className="mt-3 text-xs text-gray-400">AI Processing Chain</div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Constellation */}
      <section className="bg-black flex items-center justify-center px-6 pt-32 py-8">
        <div className="max-w-7xl w-full">
          
          {/* Key Achievements Title */}
          <div className="w-full mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Half - Title */}
              <div>
                <h2 
                  id="achievements-title"
                  data-animate
                  className={`text-4xl md:text-5xl lg:text-6xl font-light text-white transition-all duration-700 ease-out whitespace-nowrap ${
                    isVisible('achievements-title') 
                      ? 'opacity-100 translate-x-0 scale-100 blur-0' 
                      : 'opacity-0 translate-x-[-40px] scale-95 blur-sm'
                  }`}
                >
                  Key Achievements
                </h2>
              </div>
              
              {/* Right Half - Empty for balance */}
              <div></div>
              
            </div>
          </div>
          
          <div 
            id="outcomes-content"
            data-animate
            className={`transition-all duration-500 ease-out ${
              isVisible('outcomes-content') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[40px] blur-sm'
            }`}
          >
            
            {/* Desktop: Constellation Layout */}
            <div className="hidden md:block relative h-[800px] -mt-8">
              
              {/* Central Hub - Modular Pipeline */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10">
                <div className="constellation-icon w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-indigo-400/30 transition-all duration-500 hover:scale-125 hover:shadow-indigo-500/50">
                  <span className="text-3xl" role="img" aria-label="Modular">🔧</span>
                </div>
                <div className="constellation-text absolute top-24 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-indigo-900/95 backdrop-blur-md p-4 rounded-lg border border-indigo-500/40 whitespace-nowrap">
                  <h3 className="text-lg font-semibold text-white mb-1">Modular Pipeline</h3>
                  <p className="text-indigo-300 text-sm">Central orchestration hub</p>
                </div>
              </div>

              {/* Outcome Icons - Positioned within the web rings */}
              
              {/* Voice Preservation - Inner ring, top */}
              <div 
                id="outcome-1"
                data-animate
                className={`absolute top-16 md:top-28 left-1/2 transform -translate-x-1/2 group cursor-pointer z-10 transition-all duration-700 ease-out ${
                  isVisible('outcome-1') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-90'
                }`}
              >
                <div className="constellation-icon w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-150 hover:shadow-2xl hover:shadow-green-500/50">
                  <span className="text-2xl" role="img" aria-label="Voice">🎙️</span>
                </div>
                <div className="constellation-text absolute top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-2 bg-green-900/90 backdrop-blur-md p-4 rounded-lg border border-green-500/30 whitespace-nowrap">
                  <h3 className="text-lg font-semibold text-white mb-1">Voice Preservation</h3>
                  <p className="text-green-300 text-sm">Speaker identity across languages</p>
                </div>
              </div>

              {/* Multi-Language - Middle ring, top right */}
              <div 
                id="outcome-2"
                data-animate
                className={`absolute top-20 md:top-36 right-8 md:right-24 group cursor-pointer z-10 transition-all duration-700 ease-out ${
                  isVisible('outcome-2') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-90'
                }`}
              >
                <div className="constellation-icon w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-150 hover:shadow-2xl hover:shadow-orange-500/50">
                  <span className="text-2xl" role="img" aria-label="Languages">🌍</span>
                </div>
                <div className="constellation-text absolute top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-2 bg-orange-900/90 backdrop-blur-md p-4 rounded-lg border border-orange-500/30 whitespace-nowrap">
                  <h3 className="text-lg font-semibold text-white mb-1">20+ Languages</h3>
                  <p className="text-orange-300 text-sm">Scalable global architecture</p>
                </div>
              </div>

              {/* Cloud Native - Outer ring, bottom right */}
              <div 
                id="outcome-3"
                data-animate
                className={`absolute bottom-20 md:bottom-36 right-8 md:right-24 group cursor-pointer z-10 transition-all duration-700 ease-out ${
                  isVisible('outcome-3') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-90'
                }`}
              >
                <div className="constellation-icon w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-150 hover:shadow-2xl hover:shadow-blue-500/50">
                  <span className="text-2xl" role="img" aria-label="Cloud">☁️</span>
                </div>
                <div className="constellation-text absolute top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-2 bg-blue-900/90 backdrop-blur-md p-4 rounded-lg border border-blue-500/30 whitespace-nowrap">
                  <h3 className="text-lg font-semibold text-white mb-1">Cloud Native</h3>
                  <p className="text-blue-300 text-sm">Serverless and scalable</p>
                </div>
              </div>

              {/* Multi-Speaker - Inner ring, bottom */}
              <div 
                id="outcome-4"
                data-animate
                className={`absolute bottom-16 md:bottom-28 left-1/2 transform -translate-x-1/2 group cursor-pointer z-10 transition-all duration-700 ease-out ${
                  isVisible('outcome-4') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-90'
                }`}
              >
                <div className="constellation-icon w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-150 hover:shadow-2xl hover:shadow-yellow-500/50">
                  <span className="text-2xl" role="img" aria-label="Speakers">👥</span>
                </div>
                <div className="constellation-text absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2 bg-yellow-900/90 backdrop-blur-md p-4 rounded-lg border border-yellow-500/30 whitespace-nowrap">
                  <h3 className="text-lg font-semibold text-white mb-1">Multi-Speaker Support</h3>
                  <p className="text-yellow-300 text-sm">Advanced diarization</p>
                </div>
              </div>

              {/* Ensemble Strategy - Middle ring, bottom left */}
              <div 
                id="outcome-5"
                data-animate
                className={`absolute bottom-20 md:bottom-36 left-8 md:left-24 group cursor-pointer z-10 transition-all duration-700 ease-out ${
                  isVisible('outcome-5') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-90'
                }`}
              >
                <div className="constellation-icon w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-150 hover:shadow-2xl hover:shadow-pink-500/50">
                  <span className="text-2xl" role="img" aria-label="Ensemble">🎵</span>
                </div>
                <div className="constellation-text absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2 bg-pink-900/90 backdrop-blur-md p-4 rounded-lg border border-pink-500/30 whitespace-nowrap">
                  <h3 className="text-lg font-semibold text-white mb-1">Ensemble Strategy</h3>
                  <p className="text-pink-300 text-sm">Multi-model accuracy</p>
                </div>
              </div>

              {/* Real-Time Adaptation - Middle ring, top left */}
              <div 
                id="outcome-6"
                data-animate
                className={`absolute top-20 md:top-36 left-8 md:left-24 group cursor-pointer z-10 transition-all duration-700 ease-out ${
                  isVisible('outcome-6') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-90'
                }`}
              >
                <div className="constellation-icon w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-150 hover:shadow-2xl hover:shadow-indigo-500/50">
                  <span className="text-2xl" role="img" aria-label="Adaptation">⚡</span>
                </div>
                <div className="constellation-text absolute top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-2 bg-indigo-900/90 backdrop-blur-md p-4 rounded-lg border border-indigo-500/30 whitespace-nowrap">
                  <h3 className="text-lg font-semibold text-white mb-1">Real-Time Adaptation</h3>
                  <p className="text-indigo-300 text-sm">Dynamic pipeline optimization</p>
                </div>
              </div>              {/* Spider Web Structure */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" style={{zIndex: 1}}>
                
                {/* Concentric Web Rings - Like a real spider web */}
                
                {/* Inner ring - closest to hub */}
                <circle cx="50%" cy="50%" r="12%" stroke="url(#ring1)" strokeWidth="1.2" fill="none" strokeDasharray="8,4" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" values="0;12" dur="15s" repeatCount="indefinite"/>
                </circle>
                
                {/* Second ring */}
                <circle cx="50%" cy="50%" r="20%" stroke="url(#ring2)" strokeWidth="1.1" fill="none" strokeDasharray="6,3" opacity="0.8">
                  <animate attributeName="stroke-dashoffset" values="0;9" dur="18s" repeatCount="indefinite"/>
                </circle>
                
                {/* Third ring */}
                <circle cx="50%" cy="50%" r="30%" stroke="url(#ring3)" strokeWidth="1" fill="none" strokeDasharray="5,3" opacity="0.7">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="20s" repeatCount="indefinite"/>
                </circle>
                
                {/* Outermost ring */}
                <circle cx="50%" cy="50%" r="40%" stroke="url(#ring4)" strokeWidth="0.9" fill="none" strokeDasharray="4,2" opacity="0.6">
                  <animate attributeName="stroke-dashoffset" values="0;6" dur="22s" repeatCount="indefinite"/>
                </circle>

                {/* Web Mesh - Interconnecting spiral threads */}
                
                {/* Outer perimeter connections */}
                <path d="M 50% 10% Q 75% 20% 90% 50%" stroke="url(#web1)" strokeWidth="0.7" fill="none" strokeDasharray="3,5" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="16s" repeatCount="indefinite"/>
                </path>
                <path d="M 90% 50% Q 75% 80% 50% 90%" stroke="url(#web2)" strokeWidth="0.7" fill="none" strokeDasharray="3,5" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="14s" repeatCount="indefinite"/>
                </path>
                <path d="M 50% 90% Q 25% 80% 10% 50%" stroke="url(#web3)" strokeWidth="0.7" fill="none" strokeDasharray="3,5" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="17s" repeatCount="indefinite"/>
                </path>
                <path d="M 10% 50% Q 25% 20% 50% 10%" stroke="url(#web4)" strokeWidth="0.7" fill="none" strokeDasharray="3,5" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="19s" repeatCount="indefinite"/>
                </path>
                
                {/* Inner web connections */}
                <path d="M 50% 20% Q 70% 30% 80% 50%" stroke="url(#web5)" strokeWidth="0.6" fill="none" strokeDasharray="2,4" opacity="0.4">
                  <animate attributeName="stroke-dashoffset" values="0;6" dur="13s" repeatCount="indefinite"/>
                </path>
                <path d="M 80% 50% Q 70% 70% 50% 80%" stroke="url(#web6)" strokeWidth="0.6" fill="none" strokeDasharray="2,4" opacity="0.4">
                  <animate attributeName="stroke-dashoffset" values="0;6" dur="15s" repeatCount="indefinite"/>
                </path>
                <path d="M 50% 80% Q 30% 70% 20% 50%" stroke="url(#web7)" strokeWidth="0.6" fill="none" strokeDasharray="2,4" opacity="0.4">
                  <animate attributeName="stroke-dashoffset" values="0;6" dur="11s" repeatCount="indefinite"/>
                </path>
                <path d="M 20% 50% Q 30% 30% 50% 20%" stroke="url(#web8)" strokeWidth="0.6" fill="none" strokeDasharray="2,4" opacity="0.4">
                  <animate attributeName="stroke-dashoffset" values="0;6" dur="18s" repeatCount="indefinite"/>
                </path>
                
                {/* Cross-web diagonal threads */}
                <path d="M 35% 25% Q 50% 35% 65% 25%" stroke="url(#web9)" strokeWidth="0.5" fill="none" strokeDasharray="1,3" opacity="0.3">
                  <animate attributeName="stroke-dashoffset" values="0;4" dur="12s" repeatCount="indefinite"/>
                </path>
                <path d="M 75% 35% Q 65% 50% 75% 65%" stroke="url(#web10)" strokeWidth="0.5" fill="none" strokeDasharray="1,3" opacity="0.3">
                  <animate attributeName="stroke-dashoffset" values="0;4" dur="14s" repeatCount="indefinite"/>
                </path>
                <path d="M 65% 75% Q 50% 65% 35% 75%" stroke="url(#web11)" strokeWidth="0.5" fill="none" strokeDasharray="1,3" opacity="0.3">
                  <animate attributeName="stroke-dashoffset" values="0;4" dur="16s" repeatCount="indefinite"/>
                </path>
                <path d="M 25% 65% Q 35% 50% 25% 35%" stroke="url(#web12)" strokeWidth="0.5" fill="none" strokeDasharray="1,3" opacity="0.3">
                  <animate attributeName="stroke-dashoffset" values="0;4" dur="10s" repeatCount="indefinite"/>
                </path>

                  {/* Gradient Definitions for Spider Web */}
                <defs>
                  {/* Ring gradients - silk-like appearance */}
                  <radialGradient id="ring1" cx="50%" cy="50%" r="12%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1"/>
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.7"/>
                    <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6"/>
                  </radialGradient>
                  <radialGradient id="ring2" cx="50%" cy="50%" r="20%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1"/>
                    <stop offset="50%" stopColor="#f97316" stopOpacity="0.6"/>
                    <stop offset="80%" stopColor="#ec4899" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.5"/>
                  </radialGradient>
                  <radialGradient id="ring3" cx="50%" cy="50%" r="30%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1"/>
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5"/>
                    <stop offset="80%" stopColor="#eab308" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.4"/>
                  </radialGradient>
                  <radialGradient id="ring4" cx="50%" cy="50%" r="40%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1"/>
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4"/>
                    <stop offset="80%" stopColor="#6366f1" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3"/>
                  </radialGradient>
                  
                  {/* Web thread gradients - natural silk shimmer */}
                  <linearGradient id="web1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.4"/>
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.4"/>
                  </linearGradient>
                  <linearGradient id="web2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.4"/>
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4"/>
                  </linearGradient>
                  <linearGradient id="web3" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4"/>
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#eab308" stopOpacity="0.4"/>
                  </linearGradient>
                  <linearGradient id="web4" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#eab308" stopOpacity="0.4"/>
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4"/>
                  </linearGradient>
                  <linearGradient id="web5" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3"/>
                  </linearGradient>
                  <linearGradient id="web6" x1="100%" y1="50%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.3"/>
                  </linearGradient>
                  <linearGradient id="web7" x1="100%" y1="100%" x2="0%" y2="50%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3"/>
                  </linearGradient>
                  <linearGradient id="web8" x1="0%" y1="50%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.3"/>
                  </linearGradient>
                  <linearGradient id="web9" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#eab308" stopOpacity="0.2"/>
                  </linearGradient>
                  <linearGradient id="web10" x1="100%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#eab308" stopOpacity="0.2"/>
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2"/>
                  </linearGradient>
                  <linearGradient id="web11" x1="100%" y1="100%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2"/>
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2"/>
                  </linearGradient>
                  <linearGradient id="web12" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2"/>
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Mobile: Grid Layout */}
            <div className="block md:hidden">
              <div className="grid grid-cols-3 gap-4 px-4 max-w-lg mx-auto">
                
                {/* Voice Preservation */}
                <div 
                  id="outcome-1-mobile"
                  data-animate
                  className={`transition-all duration-700 ease-out ${
                    isVisible('outcome-1') 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-90'
                  }`}
                >
                  <div className="group cursor-pointer text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 mx-auto">
                      <span className="text-2xl" role="img" aria-label="Voice">🎙️</span>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-sm font-semibold text-white mb-1">Voice Preservation</h3>
                      <p className="text-green-300 text-xs">Speaker identity across languages</p>
                    </div>
                  </div>
                </div>

                {/* Modular Pipeline */}
                <div 
                  id="modular-pipeline-mobile"
                  data-animate
                  className={`transition-all duration-700 ease-out ${
                    isVisible('modular-pipeline-mobile') 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-90'
                  }`}
                >
                  <div className="group cursor-pointer text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-500/50 mx-auto">
                      <span className="text-2xl" role="img" aria-label="Modular">🔧</span>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-sm font-semibold text-white mb-1">Modular Pipeline</h3>
                      <p className="text-indigo-300 text-xs">Central orchestration hub</p>
                    </div>
                  </div>
                </div>

                {/* Multi-Language */}
                <div 
                  id="outcome-2-mobile"
                  data-animate
                  className={`transition-all duration-700 ease-out ${
                    isVisible('outcome-2') 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-90'
                  }`}
                >
                  <div className="group cursor-pointer text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 mx-auto">
                      <span className="text-2xl" role="img" aria-label="Languages">🌍</span>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-sm font-semibold text-white mb-1">20+ Languages</h3>
                      <p className="text-orange-300 text-xs">Scalable global architecture</p>
                    </div>
                  </div>
                </div>

                {/* Cloud Native */}
                <div 
                  id="outcome-3-mobile"
                  data-animate
                  className={`transition-all duration-700 ease-out ${
                    isVisible('outcome-3') 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-90'
                  }`}
                >
                  <div className="group cursor-pointer text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 mx-auto">
                      <span className="text-2xl" role="img" aria-label="Cloud">☁️</span>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-sm font-semibold text-white mb-1">Cloud Native</h3>
                      <p className="text-blue-300 text-xs">Serverless and scalable</p>
                    </div>
                  </div>
                </div>

                {/* Multi-Speaker */}
                <div 
                  id="outcome-4-mobile"
                  data-animate
                  className={`transition-all duration-700 ease-out ${
                    isVisible('outcome-4') 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-90'
                  }`}
                >
                  <div className="group cursor-pointer text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/50 mx-auto">
                      <span className="text-2xl" role="img" aria-label="Speakers">👥</span>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-sm font-semibold text-white mb-1">Multi-Speaker Support</h3>
                      <p className="text-yellow-300 text-xs">Advanced diarization</p>
                    </div>
                  </div>
                </div>

                {/* Ensemble Strategy */}
                <div 
                  id="outcome-5-mobile"
                  data-animate
                  className={`transition-all duration-700 ease-out ${
                    isVisible('outcome-5') 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-90'
                  }`}
                >
                  <div className="group cursor-pointer text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50 mx-auto">
                      <span className="text-2xl" role="img" aria-label="Ensemble">🎵</span>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-sm font-semibold text-white mb-1">Ensemble Strategy</h3>
                      <p className="text-pink-300 text-xs">Multi-model accuracy</p>
                    </div>
                  </div>
                </div>
                            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div 
            id="cta-content"
            data-animate
            className={`text-center transition-all duration-500 ease-out ${
              isVisible('cta-content') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[40px] blur-sm'
            }`}
          >
            <div className="mb-12">
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
                Translatica isn't just a tool. It's a step toward translation that feels like a conversation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://github.com/bjhaj/Translatica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 hover:scale-105 font-medium text-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View the GitHub
              </a>
              <a 
                href="/baaz_jhaj_barrett_honors_thesis.pdf"
                download="Baaz_Jhaj_Barrett_Honors_Thesis.pdf"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg border border-gray-600"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                Download the Paper
              </a>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-20 pt-12 border-t border-gray-800 max-w-4xl mx-auto">
              <Link 
                href="/projects"
                className="text-indigo-500 hover:text-indigo-400 transition-colors text-lg"
              >
                ← Back to Projects
              </Link>
              <p className="text-gray-400 text-sm">© 2025 Baaz Jhaj</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
