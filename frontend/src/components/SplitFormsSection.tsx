'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContributorForm {
  name: string
  email: string
  background: string
  motivation: string
}

interface LabForm {
  company_name: string
  role: string
  industry: string
  dataset_needs: string
  budget: string
  email: string
}

const SplitFormsSection = () => {
  const [contributorExpanded, setContributorExpanded] = useState(false)
  const [labExpanded, setLabExpanded] = useState(false)
  const [contributorForm, setContributorForm] = useState<ContributorForm>({
    name: '',
    email: '',
    background: '',
    motivation: ''
  })
  const [labForm, setLabForm] = useState<LabForm>({
    company_name: '',
    role: '',
    industry: '',
    dataset_needs: '',
    budget: '',
    email: ''
  })
  const [contributorSubmitting, setContributorSubmitting] = useState(false)
  const [labSubmitting, setLabSubmitting] = useState(false)
  const [contributorSuccess, setContributorSuccess] = useState(false)
  const [labSuccess, setLabSuccess] = useState(false)

  const handleContributorSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setContributorSubmitting(true)
    
    try {
      const response = await fetch('http://localhost:8000/submit-contributor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contributorForm),
      })
      
      if (response.ok) {
        setContributorSuccess(true)
        setContributorForm({ name: '', email: '', background: '', motivation: '' })
      }
    } catch (error) {
      console.error('Error submitting contributor form:', error)
    }
    
    setContributorSubmitting(false)
  }

  const handleLabSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLabSubmitting(true)
    
    try {
      const response = await fetch('http://localhost:8000/submit-lab', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(labForm),
      })
      
      if (response.ok) {
        setLabSuccess(true)
        setLabForm({ company_name: '', role: '', industry: '', dataset_needs: '', budget: '', email: '' })
      }
    } catch (error) {
      console.error('Error submitting lab form:', error)
    }
    
    setLabSubmitting(false)
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contributors Panel */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Earn by Contributing Your Thinking
              </h2>
              <p className="text-gray-600 mb-6">
                Answer reasoning tasks, debates, problem-solving prompts. Get paid for your unique perspective.
              </p>
              
              {!contributorSuccess ? (
                <button 
                  onClick={() => setContributorExpanded(!contributorExpanded)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center"
                >
                  Start Contributing
                  <svg 
                    className={`w-5 h-5 ml-2 transform transition-transform ${contributorExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Thank you for your interest! We'll contact you soon.
                </div>
              )}
            </div>
            
            <AnimatePresence>
              {contributorExpanded && !contributorSuccess && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200"
                >
                  <form onSubmit={handleContributorSubmit} className="p-8 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={contributorForm.name}
                        onChange={(e) => setContributorForm({...contributorForm, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={contributorForm.email}
                        onChange={(e) => setContributorForm({...contributorForm, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Background</label>
                      <select
                        required
                        value={contributorForm.background}
                        onChange={(e) => setContributorForm({...contributorForm, background: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select your background</option>
                        <option value="Student">Student</option>
                        <option value="Researcher">Researcher</option>
                        <option value="Writer">Writer</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Motivation</label>
                      <textarea
                        required
                        rows={3}
                        value={contributorForm.motivation}
                        onChange={(e) => setContributorForm({...contributorForm, motivation: e.target.value})}
                        placeholder="Tell us why you want to contribute..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={contributorSubmitting}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
                    >
                      {contributorSubmitting ? 'Submitting...' : 'Submit Contribution Request'}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Labs & Enterprise Panel */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Human Data for AI R&D & Enterprise
              </h2>
              <p className="text-gray-600 mb-6">
                Verified datasets of human reasoning for training, benchmarking, and safer models.
              </p>
              
              {!labSuccess ? (
                <button 
                  onClick={() => setLabExpanded(!labExpanded)}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 flex items-center"
                >
                  Request Access
                  <svg 
                    className={`w-5 h-5 ml-2 transform transition-transform ${labExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Thank you for your request! We'll be in touch soon.
                </div>
              )}
            </div>
            
            <AnimatePresence>
              {labExpanded && !labSuccess && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200"
                >
                  <form onSubmit={handleLabSubmit} className="p-8 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        required
                        value={labForm.company_name}
                        onChange={(e) => setLabForm({...labForm, company_name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Role</label>
                      <input
                        type="text"
                        required
                        value={labForm.role}
                        onChange={(e) => setLabForm({...labForm, role: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                      <input
                        type="text"
                        required
                        value={labForm.industry}
                        onChange={(e) => setLabForm({...labForm, industry: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Dataset Needs</label>
                      <textarea
                        required
                        rows={3}
                        value={labForm.dataset_needs}
                        onChange={(e) => setLabForm({...labForm, dataset_needs: e.target.value})}
                        placeholder="Describe your specific dataset requirements..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget / Grant Info (Optional)</label>
                      <input
                        type="text"
                        value={labForm.budget}
                        onChange={(e) => setLabForm({...labForm, budget: e.target.value})}
                        placeholder="e.g., $10k-50k, NSF Grant, etc."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                      <input
                        type="email"
                        required
                        value={labForm.email}
                        onChange={(e) => setLabForm({...labForm, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={labSubmitting}
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                    >
                      {labSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Use Cases Grid */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fine-tuning reasoning models</h4>
              <p className="text-gray-600 text-sm">Train models on authentic human reasoning patterns</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Benchmarking synthetic vs human</h4>
              <p className="text-gray-600 text-sm">Compare model outputs against real human reasoning</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Safer alignment datasets</h4>
              <p className="text-gray-600 text-sm">Build safer AI systems with verified human values</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SplitFormsSection