import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icons } from '../components/Icons'

export function Services() {
  const services = [
    {
      icon: Icons.airFreight,
      title: 'International Air Freight',
      description: 'Time-definite cargo solutions with guaranteed capacity on major trade lanes. Express (24-48h), standard (3-5 days), and charter options.',
      capacity: 'Daily flights to 200+ destinations',
      features: ['Express delivery', 'Temperature controlled', 'Global network', 'Real-time tracking'],
      standout: true
    },
    {
      icon: Icons.oceanFreight,
      title: 'Global Ocean Freight',
      description: 'Full-container (FCL) and less-than-container (LCL) services on all major trade routes. Direct carrier partnerships ensure priority booking.',
      capacity: 'Weekly sailings to 1,200+ ports',
      features: ['FCL & LCL services', 'Direct carrier access', 'Competitive rates', 'Schedule reliability'],
      standout: false
    },
    {
      icon: Icons.groundTransport,
      title: 'Dedicated Ground Transport',
      description: 'Full truckload (FTL), less-than-truckload (LTL), and intermodal solutions across North America, Europe, and APAC with GPS visibility.',
      capacity: '12,000+ GPS-tracked vehicles',
      features: ['FTL & LTL', 'Intermodal options', 'GPS tracking', '98.6% on-time'],
      standout: false
    },
    {
      icon: Icons.warehousing,
      title: 'Strategic Warehousing Network',
      description: '150+ strategically located facilities with WMS integration. Cross-docking, pick-and-pack, inventory management, and value-added services.',
      capacity: '8M+ sq ft across 6 continents',
      features: ['150+ warehouses', 'WMS integration', 'Cross-docking', 'Value-added services'],
      standout: false
    },
    {
      icon: Icons.customsBrokerage,
      title: 'Global Customs Brokerage',
      description: 'Licensed brokers in 80+ countries providing classification, documentation, compliance, and automated customs clearance for repeat shipments.',
      capacity: 'Automated 99% of clearances',
      features: ['80+ countries', 'Licensed brokers', 'Automated clearance', 'Compliance expertise'],
      standout: false
    },
    {
      icon: Icons.analytics,
      title: 'Supply Chain Intelligence',
      description: 'Real-time dashboards, predictive ETAs, cost analysis, and carbon-footprint tracking. Data-driven decision support for logistics leadership.',
      capacity: 'Real-time network optimization',
      features: ['Live dashboards', 'Predictive ETAs', 'Cost analysis', 'Carbon tracking'],
      standout: false
    },
    {
      icon: Icons.coldChain,
      title: 'Cold Chain Logistics',
      description: 'Temperature-controlled shipping for pharmaceuticals, biologics, and perishables. IoT sensors monitor conditions from origin to delivery.',
      capacity: '98.9% on-time for cold chain',
      features: ['Temperature controlled', 'IoT monitoring', 'Pharma certified', 'Real-time alerts'],
      standout: false
    },
    {
      icon: Icons.apiPlatform,
      title: 'E-Commerce Fulfillment',
      description: 'D2C and B2B fulfillment with 98.6% SLA adherence. Multi-channel inventory sync, automated pick-pack-ship, and returns management.',
      capacity: '98.6% SLA adherence',
      features: ['D2C & B2B', 'Multi-channel sync', 'Automated processes', 'Returns management'],
      standout: false
    },
    {
      icon: Icons.apiPlatform,
      title: 'Project Cargo & Heavy Haul',
      description: 'Oversized, overweight, and complex project shipments. Route surveys, permit management, specialized equipment, and dedicated project managers.',
      capacity: 'Specialized equipment network',
      features: ['Oversized cargo', 'Route surveys', 'Permit management', 'Dedicated managers'],
      standout: false
    },
  ]

  return (
    <>
      <section className="py-space-4xl bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-space-lg flex items-center gap-space-sm">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent uppercase tracking-wider text-sm font-display font-semibold">
                Our Services
              </span>
              <div className="w-12 h-px bg-brand-accent"></div>
            </div>
            
            <h1 className="font-display font-hero font-bold text-brand-surface mb-space-md">
              End-to-end logistics solutions
            </h1>
            
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-xl">
              From origin to final delivery, we handle every link in your supply chain with
              precision and care. Our services scale with your business requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-space-md">
              <Link
                to="/contact"
                className="px-space-xl py-space-md bg-brand-accent text-brand-surface font-display font-bold text-lg hover:bg-brand-accent-dark transition-colors shadow-commanding"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-gradient-to-b from-brand-primary to-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`p-space-lg border ${
                  service.standout
                    ? 'border-2 border-brand-accent bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 lg:col-span-2 grid-cols-2'
                    : 'border-brand-border/50'
                } relative group`}
              >
                <div className="flex items-center gap-space-md mb-space-md">
                  <div className="w-16 h-16 bg-brand-surface flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-h3 font-bold text-brand-surface mb-1">
                      {service.title}
                    </h3>
                    <p className="text-brand-muted text-xs font-semibold uppercase tracking-wider">
                      {service.capacity}
                    </p>
                  </div>
                </div>
                
                <p className="text-brand-secondary-light text-body leading-relaxed mb-space-md">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-space-sm">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-space-sm py-space-xs bg-brand-surface/50 border border-brand-border text-brand-text text-xs font-semibold">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Link
                  to="/services"
                  className="mt-space-md inline-flex items-center gap-space-sm text-brand-accent font-display font-semibold group-hover:gap-space-lg transition-all"
                >
                  Learn More
                  <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-brand-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-h1 font-bold text-brand-surface mb-space-md">
              Ready to optimize your logistics operations?
            </h2>
            <p className="text-brand-secondary-light text-body text-xl mb-space-2xl">
              Contact our team to discuss your requirements and receive a customized
              solution for your business needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-space-xl py-space-md bg-brand-accent text-brand-surface font-display font-bold text-lg hover:bg-brand-accent-dark transition-colors shadow-commanding"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}