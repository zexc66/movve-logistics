import { useState } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 2000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const locations = [
    {
      city: 'San Francisco',
      address: '100 Mission Street, Suite 500',
      phone: '+1 (415) 555-0123',
      email: 'sf@movve.com',
    },
    {
      city: 'New York',
      address: '350 Fifth Avenue, Suite 7810',
      phone: '+1 (212) 555-0456',
      email: 'ny@movve.com',
    },
    {
      city: 'London',
      address: '30 St Mary Axe, Level 35',
      phone: '+44 20 7123 4567',
      email: 'london@movve.com',
    },
    {
      city: 'Singapore',
      address: 'Marina Bay Financial Centre, Tower 3',
      phone: '+65 6789 0123',
      email: 'sg@movve.com',
    },
  ]

  return (
    <>
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 text-crimson font-semibold text-sm mb-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
              </div>
              <span>CONTACT US</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to transform your supply chain? Contact our team for a
              personalized demo or to discuss your logistics needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-navy to-blue-900">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Send Us a Message
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Message Sent!
                      </h3>
                      <p className="text-gray-300">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crimson transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crimson transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crimson transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crimson transition-colors resize-none"
                    placeholder="Tell us about your logistics needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-crimson text-white rounded-lg font-bold text-lg hover:bg-crimson/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Offices
              </h2>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.city}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">
                      {location.city}
                    </h3>
                    <div className="space-y-2 text-gray-300">
                      <p className="flex items-center gap-2">
                        <span className="text-crimson">📍</span>
                        {location.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-crimson">📞</span>
                        {location.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-crimson">✉️</span>
                        {location.email}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  24/7 Support
                </h3>
                <p className="text-gray-300 mb-4">
                  Need immediate assistance? Our support team is available around
                  the clock.
                </p>
                <a
                  href="tel:+18005550123"
                  className="inline-flex items-center gap-2 text-crimson font-semibold hover:gap-3 transition-all"
                >
                  <span>📞</span>
                  +1 (800) 555-0123
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}