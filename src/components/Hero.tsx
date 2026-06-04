import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icons } from '../components/Icons'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-primary overflow-hidden">
      <div className="relative container mx-auto px-4 py-24 min-h-screen flex items-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center border border-brand-border/30 px-4 py-2 bg-brand-surface/5">
              <div className="w-6 h-6 flex items-center justify-center text-brand-accent mr-3">
                {Icons.threeBar}
              </div>
              <span className="text-brand-muted font-display font-semibold tracking-wider uppercase text-xs">
                Enterprise Logistics Platform
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-brand-surface leading-tight tracking-tight mb-6">
              <span className="text-brand-accent-dark">Scale</span> without{' '}
              <span className="text-brand-secondary-light">sacrificing</span>{' '}
              <span className="relative inline-block">
                precision
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-brand-accent/30" />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-brand-muted font-body text-lg md:text-xl max-w-3xl leading-relaxed mb-12"
          >
            2.4 million annual shipments. 140 countries. 98.6% on-time delivery.
            We handle the complexity so you can focus on growing your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <div className="max-w-2xl mb-6">
              <div className="mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3" />
                <span className="text-brand-muted text-xs uppercase tracking-wider font-semibold">
                  Live Tracking System
                </span>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter tracking number..."
                  className="flex-1 px-6 py-4 bg-brand-surface border-2 border-brand-border text-brand-text font-body text-base placeholder-brand-muted focus:outline-none focus:border-brand-accent transition-colors"
                  aria-label="Enter tracking number"
                />
                <Link
                  to="/tracking"
                  className="px-8 py-4 bg-brand-accent text-brand-surface font-display font-bold text-base hover:bg-brand-accent-dark transition-colors"
                >
                  Track
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-8 text-brand-muted text-xs">
              <div className="flex items-center">
                <span className="mr-2">{Icons.tracking}</span>
                <span>Real-time visibility</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{Icons.analytics}</span>
                <span>Predictive ETAs</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">{Icons.aiRouting}</span>
                <span>AI optimization</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
          >
            <div>
              <div className="text-3xl font-display font-bold text-brand-accent mb-2">
                2.4M
              </div>
              <div className="text-brand-muted text-xs uppercase tracking-wider">
                Annual Shipments
              </div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-brand-accent mb-2">
                140+
              </div>
              <div className="text-brand-muted text-xs uppercase tracking-wider">
                Countries
              </div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-brand-accent mb-2">
                98.6%
              </div>
              <div className="text-brand-muted text-xs uppercase tracking-wider">
                On-Time Delivery
              </div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-brand-accent mb-2">
                500+
              </div>
              <div className="text-brand-muted text-xs uppercase tracking-wider">
                Enterprise Clients
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}