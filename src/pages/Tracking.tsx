import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/utils/reducedMotion'
import { PACKAGE_DELIVERY } from '@/utils/images'
import { GlassCard } from '../components/GlassCard'

gsap.registerPlugin(ScrollTrigger)

export function Tracking() {
  const navigate = useNavigate()
  const headerRef = useRef<HTMLElement>(null)
  const formSectionRef = useRef<HTMLDivElement>(null)
  const statusCardRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const helpRef = useRef<HTMLDivElement>(null)

  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingStatus, setTrackingStatus] = useState<'idle' | 'processing' | 'found' | 'not-found'>('idle')
  const [shipmentData, setShipmentData] = useState<{
    trackingNumber: string
    status: string
    location: string
    estimatedDelivery: string
    timeline: Array<{
      date: string
      event: string
      location: string
    }>
  } | null>(null)

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

    // Form section - scale reveal
    if (formSectionRef.current) {
      gsap.fromTo(formSectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // Status card - pop in effect
    if (statusCardRef.current && trackingStatus === 'found') {
      gsap.fromTo(statusCardRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.5)',
        }
      )
    }

    // Timeline - staggered reveal
    if (timelineRef.current && trackingStatus === 'found') {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item')
      gsap.fromTo(timelineItems,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
        }
      )
    }

    // Help section - fade up
    if (helpRef.current) {
      gsap.fromTo(helpRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: helpRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [trackingStatus])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTrackingStatus('processing')

    setTimeout(() => {
      if (trackingNumber.toLowerCase() === 'movve123456' || trackingNumber.toLowerCase() === 'test') {
        setTrackingStatus('found')
        setShipmentData({
          trackingNumber,
          status: 'In Transit',
          location: 'Los Angeles, CA',
          estimatedDelivery: 'June 8, 2026',
          timeline: [
            { date: 'Jun 4, 2026 - 2:30 PM', event: 'Package picked up', location: 'San Francisco, CA' },
            { date: 'Jun 4, 2026 - 4:15 PM', event: 'Arrived at sorting facility', location: 'Oakland, CA' },
            { date: 'Jun 5, 2026 - 8:00 AM', event: 'Departed hub', location: 'Los Angeles, CA' },
            { date: 'Jun 6, 2026 - 1:20 PM', event: 'Out for delivery', location: 'Los Angeles, CA' },
          ]
        })
      } else {
        setTrackingStatus('not-found')
        setShipmentData(null)
      }
    }, 2000)
  }

  const handleContactSupport = () => {
    navigate('/contact?subject=tracking-inquiry')
  }

  const handleDemo = () => {
    setTrackingNumber('MOVVE123456')
    setTrackingStatus('processing')
    setTimeout(() => {
      setTrackingStatus('found')
      setShipmentData({
        trackingNumber: 'MOVVE123456',
        status: 'In Transit',
        location: 'Los Angeles, CA',
        estimatedDelivery: 'June 8, 2026',
        timeline: [
          { date: 'Jun 4, 2026 - 2:30 PM', event: 'Package picked up', location: 'San Francisco, CA' },
          { date: 'Jun 4, 2026 - 4:15 PM', event: 'Arrived at sorting facility', location: 'Oakland, CA' },
          { date: 'Jun 5, 2026 - 8:00 AM', event: 'Departed hub', location: 'Los Angeles, CA' },
          { date: 'Jun 6, 2026 - 1:20 PM', event: 'Out for delivery', location: 'Los Angeles, CA' },
        ]
      })
    }, 2000)
  }

  return (
    <>
      {/* Header */}
      <section ref={headerRef} className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={PACKAGE_DELIVERY} alt="MOVVE delivery courier handing a package to a customer" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Track Your Shipment
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-body)' }}>
              Enter your tracking number to get real-time updates on your shipment status,
              location, and estimated delivery time.
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section ref={formSectionRef} className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="tracking-number" className="block text-sm font-semibold text-slate-700 mb-3">
                  Tracking Number
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="tracking-number"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number (e.g., MOVVE123456)"
                    disabled={trackingStatus === 'processing'}
                    className="flex-1 px-6 py-4 bg-white border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:border-slate-300 transition-all duration-200 rounded-lg text-lg focus:shadow-lg focus:shadow-emerald-500/10"
                  />
                  <button
                    type="submit"
                    disabled={!trackingNumber.trim() || trackingStatus === 'processing'}
                    className="px-10 py-4 bg-slate-900 text-white font-semibold hover:bg-emerald-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-400 transition-all duration-200 rounded-lg"
                  >
                    {trackingStatus === 'processing' ? 'Tracking...' : 'Track'}
                  </button>
                </div>
                <p className="mt-2 text-xs text-slate-500">Example: MOVVE123456 or test</p>
                <button
                  type="button"
                  onClick={handleDemo}
                  className="mt-3 text-sm font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-2 transition-colors"
                >
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Try Live Demo
                </button>
              </div>
            </form>

            {/* Processing State */}
            {trackingStatus === 'processing' && (
              <div className="mt-8 flex items-center justify-center py-12">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 border-2 border-slate-300 border-t-emerald-500 rounded-full animate-spin" />
                  <span className="text-lg">Searching for shipment...</span>
                </div>
              </div>
            )}

            {/* Not Found State */}
            {trackingStatus === 'not-found' && (
              <div className="mt-8 p-10 bg-red-50 border-2 border-red-200 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg aria-hidden="true" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-red-900 mb-2">
                      Shipment Not Found
                    </h2>
                    <p className="text-red-700">
                      No shipment found with tracking number "{trackingNumber}". Please check the number
                      and try again. For assistance, contact our support team.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Found State */}
            {trackingStatus === 'found' && shipmentData && (
              <div ref={statusCardRef} className="mt-8 space-y-8">
                {/* Status Overview */}
                <div className="bg-white border-2 border-slate-200 p-10 rounded-lg shadow-lg">
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="group">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Status
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                        <p className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                          {shipmentData.status}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Current Location
                      </p>
                      <p className="text-2xl font-bold text-slate-900">
                        {shipmentData.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Estimated Delivery
                      </p>
                      <p className="text-2xl font-bold text-slate-900">
                        {shipmentData.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-slate-100">
                    <p className="text-sm text-slate-600 mb-4">
                      Tracking Number: <span className="font-semibold">{shipmentData.trackingNumber}</span>
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ width: '75%' }} />
                      </div>
                      <span className="text-sm font-semibold text-emerald-600">75%</span>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-500">
                      <span>Picked Up</span>
                      <span>In Transit</span>
                      <span>Out for Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <GlassCard variant="light" className="!bg-white !border-slate-200 !shadow-lg">
                <div ref={timelineRef} className="p-10">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                    Shipment Timeline
                  </h2>
                  <div className="space-y-8">
                    {shipmentData.timeline.map((event, index) => (
                      <div key={index} className="timeline-item flex gap-6">
                        <div className="flex flex-col items-center">
                          <div className="w-4 h-4 bg-slate-900 rounded-full" />
                          {index < shipmentData.timeline.length - 1 && (
                            <div className="w-px h-full bg-slate-200 min-h-[3rem]" />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="mb-2">
                            <p className="text-lg font-bold text-slate-900 mb-1">
                              {event.event}
                            </p>
                            <p className="text-sm text-slate-600">
                              {event.date}
                            </p>
                          </div>
                          <p className="text-slate-600">
                            {event.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                </GlassCard>
              </div>
            )}

            {/* Help Text */}
            <div ref={helpRef} className="mt-12 p-8 bg-slate-100 border border-slate-200 rounded-lg">
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Need Help?
              </h2>
              <div className="space-y-3 text-slate-600">
                <p className="flex items-start gap-3">
                  <svg aria-hidden="true" className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Make sure you entered the correct tracking number</span>
                </p>
                <p className="flex items-start gap-3">
                  <svg aria-hidden="true" className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Tracking numbers are usually 8-15 characters long</span>
                </p>
                <p className="flex items-start gap-3">
                  <svg aria-hidden="true" className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Contact our support team if you need assistance</span>
                </p>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleContactSupport}
                  className="px-8 py-3 bg-slate-900 text-white font-semibold hover:bg-emerald-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}