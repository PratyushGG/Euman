'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

const ContributorsPage = () => {
  const [selectedContribution, setSelectedContribution] = useState('reasoning')
  const [hoursPerWeek, setHoursPerWeek] = useState(10)
  const [formExpanded, setFormExpanded] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    background: '',
    motivation: '',
    contribution_types: [] as string[]
  })

  const contributionTypes = [
    {
      id: 'reasoning',
      title: 'Reasoning Traces',
      description: 'Multi-step thinking, problem-solving processes',
      icon: '🧠',
      rate: '$15-25/hour',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'writing',
      title: 'Original Writing',
      description: 'Essays, stories, domain knowledge content',
      icon: '✍️',
      rate: '$20-35/hour',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'audio',
      title: 'Audio/Voice',
      description: 'Spoken reasoning, debates, narration',
      icon: '🎤',
      rate: '$25-40/hour',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'visual',
      title: 'Visuals/Sketches',
      description: 'Diagrams, labeled images, hand-drawn explanations',
      icon: '🎨',
      rate: '$20-30/hour',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'mixed',
      title: 'Mixed Media',
      description: 'Video explanations, multimodal answers',
      icon: '🎬',
      rate: '$30-50/hour',
      color: 'from-indigo-500 to-blue-600'
    }
  ]

  const calculateEarnings = () => {
    const rates = {
      reasoning: 20,
      writing: 27.5,
      audio: 32.5,
      visual: 25,
      mixed: 40
    }
    const selectedRate = rates[selectedContribution as keyof typeof rates]
    const weeklyEarnings = selectedRate * hoursPerWeek
    const monthlyEarnings = weeklyEarnings * 4.33
    return {
      weekly: weeklyEarnings,
      monthly: monthlyEarnings,
      yearly: monthlyEarnings * 12
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contributor_lead_submit', {
        event_category: 'Form',
        event_label: 'contributors'
      })
    }
    // Submit form logic here
  }

  const earnings = calculateEarnings()

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Earn by Sharing Your{' '}
            <span className="text-green-600">Thinking and Creations</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto"
          >
            From reasoning traces to creative content — text, voice, and images — contribute authentically and get paid.
          </motion.h2>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => setFormExpanded(true)}
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
            >
              Start Earning Today
            </button>
            <button 
              onClick={() => document.getElementById('contribution-types')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all duration-200 transform hover:scale-105"
            >
              See Example Contributions
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contribution Types */}
      <section id="contribution-types" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Contribution Types
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributionTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${type.color} rounded-xl p-6 text-white cursor-pointer transform hover:scale-105 transition-all duration-200`}
                onClick={() => setSelectedContribution(type.id)}
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-white/90 mb-4">{type.description}</p>
                <div className="text-lg font-semibold">{type.rate}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Earnings Calculator
          </motion.h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Contribution Type
                </label>
                <select
                  value={selectedContribution}
                  onChange={(e) => setSelectedContribution(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {contributionTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.title}</option>
                  ))}
                </select>
                
                <label className="block text-sm font-medium text-gray-700 mb-4 mt-6">
                  Hours per Week: {hoursPerWeek}
                </label>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-green-600"
                />
              </div>
              
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Estimated Earnings</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Weekly:</span>
                    <span className="font-semibold text-green-600">${earnings.weekly.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly:</span>
                    <span className="font-semibold text-green-600">${earnings.monthly.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-bold">Yearly:</span>
                    <span className="font-bold text-green-600 text-lg">${earnings.yearly.toFixed(0)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            How It Works
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Sign up & verify identity',
                description: 'Quick verification process to ensure authenticity',
                icon: '🔐'
              },
              {
                step: '2', 
                title: 'Contribute in your chosen formats',
                description: 'Text, audio, visual, or mixed media - your choice',
                icon: '🎯'
              },
              {
                step: '3',
                title: 'Get paid weekly',
                description: 'Reliable payments via your preferred method',
                icon: '💰'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Privacy */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Quality & Privacy
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Provenance Tracking',
                description: 'Every contribution is tracked and verified for authenticity',
                icon: '📋'
              },
              {
                title: 'Anti-Bot Protection',
                description: 'Advanced verification to ensure only human contributions',
                icon: '🛡️'
              },
              {
                title: 'Contributor Control',
                description: 'You decide what to share and maintain ownership rights',
                icon: '⚙️'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Join the Contributor Network
          </motion.h2>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Background</label>
                <select
                  required
                  value={formData.background}
                  onChange={(e) => setFormData({...formData, background: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select your background</option>
                  <option value="Student">Student</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Writer">Writer</option>
                  <option value="Artist">Artist</option>
                  <option value="Professional">Professional</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What motivates you to contribute? How do you think authentically?
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.motivation}
                  onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                  placeholder="Tell us about your perspective and what makes your contributions unique..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Join Contributor Network →
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContributorsPage