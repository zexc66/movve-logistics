import { Link } from 'react-router-dom'
import { Icons } from '../components/Icons'

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
    { label: 'Twitter', icon: Icons.analytics, href: '#' },
    { label: 'LinkedIn', icon: Icons.apiPlatform, href: '#' },
    { label: 'GitHub', icon: Icons.threeBar, href: '#' },
  ]

  const certifications = [
    { name: 'ISO 9001', icon: Icons.enterpriseSecurity },
    { name: 'AEO', icon: Icons.customsBrokerage },
    { name: 'GDP', icon: Icons.coldChain },
  ]

  return (
    <footer className="border-t-2 border-brand-border bg-brand-primary-dark">
      <div className="container mx-auto px-4 py-space-3xl">
        <div className="grid lg:grid-cols-6 gap-space-3xl">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center gap-space-sm mb-space-md"
            >
              <span className="text-brand-accent text-4xl">{Icons.logo}</span>
              <span className="font-display text-h1 font-bold text-brand-surface">
                MOVVE
              </span>
            </Link>

            <p className="text-brand-secondary-light text-body text-sm leading-relaxed mb-space-lg">
              Precision logistics for the modern world. Global reach, local expertise,
              and data-driven insights for enterprise-level supply chain management.
            </p>

            <div className="flex flex-wrap gap-space-sm mb-space-lg">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-space-sm px-space-sm py-space-xs border border-brand-border/50 bg-brand-surface/5"
                >
                  <span className="text-brand-accent text-sm">{cert.icon}</span>
                  <span className="text-brand-surface text-xs font-display font-semibold">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-space-sm">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-space-sm border border-brand-border/50 bg-brand-surface/5 text-brand-accent hover:border-brand-accent/30 transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid md:grid-cols-2 lg:grid-cols-4 gap-space-3xl">
            <div>
              <h3 className="font-display text-h3 font-bold text-brand-surface mb-space-md">
                {footerLinks.platform.title}
              </h3>
              <ul className="space-y-space-sm">
                {footerLinks.platform.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-brand-secondary-light text-sm hover:text-brand-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-h3 font-bold text-brand-surface mb-space-md">
                {footerLinks.company.title}
              </h3>
              <ul className="space-y-space-sm">
                {footerLinks.company.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-brand-secondary-light text-sm hover:text-brand-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-h3 font-bold text-brand-surface mb-space-md">
                {footerLinks.resources.title}
              </h3>
              <ul className="space-y-space-sm">
                {footerLinks.resources.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-brand-secondary-light text-sm hover:text-brand-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-h3 font-bold text-brand-surface mb-space-md">
                {footerLinks.legal.title}
              </h3>
              <ul className="space-y-space-sm">
                {footerLinks.legal.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-brand-secondary-light text-sm hover:text-brand-accent transition-colors"
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

      <div className="border-t border-brand-border bg-brand-primary-dark">
        <div className="container mx-auto px-4 py-space-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-space-md text-brand-muted text-sm">
            <p>
              © 2026 MOVVE. All rights reserved. Built for the modern logistics era.
            </p>
            <div className="flex items-center gap-space-md">
              <a
                href="#"
                className="hover:text-brand-accent transition-colors"
              >
                Privacy Settings
              </a>
              <span>•</span>
              <a
                href="#"
                className="hover:text-brand-accent transition-colors"
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