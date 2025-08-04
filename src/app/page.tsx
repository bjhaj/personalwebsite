import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Baaz Jhaj"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        
        {/* Simple Navigation Over Image */}
        <nav className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-center">
              <div className="flex space-x-8 md:space-x-12">
                {/* Invisible placeholder to maintain same positioning as other pages */}
                <span className="font-medium text-sm md:text-base opacity-0 pointer-events-none">
                  Home
                </span>
                <Link 
                  href="/projects" 
                  className="text-black hover:text-gray-700 transition-colors duration-200 font-medium text-sm md:text-base"
                >
                  Work
                </Link>
                <Link 
                  href="/about" 
                  className="text-black hover:text-gray-700 transition-colors duration-200 font-medium text-sm md:text-base"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>

      </section>
    </div>
  )
}
