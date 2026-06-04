import { Link } from 'react-router-dom'

export function Footer() {
  const footerLinks = {
    platform: {
      title: 'Platform',
      links: [
        { label: 'Tracking', href: '/tracking' },
        { label: 'Services', href: '/services' },
        { label: 'API Integration', href: '/#platform' },
        { label: 'Analytics', href: '/#features' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/#platform' },
        { label: 'Case Studies', href: '/#platform' },
        { label: 'Industry Reports', href: '/blog' },
        { label: 'Support Center', href: '/#platform' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Compliance', href: '#' },
      ],
    },
  }

  const socialLinks = [
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ]

  const certifications = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR',
  ]

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="lg:grid lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 font-display text-xl">
                M
              </span>
              <span className="text-2xl font-bold text-white">
                MOVVE
              </span>
            </Link>

            <p className="text-slate-400 text-base leading-relaxed mb-6">
              Precision logistics for the modern world. Global reach, local expertise, and
              data-driven insights for enterprise-level supply chain management.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {certifications.map((cert) => (
                <span key={cert} className="px-3 py-2 bg-slate-800 border border-slate-700 rounded text-sm font-medium">
                  {cert}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-6">
                {footerLinks.platform.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.platform.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">
                {footerLinks.company.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">
                {footerLinks.resources.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">
                {footerLinks.legal.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="text-slate-400">
              © 2026 MOVVE. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy Settings
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Cookie Preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}