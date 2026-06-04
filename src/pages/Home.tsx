import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Hero } from '../components/Hero'

export function Home() {
  const features = [
    {
      title: 'Global Operations Visibility',
      description: 'Real-time tracking across air, ocean, and ground transport with predictive ETAs and automated exception management.',
      metrics: '140+ countries, 24/7 monitoring',
    },
    {
      title: 'AI-Driven Route Optimization',
      description: 'Machine learning algorithms optimize routes in real-time, reducing transit times by up to 30% while maintaining service levels.',
      metrics: '2.4M shipments optimized annually',
    },
    {
      title: 'Enterprise Security & Compliance',
      description: 'SOC 2 Type II, ISO 27001 certified. End-to-end encryption, SSO, role-based access control, and regulatory compliance.',
      metrics: '99.3% client retention',
    },
    {
      title: 'API-First Platform Architecture',
      description: 'RESTful APIs, webhooks, and SDKs for seamless integration with ERP, WMS, and order management systems.',
      metrics: '500+ integrations',
    },
    {
      title: 'Cold Chain Excellence',
      description: 'IoT-enabled temperature monitoring for pharmaceuticals and perishables. Instant deviation alerts and regulatory compliance reporting.',
      metrics: '98.9% on-time for cold chain',
    },
    {
      title: 'Carbon Intelligence & ESG',
      description: 'Precise carbon footprint measurement on every shipment. Offset options, ESG reporting, and sustainability commitments.',
      metrics: 'Carbon-neutral by 2028',
    },
  ]

  const services = [
    {
      title: 'International Air Freight',
      description: 'Time-definite cargo solutions with guaranteed capacity on major trade lanes. Express (24-48h), standard (3-5 days), and charter options.',
      details: 'Non-stop network across 140+ countries',
    },
    {
      title: 'Global Ocean Freight',
      description: 'Full-container (FCL) and less-than-container (LCL) services on all major trade routes. Direct carrier partnerships ensure priority booking.',
      details: 'Weekly sailings to 1,200+ ports',
    },
    {
      title: 'Dedicated Ground Transport',
      description: 'Full truckload (FTL), less-than-truckload (LTL), and intermodal solutions across North America, Europe, and APAC with GPS visibility.',
      details: '12,000+ GPS-tracked vehicles',
    },
    {
      title: 'Strategic Warehousing Network',
      description: '150+ strategically located facilities with WMS integration. Cross-docking, pick-and-pack, inventory management, and value-added services.',
      details: '8M+ sq ft across 6 continents',
    },
    {
      title: 'Global Customs Brokerage',
      description: 'Licensed brokers in 80+ countries providing classification, documentation, compliance, and automated customs clearance for repeat shipments.',
      details: 'Automated 99% of clearances',
    },
    {
      title: 'Supply Chain Intelligence',
      description: 'Real-time dashboards, predictive ETAs, cost analysis, and carbon-footprint tracking. Data-driven decision support for logistics leadership.',
      details: 'Real-time network optimization',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Reynolds',
      role: 'VP Supply Chain, TechGlobal',
      initials: 'SR',
      quote:
        'MOVVE reduced our trans-Pacific transit time by 4 days and saved us $200K in duties through customs optimization. The ROI was immediate.',
    },
    {
      name: 'Marcus Kho',
      role: 'COO, OmniRetail Group',
      initials: 'MK',
      quote:
        'Managing 12,000 SKUs across 40 countries required precision. MOVVE\'s WMS integration eliminated our stockout problem entirely.',
    },
    {
      name: 'Elena Laurier',
      role: 'Logistics Director, FreshFoods EU',
      initials: 'EL',
      quote:
        'From first contact to first shipment in under 72 hours. Zero temperature excursions on cold chain shipments. MOVVE delivers.',
    },
    {
      name: 'James Davidson',
      role: 'CTO, CloudScale Systems',
      initials: 'JD',
      quote:
        'Our requirements were exacting: 99.9% uptime, 2-week integration, failover capability. MOVVE met every requirement.',
    },
  ]

  const clients = ['AMAZON', 'MICROSOFT', 'GOOGLE', 'APPLE', 'TESLA', 'NIKE', 'SAMSUNG', 'TOYOTA']

  return (
    <>
      <Hero />

      <section className="py-16 bg-brand-surface border-b border-brand-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-brand-muted text-sm">
              <div className="flex items-center gap-2">
                <span className="text-brand-success text-green-500">✓</span>
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="w-px h-4 bg-brand-border"></div>
              <div className="flex items-center gap-2">
                <span className="text-brand-success text-green-500">✓</span>
                <span>ISO 27001 Compliant</span>
              </div>
              <div className="w-px h-4 bg-brand-border"></div>
              <div className="flex items-center gap-2">
                <span className="text-brand-success text-green-500">✓</span>
                <span>GDPR Ready</span>
              </div>
            </div>
            <Link to="/contact" className="px-6 py-3 bg-brand-primary text-brand-surface text-sm font-display font-semibold hover:bg-brand-primaryLight transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-brand-muted uppercase tracking-wider text-xs font-display font-semibold mb-4">
              Trusted by industry leaders
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-text mb-4">
              Powering Fortune 500 Supply Chains
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {clients.map((client, index) => (
              <motion.span
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="font-display text-2xl font-bold text-brand-muted hover:text-brand-accent hover:opacity-100 transition-all"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-brand-surface to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent uppercase tracking-wider text-xs font-display font-semibold">
                Core Capabilities
              </span>
              <div className="w-12 h-px bg-brand-accent"></div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-text mb-4">
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
                className="p-8 border border-brand-border hover:border-brand-accent/30 transition-all bg-white"
              >
                <h3 className="font-display text-xl font-bold text-brand-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-muted text-xs font-semibold uppercase tracking-wider mb-4 text-brand-accent">
                  {feature.metrics}
                </p>
                <p className="text-brand-muted font-body leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="w-12 h-px bg-brand-accent"></div>
                <span className="text-brand-accent uppercase tracking-wider text-xs font-display font-semibold">
                  Services
                </span>
                <div className="w-12 h-px bg-brand-accent"></div>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-surface mb-6">
                Comprehensive logistics solutions for every supply chain need
              </h2>
              <p className="text-brand-secondaryLight font-body text-lg leading-relaxed mb-8">
                From origin to final delivery, we handle every link in your supply chain with precision and care. Our end-to-end services scale with your business.
              </p>

              <Link
                to="/services"
                className="text-brand-accent font-display font-semibold inline-flex items-center gap-2 group"
              >
                View All Services
                <span className="group-hover:translate-x-1 transition-transform">→</span>
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
                    className="p-6 border border-brand-border/50 hover:border-brand-accent/30 transition-all bg-brand-surface/5"
                  >
                    <h3 className="font-display text-lg font-bold text-brand-surface mb-3">
                      {service.title}
                    </h3>
                    <p className="text-brand-muted font-body text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-brand-muted text-xs font-semibold uppercase tracking-wider text-brand-accent">
                      {service.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-brand-primary to-brand-primaryDark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent uppercase tracking-wider text-xs font-display font-semibold">
                Client Success
              </span>
              <div className="w-12 h-px bg-brand-accent"></div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-surface mb-4">
              Proven results across industries
            </h2>
            <p className="text-brand-secondaryLight font-body text-lg max-w-3xl mx-auto">
              See how Fortune 500 companies transform their supply chains with MOVVE precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-brand-border bg-brand-primary/30 relative"
              >
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-brand-primary">
                  <span className="text-brand-accent text-2xl font-display">"</span>
                </div>
                <p className="text-brand-surface font-body text-lg leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-brand-surface font-display font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-brand-surface font-display font-bold">
                      {testimonial.name}
                    </p>
                    <p className="text-brand-muted text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, oklch(0.55 0.18 25 / 0.1) 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, oklch(0.55 0.18 25 / 0.1) 50%, transparent 60%)
            `
          }} />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-surface mb-6">
            Ready to transform your supply chain?
          </h2>
          <p className="text-brand-surface font-body text-lg max-w-3xl mx-auto mb-12">
            Join 500+ enterprise companies that trust MOVVE with their most critical logistics operations.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="px-8 py-4 bg-brand-surface text-brand-primary font-display font-bold text-lg hover:bg-brand-surfaceSubtle transition-colors"
            >
              Request Demo
            </Link>
            <Link
              to="/tracking"
              className="px-8 py-4 bg-brand-accentDark text-brand-surface border-2 border-brand-surface/30 font-display font-bold text-lg hover:bg-brand-accent transition-colors"
            >
              Track Shipment
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}