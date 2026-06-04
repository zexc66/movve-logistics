import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icons } from '../components/Icons'

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
      <section className="py-space-4xl bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-space-lg flex items-center gap-space-sm">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent uppercase tracking-wider text-sm font-display font-semibold">
                Contact Us
              </span>
              <div className="w-12 h-px bg-brand-accent"></div>
            </div>

            <h1 className="font-display font-hero font-bold text-brand-surface mb-space-md">
              Get in Touch
            </h1>
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-2xl">
              Ready to transform your supply chain? Contact our team for a personalized
              demo and see precision in action.
            </p>
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-gradient-to-b from-brand-primary to-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 gap-space-3xl max-w-6xl mx-auto">
            <div>
              <div className="mb-space-lg">
                <h2 className="font-display text-h2 font-bold text-brand-surface mb-space-md">
                  Send Us a Message
                </h2>
                <p className="text-brand-secondary-light text-body text-base">
                  Fill out the form below and our team will respond within 24 hours.
                </p>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-space-lg p-space-lg border-2 border-brand-success bg-brand-success/5"
                >
                  <div className="flex items-center gap-space-sm mb-space-sm">
                    <span className="w-8 h-8 bg-brand-success rounded-full flex items-center justify-center">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-display text-h3 font-bold text-brand-success">
                        Message Sent
                      </h3>
                      <p className="text-brand-success-light">
                        Our team will respond within 24 hours
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-space-md">
                <div>
                  <label htmlFor="name" className="block text-brand-surface font-display font-semibold mb-space-sm">
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
                    className="w-full px-space-lg py-space-md bg-brand-surface border-2 border-brand-border text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-brand-surface font-display font-semibold mb-space-sm">
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
                    className="w-full px-space-lg py-space-md bg-brand-surface border-2 border-brand-border text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-brand-surface font-display font-semibold mb-space-sm">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-space-lg py-space-md bg-brand-surface border-2 border-brand-border text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-brand-surface font-display font-semibold mb-space-sm">
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
                    className="w-full px-space-lg py-space-md bg-brand-surface border-2 border-brand-border text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-space-xl py-space-md bg-brand-accent text-brand-surface font-display font-bold text-lg hover:bg-brand-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-commanding"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div>
              <div className="mb-space-lg">
                <h2 className="font-display text-h2 font-bold text-brand-surface mb-space-md">
                  Global Operations
                </h2>
                <p className="text-brand-secondary-light text-body text-base">
                  Our worldwide network provides 24/7 support for your logistics needs.
                </p>
              </div>

              <div className="space-y-space-md">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.city}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-space-xl border border-brand-border/50 bg-brand-primary/30"
                  >
                    <h3 className="font-display text-h3 font-bold text-brand-surface mb-space-md">
                      {location.city}
                    </h3>
                    <div className="space-y-space-sm text-brand-secondary-light text-sm">
                      <div className="flex items-center gap-space-sm">
                        {Icons.fullVisibility}
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-center gap-space-sm">
                        {Icons.tracking}
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-space-sm">
                        {Icons.apiPlatform}
                        <span>{location.email}</span>
                      </div>
                    </div>
                    <p className="text-brand-muted text-xs mt-2">
                      {location.region}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-gradient-to-b from-brand-primary-dark to-[#050812]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-md">
            24/7 Global Support
          </h2>
          <p className="text-brand-secondary-light text-body text-xl mb-space-2xl">
            Our support team is available around the clock to help with any logistics
            issues or concerns.
          </p>
          <a
            href="tel:+18005550123"
            className="inline-flex items-center gap-space-sm text-brand-accent font-display font-semibold hover:gap-space-lg transition-all"
          >
            <span>{Icons.tracking}</span>
            +1 (800) 555-0123
          </a>
        </div>
      </section>
    </>
  )
}