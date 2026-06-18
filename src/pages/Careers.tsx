import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/utils/reducedMotion'
import { MapPin, Users, Target, Zap, Heart, ArrowRight, Briefcase, Clock } from 'lucide-react'
import { TEAM_CULTURE } from '@/utils/images'
import { GlassCard } from '@/components/GlassCard'
import { ParticleBackground } from '@/components/ParticleBackground'

gsap.registerPlugin(ScrollTrigger)
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export function Careers() {
  useDocumentTitle('Careers — MOVVE', 'Build the future of logistics with MOVVE. Engineering, operations, and product roles available. Competitive compensation and global impact.')
  const heroRef = useRef<HTMLElement>(null)
  const benefitsRef = useRef<HTMLElement>(null)
  const jobsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    // Hero reveal
    if (heroRef.current) {
      const els = heroRef.current.querySelectorAll('.reveal-up')
      gsap.fromTo(els,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out' }
      )
    }

    // Benefits stagger
    if (benefitsRef.current) {
      const items = benefitsRef.current.querySelectorAll('.benefit-card')
      gsap.fromTo(items,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: benefitsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      )
    }

    // Job cards stagger
    if (jobsRef.current) {
      const cards = jobsRef.current.querySelectorAll('.job-card')
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: jobsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      )
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  const jobs = [
    {
      id: 1,
      title: 'Senior Logistics Coordinator',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead logistics operations and optimize supply chain processes for high-value shipments.',
    },
    {
      id: 2,
      title: 'React Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain our web platform using React, TypeScript, and GSAP for premium animations.',
    },
    {
      id: 3,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'New York',
      type: 'Full-time',
      description: 'Manage client relationships and ensure seamless delivery experiences.',
    },
    {
      id: 4,
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      description: 'Analyze shipment data to optimize routes and improve delivery times.',
    },
  ]

  const benefits = [
    { icon: Users, title: 'Competitive Salary', description: 'Top-tier compensation packages with performance bonuses.' },
    { icon: Target, title: 'Growth Opportunities', description: 'Clear career progression paths and mentorship programs.' },
    { icon: Zap, title: 'Flexible Remote Work', description: 'Work from anywhere with our distributed team culture.' },
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health benefits and wellness programs.' },
  ]

  const stats = [
    { value: '240+', label: 'Team Members' },
    { value: '18', label: 'Countries' },
    { value: '96%', label: 'Employee Satisfaction' },
    { value: '4.8', label: 'Glassdoor Rating' },
  ]

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative py-28 bg-slate-950 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={TEAM_CULTURE} alt="MOVVE team collaborating in a modern logistics operations center" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500 rounded-full blur-[128px]" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-600 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="reveal-up inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wider uppercase rounded-full mb-8">
              We're Hiring
            </span>
            <h1 className="reveal-up text-5xl md:text-7xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Join the Future of
              <br />
              <span className="text-emerald-400">Global Logistics</span>
            </h1>
            <p className="reveal-up text-xl text-slate-400 leading-relaxed max-w-2xl mb-10" style={{ fontFamily: 'var(--font-body)' }}>
              Build your career with a team that's revolutionizing how the world moves. We're looking for passionate
              individuals to help us deliver excellence.
            </p>
            <div className="reveal-up flex flex-wrap gap-4">
              <a href="#openings" className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 inline-flex items-center gap-2">
                View Openings
                <ArrowRight size={18} />
              </a>
              <Link to="/about" className="px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-emerald-500/50 hover:text-white transition-all duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1 uppercase tracking-wider font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Why Work With Us
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              We believe in investing in our people. Here's what you can expect when you join Movve.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <GlassCard key={index} variant="light" className="benefit-card group p-8 hover:shadow-lg hover:shadow-emerald-500/5">
                  <div className="w-14 h-14 bg-emerald-100 group-hover:bg-emerald-200 rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <Icon className="text-emerald-700" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-display)' }}>{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{benefit.description}</p>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" ref={jobsRef} className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">Careers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Open Positions
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Explore our current openings and find the perfect role for your skills and ambitions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {jobs.map((job) => (
              <div key={job.id} className="job-card group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                    {job.title}
                  </h3>
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg flex-shrink-0 ml-4">
                    {job.type}
                  </span>
                </div>
                <p className="text-slate-500 mb-6 leading-relaxed text-sm" style={{ fontFamily: 'var(--font-body)' }}>{job.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-slate-400" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={14} className="text-slate-400" />
                    {job.department}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-slate-400" />
                    {job.type}
                  </div>
                </div>
                <button className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-semibold hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <ParticleBackground count={15} />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Have Questions?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Not sure which role is right for you? Our team is here to help you find your place at Movve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@movve.com" className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 inline-flex items-center justify-center gap-2">
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                careers@movve.com
              </a>
              <Link to="/contact" className="px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-emerald-500/50 hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
