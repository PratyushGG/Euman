'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  const trackCTA = (type: 'contributor' | 'buyer', action: string) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', `${type}_cta_${action}`, {
        event_category: 'CTA',
        event_label: type
      })
    }
  }

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              Human Trace Lab
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/#datasets" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Datasets
            </Link>
            <Link 
              href="/#research" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Research
            </Link>
            <Link 
              href="/#solutions" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Solutions
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              href="/contributors"
              onClick={() => trackCTA('contributor', 'click')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              For Contributors
            </Link>
            <Link 
              href="/buyers"
              onClick={() => trackCTA('buyer', 'click')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              For AI Teams
            </Link>
            <button 
              onClick={() => trackCTA('buyer', 'demo_click')}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Book a Demo Dataset
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header