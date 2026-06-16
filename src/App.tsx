import { Routes, Route } from 'react-router-dom'
import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Tracking } from './pages/Tracking'
import { Careers } from './pages/Careers'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Application error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
            <p className="text-slate-400 mb-6">Please refresh the page to try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <p className="text-8xl font-bold text-emerald-500 mb-4">404</p>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-slate-400 mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="inline-block px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
          Back to Home
        </a>
      </div>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  )
}

export default App