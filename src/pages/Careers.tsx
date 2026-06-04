import { motion } from 'framer-motion'

export function Careers() {
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead development of our logistics platform, building scalable solutions for enterprise clients.',
      requirements: ['5+ years experience', 'React/TypeScript expertise', 'Cloud infrastructure'],
    },
    {
      id: 2,
      title: 'Operations Manager',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Oversee day-to-day operations, optimize processes, and lead a team of logistics coordinators.',
      requirements: ['3+ years logistics experience', 'Team management', 'Process optimization'],
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build ML models for route optimization, demand forecasting, and predictive analytics.',
      requirements: ['MS/PhD in relevant field', 'Python/ML expertise', 'Logistics domain knowledge'],
    },
    {
      id: 4,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Ensure enterprise clients achieve their goals, drive adoption, and identify expansion opportunities.',
      requirements: ['3+ years SaaS experience', 'Enterprise client management', 'Technical aptitude'],
    },
  ]

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Top-of-market compensation' },
    { icon: '📈', title: 'Equity Package', description: 'Own a piece of our success' },
    { icon: '🏥', title: 'Health Benefits', description: 'Medical, dental, and vision' },
    { icon: '🌴', title: 'Unlimited PTO', description: 'Work-life balance matters' },
    { icon: '🏠', title: 'Remote-First', description: 'Work from anywhere' },
    { icon: '📚', title: 'Learning Budget', description: '$2,000 yearly allowance' },
    { icon: '🎯', title: 'Performance Bonus', description: 'Annual bonus program' },
    { icon: '🚀', title: 'Growth Opportunities', description: 'Rapid career advancement' },
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
              <span>CAREERS</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Build the Future of Logistics
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join a team that's transforming global supply chains. We're looking for
              passionate individuals who want to make an impact.
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
            <h2 className="text-4xl font-bold text-white mb-4">Benefits</h2>
            <p className="text-xl text-gray-300">
              We take care of our people so they can take care of business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300">
              Find your next opportunity
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-crimson text-white rounded-lg font-semibold hover:bg-crimson/90 transition-colors whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req) => (
                    <span
                      key={req}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-blue-900 to-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for exceptional talent. Send us your resume and
              we'll keep you in mind for future opportunities.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-crimson text-white rounded-sm font-bold text-lg hover:bg-crimson/90 transition-colors"
            >
              Send Resume
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}