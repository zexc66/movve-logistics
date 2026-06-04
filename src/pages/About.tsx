import { motion } from 'framer-motion'

export function About() {
  return (
    <>
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Precision Logistics for the Modern World
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              MOVVE is redefining global logistics with technology, precision, and unwavering
              commitment to excellence. We transform complexity into operational advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              To revolutionize the logistics industry through advanced technology and operational
              excellence, enabling businesses of all sizes to compete globally with confidence
              and precision. We believe supply chains should be competitive advantages, not
              operational burdens.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              To become the world's most trusted logistics partner by delivering unparalleled
              reliability, innovation, and customer service across every touchpoint of the
              supply chain. We envision a future where logistics infrastructure is as
              reliable and consistent as electricity.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-300">
              The principles that guide every decision we make and every shipment we handle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We deliver exceptional quality in every shipment, every interaction, and every solution. Good enough is never good enough.',
              },
              {
                title: 'Innovation',
                description: 'We leverage cutting-edge technology to solve complex logistics challenges and create value for our clients. We invent, not just improve.',
              },
              {
                title: 'Integrity',
                description: 'We build trust through transparency, honesty, and ethical business practices. Our word is our bond, and our track record is our resume.',
              },
              {
                title: 'Partnership',
                description: 'We succeed when our clients succeed, acting as strategic partners in their growth. Your challenges become our challenges.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 p-10 border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Our Story
            </h2>
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded in 2018 by logistics industry veterans, MOVVE emerged from a simple observation:
                global supply chains were becoming increasingly complex, yet the tools to manage them
                remained outdated and fragmented.
              </p>
              <p>
                We built MOVVE from the ground up with a single focus: creating a logistics platform
                that combines the scale and reliability of major carriers with the agility and innovation
                of a technology company. We questioned every assumption and reinvented every process.
              </p>
              <p>
                Today, we serve over 500 enterprise clients across 140 countries, handling millions
                of shipments annually with the precision and reliability that our clients depend on.
                But our journey is just beginning. The future of logistics is still being written,
                and we're writing it one shipment at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              By the Numbers
            </h2>
            <p className="text-xl text-slate-600">
              Our impact measured in shipments, destinations, and satisfied clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Enterprise Clients' },
              { value: '140+', label: 'Countries Served' },
              { value: '2.4M', label: 'Annual Shipments' },
              { value: '99.3%', label: 'Client Retention' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-10 border border-slate-200 text-center">
                <div className="text-5xl font-bold text-slate-900 mb-4">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the MOVVE Difference?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Join the forward-thinking companies that trust MOVVE with their most critical logistics operations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-white text-slate-900 font-bold text-lg hover:bg-slate-50 transition-colors rounded-lg inline-flex items-center gap-2">
              <span>Request a Demo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="px-10 py-5 bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 transition-colors rounded-lg inline-flex items-center gap-2">
              <span>Contact Sales</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}