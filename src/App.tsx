import { Routes, Route, Link } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Component, Suspense, lazy, type ErrorInfo, type ReactNode } from 'react'
import { Layout } from './components/Layout'

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })))
const Tracking = lazy(() => import('./pages/Tracking').then(m => ({ default: m.Tracking })))
const Careers = lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers })))
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))

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
        <div role="alert" className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
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
        <Link to="/" className="inline-block px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <MotionConfig reducedMotion="user">
        <Layout>
          <Suspense fallback={
            <div role="status" aria-label="Loading page" className="min-h-[60vh] flex items-center justify-center">
              <div aria-hidden="true" className="w-10 h-10 border-2 border-slate-700 border-t-emerald-500 rounded-full animate-spin" />
            </div>
          }>
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
          </Suspense>
        </Layout>
      </MotionConfig>
    </ErrorBoundary>
  )
}

export default App