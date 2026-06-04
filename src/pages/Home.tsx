import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Hero } from '../components/Hero'

export function Home() {
  const features = [
    {
      title: 'Global Operations Visibility',
      description: 'Real-time tracking across air, ocean, and ground transport with predictive ETAs and automated exception management.',
      metrics: '140+ countries, 24/7 monitoring',
      icon: '🌍',
    },
    {
      title: 'AI-Driven Route Optimization',
      description: 'Machine learning algorithms optimize routes in real-time, reducing transit times by up to 30% while maintaining service levels.',
      metrics: '2.4M shipments optimized annually',
      icon: '🤖',
    },
    {
      title: 'Enterprise Security & Compliance',
      description: 'SOC 2 Type II, ISO 27001 certified. End-to-end encryption, SSO, role-based access control, and regulatory compliance.',
      metrics: '99.3% client retention',
      icon: '🔒',
    },
    {
      title: 'API-First Platform Architecture',
      description: 'RESTful APIs, webhooks, and SDKs for seamless integration with ERP, WMS, and order management systems.',
      metrics: '500+ integrations',
      icon: '⚡',
    },
    {
      title: 'Cold Chain Excellence',
      description: 'IoT-enabled temperature monitoring for pharmaceuticals and perishables. Instant deviation alerts and regulatory compliance reporting.',
      metrics: '98.9% on-time for cold chain',
      icon: '❄️',
    },
    {
      title: 'Carbon Intelligence & ESG',
      description: 'Precise carbon footprint measurement on every shipment. Offset options, ESG reporting, and sustainability commitments.',
      metrics: 'Carbon-neutral by 2028',
      icon: '🌱',
    },
  ]

  const services = [
    {
      title: 'International Air Freight',
      description: 'Time-definite cargo solutions with guaranteed capacity on major trade lanes. Express (24-48h), standard (3-5 days), and charter options.',
      details: 'Non-stop network across 140+ countries',
      icon: '✈️',
    },
    {
      title: 'Global Ocean Freight',
      description: 'Full-container (FCL) and less-than-container (LCL) services on all major trade routes. Direct carrier partnerships ensure priority booking.',
      details: 'Weekly sailings to 1,200+ ports',
      icon: '🚢',
    },
    {
      title: 'Dedicated Ground Transport',
      description: 'Full truckload (FTL), less-than-truckload (LTL), and intermodal solutions across North America, Europe, and APAC with GPS visibility.',
      details: '12,000+ GPS-tracked vehicles',
      icon: '🚛',
    },
    {
      title: 'Strategic Warehousing Network',
      description: '150+ strategically located facilities with WMS integration. Cross-docking, pick-and-pack, inventory management, and value-added services.',
      details: '8M+ sq ft across 6 continents',
      icon: '🏭',
    },
    {
      title: 'Global Customs Brokerage',
      description: 'Licensed brokers in 80+ countries providing classification, documentation, compliance, and automated customs clearance for repeat shipments.',
      details: 'Automated 99% of clearances',
      icon: '📋',
    },
    {
      title: 'Supply Chain Intelligence',
      description: 'Real-time dashboards, predictive ETAs, cost analysis, and carbon-footprint tracking. Data-driven decision support for logistics leadership.',
      details: 'Real-time network optimization',
      icon: '📊',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Reynolds',
      role: 'VP Supply Chain, TechGlobal',
      initials: 'SR',
      quote:
        'MOVVE reduced our trans-Pacific transit time by 4 days and saved us $200K in duties through customs optimization. The ROI was immediate.',
      company: 'Fortune 500 Technology',
    },
    {
      name: 'Marcus Kho',
      role: 'COO, OmniRetail Group',
      initials: 'MK',
      quote:
        'Managing 12,000 SKUs across 40 countries required precision. MOVVE\'s WMS integration eliminated our stockout problem entirely.',
      company: 'Global Retail Leader',
    },
    {
      name: 'Elena Laurier',
      role: 'Logistics Director, FreshFoods EU',
      initials: 'EL',
      quote:
        'From first contact to first shipment in under 72 hours. Zero temperature excursions on cold chain shipments. MOVVE delivers.',
      company: 'European Food Giant',
    },
    {
      name: 'James Davidson',
      role: 'CTO, CloudScale Systems',
      initials: 'JD',
      quote:
        'Our requirements were exacting: 99.9% uptime, 2-week integration, failover capability. MOVVE met every requirement.',
      company: 'Cloud Infrastructure Provider',
    },
  ]

  const clients = ['AMAZON', 'MICROSOFT', 'GOOGLE', 'APPLE', 'TESLA', 'NIKE', 'SAMSUNG', 'TOYOTA']

  return (
    <>
      <Hero />

      {/* Premium Trust Bar */}
      <section className="relative z-10 -mt-20">
        <div className="container mx-auto px-4">
          <div className="bg-brand-surface/95 backdrop-blur-xl border border-brand-border/50 rounded-2xl shadow-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-8 text-brand-muted text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-success/20 to-brand-success/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold">SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent/20 to-brand-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="font-semibold">ISO 27001 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-warning/20 to-brand-warning/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold">GDPR Ready</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-primaryDark text-brand-surface text-sm font-display font-semibold hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 rounded-lg flex items-center space-x-2"
              >
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Client Logos */}
      <section className="py-20 bg-gradient-to-b from-brand-primary to-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-brand-muted uppercase tracking-wider text-xs font-display font-semibold mb-4">
              Trusted by industry leaders
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-surface">
              Powering Fortune 500 Supply Chains
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {clients.map((client, index) => (
              <motion.span
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="font-display text-2xl md:text-3xl font-bold text-brand-muted/60 hover:text-brand-accent/90 hover:opacity-100 transition-all duration-300 cursor-default"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Capabilities Section */}
      <section className="py-24 bg-gradient-to-b from-brand-primary-dark to-brand-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-brand-accent" />
              <span className="text-brand-accent uppercase tracking-wider text-xs font-display font-semibold">
                Core Capabilities
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-brand-accent" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-surface mb-6">
              Enterprise-grade logistics infrastructure
            </h2>
            <p className="text-brand-muted font-body text-lg max-w-3xl mx-auto">
              Built for scale, designed for precision. Our platform handles complexity so you can focus on business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full p-8 bg-gradient-to-br from-brand-surface/10 to-brand-surface/5 border border-brand-border/30 rounded-2xl backdrop-blur-sm hover:border-brand-accent/30 transition-all duration-500">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-surface mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brand-accent text-xs font-semibold uppercase tracking-wider mb-4">
                    {feature.metrics}
                  </p>
                  <p className="text-brand-muted font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-24 bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-brand-accent" />
                <span className="text-brand-accent uppercase tracking-wider text-xs font-display font-semibold">
                  Services
                </span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-brand-accent" />
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-surface mb-6">
                Comprehensive logistics solutions for every supply chain need
              </h2>
              <p className="text-brand-muted font-body text-lg leading-relaxed mb-8">
                From origin to final delivery, we handle every link in your supply chain with precision and care. Our end-to-end services scale with your business.
              </p>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-accent to-brand-accent-light text-brand-surface font-display font-bold text-base hover:shadow-lg hover:shadow-brand-accent/25 transition-all duration-300 rounded-lg"
              >
                View All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full p-6 bg-gradient-to-br from-brand-surface/10 to-brand-surface/5 border border-brand-border/30 rounded-xl backdrop-blur-sm hover:border-brand-accent/30 transition-all duration-500">
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="font-display text-lg font-bold text-brand-surface mb-3">
                        {service.title}
                      </h3>
                      <p className="text-brand-muted font-body text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <p className="text-brand-accent text-xs font-semibold uppercase tracking-wider">
                        {service.details}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-brand-primary to-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-brand-accent" />
              <span className="text-brand-accent uppercase tracking-wider text-xs font-display font-semibold">
                Client Success
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-brand-accent" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-surface mb-6">
              Proven results across industries
            </h2>
            <p className="text-brand-muted font-body text-lg max-w-3xl mx-auto">
              See how Fortune 500 companies transform their supply chains with MOVVE precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full p-8 bg-gradient-to-br from-brand-primary/50 to-brand-primary/30 border border-brand-border/30 rounded-2xl backdrop-blur-sm hover:border-brand-accent/30 transition-all duration-500">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-brand-surface text-2xl font-display">"</span>
                  </div>
                  <p className="text-brand-surface font-body text-lg leading-relaxed mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-full flex items-center justify-center text-brand-surface font-display font-bold text-xl shadow-lg">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-brand-surface font-display font-bold">
                        {testimonial.name}
                      </p>
                      <p className="text-brand-muted text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-brand-accent/60 text-xs mt-1">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-accent to-brand-accent-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, oklch(0.65 0.20 25 / 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, oklch(0.60 0.18 25 / 0.2) 0%, transparent 50%),
              linear-gradient(45deg, transparent 30%, oklch(0.60 0.16 25 / 0.1) 50%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, oklch(0.60 0.16 25 / 0.1) 50%, transparent 70%)
            `
          }} />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-surface mb-6">
              Ready to transform your supply chain?
            </h2>
            <p className="text-brand-surface/90 font-body text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Join 500+ enterprise companies that trust MOVVE with their most critical logistics operations.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-10 py-5 bg-brand-surface text-brand-primary font-display font-bold text-lg hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 rounded-lg flex items-center space-x-2"
              >
                <span>Request Demo</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/tracking"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-brand-surface font-display font-bold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 rounded-lg flex items-center space-x-2"
              >
                <span>Track Shipment</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}