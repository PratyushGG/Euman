'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
  const trackCTA = (type: 'contributor' | 'buyer', action: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', `${type}_cta_${action}`, {
        event_category: 'CTA',
        event_label: type
      })
    }
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Real Human Contributions{' '}
          <br className="hidden md:block" />
          <span className="text-blue-600">
            for AI Training
          </span>
        </motion.h1>
        
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto"
        >
          Reasoning, writing, voice, images, and more — authentic, human-verified contributions powering the next generation of AI.
        </motion.h2>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/buyers"
            onClick={() => trackCTA('buyer', 'click')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 inline-block"
          >
            Access Verified Human Contributions →
          </Link>
          <Link
            href="/contributors"
            onClick={() => trackCTA('contributor', 'click')}
            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 inline-block"
          >
            Earn by Sharing Your Thinking and Creations →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection