import { motion } from 'framer-motion'

export function Services() {
  const services = [
    {
      icon: '✈️',
      title: 'Air Freight',
      description: 'Time-critical cargo on our global air network. Express (1–2 days), standard (3–5 days), and consolidated services with temperature-controlled options.',
      features: ['Express delivery', 'Temperature controlled', 'Global network', 'Real-time tracking'],
    },
    {
      icon: '🚢',
      title: 'Ocean Freight',
      description: 'FCL and LCL across all major trade lanes. Direct carrier partnerships ensure capacity, competitive rates, and schedule reliability worldwide.',
      features: ['FCL & LCL services', 'Direct carrier access', 'Competitive rates', 'Schedule reliability'],
    },
    {
      icon: '🚛',
      title: 'Ground Transport',
      description: 'FTL, LTL, and intermodal across North America, Europe, and APAC. GPS-tracked fleet with 98.6% on-time delivery performance.',
      features: ['FTL & LTL', 'Intermodal options', 'GPS tracking', '98.6% on-time'],
    },
    {
      icon: '🏭',
      title: 'Warehousing',
      description: '150+ warehouses worldwide with WMS integration. Cross-docking, pick-and-pack, inventory management, and value-added services.',
      features: ['150+ warehouses', 'WMS integration', 'Cross-docking', 'Value-added services'],
    },
    {
      icon: '📋',
      title: 'Customs Brokerage',
      description: 'Licensed brokers in 80+ countries. Classification, documentation, compliance. Automated clearance for repeat shipments.',
      features: ['80+ countries', 'Licensed brokers', 'Automated clearance', 'Compliance expertise'],
    },
    {
      icon: '📊',
      title: 'Supply Chain Analytics',
      description: 'Live dashboards, predictive ETAs, cost analysis, and carbon-footprint tracking. Data-driven decisions for optimal performance.',
      features: ['Live dashboards', 'Predictive ETAs', 'Cost analysis', 'Carbon tracking'],
    },
    {
      icon: '🌡️',
      title: 'Cold Chain Logistics',
      description: 'Temperature-controlled shipping for pharmaceuticals, biologics, and perishables. IoT sensors monitor conditions from origin to delivery.',
      features: ['Temperature controlled', 'IoT monitoring', 'Pharma certified', 'Real-time alerts'],
    },
    {
      icon: '🛒',
      title: 'E-Commerce Fulfillment',
      description: 'D2C and B2B fulfillment with 98.6% SLA adherence. Multi-channel inventory sync, automated pick-pack-ship, and returns management.',
      features: ['D2C & B2B', 'Multi-channel sync', 'Automated processes', 'Returns management'],
    },
    {
      icon: '🏗️',
      title: 'Project Cargo',
      description: 'Oversized, overweight, and complex project shipments. Route surveys, permit management, specialized equipment, and dedicated project managers.',
      features: ['Oversized cargo', 'Route surveys', 'Permit management', 'Dedicated managers'],
    },
  ]

  return (
    <>
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 text-crimson font-semibold text-sm mb-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
                <span className="w-2 h-2 bg-crimson rounded-sm" />
              </div>
              <span>OUR SERVICES</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From origin to final delivery, we handle every link in your supply chain with
              precision and care. Our end-to-end services scale with your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-navy to-blue-900">
        <div className="container mx-auto px-4">
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
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-crimson rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your logistics needs and get a customized
              solution for your business.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-crimson text-white rounded-sm font-bold text-lg hover:bg-crimson/90 transition-colors"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}