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
      region: 'North America West',
    },
    {
      city: 'New York',
      address: '350 Fifth Avenue, Suite 7810',
      phone: '+1 (212) 555-0456',
      email: 'ny@movve.com',
      region: 'North America East',
    },
    {
      city: 'London',
      address: '30 St Mary Axe, Level 35',
      phone: '+44 20 7123 4567',
      email: 'london@movve.com',
      region: 'EMEA',
    },
    {
      city: 'Singapore',
      address: 'Marina Bay Financial Centre, Tower 3',
      phone: '+65 6789 0123',
      email: 'sg@movve.com',
      region: 'APAC',
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Ready to transform your supply chain? Contact our team for a personalized demo
              and see precision in action.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Fill out the form below and our team will respond within 24 hours.
              </p>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-900 mb-2">
                        Message Sent
                      </h3>
                      <p className="text-emerald-700">
                        Our team will respond within 24 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:border-slate-300 transition-colors duration-200 rounded-lg"
                  />
                  <p className="mt-2 text-xs text-slate-500">Your full name for personal communication</p>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:border-slate-300 transition-colors duration-200 rounded-lg"
                  />
                  <p className="mt-2 text-xs text-slate-500">We'll never share your email with anyone</p>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:border-slate-300 transition-colors duration-200 rounded-lg"
                  />
                  <p className="mt-2 text-xs text-slate-500">Optional - helps us understand your needs better</p>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your logistics needs..."
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:border-slate-300 transition-colors duration-200 rounded-lg resize-none"
                  />
                  <p className="mt-2 text-xs text-slate-500">Minimum 10 characters required</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.email || !formData.name || !formData.message}
                  className="w-full px-10 py-5 bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-400 transition-colors duration-200 rounded-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Global Operations
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our worldwide network provides 24/7 support for your logistics needs.
              </p>

              <div className="space-y-6">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.city}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-slate-200 p-8"
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {location.city}
                    </h3>
                    <div className="space-y-4 text-slate-600">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{location.email}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 mt-4">
                      {location.region}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            24/7 Global Support
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Our support team is available around the clock to help with any logistics issues or concerns.
          </p>
          <a
            href="tel:+18005550123"
            className="inline-flex items-center gap-3 text-white text-2xl font-bold hover:text-slate-200 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +1 (800) 555-0123
          </a>
        </div>
      </section>
    </>
  )
}