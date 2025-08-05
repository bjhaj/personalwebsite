import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found - Baaz Jhaj',
  description: 'The page you are looking for could not be found. Browse Baaz Jhaj\'s AI engineering projects and portfolio.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-50 mb-8">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-50 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          The page you are looking for could not be found. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Go Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              href="/projects"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              View Projects
            </Link>
            <Link 
              href="/about"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 