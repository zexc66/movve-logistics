import { motion } from 'framer-motion'
import { Icons } from '../components/Icons'

export function About() {
  const values = [
    {
      icon: Icons.analytics,
      title: 'Precision First',
      description: 'Every shipment tracked, every route optimized, every deadline met. Precision is not optional.',
    },
    {
      icon: Icons.threeBar,
      title: 'Partnership Model',
      description: 'We succeed when you succeed. Long-term relationships built on trust and mutual growth.',
    },
    {
      icon: Icons.apiPlatform,
      title: 'Global Scale',
      description: '140+ countries, 24/7 operations, enterprise infrastructure worldwide.',
    },
    {
      icon: Icons.enterpriseSecurity,
      title: 'Innovation Focus',
      description: 'AI-powered routing, real-time visibility, predictive analytics, continuous optimization.',
    },
  ]

  const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', credentials: 'Stanford MBA, 20yr logistics', image: 'AC' },
    { name: 'Sarah Martinez', role: 'COO', credentials: 'MIT Sloan, 15yr operations', image: 'SM' },
    { name: 'James Wilson', role: 'CTO', credentials: 'CMU CS PhD, 18yr tech', image: 'JW' },
    { name: 'Emily Zhang', role: 'VP of Operations', credentials: 'HBS MBA, 12yr ops', image: 'EZ' },
  ]

  return (
    <>
      <section className="py-space-4xl bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-space-lg flex items-center gap-space-sm">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent uppercase tracking-wider text-sm font-display font-semibold">
                About MOVVE
              </span>
              <div className="w-12 h-px bg-brand-accent"></div>
            </div>
            
            <h1 className="font-display font-hero font-bold text-brand-surface mb-space-md">
              The Power Of Precision
            </h1>
            
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-xl">
              Founded in 2020, MOVVE emerged from one insight: modern enterprises need logistics
              that move as fast as their business. We combine AI-powered technology with global
              infrastructure to deliver precision at every waypoint.
            </p>
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-gradient-to-b from-brand-primary to-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-space-3xl">
            <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-md">
              Our Values
            </h2>
            <p className="text-brand-secondary-light text-body text-xl">
              The principles that guide every operation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-brand-surface flex items-center justify-center text-brand-accent mx-auto mb-space-md">
                  {value.icon}
                </div>
                <h3 className="font-display text-h3 font-bold text-brand-surface mb-space-sm">
                  {value.title}
                </h3>
                <p className="text-brand-secondary-light text-body">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-space-3xl items-center">
            <div>
              <div className="mb-space-lg">
                <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-md">
                  Leadership Team
                </h2>
                <p className="text-brand-secondary-light text-body text-xl leading-relaxed">
                  Experienced leaders driving logistics innovation and operational excellence.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-space-lg">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-space-lg border border-brand-border/50 bg-brand-primary/30"
                  >
                    <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center text-brand-surface font-display font-bold text-xl mx-auto mb-space-md">
                      {member.image}
                    </div>
                    <h3 className="font-display text-h3 font-bold text-brand-surface mb-1">
                      {member.name}
                    </h3>
                    <p className="text-brand-secondary text-sm font-semibold mb-space-sm">
                      {member.role}
                    </p>
                    <p className="text-brand-muted text-xs">
                      {member.credentials}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              <div className="col-span-2">
                <div className="text-brand-accent font-display font-hero font-bold text-h1 mb-space-sm">
                  $47B
                </div>
                <div className="text-brand-secondary text-sm uppercase tracking-wider">
                  Annual Revenue
                </div>
              </div>
              <div>
                <div className="text-brand-surface font-display text-h1 font-bold mb-space-sm">
                  500+
                </div>
                <div className="text-brand-secondary text-sm uppercase tracking-wider">
                  Enterprise Clients
                </div>
              </div>
              <div>
                <div className="text-brand-surface font-display text-h1 font-bold mb-space-sm">
                  1,200+
                </div>
                <div className="text-brand-secondary text-sm uppercase tracking-wider">
                  Team Members
                </div>
              </div>
              <div>
                <div className="text-brand-surface font-display text-h1 font-bold mb-space-sm">
                  12
                </div>
                <div className="text-brand-secondary text-sm uppercase tracking-wider">
                  Global Offices
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}