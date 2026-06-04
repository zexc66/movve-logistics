import { motion } from 'framer-motion'

export function Careers() {
  const positions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead development of logistics platforms and real-time tracking systems using React, TypeScript, and cloud infrastructure. Build solutions that power millions of shipments.',
    },
    {
      title: 'Operations Manager',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Oversee daily logistics operations, manage team performance, and optimize delivery routes across global networks. Drive operational excellence.',
    },
    {
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      description: 'Analyze supply chain data, create predictive models, and develop dashboards for logistics optimization. Turn data into actionable insights.',
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Manage enterprise client relationships, ensure successful onboarding, and drive adoption of logistics solutions. Be the face of MOVVE.',
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
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Build the Future of Logistics
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Join a team of innovators solving complex supply chain challenges and transforming global trade.
              Every team member contributes to solutions that impact millions of shipments worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Why MOVVE */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Why Work at MOVVE?
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
                <p>
                  We're building technology that powers global commerce. Every team member contributes
                  to solutions that impact millions of shipments worldwide.
                </p>
                <p>
                  We believe in hiring exceptional people and giving them the autonomy, resources, and
                  support to do their best work. Your ideas matter here.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Benefits & Perks
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 flex-shrink-0 mt-1 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Open Positions
              </h3>
              <div className="space-y-6">
                {positions.map((position, index) => (
                  <motion.div
                    key={position.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-slate-200 p-8 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                      <h4 className="text-xl font-bold text-slate-900">
                        {position.title}
                      </h4>
                      <span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {position.description}
                    </p>
                    <button className="w-full px-8 py-4 bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors rounded-lg">
                      Apply Now
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto">
              We're building more than a company—we're building a community of innovators who believe
              logistics should be seamless, reliable, and sustainable.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation First',
                  description: 'We encourage experimentation and celebrate learning. Every idea is welcome, and failure is just data.',
                },
                {
                  title: 'Customer Obsessed',
                  description: 'Our clients\' success is our success. We go above and beyond to deliver exceptional experiences.',
                },
                {
                  title: 'Growth Mindset',
                  description: 'We believe in continuous improvement—for ourselves, our products, and our industry.',
                },
              ].map((value) => (
                <div key={value.title} className="bg-slate-800 p-8 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and let us know how you
              can contribute to our mission.
            </p>
            <button className="px-10 py-5 bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-colors rounded-lg inline-flex items-center gap-2">
              <span>Submit Your Resume</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}