import { motion } from 'framer-motion'

export function Careers() {
  const positions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead development of logistics platforms and real-time tracking systems using React, TypeScript, and cloud infrastructure.',
    },
    {
      title: 'Operations Manager',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Oversee daily logistics operations, manage team performance, and optimize delivery routes across global networks.',
    },
    {
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      description: 'Analyze supply chain data, create predictive models, and develop dashboards for logistics optimization.',
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Manage enterprise client relationships, ensure successful onboarding, and drive adoption of logistics solutions.',
    },
  ]

  const benefits = [
    'Competitive salary and equity packages',
    'Comprehensive health, dental, and vision insurance',
    '401(k) with company match',
    'Unlimited PTO and flexible work arrangements',
    'Professional development and learning stipend',
    'Home office setup allowance',
    'Regular team events and company retreats',
    'Parental leave and family support',
  ]

  return (
    <>
      <section className="py-space-4xl bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-space-lg flex items-center justify-center gap-space-sm">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent uppercase tracking-wider text-sm font-display font-semibold">
                Careers
              </span>
              <div className="w-12 h-px bg-brand-accent"></div>
            </div>

            <h1 className="font-display font-hero font-bold text-brand-surface mb-space-md">
              Build the Future of Logistics
            </h1>
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-xl">
              Join a team of innovators solving complex supply chain challenges and transforming global trade.
            </p>
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-gradient-to-b from-brand-primary to-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-space-3xl">
            <div>
              <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-lg">
                Why Work at MOVVE?
              </h2>
              <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-lg">
                We're building technology that powers global commerce. Every team member contributes to solutions that impact millions of shipments worldwide.
              </p>
              <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-xl">
                We believe in hiring exceptional people and giving them the autonomy, resources, and support to do their best work.
              </p>

              <h3 className="font-display text-h2 font-bold text-brand-accent mb-space-md">
                Benefits & Perks
              </h3>
              <ul className="space-y-space-sm">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-space-sm text-brand-secondary-light text-base leading-relaxed">
                    <span className="text-brand-accent mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-h2 font-bold text-brand-surface mb-space-lg">
                Open Positions
              </h3>
              <div className="space-y-space-md">
                {positions.map((position, index) => (
                  <motion.div
                    key={position.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-space-lg border border-brand-border bg-brand-surface/5 hover:border-brand-accent/30 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-space-sm mb-space-md">
                      <h4 className="font-display text-h3 font-bold text-brand-surface">
                        {position.title}
                      </h4>
                      <span className="px-space-sm py-space-xs bg-brand-accent/20 text-brand-accent text-xs font-display font-semibold uppercase tracking-wider">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-space-md mb-space-md text-brand-muted text-sm">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                    </div>
                    <p className="text-brand-secondary-light text-body text-sm leading-relaxed mb-space-md">
                      {position.description}
                    </p>
                    <button className="px-space-lg py-space-sm bg-brand-surface border border-brand-border text-brand-text font-display font-semibold hover:bg-brand-surface-subtle hover:border-brand-accent/30 transition-colors">
                      Apply Now
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-md">
              Don't See the Right Role?
            </h2>
            <p className="text-brand-secondary-light text-body text-xl max-w-3xl mx-auto mb-space-2xl">
              We're always looking for exceptional talent. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <button className="px-space-xl py-space-md bg-brand-accent text-brand-surface font-display font-bold text-lg hover:bg-brand-accent-dark transition-colors">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>
    </>
  )
}