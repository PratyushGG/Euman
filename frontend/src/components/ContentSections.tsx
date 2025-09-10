'use client'

import { motion } from 'framer-motion'

const ContentSections = () => {
  return (
    <>
      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            AI needs authentic human contributions
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentic Human Reasoning</h3>
                  <p className="text-gray-600">Real human contributions capture uncertainty, revisions, and the genuine thought processes that make AI more reliable and aligned.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Multimodal Authenticity</h3>
                  <p className="text-gray-600">Human contributions across text, voice, and visuals provide the diverse, authentic training data AI systems need to be trustworthy.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">2.3x</div>
                <p className="text-gray-600 mb-4">improvement in model accuracy with human contributions</p>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Licensing Human-Verified Contributions
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-blue-50 rounded-xl"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verified & Traceable</h3>
              <p className="text-gray-600">Every human contribution is verified authentic with full provenance tracking.</p>
            </motion.div>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-green-50 rounded-xl"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multimodal Content</h3>
              <p className="text-gray-600">Text, voice, visuals, and mixed media - authentic human contributions across all formats.</p>
            </motion.div>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-purple-50 rounded-xl"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Training Ready</h3>
              <p className="text-gray-600">Formatted for fine-tuning, benchmarking, and alignment with comprehensive APIs.</p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
              Request Early Access
            </button>
          </motion.div>
        </div>
      </section>

      {/* Research Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            What the experts are saying
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <blockquote className="text-lg text-gray-700 mb-6">
                "Training on synthetic data risks collapse."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">O</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">OpenAI</div>
                  <div className="text-gray-600 text-sm">Research Paper 2024</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <blockquote className="text-lg text-gray-700 mb-6">
                "Human reasoning traces are scarce but critical."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">D</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">DeepMind</div>
                  <div className="text-gray-600 text-sm">Nature Publication</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <blockquote className="text-lg text-gray-700 mb-6">
                "Authentic human data is becoming increasingly valuable."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Anthropic</div>
                  <div className="text-gray-600 text-sm">Constitutional AI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Samples Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
          >
            Data in Action
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 text-center mb-12"
          >
            We provide JSONL, annotated traces, and human-verified datasets.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-900 rounded-xl p-6 overflow-hidden"
            >
              <h3 className="text-white font-bold mb-4">JSONL Format</h3>
              <pre className="text-green-400 text-sm">
{`{
  "id": "trace_001",
  "reasoning": [
    "Let me think...",
    "Actually, wait...",
    "I need to reconsider..."
  ],
  "metadata": {
    "human_verified": true,
    "thinking_time": "2.3s"
  }
}`}
              </pre>
            </motion.div>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6"
            >
              <h3 className="text-gray-900 font-bold mb-4">Trace Visualization</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <div className="text-xs text-blue-600 font-bold">INITIAL THOUGHT</div>
                  <div className="text-sm">This looks like a calculus problem...</div>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                  <div className="text-xs text-orange-600 font-bold">CORRECTION</div>
                  <div className="text-sm">Wait, I think I misread the question.</div>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                  <div className="text-xs text-green-600 font-bold">FINAL ANSWER</div>
                  <div className="text-sm">After re-reading, the answer is...</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6"
            >
              <h3 className="text-gray-900 font-bold mb-4">Quality Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Human Authenticity</span>
                    <span>97%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '97%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Reasoning Depth</span>
                    <span>94%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Error Detection</span>
                    <span>89%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-purple-500 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContentSections