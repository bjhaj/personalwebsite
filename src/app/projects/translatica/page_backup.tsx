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
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'hero-text-2'])), 2800)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'hero-text-3'])), 4200)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'hero-transition'])), 5800)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'hero-final'])), 7000)
              setTimeout(() => setVisibleElements(prev => new Set([...prev, 'scroll-indicator'])), 8500)
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

          {/* Emotional prose - Part 2 */}
          <div 
            id="hero-text-2"
            data-animate
            className={`transition-all duration-[2500ms] ease-out ${
              isVisible('hero-text-2') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[30px] blur-sm'
            }`}
          >
            <div className="text-lg md:text-xl leading-relaxed text-gray-300 space-y-4 max-w-3xl mx-auto">
              <p>But when we can't understand someone, that thread frays.</p>
              <p>Connection becomes harder.</p>
              <p>Distance grows.</p>
              <p className="text-gray-400">Empathy dulls.</p>
            </div>
          </div>

          {/* Emotional prose - Part 3 */}
          <div 
            id="hero-text-3"
            data-animate
            className={`transition-all duration-[2500ms] ease-out ${
              isVisible('hero-text-3') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[30px] blur-sm'
            }`}
          >
            <div className="text-lg md:text-xl leading-relaxed text-gray-200 space-y-4 max-w-3xl mx-auto">
              <p>In war, in migration, in classrooms—</p>
              <p>the absence of a shared language isn't just inconvenient.</p>
              <p className="text-red-300 font-medium">It can dehumanize.</p>
            </div>
          </div>

          {/* Transition */}
          <div 
            id="hero-transition"
            data-animate
            className={`transition-all duration-[2000ms] ease-out ${
              isVisible('hero-transition') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[20px] blur-sm'
            }`}
          >
            <p className="text-xl md:text-2xl text-white font-medium">
              Translatica is a response to that gap.
            </p>
          </div>

          {/* Final message */}
          <div 
            id="hero-final"
            data-animate
            className={`transition-all duration-[2500ms] ease-out ${
              isVisible('hero-final') 
                ? 'opacity-100 translate-y-0 blur-0' 
                : 'opacity-0 translate-y-[30px] blur-sm'
            }`}
          >
            <div className="text-lg md:text-xl leading-relaxed text-gray-200 space-y-4 max-w-3xl mx-auto">
              <p>A speech-to-speech translation system that keeps the voice behind the words.</p>
              <p>Because we don't just want to be understood—</p>
              <p className="text-blue-300 text-xl md:text-2xl font-medium">We want to be heard.</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          id="scroll-indicator"
          data-animate
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-[2000ms] ease-out ${
            isVisible('scroll-indicator') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-[20px]'
          }`}
        >
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <span className="text-sm font-light tracking-wide uppercase">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="min-h-screen bg-gray-950 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* GitHub Link */}
          <div className="text-center mb-12">
            <Link 
              href="https://github.com/bjhaj/Translatica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-500 hover:text-indigo-400 transition-colors text-lg"
            >
              🔗 GitHub Repository
            </Link>
          </div>

          {/* Banner Image */}
          <div className="aspect-video relative mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/translatica-banner.webp"
              alt="Translatica Banner"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-50 mb-6">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Translatica is an advanced AI-powered translation platform designed to break down language 
                barriers through state-of-the-art natural language processing. The system combines modern 
                transformer architectures with cultural context awareness to deliver accurate, nuanced translations 
                across multiple language pairs.
              </p>
              <p className="text-lg font-semibold text-gray-50">
                Key Achievement: Achieved 15% improvement in BLEU scores over baseline models while maintaining 
                cultural context and idiomatic expressions in translations.
              </p>
            </div>

            {/* Technical Implementation */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-50 mb-6">Technical Implementation</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-gray-50 mb-4">Architecture</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Custom Transformer implementation with attention mechanisms</li>
                    <li>• Multilingual embeddings with cross-lingual transfer learning</li>
                    <li>• Cultural context preprocessing pipeline</li>
                    <li>• Real-time inference optimization</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-gray-50 mb-4">Technologies</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• PyTorch & Hugging Face Transformers</li>
                    <li>• FastAPI for model serving</li>
                    <li>• Redis for caching translations</li>
                    <li>• Docker containerization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-50 mb-6">Performance Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                  <div className="text-2xl font-bold text-indigo-400 mb-2">95.2%</div>
                  <div className="text-sm text-gray-300">Translation Accuracy</div>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                  <div className="text-2xl font-bold text-indigo-400 mb-2">180ms</div>
                  <div className="text-sm text-gray-300">Average Latency</div>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                  <div className="text-2xl font-bold text-indigo-400 mb-2">50+</div>
                  <div className="text-sm text-gray-300">Language Pairs</div>
                </div>
              </div>
            </div>

            <div className="text-center py-12 border-t border-gray-800">
              <p className="text-gray-400 italic">
                Translatica demonstrates how advanced AI can break down language barriers, 
                enabling global communication and fostering cross-cultural understanding.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <Link 
              href="/projects"
              className="text-indigo-500 hover:text-indigo-400 transition-colors"
            >
              ← Back to Projects
            </Link>
            <p className="text-gray-400 text-sm">© 2025 Baaz Jhaj</p>
          </div>
        </div>
      </section>
    </div>
  )
}
