'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

const BuyersPage = () => {
  const [formExpanded, setFormExpanded] = useState(false)
  const [formData, setFormData] = useState({
    company_name: '',
    role: '',
    industry: '',
    dataset_needs: '',
    budget: '',
    email: '',
    use_case: ''
  })

  const contributionModalities = [
    {
      title: 'Reasoning Traces',
      description: 'Structured multi-step thinking processes with corrections and uncertainties',
      icon: '🧠',
      example: 'Step-by-step problem solving with human-like hesitations and revisions',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Creative Writing',
      description: 'Original essays, stories, and domain expertise content',
      icon: '✍️',
      example: 'Authentic narrative voice with personal perspective and style',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Audio Content',
      description: 'Voice inflection, debates, and natural speech patterns',
      icon: '🎤',
      example: 'Spoken reasoning with emotional context and natural pauses',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Visual Content',
      description: 'Hand-drawn diagrams, sketches, and annotated images',
      icon: '🎨',
      example: 'Human-style drawings with imperfections and personal notation',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Mixed Media',
      description: 'Video explanations and multimodal task responses',
      icon: '🎬',
      example: 'Combined visual, audio, and text explanations showing human workflow',
      color: 'from-indigo-500 to-blue-600'
    }
  ]

  const roiMetrics = [
    {
      metric: 'Reasoning Accuracy',
      improvement: '+23%',
      description: 'Models trained on human reasoning traces show significant accuracy gains',
      color: 'text-green-600'
    },
    {
      metric: 'Safety Alignment',
      improvement: '+34%',
      description: 'Reduced harmful outputs through human value alignment',
      color: 'text-blue-600'
    },
    {
      metric: 'Audit Confidence',
      improvement: '100%',
      description: 'Full provenance tracking for regulatory compliance',
      color: 'text-purple-600'
    }
  ]

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'buyer_lead_submit', {
        event_category: 'Form',
        event_label: 'buyers'
      })
    }
    // Submit form logic here
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Access Verified{' '}
            <span className="text-blue-600">Multimodal Human Contributions</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto"
          >
            Fine-tune, benchmark, and align with diverse human datasets — reasoning, writing, audio, and visuals, all provenance-tracked and training-ready.
          </motion.h2>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => setFormExpanded(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Book a Demo Dataset
            </button>
            <button 
              onClick={() => document.getElementById('modalities')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            >
              Explore Contribution Types
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Human Contributions Matter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Why Human Contributions Matter
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Synthetic Data Recursion',
                description: 'Models trained on AI-generated content degrade with each iteration, losing authenticity and developing systematic biases.',
                icon: '🔄',
                color: 'from-red-500 to-orange-600'
              },
              {
                title: 'Uncertain Provenance',
                description: 'Web content provenance is increasingly unclear, making it impossible to verify the authenticity of training data.',
                icon: '❓',
                color: 'from-yellow-500 to-orange-600'
              },
              {
                title: 'Accuracy & Safety',
                description: 'Human-verified contributions improve reasoning accuracy and safety alignment in production AI systems.',
                icon: '✅',
                color: 'from-green-500 to-teal-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-white`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Modalities */}
      <section id="modalities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Contribution Modalities
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {contributionModalities.map((modality, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-br ${modality.color} rounded-lg p-3 text-2xl text-white`}>
                    {modality.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{modality.title}</h3>
                    <p className="text-gray-600 mb-3">{modality.description}</p>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="text-sm text-gray-500 font-medium">Example:</span>
                      <p className="text-sm text-gray-700 mt-1">{modality.example}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven ROI */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Proven ROI
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {roiMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{metric.improvement}</div>
                <h3 className="text-xl font-bold mb-4">{metric.metric}</h3>
                <p className="text-blue-100">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
          >
            Integration Examples
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 text-center mb-12"
          >
            Plug-and-play integration with comprehensive metadata and provenance tracking.
          </motion.p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Text/Reasoning Example */}
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-900 rounded-xl p-6 overflow-hidden"
            >
              <h3 className="text-white font-bold mb-4 flex items-center">
                <span className="bg-blue-500 rounded p-1 mr-2">🧠</span>
                Reasoning Traces (JSONL)
              </h3>
              <pre className="text-green-400 text-sm overflow-x-auto">
{`{
  "id": "human_trace_001",
  "contributor_id": "verified_human_xyz",
  "reasoning_steps": [
    {
      "step": 1,
      "thought": "Hmm, let me think about this...",
      "confidence": 0.6,
      "time_spent_ms": 3200
    },
    {
      "step": 2, 
      "thought": "Actually, wait. I need to reconsider...",
      "revision": true,
      "confidence": 0.4
    },
    {
      "step": 3,
      "thought": "Ok, now I'm more confident this is right",
      "confidence": 0.9,
      "final_answer": "..."
    }
  ],
  "metadata": {
    "human_verified": true,
    "provenance_hash": "sha256:abc123...",
    "thinking_time_total": "45.2s",
    "uncertainty_markers": 3,
    "revision_count": 1
  }
}`}
              </pre>
            </motion.div>

            {/* Multimodal Example */}
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6"
            >
              <h3 className="text-gray-900 font-bold mb-4 flex items-center">
                <span className="bg-purple-500 rounded p-1 mr-2 text-white">🎬</span>
                Multimodal Metadata
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                  <div className="text-xs text-purple-600 font-bold">TEXT COMPONENT</div>
                  <div className="text-sm text-gray-700">"Let me sketch this out to understand better..."</div>
                  <div className="text-xs text-gray-500 mt-1">Confidence: 85% | Authentic: ✓</div>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                  <div className="text-xs text-orange-600 font-bold">AUDIO COMPONENT</div>
                  <div className="text-sm text-gray-700">Voice file: thinking_pause.wav</div>
                  <div className="text-xs text-gray-500 mt-1">Duration: 12.3s | Natural pauses: 4</div>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <div className="text-xs text-green-600 font-bold">VISUAL COMPONENT</div>
                  <div className="text-sm text-gray-700">Hand-drawn diagram with annotations</div>
                  <div className="text-xs text-gray-500 mt-1">Resolution: 1024x768 | Hand-verified: ✓</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Ready to integrate? All data comes with comprehensive APIs and documentation.</p>
            <button 
              onClick={() => setFormExpanded(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Integration Guide
            </button>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Request Access to Multimodal Human Contributions
          </motion.h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    required
                    value={formData.company_name}
                    onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Role</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <select
                    required
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select industry</option>
                    <option value="AI/ML Research">AI/ML Research</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                    <option value="Education">Education</option>
                    <option value="Government">Government</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select budget (optional)</option>
                    <option value="$10k-50k">$10k-50k</option>
                    <option value="$50k-200k">$50k-200k</option>
                    <option value="$200k-1M">$200k-1M</option>
                    <option value="$1M+">$1M+</option>
                    <option value="Grant Funded">Grant Funded</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Use Case</label>
                <select
                  required
                  value={formData.use_case}
                  onChange={(e) => setFormData({...formData, use_case: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select primary use case</option>
                  <option value="Fine-tuning">Fine-tuning reasoning models</option>
                  <option value="Benchmarking">Benchmarking synthetic vs human</option>
                  <option value="Safety">Safety & alignment research</option>
                  <option value="Evaluation">Model evaluation & testing</option>
                  <option value="Research">Academic research</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dataset Needs & Requirements
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.dataset_needs}
                  onChange={(e) => setFormData({...formData, dataset_needs: e.target.value})}
                  placeholder="Describe your specific requirements: contribution types, volume, domains, languages, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Request Demo Dataset →
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BuyersPage