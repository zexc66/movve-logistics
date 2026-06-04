import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 40])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      mouseX.set(clientX - rect.left - rect.width / 2)
      mouseY.set(clientY - rect.top - rect.height / 2)
    }
  }

  const springConfig = {
    stiffness: 120,
    damping: 20,
    mass: 0.8
  }

  const cardSpringX = useSpring(mouseX, springConfig)
  const cardSpringY = useSpring(mouseY, springConfig)

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#050812] overflow-hidden"
    >
      {/* Double-bezel container with premium depth */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative"
      >
        {/* Outer bezel */}
        <div className="absolute inset-8 border border-slate-800/50 rounded-3xl" />

        {/* Inner bezel */}
        <div className="absolute inset-12 border border-slate-700/30 rounded-2xl" />

        {/* Ambient lighting effect */}
        <motion.div
          style={{
            x: cardSpringX,
            y: cardSpringY,
          }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-[600px] h-[600px] rounded-full blur-[120px]"
              style={{
                background: 'radial-gradient(circle, rgba(71, 85, 105, 0.15) 0%, transparent 70%)',
              }}
            />
          </div>
          <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2">
            <div
              className="w-[400px] h-[400px] rounded-full blur-[80px]"
              style={{
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
              }}
            />
          </div>
        </motion.div>

        {/* Content container */}
        <div className="relative container mx-auto px-4 py-24 lg:py-32 min-h-screen flex items-center">
          <div className="max-w-5xl relative z-10">
            {/* Status badge with double-bezel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative inline-block">
                {/* Outer border */}
                <div className="absolute -inset-0.5 border border-slate-700/50 rounded-lg" />

                {/* Inner content */}
                <div className="relative inline-flex items-center gap-3 px-5 py-2.5 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-lg">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-emerald-500 text-xs font-semibold tracking-widest uppercase">
                    Operations Active
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Premium typography with editorial luxury approach */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Precision at{' '}
              <span className="relative inline-block">
                Scale
                <div className="absolute bottom-4 left-0 w-full h-3 bg-gradient-to-r from-slate-700 via-slate-600 to-transparent opacity-50" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-16 max-w-2xl"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              2.4 million shipments annually. 140 countries. Enterprise infrastructure
              that transforms complexity into operational excellence.
            </motion.p>

            {/* CTA with magnetic interaction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                to="/contact"
                className="group relative px-10 py-5 bg-white text-slate-900 font-semibold text-base hover:bg-slate-50 transition-colors duration-300 rounded-lg inline-flex items-center justify-center gap-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>Request Partnership</span>
                <motion.svg
                  className="w-4 h-4"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </Link>

              <Link
                to="/tracking"
                className="group relative px-10 py-5 bg-transparent text-slate-300 font-semibold text-base border border-slate-800 hover:border-slate-700 hover:text-white transition-colors duration-300 rounded-lg inline-flex items-center justify-center"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>Track Shipment</span>
              </Link>
            </motion.div>

            {/* Metrics with premium presentation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-slate-800/50"
            >
              {[
                { value: '2.4M', label: 'Annual Shipments' },
                { value: '140+', label: 'Countries' },
                { value: '98.6%', label: 'On-Time Delivery' },
                { value: '500+', label: 'Enterprise Clients' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-500 tracking-wide uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}