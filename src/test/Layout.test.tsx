import { describe, it, expect, vi, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout'

const routerFuture = { v7_startTransition: true, v7_relativeSplatPath: true } as const

beforeAll(() => {
  window.scrollTo = vi.fn()
})

describe('Layout', () => {
  it('renders navigation with correct links', () => {
    render(
      <BrowserRouter future={routerFuture}>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </BrowserRouter>
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Track')).toBeInTheDocument()
    expect(screen.getAllByText('Careers').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Blog').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1)
  })

  it('renders MOVVE logo', () => {
    render(
      <BrowserRouter future={routerFuture}>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </BrowserRouter>
    )

    expect(screen.getAllByText('MOVVE').length).toBeGreaterThanOrEqual(1)
  })

  it('renders footer', () => {
    render(
      <BrowserRouter future={routerFuture}>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </BrowserRouter>
    )

    expect(screen.getByText(/©/)).toBeInTheDocument()
  })
})