import { motion } from 'framer-motion'

export function Services() {
  const services = [
    {
      title: 'International Air Freight',
      description: 'Time-definite cargo solutions with guaranteed capacity on major trade lanes. Express (24-48h), standard (3-5 days), and charter options for urgent shipments.',
      details: 'Non-stop network across 140+ countries',
      features: ['Express and economy options', 'Guaranteed capacity', 'Real-time tracking', 'Temperature-controlled'],
    },
    {
      title: 'Global Ocean Freight',
      description: 'Full-container (FCL) and less-than-container (LCL) services on all major trade routes. Direct carrier partnerships ensure priority booking.',
      details: 'Weekly sailings to 1,200+ ports',
      features: ['FCL and LCL services', 'Priority booking', 'Competitive rates', 'Flexible scheduling'],
    },
    {
      title: 'Dedicated Ground Transport',
      description: 'Full truckload (FTL), less-than-truckload (LTL), and intermodal solutions across North America, Europe, and APAC with GPS visibility.',
      details: '12,000+ GPS-tracked vehicles',
      features: ['FTL and LTL options', 'GPS visibility', 'Multi-modal solutions', 'Express delivery'],
    },
    {
      title: 'Strategic Warehousing',
      description: '150+ strategically located facilities with WMS integration. Cross-docking, pick-and-pack, inventory management, and value-added services.',
      details: '8M+ sq ft across 6 continents',
      features: ['WMS integration', 'Cross-docking', 'Inventory management', 'Value-added services'],
    },
    {
      title: 'Global Customs Brokerage',
      description: 'Licensed brokers in 80+ countries providing classification, documentation, compliance, and automated customs clearance for repeat shipments.',
      details: 'Automated 99% of clearances',
      features: ['Licensed brokers', 'Automated clearance', 'Compliance support', 'Expert documentation'],
    },
    {
      title: 'Supply Chain Intelligence',
      description: 'Real-time dashboards, predictive ETAs, cost analysis, and carbon-footprint tracking. Data-driven decision support for logistics leadership.',
      details: 'Real-time network optimization',
      features: ['Real-time analytics', 'Predictive insights', 'Cost analysis', 'Carbon tracking'],
    },
  ]

  return (
    <>
      <section className="py-space-4xl bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-space-lg flex items-center justify-center gap-space-sm">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent uppercase tracking-wider text-sm font-display font-semibold">
                Services
              </span>
              <div className="w-12 h-px bg-brand-accent"></div>
            </div>

            <h1 className="font-display font-hero font-bold text-brand-surface mb-space-md">
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-xl">
              From air freight to warehousing, we provide end-to-end logistics services that scale with your business needs.
            </p>
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
                transition={{ delay: index * 0.1 }}
                className="p-space-xl border border-brand-border bg-brand-surface/5 hover:border-brand-accent/30 transition-all group"
              >
                <h3 className="font-display text-h2 font-bold text-brand-accent mb-space-md group-hover:text-brand-accent-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-secondary-light text-body text-base leading-relaxed mb-space-lg">
                  {service.description}
                </p>
                <div className="mb-space-lg pb-space-lg border-b border-brand-border">
                  <p className="text-brand-muted text-sm font-semibold uppercase tracking-wider mb-space-xs">
                    Key Features
                  </p>
                  <ul className="space-y-space-xs text-brand-secondary-light text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-space-xs">
                        <span className="text-brand-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-brand-accent text-sm font-display font-semibold mb-space-xs">
                    {service.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-md">
              Need a Custom Solution?
            </h2>
            <p className="text-brand-secondary-light text-body text-xl max-w-3xl mx-auto mb-space-2xl">
              Our team of logistics experts can design a tailored solution that meets your specific business requirements.
            </p>
            <button className="px-space-xl py-space-md bg-brand-accent text-brand-surface font-display font-bold text-lg hover:bg-brand-accent-dark transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </>
  )
}