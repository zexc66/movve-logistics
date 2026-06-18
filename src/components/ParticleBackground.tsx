import { gsap } from 'gsap'
import { prefersReducedMotion } from '@/utils/reducedMotion'
import { useRef, useEffect } from 'react'

export function ParticleBackground({ count = 20 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (!containerRef.current) return

    const particles = containerRef.current.querySelectorAll('.particle')
    const tweens: gsap.core.Tween[] = []

    particles.forEach((p, i) => {
      const duration = 20 + Math.random() * 30
      tweens.push(gsap.to(p as Element, {
        y: `-=${50 + Math.random() * 100}`,
        x: `${(Math.random() - 0.5) * 100}`,
        duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.5
      }))
    })

    return () => tweens.forEach(t => t.kill())
  }, [count])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="particle absolute rounded-full bg-emerald-400/20"
          style={{
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}
