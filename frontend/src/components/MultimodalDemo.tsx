'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MultimodalDemo = () => {
  const [activeTab, setActiveTab] = useState('text')
  const [currentIndex, setCurrentIndex] = useState(0)

  const comparisons = {
    text: {
      title: 'Text Reasoning',
      human: {
        content: "Hmm, let me think about this... Actually, wait, I think I made an error earlier. Let me reconsider this problem from a different angle...",
        characteristics: ['Uncertainty markers', 'Self-corrections', 'Natural flow', 'Personal voice']
      },
      ai: {
        content: "Based on the given information, the optimal solution can be derived through systematic application of established methodologies...",
        characteristics: ['Overconfident tone', 'Generic patterns', 'No revisions', 'Formal structure']
      }
    },
    audio: {
      title: 'Voice Inflection',
      human: {
        content: "🎤 Natural pauses, emotional context, thinking sounds like 'um' and 'ah'",
        characteristics: ['Natural pauses', 'Emotional inflection', 'Thinking sounds', 'Varied pace']
      },
      ai: {
        content: "🤖 Consistent pace, no natural hesitations, robotic delivery",
        characteristics: ['Monotone delivery', 'Perfect pronunciation', 'No hesitations', 'Consistent pace']
      }
    },
    visual: {
      title: 'Visual Content',
      human: {
        content: "✏️ Hand-drawn sketch with imperfections, personal annotations, varied line weights",
        characteristics: ['Natural imperfections', 'Personal style', 'Varied line weights', 'Authentic annotations']
      },
      ai: {
        content: "🎨 Perfect geometric shapes, consistent styling, generic compositions",
        characteristics: ['Perfect geometry', 'Consistent style', 'Generic layouts', 'No personality']
      }
    }
  }

  const socialProof = [
    {
      quote: "Human contributions across text, voice, and visuals are scarce but critical for safer AI.",
      company: "OpenAI",
      logo: "O",
      color: "bg-green-500"
    },
    {
      quote: "Training on synthetic data risks collapse across all modalities.",
      company: "DeepMind", 
      logo: "D",
      color: "bg-blue-500"
    },
    {
      quote: "Authentic human data is becoming increasingly valuable for AI alignment.",
      company: "Anthropic",
      logo: "A", 
      color: "bg-purple-500"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % socialProof.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const currentComparison = comparisons[activeTab as keyof typeof comparisons]

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Why Multimodal Human Contributions Are Critical
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
        >
          See the authentic differences between human and AI across text, audio, and visual content.
        </motion.p>

        {/* Comparison Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            {Object.entries(comparisons).map(([key, comparison]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {comparison.title}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Human Side */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">H</span>
                </div>
                <h3 className="text-lg font-bold text-green-800">Human</h3>
              </div>
              
              <div className="text-green-700 mb-4 p-4 bg-white rounded-lg border border-green-200">
                {currentComparison.human.content}
              </div>
              
              <div className="space-y-2">
                {currentComparison.human.characteristics.map((char, index) => (
                  <div key={index} className="flex items-center text-sm text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {char}
                  </div>
                ))}
              </div>
            </div>

            {/* AI Side */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">AI</span>
                </div>
                <h3 className="text-lg font-bold text-blue-800">AI</h3>
              </div>
              
              <div className="text-blue-700 mb-4 p-4 bg-white rounded-lg border border-blue-200">
                {currentComparison.ai.content}
              </div>
              
              <div className="space-y-2">
                {currentComparison.ai.characteristics.map((char, index) => (
                  <div key={index} className="flex items-center text-sm text-blue-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {char}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Social Proof Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center text-gray-900 mb-8"
          >
            What the experts are saying
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {socialProof.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <blockquote className="text-gray-700 mb-4 italic">
                  "{item.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center mr-3`}>
                    <span className="text-white font-bold">{item.logo}</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{item.company}</div>
                    <div className="text-gray-500 text-sm">Research Team</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="text-blue-600 hover:text-blue-800 font-semibold underline">
              Read the Research →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MultimodalDemo