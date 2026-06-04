import { motion } from 'framer-motion'

export function About() {
  return (
    <>
      <section className="py-space-4xl bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-space-lg flex items-center justify-center gap-space-sm">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent uppercase tracking-wider text-sm font-display font-semibold">
                About MOVVE
              </span>
              <div className="w-12 h-px bg-brand-accent"></div>
            </div>

            <h1 className="font-display font-hero font-bold text-brand-surface mb-space-md">
              Precision Logistics for the Modern World
            </h1>
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-xl">
              MOVVE is redefining global logistics with technology, precision, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-gradient-to-b from-brand-primary to-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-space-3xl">
            <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-lg">
              Our Mission
            </h2>
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed">
              To revolutionize the logistics industry through advanced technology and operational excellence, enabling businesses of all sizes to compete globally with confidence and precision.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-space-3xl">
            <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-lg">
              Our Vision
            </h2>
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed">
              To become the world's most trusted logistics partner by delivering unparalleled reliability, innovation, and customer service across every touchpoint of the supply chain.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-space-3xl">
            <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-lg">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-space-lg">
              <div className="p-space-lg border border-brand-border bg-brand-surface">
                <h3 className="font-display text-h3 font-bold text-brand-accent mb-space-md">
                  Excellence
                </h3>
                <p className="text-brand-secondary-light text-body">
                  We deliver exceptional quality in every shipment, every interaction, and every solution.
                </p>
              </div>

              <div className="p-space-lg border border-brand-border bg-brand-surface">
                <h3 className="font-display text-h3 font-bold text-brand-accent mb-space-md">
                  Innovation
                </h3>
                <p className="text-brand-secondary-light text-body">
                  We leverage cutting-edge technology to solve complex logistics challenges and create value.
                </p>
              </div>

              <div className="p-space-lg border border-brand-border bg-brand-surface">
                <h3 className="font-display text-h3 font-bold text-brand-accent mb-space-md">
                  Integrity
                </h3>
                <p className="text-brand-secondary-light text-body">
                  We build trust through transparency, honesty, and ethical business practices.
                </p>
              </div>

              <div className="p-space-lg border border-brand-border bg-brand-surface">
                <h3 className="font-display text-h3 font-bold text-brand-accent mb-space-md">
                  Partnership
                </h3>
                <p className="text-brand-secondary-light text-body">
                  We succeed when our clients succeed, acting as strategic partners in their growth.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-space-3xl">
            <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-lg">
              Our Story
            </h2>
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-lg">
              Founded in 2018 by logistics industry veterans, MOVVE emerged from a simple observation: global supply chains were becoming increasingly complex, yet the tools to manage them remained outdated and fragmented.
            </p>
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-lg">
              We built MOVVE from the ground up with a single focus: creating a logistics platform that combines the scale and reliability of major carriers with the agility and innovation of a technology company.
            </p>
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed">
              Today, we serve over 500 enterprise clients across 140 countries, handling millions of shipments annually with the precision and reliability that our clients depend on.
            </p>
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-space-3xl">
            <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-md">
              By the Numbers
            </h2>
            <p className="text-brand-secondary-light text-body text-xl">
              Our impact measured in shipments, destinations, and satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-space-lg max-w-5xl mx-auto">
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
                className="p-space-xl border-2 border-brand-accent bg-brand-accent/5 text-center"
              >
                <div className="font-display font-hero font-bold text-brand-accent mb-space-sm">
                  {stat.value}
                </div>
                <div className="text-brand-surface text-body font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-gradient-to-b from-brand-primary-dark to-[#050812]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-md">
            Ready to Experience the MOVVE Difference?
          </h2>
          <p className="text-brand-secondary-light text-body text-xl max-w-3xl mx-auto mb-space-2xl">
            Join the forward-thinking companies that trust MOVVE with their most critical logistics operations.
          </p>
          <div className="flex flex-wrap justify-center gap-space-md">
            <button className="px-space-xl py-space-md bg-brand-accent text-brand-surface font-display font-bold text-lg hover:bg-brand-accent-dark transition-colors">
              Request a Demo
            </button>
            <button className="px-space-xl py-space-md bg-brand-surface/10 border-2 border-brand-border text-brand-text font-display font-bold text-lg hover:bg-brand-surface transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </>
  )
}