import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Hero } from '../components/Hero'
import { useRef } from 'react'

export function Home() {
  const featuresRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Hero />

      {/* Trust indicators with premium presentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                Enterprise-Grade Infrastructure
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      SOC 2 Type II Certified
                    </div>
                    <div className="text-sm text-slate-600">Security & Compliance</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      ISO 27001 Compliant
                    </div>
                    <div className="text-sm text-slate-600">Information Security</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 012 2v2.945M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      GDPR Ready
                    </div>
                    <div className="text-sm text-slate-600">Data Privacy</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 border border-slate-200 rounded-2xl" />
              <Link
                to="/contact"
                className="relative block px-8 py-6 bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors duration-300 rounded-xl text-center cursor-pointer"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Get Started
                <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client roster with asymmetrical layout */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-slate-300" />
            <p className="text-slate-500 text-sm font-semibold tracking-widest uppercase">
              Trusted by Global Supply Chain Leaders
            </p>
            <div className="w-12 h-px bg-slate-300" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-16 gap-y-8">
            {['AMAZON', 'MICROSOFT', 'GOOGLE', 'APPLE', 'TESLA', 'NIKE', 'SAMSUNG', 'TOYOTA'].map((client, index) => (
              <motion.span
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.08
                }}
                className="text-xl md:text-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-default"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {client}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Core capabilities with premium card design */}
      <section ref={featuresRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-slate-300" />
              <p className="text-slate-500 text-sm font-semibold tracking-widest uppercase">
                Core Capabilities
              </p>
              <div className="w-16 h-px bg-slate-300" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Infrastructure Built for Scale
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1
                }}
                className="group relative"
              >
                {/* Double-bezel effect */}
                <div className="absolute -inset-0.5 border border-slate-200 rounded-2xl group-hover:border-slate-300 transition-colors duration-300" />

                {/* Inner bezel */}
                <div className="relative h-full p-10 bg-slate-50 hover:bg-slate-100 transition-colors duration-500 rounded-xl">
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {capability.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview with editorial split */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-slate-700" />
                <p className="text-slate-400 text-sm font-semibold tracking-widest uppercase">
                  Services
                </p>
                <div className="w-16 h-px bg-slate-700" />
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                End-to-End Logistics
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                From origin to final delivery, we handle every link in your supply chain with precision and care.
              </p>

              <Link
                to="/services"
                className="inline-flex items-center gap-3 text-white font-semibold hover:text-slate-200 transition-colors duration-300"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>View All Services</span>
                <motion.svg
                  className="w-5 h-5"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.08
                  }}
                  className="group relative"
                >
                  {/* Double-bezel */}
                  <div className="absolute -inset-0.5 border border-slate-700/30 rounded-xl group-hover:border-slate-600/50 transition-colors duration-300" />

                  {/* Inner bezel */}
                  <div className="relative h-full p-8 bg-slate-800/50 hover:bg-slate-800/70 transition-colors duration-500 rounded-xl">
                    <h3 className="font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400" style={{ fontFamily: 'var(--font-body)' }}>
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof with premium presentation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-slate-300" />
              <p className="text-slate-500 text-sm font-semibold tracking-widest uppercase">
                Proven Results
              </p>
              <div className="w-16 h-px bg-slate-300" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-600" style={{ fontFamily: 'var(--font-body)' }}>
              See how Fortune 500 companies transform their supply chains with MOVVE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1
                }}
                className="group relative"
              >
                {/* Double-bezel */}
                <div className="absolute -inset-0.5 border border-slate-200 rounded-2xl group-hover:border-slate-300 transition-colors duration-300" />

                {/* Inner bezel */}
                <div className="relative h-full p-10 bg-slate-50 hover:bg-slate-100 transition-colors duration-500 rounded-2xl">
                  {/* Quote */}
                  <p className="text-lg text-slate-700 mb-8 italic leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white font-display font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600" style={{ fontFamily: 'var(--font-body)' }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with commanding presence */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Transform Your Supply Chain
            </h2>
            <p className="text-xl text-slate-300 mb-12" style={{ fontFamily: 'var(--font-body)' }}>
              Join 500+ enterprise companies that trust MOVVE with their most critical logistics operations.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="group relative px-10 py-5 bg-white text-slate-900 font-bold text-lg hover:bg-slate-50 transition-colors duration-300 rounded-xl inline-flex items-center gap-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>Request Demo</span>
                <motion.svg
                  className="w-5 h-5"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </Link>
              <Link
                to="/tracking"
                className="px-10 py-5 bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 transition-colors duration-300 rounded-xl border border-slate-700"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Track Shipment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}