import { motion } from 'framer-motion'

export function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Precision First',
      description: 'Every shipment tracked, every route optimized, every deadline met.',
    },
    {
      icon: '🤝',
      title: 'Partnership Model',
      description: 'We succeed when you succeed. Long-term relationships built on trust.',
    },
    {
      icon: '🌍',
      title: 'Global Scale',
      description: '140+ countries, 24/7 operations, enterprise infrastructure worldwide.',
    },
    {
      icon: '🚀',
      title: 'Innovation Focus',
      description: 'AI-powered routing, real-time visibility, predictive analytics.',
    },
  ]

  const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', image: 'AC' },
    { name: 'Sarah Martinez', role: 'COO', image: 'SM' },
    { name: 'James Wilson', role: 'CTO', image: 'JW' },
    { name: 'Emily Zhang', role: 'VP of Operations', image: 'EZ' },
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
              <span>ABOUT MOVVE</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              The Power Of Precision
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded in 2020, MOVVE emerged from a simple insight: modern enterprises
              need logistics that move as fast as their business. We combine AI-powered
              technology with global infrastructure to deliver precision at every waypoint.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-navy to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-crimson/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300">
              Experienced leaders driving logistics innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-crimson rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-blue-900 to-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                By The Numbers
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                { value: '2.4M+', label: 'Shipments/Year' },
                { value: '98.6%', label: 'On-Time Delivery' },
                { value: '140+', label: 'Countries' },
                { value: '500+', label: 'Enterprise Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-crimson mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}