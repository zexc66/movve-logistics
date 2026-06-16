'use client'

import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HERO_PORT_AERIAL } from '@/utils/images'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Staggered title reveal with premium feel
    const titleTimeline = gsap.timeline()
    titleTimeline
      .fromTo(badgeRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(titleRef.current,
        { opacity: 0, y: 60, rotationX: 45, transformPerspective: 1000 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1, ease: 'expo.out' },
        '-=0.4'
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.4'
      )

    // Stats counter animation on scroll
    gsap.fromTo(statsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Card 3D tilt and float animation
    const cardEntrance = gsap.fromTo(cardRef.current,
      { opacity: 0, x: 100, rotateY: 15, transformPerspective: 1000 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    )

    // Subtle floating animation for the card
    const cardFloat = gsap.to(cardRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    // Parallax effect on scroll
    gsap.to(badgeRef.current, {
      y: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    return () => {
      titleTimeline.kill()
      cardEntrance.kill()
      cardFloat.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="min-h-[100dvh] bg-[#050812] relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img src={HERO_PORT_AERIAL} alt="Aerial view of MOVVE global shipping port with cargo containers and freight vessels" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-[#050812]/85" />
      </div>

      {/* Subtle grain texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      }} />

      {/* Animated gradient orbs for premium depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Asymmetric split layout (DESIGN_VARIANCE: 8) */}
      <div className="min-h-[100dvh] grid md:grid-cols-12 gap-8">
        {/* Left column - content (7 columns) - LEFT-ALIGNED per taste-skill */}
        <div className="md:col-span-7 flex flex-col justify-center px-8 lg:px-16 py-20">
          {/* Status badge */}
          <div ref={badgeRef} className="mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-800/50 border border-slate-700/30 rounded-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-500 text-xs font-semibold tracking-widest uppercase">
                Operations Active
              </span>
            </div>
          </div>

          {/* Hero headline - Deterministic Typography per taste-skill */}
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
          >
            Precision at Scale
          </h1>

          {/* Value proposition */}
          <p
            ref={subtitleRef}
            className="text-xl text-slate-400 leading-relaxed mb-16 max-w-2xl"
          >
            2.4 million shipments annually. 140 countries. Enterprise infrastructure that
            transforms complexity into operational excellence.
          </p>

          {/* CTA buttons with magnetic effect */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/contact"
              className="group px-10 py-5 bg-white text-slate-900 font-semibold text-base hover:bg-slate-50 transition-all duration-300 rounded-lg inline-flex items-center justify-center gap-3 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              <span>Request Partnership</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              to="/tracking"
              className="px-10 py-5 bg-slate-800 text-white font-semibold text-base border border-slate-700 hover:bg-slate-700 hover:border-emerald-500/50 transition-all duration-300 rounded-lg inline-flex items-center justify-center hover:scale-105"
            >
              Track Shipment
            </Link>
          </div>

          {/* Metrics - CSS Grid layout per taste-skill */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-slate-800/50"
          >
            {[
              { value: '2.4M', label: 'Annual Shipments' },
              { value: '140+', label: 'Countries' },
              { value: '98.6%', label: 'On-Time Delivery' },
              { value: '500+', label: 'Enterprise Clients' },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 stat-value">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - card (5 columns) - Interactive state per taste-skill */}
        <div className="md:col-span-5 flex items-center justify-center px-8 lg:px-16 py-20">
          <div className="w-full max-w-md" ref={cardRef}>
            {/* Card with Bento 2.0 styling per taste-skill */}
            <div className="relative bg-slate-900/50 border border-slate-800/30 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-8 backdrop-blur-xl">
              {/* Infinite animation loop per Bento 2.0 */}
              <div className="absolute top-6 right-6">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Live Tracking
                </h3>

                {/* Input with interactive states per taste-skill */}
                <div>
                  <label
                    htmlFor="tracking-input"
                    className="block text-sm font-semibold text-slate-400 mb-3"
                  >
                    Tracking Number
                  </label>
                  <input
                    id="tracking-input"
                    type="text"
                    placeholder="Enter tracking number..."
                    className="w-full px-6 py-4 bg-slate-800/50 border-2 border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-all duration-300 rounded-xl focus:shadow-lg focus:shadow-emerald-500/10"
                  />
                  <p className="mt-2 text-sm text-slate-500">
                    Example: MOVVE123456 or test
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7" />
                    </svg>
                    <span>Real-time visibility</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2V5a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2v3a2 2 0 002 2h2a2 2 0 002 2v-5a2 2 0 012-2h-2a2 2 0 012-2v-3a2 2 0 00-2-2z" />
                    </svg>
                    <span>Predictive ETAs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}