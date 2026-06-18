import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/utils/reducedMotion'
import { AIR_FREIGHT, OCEAN_FREIGHT, GROUND_TRANSPORT, WAREHOUSING, CUSTOMS_BROKERAGE, SUPPLY_CHAIN_INTELLIGENCE } from '@/utils/images'
import { WorldMap } from '../components/WorldMap'

gsap.registerPlugin(ScrollTrigger)
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export function Services() {
  useDocumentTitle('Logistics Services — MOVVE', 'Comprehensive logistics services including freight forwarding, warehousing, last-mile delivery, and customs clearance powered by AI optimization.')
  const headerRef = useRef<HTMLElement>(null)
  const servicesGridRef = useRef<HTMLElement>(null)
  const excellenceSectionRef = useRef<HTMLElement>(null)
  const ctaSectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      title: 'International Air Freight',
      description: 'Time-definite cargo solutions with guaranteed capacity on major trade lanes. Express (24-48h), standard (3-5 days), and charter options for urgent shipments.',
      details: 'Non-stop network across 140+ countries',
      metrics: ['99.2% on-time', 'Express delivery', 'Priority capacity'],
      color: 'blue',
      image: AIR_FREIGHT,
    },
    {
      title: 'Global Ocean Freight',
      description: 'Full-container (FCL) and less-than-container (LCL) services on all major trade routes. Direct carrier partnerships ensure priority booking and competitive rates.',
      details: 'Weekly sailings to 1,200+ ports',
      metrics: ['Cost-effective', 'Flexible scheduling', 'Priority booking'],
      color: 'emerald',
      image: OCEAN_FREIGHT,
    },
    {
      title: 'Dedicated Ground Transport',
      description: 'Full truckload (FTL), less-than-truckload (LTL), and intermodal solutions across North America, Europe, and APAC with GPS visibility and real-time tracking.',
      details: '12,000+ GPS-tracked vehicles',
      metrics: ['Real-time tracking', 'Multi-modal', 'Wide coverage'],
      color: 'amber',
      image: GROUND_TRANSPORT,
    },
    {
      title: 'Strategic Warehousing Network',
      description: '150+ strategically located facilities with WMS integration. Cross-docking, pick-and-pack, inventory management, and value-added services across 6 continents.',
      details: '8M+ sq ft across 6 continents',
      metrics: ['WMS integrated', 'Cross-docking', 'Global network'],
      color: 'indigo',
      image: WAREHOUSING,
    },
    {
      title: 'Global Customs Brokerage',
      description: 'Licensed brokers in 80+ countries providing classification, documentation, compliance, and automated customs clearance for repeat shipments with 99% automation.',
      details: 'Automated 99% of clearances',
      metrics: ['Global compliance', 'Automated clearance', 'Expert documentation'],
      color: 'violet',
      image: CUSTOMS_BROKERAGE,
    },
    {
      title: 'Supply Chain Intelligence',
      description: 'Real-time dashboards, predictive ETAs, cost analysis, and carbon-footprint tracking. Data-driven decision support for logistics leadership with actionable insights.',
      details: 'Real-time network optimization',
      metrics: ['Predictive analytics', 'Real-time data', 'Cost optimization'],
      color: 'rose',
      image: SUPPLY_CHAIN_INTELLIGENCE,
    },
  ]

  const colorClasses: Record<string, { border: string; shadow: string; dot: string; btn: string }> = {
    blue: { border: 'hover:border-blue-500/50', shadow: 'hover:shadow-blue-500/10', dot: 'bg-blue-500', btn: 'hover:bg-blue-500 hover:shadow-blue-500/20' },
    emerald: { border: 'hover:border-emerald-500/50', shadow: 'hover:shadow-emerald-500/10', dot: 'bg-emerald-500', btn: 'hover:bg-emerald-500 hover:shadow-emerald-500/20' },
    amber: { border: 'hover:border-amber-500/50', shadow: 'hover:shadow-amber-500/10', dot: 'bg-amber-500', btn: 'hover:bg-amber-500 hover:shadow-amber-500/20' },
    indigo: { border: 'hover:border-indigo-500/50', shadow: 'hover:shadow-indigo-500/10', dot: 'bg-indigo-500', btn: 'hover:bg-indigo-500 hover:shadow-indigo-500/20' },
    violet: { border: 'hover:border-violet-500/50', shadow: 'hover:shadow-violet-500/10', dot: 'bg-violet-500', btn: 'hover:bg-violet-500 hover:shadow-violet-500/20' },
    rose: { border: 'hover:border-rose-500/50', shadow: 'hover:shadow-rose-500/10', dot: 'bg-rose-500', btn: 'hover:bg-rose-500 hover:shadow-rose-500/20' },
  }

  useEffect(() => {
    if (prefersReducedMotion()) return
    // Header - parallax reveal
    if (headerRef.current) {
      const title = headerRef.current.querySelector('h1')
      const subtitle = headerRef.current.querySelector('p')

      gsap.fromTo(title,
        { opacity: 0, y: 80, rotationX: 45, transformPerspective: 1000 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(subtitle,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // Services Grid - staggered cards with 3D effect
    if (servicesGridRef.current) {
      const cards = servicesGridRef.current.querySelectorAll('.service-card')
      gsap.fromTo(cards,
        { opacity: 0, y: 80, scale: 0.9, rotateX: 10, transformPerspective: 1000 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: servicesGridRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Parallax on cards
      gsap.to(cards, {
        y: -15,
        duration: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: servicesGridRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }

    // Service Excellence section
    if (excellenceSectionRef.current) {
      const title = excellenceSectionRef.current.querySelector('h2')
      const subtitle = excellenceSectionRef.current.querySelector('p')
      const benefitCards = excellenceSectionRef.current.querySelectorAll('.benefit-card')

      gsap.fromTo([title, subtitle],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: excellenceSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(benefitCards,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: excellenceSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // CTA - scale reveal
    if (ctaSectionRef.current) {
      const title = ctaSectionRef.current.querySelector('h2')
      const subtitle = ctaSectionRef.current.querySelector('p')
      const button = ctaSectionRef.current.querySelector('button')

      gsap.fromTo([title, subtitle, button],
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      {/* Header */}
      <section ref={headerRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-body)' }}>
              From origin to final delivery, we handle every link in your supply chain with precision and care.
              Our end-to-end services scale with your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Global Network Map */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-slate-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Worldwide Coverage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Operating Across 150+ Countries
            </h2>
          </div>
          <WorldMap />
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesGridRef} className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const cls = colorClasses[service.color]
              return (
              <div
                key={service.title}
                className={`service-card group bg-white border border-slate-200 overflow-hidden ${cls.border} hover:shadow-xl ${cls.shadow} hover:scale-[1.02] transition-all duration-300`}
              >
                {/* Service image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-2 h-2 ${cls.dot} rounded-full animate-pulse`} />
                  <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                  {service.description}
                </p>

                <div className="mb-8 pb-8 border-b border-slate-100">
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    Key Metrics
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {service.metrics.map((metric) => (
                      <div key={metric} className="bg-slate-50 px-3 py-2 rounded-lg">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                          Performance
                        </p>
                        <p className="text-sm font-medium text-slate-700">
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Network Scale
                    </p>
                    <p className="text-sm font-semibold text-slate-700">
                      {service.details}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className={`px-6 py-3 bg-slate-900 text-white font-medium ${cls.btn} hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-lg inline-flex items-center gap-2`}
                  >
                    <span>Learn More</span>
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                </div>{/* close p-10 */}
              </div>
              )
            })}          </div>
        </div>
      </section>

      {/* Service Excellence */}
      <section ref={excellenceSectionRef} className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Animated gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Built for Enterprise Operations
            </h2>
            <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Our services are designed for the complexity and scale of enterprise supply chains,
              with the precision and reliability that mission-critical operations demand.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Scalability',
                  description: 'From startup to Fortune 500, our infrastructure grows with your business',
                  icon: 'scale',
                },
                {
                  title: 'Reliability',
                  description: '99.3% on-time delivery across all service lines with transparent tracking',
                  icon: 'check-circle',
                },
                {
                  title: 'Integration',
                  description: 'Seamless ERP/WMS integration with 500+ enterprise system connectors',
                  icon: 'link',
                },
              ].map((benefit) => {
                const iconColor = benefit.icon === 'scale' ? 'emerald' : benefit.icon === 'check-circle' ? 'amber' : 'indigo'
                const bgCls = iconColor === 'emerald' ? 'bg-emerald-500/10' : iconColor === 'amber' ? 'bg-amber-500/10' : 'bg-indigo-500/10'
                const textCls = iconColor === 'emerald' ? 'text-emerald-500' : iconColor === 'amber' ? 'text-amber-500' : 'text-indigo-500'
                return (
                <div key={benefit.title} className="benefit-card bg-slate-800 p-8 border border-slate-700 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
                  <div className={`w-12 h-12 ${bgCls} rounded-lg flex items-center justify-center mb-4`}>
                    <svg aria-hidden="true" className={`w-6 h-6 ${textCls}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {benefit.icon === 'scale' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l16 0m0 0l16 0M4 12v8m0 0h4m-4 0h4m-4 0h16M4 16v4m0 0h4m-4 0h4M4 4v4m0 0h4m-4 0h4M20 4h4" />}
                      {benefit.icon === 'check-circle' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                      {benefit.icon === 'link' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l10-10a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-10 10a4 4 0 005.656 0z" />}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400" style={{ fontFamily: 'var(--font-body)' }}>
                    {benefit.description}
                  </p>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaSectionRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Our team of logistics experts can design a tailored solution that meets your
              specific business requirements and operational needs.
            </p>
            <Link
              to="/contact"
              className="group px-10 py-5 bg-slate-900 text-white font-bold text-lg hover:bg-emerald-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 rounded-lg inline-flex items-center gap-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span>Contact Our Team</span>
              <svg aria-hidden="true" className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}