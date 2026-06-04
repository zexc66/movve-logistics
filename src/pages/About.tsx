import { motion } from 'framer-motion'

export function About() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-brand-primary via-brand-primary-dark to-[#050812]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-brand-accent" />
              <span className="text-brand-accent uppercase tracking-wider text-xs font-display font-semibold">
                About MOVVE
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-brand-accent" />
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-brand-surface mb-8">
              Precision Logistics for the Modern World
            </h1>
            <p className="text-brand-muted font-body text-xl leading-relaxed">
              MOVVE is redefining global logistics with technology, precision, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-brand-primary-dark to-brand-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 rounded-3xl blur-2xl opacity-50" />
              <div className="relative p-10 bg-gradient-to-br from-brand-surface/10 to-brand-surface/5 border border-brand-border/30 rounded-3xl backdrop-blur-sm">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-surface mb-6">
                  Our Mission
                </h2>
                <p className="text-brand-muted font-body text-xl leading-relaxed">
                  To revolutionize the logistics industry through advanced technology and operational excellence, enabling businesses of all sizes to compete globally with confidence and precision.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 rounded-3xl blur-2xl opacity-50" />
              <div className="relative p-10 bg-gradient-to-br from-brand-surface/10 to-brand-surface/5 border border-brand-border/30 rounded-3xl backdrop-blur-sm">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-surface mb-6">
                  Our Vision
                </h2>
                <p className="text-brand-muted font-body text-xl leading-relaxed">
                  To become the world's most trusted logistics partner by delivering unparalleled reliability, innovation, and customer service across every touchpoint of the supply chain.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-surface mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Excellence', description: 'We deliver exceptional quality in every shipment, every interaction, and every solution.', icon: '⭐' },
                { title: 'Innovation', description: 'We leverage cutting-edge technology to solve complex logistics challenges and create value.', icon: '🚀' },
                { title: 'Integrity', description: 'We build trust through transparency, honesty, and ethical business practices.', icon: '💎' },
                { title: 'Partnership', description: 'We succeed when our clients succeed, acting as strategic partners in their growth.', icon: '🤝' },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full p-8 bg-gradient-to-br from-brand-surface/10 to-brand-surface/5 border border-brand-border/30 rounded-xl backdrop-blur-sm hover:border-brand-accent/30 transition-all duration-500">
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-brand-accent mb-4">
                      {value.title}
                    </h3>
                    <p className="text-brand-muted font-body leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 rounded-3xl blur-2xl opacity-50" />
              <div className="relative p-10 bg-gradient-to-br from-brand-surface/10 to-brand-surface/5 border border-brand-border/30 rounded-3xl backdrop-blur-sm">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-surface mb-8">
                  Our Story
                </h2>
                <div className="space-y-6">
                  <p className="text-brand-muted font-body text-xl leading-relaxed">
                    Founded in 2018 by logistics industry veterans, MOVVE emerged from a simple observation: global supply chains were becoming increasingly complex, yet the tools to manage them remained outdated and fragmented.
                  </p>
                  <p className="text-brand-muted font-body text-xl leading-relaxed">
                    We built MOVVE from the ground up with a single focus: creating a logistics platform that combines the scale and reliability of major carriers with the agility and innovation of a technology company.
                  </p>
                  <p className="text-brand-muted font-body text-xl leading-relaxed">
                    Today, we serve over 500 enterprise clients across 140 countries, handling millions of shipments annually with the precision and reliability that our clients depend on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-brand-primary to-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-surface mb-6">
              By the Numbers
            </h2>
            <p className="text-brand-muted font-body text-xl">
              Our impact measured in shipments, destinations, and satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: '500+', label: 'Enterprise Clients' },
              { value: '140+', label: 'Countries Served' },
              { value: '2.4M', label: 'Annual Shipments' },
              { value: '99.3%', label: 'Client Retention' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full p-10 bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 border-2 border-brand-accent/30 rounded-2xl backdrop-blur-sm text-center hover:border-brand-accent/50 transition-all duration-500">
                  <div className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-br from-brand-accent to-brand-accent-light bg-clip-text text-transparent mb-4">
                    {stat.value}
                  </div>
                  <div className="text-brand-muted font-body text-lg font-semibold">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-brand-primary-dark to-[#050812]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-surface mb-8">
              Ready to Experience the MOVVE Difference?
            </h2>
            <p className="text-brand-muted font-body text-xl max-w-3xl mx-auto mb-12">
              Join the forward-thinking companies that trust MOVVE with their most critical logistics operations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 bg-gradient-to-r from-brand-accent to-brand-accent-light text-brand-surface font-display font-bold text-lg hover:shadow-lg hover:shadow-brand-accent/25 transition-all duration-300 rounded-lg flex items-center space-x-2">
                <span>Request a Demo</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="px-10 py-5 bg-gradient-to-r from-brand-surface/10 to-brand-surface/5 border-2 border-brand-border text-brand-surface font-display font-bold text-lg hover:border-brand-accent/30 transition-all duration-300 rounded-lg flex items-center space-x-2">
                <span>Contact Sales</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}