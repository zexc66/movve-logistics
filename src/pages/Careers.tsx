import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icons } from '../components/Icons'

export function Careers() {
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead development of our logistics platform, building scalable solutions for enterprise clients. Handle complex distributed systems and real-time data processing.',
      requirements: ['5+ years experience', 'React/TypeScript expertise', 'Cloud infrastructure', 'Distributed systems'],
      benefits: ['$200K-250K base salary', '0.25% equity stake', 'Remote-first culture', 'Unlimited PTO'],
      standout: true,
    },
    {
      id: 2,
      title: 'Operations Manager',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Oversee day-to-day logistics operations, optimize processes, and lead a team of logistics coordinators. Drive operational excellence and customer satisfaction.',
      requirements: ['3+ years logistics experience', 'Team management', 'Process optimization', 'Data analysis'],
      benefits: ['$180K-220K base salary', '0.20% equity stake', 'Performance bonuses', 'Health benefits'],
      standout: false,
    },
    {
      id: 3,
      title: 'Data Scientist - Logistics',
      department: 'Data Science',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build ML models for route optimization, demand forecasting, and predictive analytics. Work directly with operations team to implement data-driven improvements.',
      requirements: ['MS/PhD in relevant field', 'Python/ML expertise', 'Logistics domain knowledge', 'SQL proficiency'],
      benefits: ['$220K-280K base salary', '0.25% equity stake', 'Conference budget', 'Research time'],
      standout: false,
    },
    {
      id: 4,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Ensure enterprise clients achieve their goals, drive adoption, and identify expansion opportunities. Manage client relationships and strategic partnerships.',
      requirements: ['3+ years SaaS experience', 'Enterprise client management', 'Technical aptitude', 'Communication skills'],
      benefits: ['$150K-200K base salary', '0.15% equity stake', 'Travel budget', 'Career growth'],
      standout: false,
    },
  ]

  const benefits = [
    { icon: Icons.threeBar, title: 'Equity Stake', description: 'Own a piece of our success with significant equity participation' },
    { icon: Icons.enterpriseSecurity, title: 'Premium Benefits', description: 'Health, dental, vision, 401k, performance bonuses' },
    { icon: Icons.apiPlatform, title: 'Remote-First Culture', description: 'Work from anywhere with flexible hours and async-first communication' },
    { icon: Icons.analytics, title: 'Growth Opportunities', description: 'Rapid career advancement with training and mentorship programs' },
  ]

  return (
    <>
      <section className="py-space-4xl bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-space-lg flex items-center gap-space-sm">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent uppercase tracking-wider text-sm font-display font-semibold">
                Careers
              </span>
              <div className="w-12 hpx bg-brand-accent"></div>
            </div>

            <h1 className="font-display font-hero font-bold text-brand-surface mb-space-md">
              Build the Future of Logistics
            </h1>
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-xl">
              Join a team that's transforming global supply chains. We're looking for
              passionate individuals who want to make measurable impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-gradient-to-b from-brand-primary to-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-space-md border border-brand-border/50 bg-brand-primary/30 text-center"
              >
                <div className="w-12 h-12 bg-brand-surface flex items-center justify-center text-brand-accent mx-auto mb-space-md">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-h3 font-bold text-brand-surface mb-2">
                  {benefit.title}
                </h3>
                <p className="text-brand-secondary-light text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-space-3xl">
            <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-md">
              Open Positions
            </h2>
            <p className="text-brand-secondary-light text-body text-xl max-w-3xl mx-auto">
              Join our team and help shape the future of global logistics
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-space-lg">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`p-space-xl border ${
                  job.standout
                    ? 'border-2 border-brand-accent bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 lg:col-span-2 grid-cols-2 gap-space-lg items-center'
                    : 'border border-brand-border/50'
                } relative`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-space-sm mb-space-md">
                    <span className="text-brand-accent text-sm font-semibold uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="text-brand-muted text-sm">
                      {job.location}
                    </span>
                    <span className="px-space-sm py-space-xs bg-brand-surface/50 text-brand-text text-xs font-semibold">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-display text-h2 font-bold text-brand-surface mb-space-md">
                    {job.title}
                  </h3>
                  <p className="text-brand-secondary-light text-body text-base leading-relaxed mb-space-lg">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-space-sm mb-space-lg">
                    {job.requirements.map((req) => (
                      <span
                        key={req}
                        className="px-space-sm py-space-xs bg-brand-surface/50 border border-brand-border text-brand-text text-sm"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-left">
                  <div className="mb-space-md">
                    <p className="text-brand-accent font-display text-sm font-semibold uppercase tracking-wider mb-2">
                      Compensation
                    </p>
                    {job.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-space-sm text-brand-secondary text-sm mb-1">
                        <span className="w-1 h-1 bg-brand-success rounded-full"></span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-block px-space-xl py-space-md bg-brand-accent text-brand-surface font-display font-bold hover:bg-brand-accent-dark transition-colors shadow-commanding"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-gradient-to-b from-brand-primary-dark to-[#050812]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-md">
            Not Finding the Right Role?
          </h2>
          <p className="text-brand-secondary-light text-body text-xl mb-space-2xl">
            We're always looking for exceptional talent. Send us your resume and
            we'll keep you in mind for future opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-space-md">
            <Link
              to="/contact"
              className="px-space-xl py-space-md bg-brand-surface text-brand-primary border-2 border-brand-border font-display font-bold text-lg hover:border-brand-accent hover:text-brand-accent transition-colors"
            >
              Submit Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}