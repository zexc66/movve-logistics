import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/utils/reducedMotion'
import { CORPORATE_OFFICE } from '@/utils/images'
import { GlassCard } from '@/components/GlassCard'
import { ParticleBackground } from '@/components/ParticleBackground'
import { MagneticButton } from '@/components/MagneticButton'

gsap.registerPlugin(ScrollTrigger)
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { useStructuredData } from '@/hooks/useStructuredData'

export function Contact() {
  useDocumentTitle('Contact — MOVVE', 'Contact MOVVE for enterprise logistics solutions. Our team responds within 24 hours. Offices in San Francisco, Singapore, and Rotterdam.')
  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact MOVVE',
    url: 'https://movve.com/contact'
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const heroRef = useRef<HTMLDivElement>(null)
  const formSectionRef = useRef<HTMLDivElement>(null)
  const locationsRef = useRef<HTMLDivElement>(null)
  const supportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const tl = gsap.timeline()

    tl.fromTo(heroRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )

    gsap.fromTo(formSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: formSectionRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      }
    )

    gsap.fromTo(locationsRef.current?.querySelectorAll('.location-card') || [],
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: locationsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      }
    )

    gsap.fromTo(supportRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: supportRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      }
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const locations = [
    { city: 'San Francisco', address: '100 Mission Street, Suite 500', phone: '+1 (415) 555-0123', email: 'sf@movve.com', region: 'North America West' },
    { city: 'New York', address: '350 Fifth Avenue, Suite 7810', phone: '+1 (212) 555-0456', email: 'ny@movve.com', region: 'North America East' },
    { city: 'London', address: '30 St Mary Axe, Level 35', phone: '+44 20 7123 4567', email: 'london@movve.com', region: 'EMEA' },
    { city: 'Singapore', address: 'Marina Bay Financial Centre, Tower 3', phone: '+65 6789 0123', email: 'sg@movve.com', region: 'APAC' },
  ]

  const inputClasses = 'w-full px-6 py-4 bg-white border-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 disabled:bg-slate-50 disabled:cursor-not-allowed transition-all duration-300 rounded-xl focus:shadow-lg focus:shadow-emerald-500/10'

  return (
    <>
      <section className="bg-[#0f172a] py-32 px-8 lg:px-16 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={CORPORATE_OFFICE} alt="MOVVE corporate office building exterior" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-[#0f172a]/85" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

        <div ref={heroRef} className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-800/50 border border-slate-700/30 rounded-lg backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Enterprise Partnership</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Get in <span className="text-emerald-400">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Ready to transform your supply chain? Our enterprise team delivers
            personalized solutions for complex global logistics.
          </p>
        </div>
      </section>

      <section ref={formSectionRef} className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-emerald-500" />
                <span className="text-emerald-700 text-sm font-semibold tracking-widest uppercase">Contact Form</span>
              </div>
              <h2
                className="text-4xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Send Us a Message
              </h2>
              <p className="text-lg text-slate-500 mb-10">
                Our enterprise team responds within 24 hours.
              </p>

              {submitStatus === 'success' && (
                <div role="status" className="mb-8 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-900 mb-1">Message Sent</h3>
                      <p className="text-emerald-700">Our team will respond within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div role="alert" className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-red-900 mb-1">Something went wrong</h3>
                      <p className="text-red-700">Please try again or email us directly at contact@movve.com</p>
                    </div>
                  </div>
                </div>
              )}

              <GlassCard variant="light" className="p-8 md:p-10">
              <form onSubmit={handleSubmit} aria-busy={isSubmitting} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">Name *</label>
                  <input type="text" id="name" name="name" autoComplete="name" inputMode="text" autoCapitalize="words" spellCheck={false} value={formData.name} onChange={handleChange} required placeholder="John Smith" disabled={isSubmitting} className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">Email *</label>
                  <input type="email" id="email" name="email" autoComplete="email" inputMode="email" spellCheck={false} value={formData.email} onChange={handleChange} required placeholder="john@company.com" disabled={isSubmitting} className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-3">Company</label>
                  <input type="text" id="company" name="company" autoComplete="organization" spellCheck={false} value={formData.company} onChange={handleChange} placeholder="Your Company" disabled={isSubmitting} className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us about your logistics needs..." disabled={isSubmitting} className={`${inputClasses} resize-none`} />
                </div>
                <MagneticButton
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting || !formData.email || !formData.name || !formData.message}
                  className="w-full px-10 py-5 bg-emerald-500 text-white font-bold text-lg hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-xl hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </MagneticButton>
              </form>
              </GlassCard>
            </div>

            <div ref={locationsRef}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-emerald-500" />
                <span className="text-emerald-700 text-sm font-semibold tracking-widest uppercase">Global Offices</span>
              </div>
              <h2
                className="text-4xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Global Operations
              </h2>
              <p className="text-lg text-slate-500 mb-10">
                24/7 support from four strategic hubs worldwide.
              </p>

              <div className="space-y-4">
                {locations.map((location) => (
                  <div key={location.city} className="location-card group bg-white border border-slate-200 p-6 rounded-xl hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-display)' }}>{location.city}</h3>
                        <span className="text-xs font-medium text-emerald-700 tracking-wider uppercase">{location.region}</span>
                      </div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mt-2" />
                    </div>
                    <div className="mt-4 space-y-2 text-sm text-slate-500">
                      <p>{location.address}</p>
                      <a href={`tel:${location.phone.replace(/[^\d+]/g, '')}`} className="block hover:text-emerald-700 transition-colors">{location.phone}</a>
                      <a href={`mailto:${location.email}`} className="block text-emerald-700 hover:text-emerald-800 transition-colors">{location.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={supportRef} className="py-24 bg-[#0f172a] border-t border-emerald-500/20 relative overflow-hidden">
        <ParticleBackground count={15} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6">Always Available</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            24/7 Global Support
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
            Our support team is available around the clock for any logistics issues.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="tel:+18005550123" className="inline-flex items-center gap-3 text-white text-2xl font-bold hover:text-emerald-400 transition-colors">
              <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (800) 555-0123
            </a>
            <a href="mailto:enterprise@movve.com" className="inline-flex items-center gap-3 text-white text-2xl font-bold hover:text-emerald-400 transition-colors">
              <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              enterprise@movve.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
