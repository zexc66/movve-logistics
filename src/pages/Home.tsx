import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Hero } from '../components/Hero'

export function Home() {
  return (
    <>
      <Hero />

      {/* Trust indicators */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700 font-medium">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700 font-medium">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700 font-medium">GDPR</span>
              </div>
            </div>
            <Link to="/contact" className="px-6 py-3 bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors rounded-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Client roster */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-500 text-sm font-medium tracking-wide uppercase mb-12">
            Trusted by Global Supply Chain Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16">
            {['AMAZON', 'MICROSOFT', 'GOOGLE', 'APPLE', 'TESLA', 'NIKE', 'SAMSUNG', 'TOYOTA'].map((client) => (
              <span key={client} className="text-2xl font-bold text-slate-400">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Infrastructure Built for Scale
            </h2>
            <p className="text-xl text-slate-600">
              Enterprise logistics infrastructure that transforms complexity into operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Global Visibility',
                description: 'Real-time tracking across air, ocean, and ground transport with predictive ETAs and automated exception management.',
              },
              {
                title: 'AI-Driven Optimization',
                description: 'Machine learning algorithms optimize routes in real-time, reducing transit times by up to 30%.',
              },
              {
                title: 'Enterprise Security',
                description: 'SOC 2 Type II, ISO 27001 certified. End-to-end encryption, SSO, role-based access control.',
              },
              {
                title: 'API-First Platform',
                description: 'RESTful APIs, webhooks, and SDKs for seamless integration with ERP, WMS, and order management systems.',
              },
              {
                title: 'Cold Chain Excellence',
                description: 'IoT-enabled temperature monitoring for pharmaceuticals and perishables with instant deviation alerts.',
              },
              {
                title: 'Carbon Intelligence',
                description: 'Precise carbon footprint measurement on every shipment with offset options and ESG reporting.',
              },
            ].map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-slate-50 hover:bg-slate-100 transition-colors rounded-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {capability.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                End-to-End Logistics
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                From origin to final delivery, we handle every link in your supply chain with precision and care.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-slate-700 transition-colors"
              >
                View All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Air Freight', description: 'Time-definite cargo solutions with guaranteed capacity' },
                { title: 'Ocean Freight', description: 'Full-container and less-than-container services' },
                { title: 'Ground Transport', description: 'Full truckload and intermodal solutions' },
                { title: 'Warehousing', description: '150+ strategically located facilities' },
                { title: 'Customs Brokerage', description: 'Licensed brokers in 80+ countries' },
                { title: 'Supply Chain Intelligence', description: 'Real-time dashboards and predictive analytics' },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-6 bg-white border border-slate-200 rounded-lg"
                >
                  <h3 className="font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-slate-600">
              See how Fortune 500 companies transform their supply chains with MOVVE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Sarah Reynolds',
                role: 'VP Supply Chain, TechGlobal',
                quote: 'MOVVE reduced our trans-Pacific transit time by 4 days and saved us $200K in duties through customs optimization.',
              },
              {
                name: 'Marcus Kho',
                role: 'COO, OmniRetail Group',
                quote: 'Managing 12,000 SKUs across 40 countries required precision. MOVVE\'s WMS integration eliminated our stockout problem.',
              },
              {
                name: 'Elena Laurier',
                role: 'Logistics Director, FreshFoods EU',
                quote: 'From first contact to first shipment in under 72 hours. Zero temperature excursions on cold chain shipments.',
              },
              {
                name: 'James Davidson',
                role: 'CTO, CloudScale Systems',
                quote: 'Our requirements were exacting: 99.9% uptime, 2-week integration, failover capability. MOVVE met every requirement.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-slate-50 border border-slate-200 rounded-lg"
              >
                <p className="text-lg text-slate-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-600">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Supply Chain
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Join 500+ enterprise companies that trust MOVVE with their most critical logistics operations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="px-10 py-5 bg-white text-slate-900 font-bold text-lg hover:bg-slate-50 transition-colors rounded-lg inline-flex items-center gap-2"
            >
              <span>Request Demo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/tracking"
              className="px-10 py-5 bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 transition-colors rounded-lg"
            >
              Track Shipment
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}