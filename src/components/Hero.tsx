import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Icons } from '../components/Icons'
import { useRef } from 'react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50])

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-brand-primary via-brand-primary-dark to-[#050812] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, oklch(0.55 0.18 25 / 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, oklch(0.55 0.18 25 / 0.05) 0%, transparent 40%),
            radial-gradient(circle at 40% 80%, oklch(0.55 0.18 25 / 0.06) 0%, transparent 45%)
          `
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 0%, oklch(0.55 0.18 25 / 0.03) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, oklch(0.55 0.18 25 / 0.02) 100%)
          `
        }} />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="relative container mx-auto px-4 py-24 min-h-screen flex items-center"
      >
        <div className="max-w-5xl">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-accent/10 to-brand-accent/5 border border-brand-accent/20 px-5 py-2.5 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
              <span className="text-brand-accent font-display font-semibold tracking-wider uppercase text-xs">
                Enterprise Logistics Platform
              </span>
            </div>
          </motion.div>

          {/* Premium Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-brand-surface leading-tight tracking-tight mb-6">
              <span className="bg-gradient-to-r from-brand-surface via-brand-accent-light to-brand-accent bg-clip-text text-transparent">
                Scale
              </span>{' '}
              without{' '}
              <span className="bg-gradient-to-r from-brand-secondary-light to-brand-accent bg-clip-text text-transparent">
                sacrificing
              </span>{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">
                  precision
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-3 bg-gradient-to-r from-brand-accent/50 to-brand-accent/30 -z-0 rounded-sm" />
              </span>
            </h1>
          </motion.div>

          {/* Premium Value Proposition */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-brand-secondary-light font-body text-lg md:text-xl max-w-3xl leading-relaxed mb-12"
          >
            2.4 million annual shipments. 140 countries. 98.6% on-time delivery.
            <span className="block mt-2 text-brand-muted/80">
              Enterprise-grade logistics infrastructure that scales with ambition.
            </span>
          </motion.p>

          {/* Premium Tracking Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="max-w-2xl mb-8">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-brand-muted text-xs uppercase tracking-wider font-semibold">
                    Live Tracking System
                  </span>
                </div>
                <span className="text-brand-muted text-xs">
                  Track in seconds
                </span>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter tracking number..."
                    className="flex-1 px-6 py-4 bg-brand-surface border-2 border-brand-border/50 text-brand-text font-body text-base placeholder-brand-muted/60 focus:outline-none focus:border-brand-accent/50 transition-all duration-300 rounded-lg"
                    aria-label="Enter tracking number"
                  />
                  <Link
                    to="/tracking"
                    className="px-8 py-4 bg-gradient-to-r from-brand-accent to-brand-accent-light text-brand-surface font-display font-bold text-base hover:shadow-lg hover:shadow-brand-accent/25 transition-all duration-300 rounded-lg flex items-center space-x-2"
                  >
                    <span>Track</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 md:space-x-12 text-brand-muted text-xs">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center space-x-2 group cursor-pointer"
              >
                <span className="text-brand-accent group-hover:scale-110 transition-transform duration-300">
                  {Icons.tracking}
                </span>
                <span className="group-hover:text-brand-accent transition-colors duration-300">Real-time visibility</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="flex items-center space-x-2 group cursor-pointer"
              >
                <span className="text-brand-accent group-hover:scale-110 transition-transform duration-300">
                  {Icons.analytics}
                </span>
                <span className="group-hover:text-brand-accent transition-colors duration-300">Predictive ETAs</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center space-x-2 group cursor-pointer"
              >
                <span className="text-brand-accent group-hover:scale-110 transition-transform duration-300">
                  {Icons.aiRouting}
                </span>
                <span className="group-hover:text-brand-accent transition-colors duration-300">AI optimization</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Premium Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
          >
            {[
              { value: '2.4M', label: 'Annual Shipments', delay: 1.1 },
              { value: '140+', label: 'Countries', delay: 1.2 },
              { value: '98.6%', label: 'On-Time Delivery', delay: 1.3 },
              { value: '500+', label: 'Enterprise Clients', delay: 1.4 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 bg-brand-surface/5 border border-brand-border/30 rounded-lg backdrop-blur-sm hover:border-brand-accent/30 transition-all duration-500">
                  <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-brand-muted text-xs uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}