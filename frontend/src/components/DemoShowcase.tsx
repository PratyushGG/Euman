'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const humanTraces = [
  { id: 1, text: "Let me think about this step by step... First, I need to consider...", type: "Human" },
  { id: 2, text: "Hmm, this reminds me of a similar problem I solved before...", type: "Human" },
  { id: 3, text: "Wait, I think I made an error. Let me recalculate this part...", type: "Human" },
  { id: 4, text: "Actually, I'm not sure about this. Let me double-check my reasoning...", type: "Human" },
  { id: 5, text: "This is tricky. I'll approach it from a different angle...", type: "Human" },
]

const aiTraces = [
  { id: 1, text: "Based on the given information, the optimal solution is to apply...", type: "AI" },
  { id: 2, text: "The most efficient approach would be to utilize the following algorithm...", type: "AI" },
  { id: 3, text: "According to established mathematical principles, we should...", type: "AI" },
  { id: 4, text: "The correct answer can be derived through systematic application of...", type: "AI" },
  { id: 5, text: "Following standard computational methods, the result is...", type: "AI" },
]

const DemoShowcase = () => {
  const [flipped, setFlipped] = useState(false)
  const [revealedIndex, setRevealedIndex] = useState<number | null>(null)
  const [currentHumanIndex, setCurrentHumanIndex] = useState(0)
  const [currentAIIndex, setCurrentAIIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHumanIndex((prev) => (prev + 1) % humanTraces.length)
      setCurrentAIIndex((prev) => (prev + 1) % aiTraces.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const gameOptions = [
    { text: "I'm feeling overwhelmed by this problem...", isHuman: true },
    { text: "The calculation yields a precise numerical result.", isHuman: false },
    { text: "Let me sketch this out to visualize it better.", isHuman: true },
    { text: "Applying the standard algorithmic approach:", isHuman: false },
  ]

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Experience the Difference
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Box 1: AI vs Human Differentiation (flip card) */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="perspective-1000 h-64"
          >
            <div 
              className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${flipped ? 'rotate-y-180' : ''}`}
            >
              <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white cursor-pointer" 
                   onClick={() => setFlipped(!flipped)}>
                <h3 className="text-xl font-bold mb-4">AI vs Human</h3>
                <p className="text-blue-100">Click to see the difference in reasoning patterns</p>
                <div className="absolute bottom-4 right-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg p-6 text-white cursor-pointer" 
                   onClick={() => setFlipped(!flipped)}>
                <h3 className="text-xl font-bold mb-4">Key Differences</h3>
                <ul className="text-sm space-y-2 text-green-100">
                  <li>• Humans show uncertainty</li>
                  <li>• AI provides direct answers</li>
                  <li>• Human reasoning is iterative</li>
                  <li>• AI follows patterns</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Can you spot the human? (hover game) */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-6 text-white h-64"
          >
            <h3 className="text-xl font-bold mb-4">Spot the Human</h3>
            <div className="space-y-3">
              {gameOptions.map((option, index) => (
                <div 
                  key={index}
                  className="p-3 bg-white/20 rounded cursor-pointer hover:bg-white/30 transition-all duration-200 relative"
                  onMouseEnter={() => setRevealedIndex(index)}
                  onMouseLeave={() => setRevealedIndex(null)}
                >
                  <p className="text-sm">{option.text}</p>
                  <AnimatePresence>
                    {revealedIndex === index && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className={`absolute right-2 top-2 px-2 py-1 rounded text-xs font-bold ${
                          option.isHuman ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                        }`}
                      >
                        {option.isHuman ? 'Human' : 'AI'}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Box 3: Authenticity Scan (Hanover-style animation) */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg p-6 text-white h-64 overflow-hidden relative"
          >
            <h3 className="text-xl font-bold mb-4">Authenticity Scan</h3>
            
            <div className="flex space-x-4 h-40">
              {/* Human Traces Column */}
              <div className="flex-1">
                <div className="text-xs font-semibold mb-2 text-green-300">HUMAN TRACES</div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHumanIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-500/20 border border-green-400 rounded p-3 h-24"
                  >
                    <div className="text-xs mb-1 font-bold text-green-300">HUMAN</div>
                    <p className="text-xs text-green-100 leading-tight">
                      {humanTraces[currentHumanIndex].text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* AI Traces Column */}
              <div className="flex-1">
                <div className="text-xs font-semibold mb-2 text-blue-300">AI TRACES</div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAIIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-blue-500/20 border border-blue-400 rounded p-3 h-24"
                  >
                    <div className="text-xs mb-1 font-bold text-blue-300">AI</div>
                    <p className="text-xs text-blue-100 leading-tight">
                      {aiTraces[currentAIIndex].text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Scanning line effect */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{ 
                y: [0, 256, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DemoShowcase