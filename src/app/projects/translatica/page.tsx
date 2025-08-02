'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Translatica() {
  const [visibleElements, setVisibleElements] = useState(new Set())

  useEffect(() => {
    // Set up Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]))
            
            // Trigger sequential text animations for hero section
            const id = entry.target.id
            if (id === 'hero-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'hero-subtitle'])), 800)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'hero-text-1'])), 1600)
            }
            
            // Trigger sequential animations for problem section
            if (id === 'problem-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'problem-content'])), 1000)
            }
            
            // Trigger sequential animations for insight section
            if (id === 'insight-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'insight-content'])), 1000)
            }
            
            // Trigger sequential animations for pipeline section
            if (id === 'pipeline-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'pipeline-subtitle'])), 800)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-transcribe'])), 1400)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'arrow-1'])), 2200)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-diarize'])), 2800)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'arrow-2'])), 3600)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-translate'])), 4200)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'arrow-3'])), 5000)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'stage-respeak'])), 5600)
            }
            
            // Trigger sequential animations for modular section
            if (id === 'modular-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'modular-content'])), 1000)
            }
            
            // Trigger sequential animations for architecture section
            if (id === 'architecture-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'architecture-subtitle'])), 800)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'architecture-grid'])), 1400)
            }
            
            // Trigger sequential animations for outcomes section
            if (id === 'outcomes-title') {
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcomes-content'])), 800)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcome-1'])), 1200)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcome-2'])), 1500)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcome-3'])), 1800)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcome-4'])), 2100)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcome-5'])), 2400)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'outcome-6'])), 2700)
            }
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    // Observe all animated elements
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('[data-animate]')
      animatedElements.forEach(el => observer.observe(el))
    }, 100)

    return () => {
      observer.disconnect()
    }
  }, [])

  const isVisible = (id: string) => visibleElements.has(id)

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Project Title */}
          <div 
            id="hero-title"
            data-animate
            className={`transition-all duration-[2500ms] ease-out ${
              isVisible('hero-title') 
                ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                : 'opacity-0 translate-y-[40px] scale-95 blur-sm'
            }`}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wide">
              Translatica
            </h1>
          </div>

          {/* Subtitle */}
          <div 
            id="hero-subtitle"
            data-animate
            className={`transition-all duration-[2000ms] ease-out ${
              isVisible('hero-subtitle') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[20px] blur-sm'
            }`}
          >
            <p className="text-2xl md:text-3xl text-gray-300 font-light italic">
              What if translation felt human?
            </p>
          </div>

          {/* Emotional prose - Part 1 */}
          <div 
            id="hero-text-1"
            data-animate
            className={`transition-all duration-[2500ms] ease-out ${
              isVisible('hero-text-1') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[30px] blur-sm'
            }`}
          >
            <div className="text-lg md:text-xl leading-relaxed text-gray-200 space-y-4 max-w-3xl mx-auto">
              <p>Language is one of the most powerful expressions of our humanity.</p>
              <p>It doesn't just carry facts—it carries memories, humor, grief, love.</p>
              <p>Through language, we create shared meaning.</p>
              <p className="text-white font-medium">We recognize each other as human.</p>
            </div>
          </div>


        </div>
      </section>

      {/* The Problem: Translation Without Presence */}
      <section className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-20">
            <h2 
              id="problem-title"
              data-animate
              className={`text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white transition-all duration-[4500ms] ease-out ${
                isVisible('problem-title') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
              }`}
            >
              The Problem: Translation Without Presence
            </h2>
          </div>
          
          <div 
            id="problem-content"
            data-animate
            className={`max-w-4xl mx-auto text-center transition-all duration-[3000ms] ease-out ${
              isVisible('problem-content') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[40px] blur-sm'
            }`}
          >
            <div className="text-xl md:text-2xl leading-relaxed text-gray-300 space-y-6">
              <p>Most translation tools strip away everything that makes us human.</p>
              <p>They lose our tone. Our emotion. Our presence.</p>
              <p className="text-gray-400">The words arrive, but the person behind them disappears.</p>
              <p className="text-red-300 font-medium">In education, students hear a robot teaching them.</p>
              <p className="text-red-300 font-medium">In conversation, warmth becomes mechanical.</p>
              <p className="text-red-300 font-medium">In media, personalities become monotone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-20">
            <h2 
              id="insight-title"
              data-animate
              className={`text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white transition-all duration-[4500ms] ease-out ${
                isVisible('insight-title') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
              }`}
            >
              The Insight
            </h2>
          </div>
          
          <div 
            id="insight-content"
            data-animate
            className={`max-w-4xl mx-auto text-center transition-all duration-[3000ms] ease-out ${
              isVisible('insight-content') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[40px] blur-sm'
            }`}
          >
            <div className="text-xl md:text-2xl leading-relaxed text-gray-300 space-y-6">
              <p>Language carries meaning, but voice carries connection.</p>
              <p>The way we speak is as important as what we say.</p>
              <p className="text-white font-medium">Translatica preserves both.</p>
              <p className="text-blue-300 text-2xl md:text-3xl font-light italic mt-12">
                "It doesn't just translate what you say—it tries to say it how you would."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works: Pipeline */}
      <section className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-20">
            <h2 
              id="pipeline-title"
              data-animate
              className={`text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-white transition-all duration-[4500ms] ease-out ${
                isVisible('pipeline-title') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
              }`}
            >
              How It Works
            </h2>
            <p 
              id="pipeline-subtitle"
              data-animate
              className={`text-xl md:text-2xl text-gray-400 transition-all duration-[3000ms] ease-out ${
                isVisible('pipeline-subtitle') 
                  ? 'opacity-100 translate-y-0 blur-0' 
                  : 'opacity-0 translate-y-[30px] blur-sm'
              }`}
            >
              A Modular Voice-Preserving Pipeline
            </p>
          </div>
          
          {/* Pipeline Stages */}
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-4">
            
            {/* Stage 1: Transcribe */}
            <div 
              id="stage-transcribe"
              className={`flex-1 text-center transition-all duration-[3000ms] ease-out ${
                isVisible('stage-transcribe') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[40px] scale-90 blur-sm'
              }`}
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl mb-6">
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
              className={`hidden lg:block text-gray-600 text-4xl transition-all duration-[2000ms] ease-out ${
                isVisible('arrow-1') 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-[-20px] scale-75'
              }`}
            >
              →
            </div>

            {/* Stage 2: Diarize */}
            <div 
              id="stage-diarize"
              className={`flex-1 text-center transition-all duration-[3000ms] ease-out ${
                isVisible('stage-diarize') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[40px] scale-90 blur-sm'
              }`}
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl mb-6">
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
              className={`hidden lg:block text-gray-600 text-4xl transition-all duration-[2000ms] ease-out ${
                isVisible('arrow-2') 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-[-20px] scale-75'
              }`}
            >
              →
            </div>

            {/* Stage 3: Translate */}
            <div 
              id="stage-translate"
              className={`flex-1 text-center transition-all duration-[3000ms] ease-out ${
                isVisible('stage-translate') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[40px] scale-90 blur-sm'
              }`}
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl mb-6">
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
              className={`hidden lg:block text-gray-600 text-4xl transition-all duration-[2000ms] ease-out ${
                isVisible('arrow-3') 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-[-20px] scale-75'
              }`}
            >
              →
            </div>

            {/* Stage 4: Re-speak */}
            <div 
              id="stage-respeak"
              className={`flex-1 text-center transition-all duration-[3000ms] ease-out ${
                isVisible('stage-respeak') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[40px] scale-90 blur-sm'
              }`}
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl mb-6">
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

      {/* Why Modular? */}
      <section className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-20">
            <h2 
              id="modular-title"
              data-animate
              className={`text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white transition-all duration-[4500ms] ease-out ${
                isVisible('modular-title') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
              }`}
            >
              Why Modular?
            </h2>
          </div>
          
          <div 
            id="modular-content"
            data-animate
            className={`max-w-4xl mx-auto transition-all duration-[3000ms] ease-out ${
              isVisible('modular-content') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[40px] blur-sm'
            }`}
          >
            <div className="text-xl md:text-2xl leading-relaxed text-gray-300 space-y-6 text-center mb-12">
              <p>Direct speech-to-speech systems are black boxes.</p>
              <p>You can't debug them. You can't tune them. You can't trust them.</p>
              <p className="text-white font-medium">Modularity enables transparency, flexibility, and evolution.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 text-center">
              <blockquote className="text-xl md:text-2xl text-blue-300 font-light italic leading-relaxed">
                "We wanted researchers, educators, and engineers to not just use it—but interrogate it."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-20">
            <h2 
              id="architecture-title"
              data-animate
              className={`text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-white transition-all duration-[4500ms] ease-out ${
                isVisible('architecture-title') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
              }`}
            >
              System Architecture
            </h2>
            <p 
              id="architecture-subtitle"
              data-animate
              className={`text-xl md:text-2xl text-gray-400 transition-all duration-[3000ms] ease-out ${
                isVisible('architecture-subtitle') 
                  ? 'opacity-100 translate-y-0 blur-0' 
                  : 'opacity-0 translate-y-[30px] blur-sm'
              }`}
            >
              Cloud-Native, Scalable, Agile
            </p>
          </div>
          
          <div 
            id="architecture-grid"
            data-animate
            className={`transition-all duration-[3000ms] ease-out ${
              isVisible('architecture-grid') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[40px] blur-sm'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              {/* UI Component */}
              <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl" role="img" aria-label="UI">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">UI</h3>
                <p className="text-indigo-400 font-medium">Vercel</p>
                <div className="mt-3 text-xs text-gray-400">Frontend & Deployment</div>
              </div>

              {/* Backend Component */}
              <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl" role="img" aria-label="Backend">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">Backend</h3>
                <p className="text-indigo-400 font-medium">AWS Lambda</p>
                <div className="mt-3 text-xs text-gray-400">Serverless Functions</div>
              </div>

              {/* Storage/Auth Component */}
              <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl" role="img" aria-label="Storage">🔐</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Storage/Auth</h3>
                <p className="text-indigo-400 font-medium">Supabase</p>
                <div className="mt-3 text-xs text-gray-400">Database & Authentication</div>
              </div>

              {/* Pipeline Component */}
              <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl" role="img" aria-label="Pipeline">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Pipeline</h3>
                <p className="text-indigo-400 font-medium">Modular orchestration</p>
                <div className="mt-3 text-xs text-gray-400">AI Processing Chain</div>
              </div>
              
            </div>

            {/* Connection Lines */}
            <div className="hidden lg:flex justify-center items-center mb-8 space-x-4">
              <div className="w-20 h-px bg-gradient-to-r from-blue-500 to-orange-500"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-20 h-px bg-gradient-to-r from-orange-500 to-green-500"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-20 h-px bg-gradient-to-r from-green-500 to-purple-500"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="text-center bg-gray-900/50 p-8 rounded-xl border border-gray-700">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-xl" role="img" aria-label="Evolution">🚀</span>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-blue-300 font-light italic">
                "No retraining. No lock-in. Built to evolve."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Design Philosophy */}
      <section className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-20">
            <h2 
              id="outcomes-title"
              data-animate
              className={`text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white transition-all duration-[4500ms] ease-out ${
                isVisible('outcomes-title') 
                  ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                  : 'opacity-0 translate-y-[60px] scale-95 blur-sm'
              }`}
            >
              Outcomes & Design Philosophy
            </h2>
          </div>
          
          <div 
            id="outcomes-content"
            data-animate
            className={`transition-all duration-[3000ms] ease-out ${
              isVisible('outcomes-content') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[40px] blur-sm'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Outcome 1: Modular pipeline */}
              <div 
                id="outcome-1"
                className={`group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-[3000ms] ease-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible('outcome-1') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[40px] scale-90 blur-sm'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl" role="img" aria-label="Modular">🔧</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Modular pipeline</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full group-hover:w-20 transition-all duration-500"></div>
                  </div>
                  <div className="text-3xl text-purple-400 group-hover:scale-125 transition-transform duration-300">→</div>
                </div>
                <p className="text-indigo-400 text-lg leading-relaxed">Customizable, debuggable, upgradable</p>
              </div>
              
              {/* Outcome 2: Voice cloning */}
              <div 
                id="outcome-2"
                className={`group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-[3000ms] ease-out hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 ${
                  isVisible('outcome-2') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[40px] scale-90 blur-sm'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl" role="img" aria-label="Voice">🎙️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">Voice cloning</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-full group-hover:w-20 transition-all duration-500"></div>
                  </div>
                  <div className="text-3xl text-green-400 group-hover:scale-125 transition-transform duration-300">→</div>
                </div>
                <p className="text-indigo-400 text-lg leading-relaxed">Speaker-preserving translation</p>
              </div>
              
              {/* Outcome 3: 20+ languages */}
              <div 
                id="outcome-3"
                className={`group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-[3000ms] ease-out hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 ${
                  isVisible('outcome-3') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[40px] scale-90 blur-sm'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl" role="img" aria-label="Languages">🌍</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">20+ languages</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full group-hover:w-20 transition-all duration-500"></div>
                  </div>
                  <div className="text-3xl text-orange-400 group-hover:scale-125 transition-transform duration-300">→</div>
                </div>
                <p className="text-indigo-400 text-lg leading-relaxed">Scalable and inclusive</p>
              </div>
              
              {/* Outcome 4: Cloud-native */}
              <div 
                id="outcome-4"
                className={`group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-[3000ms] ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                  isVisible('outcome-4') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[40px] scale-90 blur-sm'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl" role="img" aria-label="Cloud">☁️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">Cloud-native</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full group-hover:w-20 transition-all duration-500"></div>
                  </div>
                  <div className="text-3xl text-blue-400 group-hover:scale-125 transition-transform duration-300">→</div>
                </div>
                <p className="text-indigo-400 text-lg leading-relaxed">Cost-effective and serverless</p>
              </div>
              
              {/* Outcome 5: Ensemble voice strategy */}
              <div 
                id="outcome-5"
                className={`group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-[3000ms] ease-out hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 ${
                  isVisible('outcome-5') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[40px] scale-90 blur-sm'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl" role="img" aria-label="Ensemble">🎵</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">Ensemble voice strategy</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full group-hover:w-20 transition-all duration-500"></div>
                  </div>
                  <div className="text-3xl text-pink-400 group-hover:scale-125 transition-transform duration-300">→</div>
                </div>
                <p className="text-indigo-400 text-lg leading-relaxed">Accuracy + expressiveness</p>
              </div>
              
              {/* Outcome 6: Diarization & speaker tracking */}
              <div 
                id="outcome-6"
                className={`group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all duration-[3000ms] ease-out hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 ${
                  isVisible('outcome-6') 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-[40px] scale-90 blur-sm'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl" role="img" aria-label="Speakers">👥</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">Diarization & speaker tracking</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full group-hover:w-20 transition-all duration-500"></div>
                  </div>
                  <div className="text-3xl text-yellow-400 group-hover:scale-125 transition-transform duration-300">→</div>
                </div>
                <p className="text-indigo-400 text-lg leading-relaxed">Multi-speaker dubbing</p>
              </div>
              
            </div>

            {/* Summary Card */}
            <div className="mt-12 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-8 rounded-xl border border-indigo-500/30 backdrop-blur-sm">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl" role="img" aria-label="Innovation">✨</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4">Design Philosophy</h3>
                <p className="text-xl md:text-2xl text-indigo-300 font-light italic leading-relaxed max-w-3xl mx-auto">
                  "Translation isn't just about words—it's about preserving the human connection that makes communication meaningful."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div 
            id="cta-content"
            data-animate
            className={`text-center transition-all duration-[3000ms] ease-out ${
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
              <Link 
                href="https://github.com/bjhaj/Translatica"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
              >
                View the GitHub
              </Link>
              <Link 
                href="#"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg border border-gray-600"
              >
                Try the Demo
              </Link>
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
