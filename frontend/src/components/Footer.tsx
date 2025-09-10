'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  const trackCTA = (type: 'contributor' | 'buyer', action: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', `${type}_cta_${action}`, {
        event_category: 'CTA',
        event_label: `${type}_footer`
      })
    }
  }

  return (
    <motion.footer 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTAs */}
        <div className="border-b border-gray-800 pb-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">For Contributors</h3>
              <p className="text-gray-400 mb-6">
                Share your authentic thinking and creative work
              </p>
              <Link 
                href="/contributors"
                onClick={() => trackCTA('contributor', 'click')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-block"
              >
                Earn by Sharing Your Thinking and Creations →
              </Link>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">For AI Teams</h3>
              <p className="text-gray-400 mb-6">
                Access verified multimodal human datasets
              </p>
              <Link 
                href="/buyers"
                onClick={() => trackCTA('buyer', 'click')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
              >
                Access Verified Multimodal Human Contributions →
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-2xl font-bold">
              Human Trace Lab
            </div>
          </div>
          
          <div className="flex space-x-8 mb-4 md:mb-0">
            <Link 
              href="/terms" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2025 Human Trace Lab
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer