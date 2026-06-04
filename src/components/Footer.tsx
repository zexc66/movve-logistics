import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-navy py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-bold text-white mb-4 block">
              MOVVE
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Enterprise-grade global logistics platform. 98.6% on-time delivery
              across 140+ countries. Trusted by Fortune 500 companies worldwide.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crimson transition-colors"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-crimson text-white rounded-lg font-semibold hover:bg-crimson/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-crimson transition-colors">
                  Air Freight
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-crimson transition-colors">
                  Ocean Freight
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-crimson transition-colors">
                  Ground Transport
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-crimson transition-colors">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-crimson transition-colors">
                  Customs Brokerage
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-crimson transition-colors">
                  Cold Chain
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-crimson transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-crimson transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-crimson transition-colors">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-crimson transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-crimson transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-crimson transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} MOVVE Logistics. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link to="#" className="text-gray-400 hover:text-crimson transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="#" className="text-gray-400 hover:text-crimson transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-crimson hover:text-white transition-all"
            >
              in
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-crimson hover:text-white transition-all"
            >
              𝕏
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-crimson hover:text-white transition-all"
            >
              ▶
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}