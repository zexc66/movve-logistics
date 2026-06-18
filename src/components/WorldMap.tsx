import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '@/utils/reducedMotion'

const routes = [
  { from: { x: 20, y: 30 }, to: { x: 80, y: 25 }, delay: 0 },
  { from: { x: 20, y: 30 }, to: { x: 85, y: 38 }, delay: 0.8 },
  { from: { x: 48, y: 28 }, to: { x: 20, y: 30 }, delay: 1.6 },
  { from: { x: 80, y: 25 }, to: { x: 48, y: 28 }, delay: 2.4 },
]

const hubs = [
  { x: 20, y: 30, label: 'LA' },
  { x: 48, y: 28, label: 'RTM' },
  { x: 80, y: 25, label: 'SHA' },
  { x: 85, y: 38, label: 'SGP' },
  { x: 55, y: 35, label: 'DXB' },
  { x: 25, y: 22, label: 'NYC' },
]

export function WorldMap() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Animate route paths drawing
      routes.forEach((route, i) => {
        const path = containerRef.current?.querySelector(`[data-route="${i}"]`) as SVGPathElement
        if (path) {
          const length = path.getTotalLength()
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2.5,
            delay: route.delay,
            repeat: -1,
            repeatDelay: 4,
            yoyo: true,
            yoyoEase: 'sine.inOut',
            ease: 'power2.inOut',
          })
        }

        // Animate pulse dots traveling along route
        const pulse = containerRef.current?.querySelector(`[data-pulse="${i}"]`) as SVGCircleElement
        if (pulse && path) {
          gsap.to({}, {
            duration: 2.5,
            delay: route.delay,
            repeat: -1,
            repeatDelay: 4,
            onUpdate: function() {
              const progress = this.progress()
              const point = path.getPointAtLength(progress * path.getTotalLength())
              pulse.setAttribute('cx', String(point.x))
              pulse.setAttribute('cy', String(point.y))
            }
          })
        }
      })

      // Pulse hub dots
      containerRef.current?.querySelectorAll('[data-hub]').forEach((hub, i) => {
        gsap.to(hub, {
          scale: 1.4,
          duration: 1.5,
          delay: i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          transformOrigin: 'center',
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative w-full aspect-[2/1] max-w-5xl mx-auto">
      <svg aria-hidden="true" viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Dotted world map background */}
        <g className="text-slate-600/40" fill="currentColor">
          {Array.from({ length: 50 }).map((_, row) =>
            Array.from({ length: 100 }).map((_, col) => {
              // Rough continent approximation using noise
              const x = col
              const y = row
              const isLand =
                // North America
                (x > 10 && x < 28 && y > 12 && y < 26 && !(x < 14 && y > 22)) ||
                // South America
                (x > 22 && x < 32 && y > 26 && y < 44) ||
                // Europe
                (x > 44 && x < 56 && y > 12 && y < 22) ||
                // Africa
                (x > 46 && x < 60 && y > 22 && y < 38) ||
                // Asia
                (x > 56 && x < 88 && y > 10 && y < 28) ||
                // Australia
                (x > 80 && x < 92 && y > 32 && y < 40)
              if (isLand && (row + col) % 2 === 0) {
                return <circle key={`${row}-${col}`} cx={col} cy={row} r="0.25" />
              }
              return null
            })
          )}
        </g>

        {/* Shipping routes */}
        {routes.map((r, i) => {
          const midX = (r.from.x + r.to.x) / 2
          const midY = Math.min(r.from.y, r.to.y) - 8
          return (
            <g key={i}>
              <path
                data-route={i}
                d={`M${r.from.x},${r.from.y} Q${midX},${midY} ${r.to.x},${r.to.y}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-emerald-400/60"
              />
              <circle
                data-pulse={i}
                cx={r.from.x}
                cy={r.from.y}
                r="0.7"
                fill="currentColor"
                className="text-emerald-300 drop-shadow-[0_0_4px_rgba(52,211,153,0.8)]"
              />
            </g>
          )
        })}

        {/* Hub dots with labels */}
        {hubs.map((hub, i) => (
          <g key={i}>
            <circle
              data-hub
              cx={hub.x}
              cy={hub.y}
              r="1.2"
              fill="currentColor"
              className="text-emerald-500"
            />
            <circle
              cx={hub.x}
              cy={hub.y}
              r="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-emerald-500/30"
            />
            <text
              x={hub.x}
              y={hub.y - 2.5}
              textAnchor="middle"
              className="text-emerald-300/70"
              style={{ fontSize: '1.8px', fontWeight: '600', letterSpacing: '0.1px' }}
            >
              {hub.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
