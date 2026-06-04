'use client'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="min-h-[100dvh] bg-[#050812] relative overflow-hidden">
      {/* Fixed grain/noise texture - pseudo-element only per taste-skill */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%26 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%2523noise)27) opacity=%270.05%27/%3E%3C/svg%3E")',
      }} />

      {/* Asymmetric split layout (DESIGN_VARIANCE: 8) */}
      <div className="min-h-[100dvh] grid md:grid-cols-12 gap-8">
        {/* Left column - content (7 columns) - LEFT-ALIGNED per taste-skill */}
        <div className="md:col-span-7 flex flex-col justify-center px-8 lg:px-16 py-20">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-800/50 border border-slate-700/30 rounded-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-500 text-xs font-semibold tracking-widest uppercase">
                Operations Active
              </span>
            </div>
          </motion.div>

          {/* Hero headline - Deterministic Typography per taste-skill */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
          >
            Precision at Scale
          </motion.h1>

          {/* Value proposition */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-slate-400 leading-relaxed mb-16 max-w-2xl"
          >
            2.4 million shipments annually. 140 countries. Enterprise infrastructure that
            transforms complexity into operational excellence.
          </motion.p>

          {/* CTA buttons with tactile feedback */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              to="/contact"
              className="group px-10 py-5 bg-white text-slate-900 font-semibold text-base hover:bg-slate-50 transition-colors duration-200 rounded-lg inline-flex items-center justify-center gap-3"
            >
              <span>Request Partnership</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              to="/tracking"
              className="px-10 py-5 bg-slate-800 text-white font-semibold text-base border border-slate-700 hover:bg-slate-700 transition-colors duration-200 rounded-lg inline-flex items-center justify-center"
            >
              Track Shipment
            </Link>
          </motion.div>

          {/* Metrics - CSS Grid layout per taste-skill */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-slate-800/50"
          >
            {[
              { value: '2.4M', label: 'Annual Shipments' },
              { value: '140+', label: 'Countries' },
              { value: '98.6%', label: 'On-Time Delivery' },
              { value: '500+', label: 'Enterprise Clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column - card (5 columns) - Interactive state per taste-skill */}
        <div className="md:col-span-5 flex items-center justify-center px-8 lg:px-16 py-20">
          <div className="w-full max-w-md">
            {/* Card with Bento 2.0 styling per taste-skill */}
            <div className="relative bg-slate-900/50 border border-slate-800/30 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-8">
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
                    className="w-full px-6 py-4 bg-slate-800/50 border-2 border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors duration-200 rounded-xl"
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