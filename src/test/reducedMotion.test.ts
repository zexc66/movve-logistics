import { describe, it, expect, vi, afterEach } from 'vitest'
import { prefersReducedMotion } from '@/utils/reducedMotion'

const ORIGINAL = window.matchMedia

afterEach(() => {
  window.matchMedia = ORIGINAL
})

function mockMatchMedia(reduced: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query === '(prefers-reduced-motion: reduce)' ? reduced : false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

describe('prefersReducedMotion', () => {
  it('returns true when user has reduced motion preference', () => {
    mockMatchMedia(true)
    expect(prefersReducedMotion()).toBe(true)
  })

  it('returns false when user has no reduced motion preference', () => {
    mockMatchMedia(false)
    expect(prefersReducedMotion()).toBe(false)
  })

  it('returns false when matchMedia is unavailable', () => {
    window.matchMedia = undefined as unknown as typeof window.matchMedia
    expect(prefersReducedMotion()).toBe(false)
  })
})
