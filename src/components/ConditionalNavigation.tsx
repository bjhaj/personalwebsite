'use client'

import { usePathname } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { useEffect } from 'react'

export default function ConditionalNavigation() {
  const pathname = usePathname()
  
  useEffect(() => {
    // Add padding-top to main element when navigation is shown
    const main = document.querySelector('main')
    if (main) {
      if (pathname === '/') {
        main.className = 'pt-0'
      } else {
        main.className = 'pt-16'
      }
    }
  }, [pathname])
  
  // Don't show navigation on homepage
  if (pathname === '/') {
    return null
  }
  
  return <Navigation />
}
