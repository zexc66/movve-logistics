import { motion } from 'framer-motion'
import { Hero } from '../components/Hero'

export function Home() {
  const features = [
    {
      icon: '👁️',
      title: 'Full Visibility',
      description: 'Real-time tracking across air, ocean, and ground. Single dashboard with predictive ETAs and exception alerts.',
    },
    {
      icon: '⚡',
      title: 'AI-Powered Routing',
      description: 'Machine learning algorithms optimize routes in real-time, reducing transit times by up to 30%.',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'SOC 2 Type II, ISO 27001 certified. End-to-end encryption, SSO, and role-based access control.',
    },
    {
      icon: '🔌',
      title: 'API-First Platform',
      description: 'RESTful APIs, webhooks, and SDKs for seamless integration with your existing systems.',
    },
    {
      icon: '🌡️',
      title: 'Cold Chain Excellence',
      description: 'IoT-enabled temperature monitoring for pharmaceuticals and perishables. Instant deviation alerts.',
    },
    {
      icon: '🌱',
      title: 'Sustainability Tracking',
      description: 'Carbon footprint measurement on every shipment. Offset options and ESG reporting included.',
    },
  ]

  const services = [
    {
      icon: '✈️',
      title: 'Air Freight',
      description: 'Time-critical cargo on our global air network. Express (1–2 days), standard (3–5 days), and consolidated services.',
    },
    {
      icon: '🚢',
      title: 'Ocean Freight',
      description: 'FCL and LCL across all major trade lanes. Direct carrier partnerships for capacity, competitive rates.',
    },
    {
      icon: '🚛',
      title: 'Ground Transport',
      description: 'FTL, LTL, and intermodal across North America, Europe, and APAC. GPS-tracked fleet with 98.6% on-time.',
    },
    {
      icon: '🏭',
      title: 'Warehousing',
      description: '150+ warehouses worldwide with WMS integration. Cross-docking, pick-and-pack, inventory management.',
    },
    {
      icon: '📋',
      title: 'Customs Brokerage',
      description: 'Licensed brokers in 80+ countries. Classification, documentation, compliance. Automated clearance.',
    },
    {
      icon: '📊',
      title: 'Supply Chain Analytics',
      description: 'Live dashboards, predictive ETAs, cost analysis, and carbon-footprint tracking. Decisions backed by data.',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Reynolds',
      role: 'VP Supply Chain, TechGlobal',
      initials: 'SR',
      quote:
        'MOVVE cut our trans-Pacific transit by 4 days. Their customs brokerage saved us $200K in duties last quarter.',
    },
    {
      name: 'Marcus Kho',
      role: 'COO, OmniRetail Group',
      initials: 'MK',
      quote:
        '12,000 SKUs across 40 countries. MOVVE\'s WMS integration eliminated our stockout problem completely.',
    },
    {
      name: 'Elena Laurier',
      role: 'Logistics Director, FreshFoods EU',
      initials: 'EL',
      quote:
        'First contact to first shipment in under 72 hours. Nothing melted, nothing spoiled. MOVVE delivers.',
    },
  ]

  return (
    <>
      <Hero />

      <section className="py-24 bg-gradient-to-b from-navy to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-crimson font-semibold text-sm mb-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
              </div>
              <span>TRUSTED BY INDUSTRY LEADERS</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Powering supply chains for Fortune 500 companies
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12 opacity-60"
          >
            {['AMAZON', 'MICROSOFT', 'GOOGLE', 'APPLE', 'TESLA', 'NIKE', 'SAMSUNG', 'TOYOTA'].map(
              (company) => (
                <span key={company} className="text-3xl font-bold text-gray-400">
                  {company}
                </span>
              )
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-crimson font-semibold text-sm mb-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
              </div>
              <span>WHY CHOOSE MOVVE</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-grade logistics, simplified
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for scale, designed for speed. Our platform handles the complexity so
              you can focus on growing your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-crimson/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-blue-900 to-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-crimson font-semibold text-sm mb-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
              </div>
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive logistics solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From origin to final delivery, we handle every link in your supply chain with
              precision and care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-crimson/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-crimson font-semibold group-hover:gap-3 transition-all"
                >
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-crimson font-semibold text-sm mb-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
              </div>
              <span>CLIENT SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by industry leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Fortune 500 companies transform their supply chains with MOVVE
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <p className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-crimson rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-crimson to-red-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to transform your supply chain?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join 500+ enterprise companies trust MOVVE to move their freight. Schedule a
              personalized demo and see precision in action.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-crimson rounded-sm font-bold text-lg hover:bg-white/90 transition-colors"
              >
                Schedule Demo
              </a>
              <a
                href="/tracking"
                className="px-8 py-4 bg-white/20 text-white border-2 border-white rounded-sm font-bold text-lg hover:bg-white/30 transition-colors"
              >
                Track Shipment
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}