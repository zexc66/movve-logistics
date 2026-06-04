import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icons } from '../components/Icons'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-primary overflow-hidden">
      {/* Commanding Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 0%, oklch(0.55 0.18 25 / 0.1) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, oklch(0.55 0.18 25 / 0.05) 100%)
          `
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-space-4xl min-h-screen flex items-center">
        <div className="max-w-7xl">
          {/* Authority Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-space-sm mb-space-xl border border-brand-border/30 px-space-md py-space-sm"
          >
            <div className="w-8 h-8 flex items-center justify-center text-brand-accent">
              {Icons.threeBar}
            </div>
            <span className="text-brand-muted font-display font-semibold tracking-wider uppercase text-sm">
              Enterprise Logistics Platform
            </span>
          </motion.div>

          {/* Commanding Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-space-md mb-space-xl"
          >
            <h1 className="font-display font-hero text-brand-surface leading-none tracking-tight">
              <span className="text-brand-accent-dark">Scale</span> without{' '}
              <span className="text-brand-secondary-light">sacrificing</span>{' '}
              <span className="relative inline-block">
                precision
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-brand-accent/30" />
              </span>
            </h1>
          </motion.div>

          {/* Compelling Value Proposition */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-brand-body font-body text-xl max-w-3xl leading-relaxed mb-space-3xl"
          >
            2.4 million annual shipments. 140 countries. 98.6% on-time delivery.
            We handle the complexity so you can focus on growing your business.
          </motion.p>

          {/* Tracking Interface - PRIMARY INTERACTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative mb-space-3xl"
          >
            <div className="max-w-2xl">
              <div className="mb-space-sm flex items-center gap-space-sm">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-brand-muted text-sm uppercase tracking-wider">
                  Live Tracking System
                </span>
              </div>

              <div className="flex gap-space-sm">
                <input
                  type="text"
                  placeholder="Enter tracking number..."
                  className="flex-1 px-space-lg py-space-md bg-brand-surface border-2 border-brand-border text-brand-text font-body text-lg placeholder-brand-muted focus:outline-none focus:border-brand-accent transition-colors"
                  aria-label="Enter tracking number"
                />
                <Link
                  to="/tracking"
                  className="px-space-xl py-space-md bg-brand-accent text-brand-surface font-display font-bold text-lg hover:bg-brand-accent-dark transition-colors shadow-commanding"
                >
                  Track Shipment
                </Link>
              </div>

              <div className="mt-space-md flex items-center gap-space-lg text-brand-muted text-sm">
                <div className="flex items-center gap-space-sm">
                  {Icons.tracking}
                  <span>Real-time visibility</span>
                </div>
                <div className="flex items-center gap-space-sm">
                  {Icons.analytics}
                  <span>Predictive ETAs</span>
                </div>
                <div className="flex items-center gap-space-sm">
                  {Icons.fullVisibility}
                  <span>Exception alerts</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Confidence Metrics - Asymmetric Layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-space-lg"
          >
            <div className="col-span-1 lg:col-span-2">
              <div className="text-brand-accent font-display font-hero mb-space-sm">
                $47B
              </div>
              <div className="text-brand-secondary text-sm uppercase tracking-wider">
                Annual Freight Volume
              </div>
            </div>
            <div>
              <div className="text-brand-surface font-display text-h2 font-bold mb-space-sm">
                140+
              </div>
              <div className="text-brand-secondary text-sm uppercase tracking-wider">
                Countries
              </div>
            </div>
            <div>
              <div className="text-brand-surface font-display text-h2 font-bold mb-space-sm">
                98.6%
              </div>
              <div className="text-brand-secondary text-sm uppercase tracking-wider">
                On-Time
              </div>
            </div>
          </motion.div>

          {/* CTA Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-space-md pt-space-lg"
          >
            <Link
              to="/contact"
              className="px-space-xl py-space-md bg-brand-surface text-brand-primary border-2 border-brand-border font-display font-semibold hover:border-brand-accent hover:text-brand-accent transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              to="/services"
              className="px-space-xl py-space-md font-body text-brand-secondary hover:text-brand-accent transition-colors"
            >
              View Capabilities →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Global Operations Map - Abstract representation */}
      <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden opacity-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="absolute top-1/2 left-0 w-32 h-px bg-brand-accent"></div>
            <div className="absolute top-1/2 right-0 w-32 h-px bg-brand-accent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-accent rounded-full"></div>
            
            {/* Connection Lines */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-24 bg-brand-accent/30"
                style={{
                  left: `${12.5 * i}%`,
                  transform: `rotate(${45 + (i % 2) * 90}deg)`,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 1.5 + i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}