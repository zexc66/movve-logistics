import { motion } from 'framer-motion'

export function Services() {
  const services = [
    {
      title: 'International Air Freight',
      description: 'Time-definite cargo solutions with guaranteed capacity on major trade lanes. Express (24-48h), standard (3-5 days), and charter options for urgent shipments.',
      details: 'Non-stop network across 140+ countries',
      metrics: ['99.2% on-time', 'Express delivery', 'Priority capacity'],
    },
    {
      title: 'Global Ocean Freight',
      description: 'Full-container (FCL) and less-than-container (LCL) services on all major trade routes. Direct carrier partnerships ensure priority booking and competitive rates.',
      details: 'Weekly sailings to 1,200+ ports',
      metrics: ['Cost-effective', 'Flexible scheduling', 'Priority booking'],
    },
    {
      title: 'Dedicated Ground Transport',
      description: 'Full truckload (FTL), less-than-truckload (LTL), and intermodal solutions across North America, Europe, and APAC with GPS visibility and real-time tracking.',
      details: '12,000+ GPS-tracked vehicles',
      metrics: ['Real-time tracking', 'Multi-modal', 'Wide coverage'],
    },
    {
      title: 'Strategic Warehousing Network',
      description: '150+ strategically located facilities with WMS integration. Cross-docking, pick-and-pack, inventory management, and value-added services across 6 continents.',
      details: '8M+ sq ft across 6 continents',
      metrics: ['WMS integrated', 'Cross-docking', 'Global network'],
    },
    {
      title: 'Global Customs Brokerage',
      description: 'Licensed brokers in 80+ countries providing classification, documentation, compliance, and automated customs clearance for repeat shipments with 99% automation.',
      details: 'Automated 99% of clearances',
      metrics: ['Global compliance', 'Automated clearance', 'Expert documentation'],
    },
    {
      title: 'Supply Chain Intelligence',
      description: 'Real-time dashboards, predictive ETAs, cost analysis, and carbon-footprint tracking. Data-driven decision support for logistics leadership with actionable insights.',
      details: 'Real-time network optimization',
      metrics: ['Predictive analytics', 'Real-time data', 'Cost optimization'],
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              From origin to final delivery, we handle every link in your supply chain with precision and care.
              Our end-to-end services scale with your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 p-10 hover:border-slate-300 transition-colors"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="mb-8 pb-8 border-b border-slate-100">
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    Key Metrics
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {service.metrics.map((metric) => (
                      <div key={metric}>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                          Performance
                        </p>
                        <p className="text-sm font-medium text-slate-700">
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Network Scale
                    </p>
                    <p className="text-sm font-semibold text-slate-700">
                      {service.details}
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors rounded-lg">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Excellence */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for Enterprise Operations
            </h2>
            <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto">
              Our services are designed for the complexity and scale of enterprise supply chains,
              with the precision and reliability that mission-critical operations demand.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Scalability',
                  description: 'From startup to Fortune 500, our infrastructure grows with your business',
                },
                {
                  title: 'Reliability',
                  description: '99.3% on-time delivery across all service lines with transparent tracking',
                },
                {
                  title: 'Integration',
                  description: 'Seamless ERP/WMS integration with 500+ enterprise system connectors',
                },
              ].map((benefit) => (
                <div key={benefit.title} className="bg-slate-800 p-8 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Our team of logistics experts can design a tailored solution that meets your
              specific business requirements and operational needs.
            </p>
            <button className="px-10 py-5 bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-colors rounded-lg inline-flex items-center gap-2">
              <span>Contact Our Team</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}