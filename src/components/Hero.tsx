import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0f1a] overflow-hidden">
      {/* Data visualization background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32 min-h-screen flex items-center">
        <div className="max-w-4xl">
          {/* Enterprise status indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-slate-400 text-sm font-medium tracking-wide uppercase">
                Operations Active
              </span>
            </div>
            <div className="h-px w-16 bg-slate-800" />
            <span className="text-slate-500 text-sm">
              Enterprise Logistics Platform
            </span>
          </motion.div>

          {/* Primary headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-8"
          >
            Precision at
            <span className="block text-slate-300">
              Scale
            </span>
          </motion.h1>

          {/* Value proposition */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl"
          >
            2.4 million shipments annually. 140 countries. Enterprise infrastructure that
            transforms complexity into operational excellence.
          </motion.p>

          {/* Primary action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-slate-900 font-semibold hover:bg-slate-50 transition-colors rounded-lg inline-flex items-center justify-center gap-2"
            >
              <span>Request Partnership</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/tracking"
              className="px-8 py-4 bg-slate-800/50 text-slate-300 font-semibold hover:bg-slate-800 transition-colors border border-slate-700 rounded-lg inline-flex items-center justify-center"
            >
              Track Shipment
            </Link>
          </motion.div>

          {/* Enterprise metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-800"
          >
            {[
              { value: '2.4M', label: 'Annual Shipments' },
              { value: '140+', label: 'Countries' },
              { value: '98.6%', label: 'On-Time Delivery' },
              { value: '500+', label: 'Enterprise Clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}