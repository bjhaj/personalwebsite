'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-950/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="flex space-x-8 md:space-x-12">
            <Link 
              href="/projects" 
              className={`nav-link font-medium text-sm md:text-base ${isActive('/projects') ? 'active' : ''}`}
            >
              Work
            </Link>
            <Link 
              href="/about" 
              className={`nav-link font-medium text-sm md:text-base ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
