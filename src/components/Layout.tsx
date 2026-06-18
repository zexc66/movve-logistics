import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Footer } from './Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const { scrollY } = useScroll()
  const navOpacity = useTransform(scrollY, [0, 50], [1, 0.95])
  const navBlur = useTransform(scrollY, [0, 50], [0, 8])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/tracking', label: 'Track' },
    { path: '/careers', label: 'Careers' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <motion.nav
        aria-label="Main navigation"
        style={{ opacity: navOpacity, backdropFilter: `blur(${navBlur}px)`, zIndex: 'var(--z-fixed)' }}
        className="fixed top-0 left-0 right-0 transition-all duration-300"
      >
        <div className="container mx-auto px-4">
          {/* Outer bezel */}
          <div className="mx-4 border border-slate-800/30 rounded-xl mt-4" />

          {/* Inner bezel */}
          <div className="mx-2 border border-slate-700/20 rounded-lg py-4">
            <div className="container px-4">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="flex items-center gap-3 group cursor-pointer"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {/* Logo with double-bezel */}
                  <div className="relative">
                    <div className="absolute -inset-0.5 border border-slate-700/30 rounded-lg group-hover:border-slate-600/50 transition-colors duration-300" />
                    <div className="relative w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-display text-xl border border-slate-800/50">
                      M
                    </div>
                  </div>
                  <span className="text-xl font-bold text-white group-hover:text-slate-200 transition-colors duration-300">
                    MOVVE
                  </span>
                </Link>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center gap-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                        location.pathname === link.path
                          ? 'text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-white text-slate-900 font-semibold hover:bg-slate-50 transition-colors duration-300 rounded-lg cursor-pointer"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Get Started
                  </Link>
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden text-slate-400 hover:text-white transition-colors duration-200 p-3"
                  aria-label="Toggle menu"
                >
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    {isMenuOpen ? (
                      <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                      <>
                        <path d="M3 6h18" />
                        <path d="M3 12h18" />
                        <path d="M3 18h18" />
                      </>
                    )}
                  </motion.svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu with premium presentation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900 z-40 md:hidden"
          >
            <div className="container flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.08
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-medium transition-colors py-4 px-8 rounded-lg cursor-pointer ${
                      location.pathname === link.path
                        ? 'text-white bg-slate-800'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.6
                }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg cursor-pointer"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content" className="pt-32">{children}</main>
      <Footer />
    </>
  )
}