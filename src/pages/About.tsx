import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/utils/reducedMotion'
import { ABOUT_HERO, WAREHOUSE_OPERATIONS, TEAM_OPERATIONS } from '@/utils/images'
import { ParticleBackground } from '../components/ParticleBackground'
import { GlassCard } from '../components/GlassCard'

gsap.registerPlugin(ScrollTrigger)
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { useStructuredData } from '@/hooks/useStructuredData'

export function About() {
  useDocumentTitle('About — MOVVE', 'MOVVE is redefining global logistics with technology, sustainability, and a team of 500+ logistics experts across 12 countries.')
  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About MOVVE',
    url: 'https://movve.com/about',
    description: 'MOVVE is redefining global logistics with technology, sustainability, and a team of 500+ logistics experts across 12 countries.'
  })
  const headerRef = useRef<HTMLElement>(null)
  const missionRef = useRef<HTMLElement>(null)
  const visionRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const metricsRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

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

    // Mission - slide reveal
    if (missionRef.current) {
      gsap.fromTo(missionRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // Vision - slide reveal from right
    if (visionRef.current) {
      gsap.fromTo(visionRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: visionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // Values - staggered cards with 3D effect
    if (valuesRef.current) {
      const cards = valuesRef.current.querySelectorAll('.value-card')
      gsap.fromTo(cards,
        { opacity: 0, y: 60, rotateX: 10, transformPerspective: 1000 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: valuesRef.current,
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
          trigger: valuesRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }

    // Story - paragraph by paragraph reveal
    if (storyRef.current) {
      const paragraphs = storyRef.current.querySelectorAll('p')
      gsap.fromTo(paragraphs,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // Metrics - count up animation
    if (metricsRef.current) {
      const statCards = metricsRef.current.querySelectorAll('.stat-card')
      gsap.fromTo(statCards,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: metricsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // CTA - scale reveal
    if (ctaRef.current) {
      const title = ctaRef.current.querySelector('h2')
      const subtitle = ctaRef.current.querySelector('p')
      const buttons = ctaRef.current.querySelectorAll('button')

      gsap.fromTo([title, subtitle],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(buttons,
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 70%',
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
      <section ref={headerRef} className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                Precision Logistics for the Modern World
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                MOVVE is redefining global logistics with technology, precision, and unwavering
                commitment to excellence. We transform complexity into operational advantage.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src={ABOUT_HERO} alt="MOVVE logistics operations center" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section ref={missionRef} className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-px bg-emerald-500" />
                <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                  Our Mission
                </h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                To revolutionize the logistics industry through advanced technology and operational
                excellence, enabling businesses of all sizes to compete globally with confidence
                and precision. We believe supply chains should be competitive advantages, not
                operational burdens.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img src={WAREHOUSE_OPERATIONS} alt="Warehouse operations" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section ref={visionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <img src={TEAM_OPERATIONS} alt="Team collaboration at MOVVE" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="max-w-xl ml-auto order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-px bg-blue-500" />
                <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                  Our Vision
                </h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                To become the world's most trusted logistics partner by delivering unparalleled
                reliability, innovation, and customer service across every touchpoint of the
                supply chain. We envision a future where logistics infrastructure is as
                reliable and consistent as electricity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <ParticleBackground count={15} />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Our Values
            </h2>
            <p className="text-xl text-slate-300" style={{ fontFamily: 'var(--font-body)' }}>
              The principles that guide every decision we make and every shipment we handle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We deliver exceptional quality in every shipment, every interaction, and every solution. Good enough is never good enough.',
                color: 'emerald',
              },
              {
                title: 'Innovation',
                description: 'We leverage cutting-edge technology to solve complex logistics challenges and create value for our clients. We invent, not just improve.',
                color: 'blue',
              },
              {
                title: 'Integrity',
                description: 'We build trust through transparency, honesty, and ethical business practices. Our word is our bond, and our track record is our resume.',
                color: 'amber',
              },
              {
                title: 'Partnership',
                description: 'We succeed when our clients succeed, acting as strategic partners in their growth. Your challenges become our challenges.',
                color: 'indigo',
              },
            ].map((value) => {
              const borderCls = value.color === 'emerald' ? 'hover:border-emerald-500/50' : value.color === 'blue' ? 'hover:border-blue-500/50' : value.color === 'amber' ? 'hover:border-amber-500/50' : 'hover:border-indigo-500/50'
              const shadowCls = value.color === 'emerald' ? 'hover:shadow-emerald-500/10' : value.color === 'blue' ? 'hover:shadow-blue-500/10' : value.color === 'amber' ? 'hover:shadow-amber-500/10' : 'hover:shadow-indigo-500/10'
              return (
              <GlassCard key={value.title} className={`value-card !bg-slate-800/60 !p-10 ${borderCls} hover:shadow-xl ${shadowCls} hover:scale-[1.02]`}>
                <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>
                  {value.title}
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {value.description}
                </p>
              </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-slate-300" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                Our Story
              </h2>
            </div>
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded in 2018 by logistics industry veterans, MOVVE emerged from a simple observation:
                global supply chains were becoming increasingly complex, yet the tools to manage them
                remained outdated and fragmented.
              </p>
              <p>
                We built MOVVE from the ground up with a single focus: creating a logistics platform
                that combines the scale and reliability of major carriers with the agility and innovation
                of a technology company. We questioned every assumption and reinvented every process.
              </p>
              <p>
                Today, we serve over 500 enterprise clients across 140 countries, handling millions
                of shipments annually with the precision and reliability that our clients depend on.
                But our journey is just beginning. The future of logistics is still being written,
                and we're writing it one shipment at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section ref={metricsRef} className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-slate-300" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                By the Numbers
              </h2>
              <div className="w-16 h-px bg-slate-300" />
            </div>
            <p className="text-xl text-slate-600" style={{ fontFamily: 'var(--font-body)' }}>
              Our impact measured in shipments, destinations, and satisfied clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Enterprise Clients' },
              { value: '140+', label: 'Countries Served' },
              { value: '2.4M', label: 'Annual Shipments' },
              { value: '99.3%', label: 'Client Retention' },
            ].map((stat) => (
              <div key={stat.label} className="stat-card bg-white p-10 border border-slate-200 text-center hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
                <div className="text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Animated gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to Experience the MOVVE Difference?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Join the forward-thinking companies that trust MOVVE with their most critical logistics operations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="group px-10 py-5 bg-white text-slate-900 font-bold text-lg hover:bg-emerald-400 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/30 transition-all duration-300 rounded-lg inline-flex items-center gap-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span>Request a Demo</span>
              <svg aria-hidden="true" className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 rounded-lg border border-slate-700 inline-flex items-center gap-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span>Contact Sales</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}