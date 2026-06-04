import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  alpha: number
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stats, setStats] = useState({ shipments: 0, ontime: 0, countries: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    let mouse = { x: -1000, y: -1000 }
    let w = 0,
      h = 0

    function resize() {
      if (canvas) {
        w = canvas.width = canvas.offsetWidth
        h = canvas.height = canvas.offsetHeight
      }
    }

    function createParticle() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.3 + 0.1,
      }
    }

    function init() {
      particles = Array.from({ length: 100 }, createParticle)
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)

      particles.forEach((p) => {
        if (!ctx) return
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
          Object.assign(p, createParticle())
        }

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          p.vx -= (dx / dist) * 0.03
          p.vy -= (dy / dist) * 0.03
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(153, 27, 30, ${p.alpha})`
        ctx.fill()
      })

      if (!ctx) return
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(153, 27, 30, ${0.04 * (1 - dist / 120)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    resize()
    init()
    animate()

    const handleResize = () => resize()
    window.addEventListener('resize', handleResize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let currentStep = 0

    const animateStats = () => {
      if (currentStep <= steps) {
        const progress = currentStep / steps
        const eased = 1 - Math.pow(1 - progress, 3)

        setStats({
          shipments: +(2.4 * eased).toFixed(1),
          ontime: +(98.6 * eased).toFixed(1),
          countries: Math.floor(140 * eased),
        })

        currentStep++
        setTimeout(animateStats, interval)
      }
    }

    animateStats()
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-navy">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-crimson font-semibold text-sm"
            >
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
              </div>
              <span>ENTERPRISE LOGISTICS PLATFORM</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              Global logistics,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-red-600">
                reimagined
              </span>{' '}
              for the modern enterprise.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              MOVVE powers Fortune 500 supply chains with AI-driven routing,
              real-time visibility across 140+ countries, and 98.6% on-time
              delivery. From air freight to last mile — precision at every
              waypoint.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-crimson text-white rounded-sm font-bold text-lg hover:bg-crimson/90 transition-colors"
              >
                Schedule Demo
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-crimson text-crimson rounded-sm font-bold text-lg hover:bg-crimson hover:text-white transition-colors"
              >
                Explore Platform
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div>
                <div className="text-4xl font-bold text-crimson">
                  {stats.shipments}M
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  Shipments / Year
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-crimson">
                  {stats.ontime}%
                </div>
                <div className="text-sm text-gray-400 mt-2">On-Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-crimson">
                  {stats.countries}
                </div>
                <div className="text-sm text-gray-400 mt-2">Countries</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                <span className="text-crimson font-bold text-sm">
                  LIVE TRACKING · HKG-AMS-8842
                </span>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Order Confirmed</h4>
                    <p className="text-gray-400 text-sm">
                      Shanghai, CN — May 15, 09:42
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Departed Origin Port
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Hong Kong — May 16, 14:30
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-crimson rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                    ●
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      In Transit — Air Freight
                    </h4>
                    <p className="text-gray-400 text-sm">
                      En route to Amsterdam — ETA 4h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center flex-shrink-0 text-gray-400">
                    ○
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Last Mile Delivery
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Expected May 20, 2026
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <input
                  type="text"
                  placeholder="Enter tracking number…"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crimson"
                  aria-label="Enter tracking number"
                />
                <button className="px-6 py-3 bg-crimson text-white rounded-lg font-semibold hover:bg-crimson/90 transition-colors">
                  Track
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}