import { useRef, useEffect } from 'react'
import { prefersReducedMotion } from '@/utils/reducedMotion'

export function useMagneticHover<T extends HTMLElement = HTMLDivElement>(threshold = 30) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) return

    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      const distance = Math.sqrt(x * x + y * y)

      if (distance < threshold * 3) {
        cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() => {
          el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
        })
      }
    }

    const handleMouseLeave = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        el.style.transform = 'translate(0px, 0px)'
      })
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(rafId)
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [threshold])

  return { ref }
}
