import { describe, it, expect, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useStructuredData } from '@/hooks/useStructuredData'

afterEach(() => {
  document.getElementById('page-structured-data')?.remove()
})

describe('useStructuredData', () => {
  it('injects a JSON-LD script tag into the document head', () => {
    const schema = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Test' }
    renderHook(() => useStructuredData(schema))

    const script = document.getElementById('page-structured-data') as HTMLScriptElement | null
    expect(script).not.toBeNull()
    expect(script?.type).toBe('application/ld+json')
  })

  it('serializes the data object correctly', () => {
    const schema = { '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About Test' }
    renderHook(() => useStructuredData(schema))

    const script = document.getElementById('page-structured-data') as HTMLScriptElement
    const parsed = JSON.parse(script.textContent || '{}')
    expect(parsed['@type']).toBe('AboutPage')
    expect(parsed.name).toBe('About Test')
  })

  it('removes the script tag on unmount', () => {
    const schema = { '@context': 'https://schema.org', '@type': 'ContactPage' }
    const { unmount } = renderHook(() => useStructuredData(schema))

    expect(document.getElementById('page-structured-data')).not.toBeNull()
    unmount()
    expect(document.getElementById('page-structured-data')).toBeNull()
  })

  it('replaces previous schema when data changes', () => {
    const { rerender } = renderHook(({ data }) => useStructuredData(data), {
      initialProps: { data: { '@type': 'Blog' } }
    })

    let script = document.getElementById('page-structured-data') as HTMLScriptElement
    expect(JSON.parse(script.textContent || '{}')['@type']).toBe('Blog')

    rerender({ data: { '@type': 'CareersPage' } })
    script = document.getElementById('page-structured-data') as HTMLScriptElement
    expect(JSON.parse(script.textContent || '{}')['@type']).toBe('CareersPage')
  })
})
