import { gsap } from 'gsap'
import { useRef, useEffect, useState } from 'react'

const metrics = [
  { label: '150+', sublabel: 'Countries', colorClass: 'text-emerald-400' },
  { label: '2M+', sublabel: 'Shipments/Year', colorClass: 'text-blue-400' },
  { label: '99.8%', sublabel: 'On-Time', colorClass: 'text-indigo-400' }
]

const tickerItems = [
  'SH-123456 - New York → Shanghai - In Transit',
  'SH-654321 - Los Angeles → Rotterdam - Out for Delivery',
  'SH-789012 - Singapore → London - Customs Cleared',
  'SH-345678 - Hong Kong → São Paulo - Processing',
]

export function DashboardWidgets() {
  const countersRef = useRef<(HTMLDivElement | null)[]>([])
  const [activeTicker, setActiveTicker] = useState(0)

  useEffect(() => {
    const tweens: gsap.core.Tween[] = []

    countersRef.current.forEach((el, i) => {
      if (!el) return
      const match = metrics[i].label.match(/^([\d.]+)([KMB]?)([%+]?)$/)
      if (!match) return
      const numStr = match[1]
      const suffix = match[2]
      const symbol = match[3]
      const target = parseFloat(numStr)
      const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0

      tweens.push(gsap.to({ val: 0 }, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function() {
          const v = this.targets()[0].val
          const displayNum = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
          el.textContent = displayNum + suffix + symbol
        }
      }))
    })

    const interval = setInterval(() => {
      setActiveTicker(prev => (prev + 1) % tickerItems.length)
    }, 4000)

    return () => {
      clearInterval(interval)
      tweens.forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="grid grid-cols-3 gap-6 mb-12">
      {metrics.map((m, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <div ref={el => countersRef.current[i] = el} className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            {m.label}
          </div>
          <div className={`text-sm ${m.colorClass} uppercase tracking-wider`}>
            {m.sublabel}
          </div>
        </div>
      ))}
      <div className="col-span-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 overflow-hidden">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-emerald-400">LIVE SHIPMENTS</span>
        </div>
        <div className="h-6 overflow-hidden relative">
          {tickerItems.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex items-center text-sm text-slate-300 transition-transform duration-500 ${
                activeTicker === i ? 'translate-y-0' : activeTicker > i ? '-translate-y-full' : 'translate-y-full'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
