/**
 * Check if the user prefers reduced motion.
 * Used to skip GSAP animations (which bypass CSS prefers-reduced-motion).
 * WCAG 2.1 SC 2.3.3 — Animation from Interactions (Level AAA)
 */
export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
