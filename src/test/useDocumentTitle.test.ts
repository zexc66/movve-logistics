import { describe, it, expect, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

function ensureMeta(name: string, isProperty = false): void {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
  if (!document.head.querySelector(selector)) {
    const meta = document.createElement('meta')
    if (isProperty) meta.setAttribute('property', name)
    else meta.setAttribute('name', name)
    document.head.appendChild(meta)
  }
}

afterEach(() => {
  document.title = ''
  document.querySelectorAll('meta[name="description"], meta[property^="og:"], meta[name^="twitter:"], meta[name="robots"]').forEach(m => m.remove())
  document.querySelectorAll('link[rel="canonical"]').forEach(l => l.remove())
})

describe('useDocumentTitle', () => {
  it('sets document title', () => {
    renderHook(() => useDocumentTitle('Test Page — MOVVE'))
    expect(document.title).toBe('Test Page — MOVVE')
  })

  it('sets meta description when provided', () => {
    ensureMeta('description')
    renderHook(() => useDocumentTitle('Test', 'A test description'))
    const meta = document.querySelector('meta[name="description"]')
    expect(meta?.getAttribute('content')).toBe('A test description')
  })

  it('sets OG and Twitter description when provided', () => {
    ensureMeta('og:description', true)
    ensureMeta('twitter:description')
    renderHook(() => useDocumentTitle('Test', 'Shared description'))
    expect(document.querySelector('meta[property="og:description"]')?.getAttribute('content')).toBe('Shared description')
    expect(document.querySelector('meta[name="twitter:description"]')?.getAttribute('content')).toBe('Shared description')
  })

  it('sets OG and Twitter title', () => {
    ensureMeta('og:title', true)
    ensureMeta('twitter:title')
    renderHook(() => useDocumentTitle('OG Title — MOVVE'))
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe('OG Title — MOVVE')
    expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute('content')).toBe('OG Title — MOVVE')
  })

  it('adds noindex robots meta when noindex is true', () => {
    renderHook(() => useDocumentTitle('Secret', undefined, true))
    const meta = document.querySelector('meta[name="robots"]')
    expect(meta?.getAttribute('content')).toContain('noindex')
  })

  it('does not add robots meta when noindex is false', () => {
    renderHook(() => useDocumentTitle('Public'))
    expect(document.querySelector('meta[name="robots"]')).toBeNull()
  })
})
