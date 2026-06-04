import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Icons } from '../components/Icons'

export function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Logistics: Predictive Analytics Revolution',
      excerpt: 'How machine learning is transforming supply chain management with predictive analytics, demand forecasting, and intelligent routing.',
      date: 'May 15, 2026',
      category: 'Technology',
      readTime: '8 min read',
      icon: Icons.aiRouting,
      metrics: '2,400 reads',
    },
    {
      id: 2,
      title: 'Sustainable Logistics: Building a Greener Supply Chain',
      excerpt: 'Exploring carbon footprint tracking, offset programs, and eco-friendly practices that are reshaping the logistics industry.',
      date: 'May 10, 2026',
      category: 'Sustainability',
      readTime: '6 min read',
      icon: Icons.sustainability,
      metrics: '1,800 reads',
    },
    {
      id: 3,
      title: 'Cold Chain Logistics: Best Practices for Temperature-Sensitive Shipments',
      excerpt: 'Essential strategies for maintaining product integrity in pharmaceutical and food supply chains with IoT monitoring.',
      date: 'May 5, 2026',
      category: 'Operations',
      readTime: '10 min read',
      icon: Icons.coldChain,
      metrics: '3,200 reads',
    },
    {
      id: 4,
      title: 'Global Trade Update: Navigating New Regulations in 2026',
      excerpt: 'A comprehensive guide to the latest customs regulations, trade agreements, and compliance requirements affecting global logistics.',
      date: 'April 28, 2026',
      category: 'Industry',
      readTime: '12 min read',
      icon: Icons.customsBrokerage,
      metrics: '2,600 reads',
    },
    {
      id: 5,
      title: 'Building Resilient Supply Chains: Lessons from Recent Disruptions',
      excerpt: 'Key takeaways from recent global events and how companies can build more resilient supply chain networks.',
      date: 'April 20, 2026',
      category: 'Strategy',
      readTime: '7 min read',
      icon: Icons.enterpriseSecurity,
      metrics: '1,900 reads',
    },
    {
      id: 6,
      title: 'E-Commerce Fulfillment: Meeting Rising Customer Expectations',
      excerpt: 'How modern logistics providers are adapting to the demands of online retail with faster delivery and real-time tracking.',
      date: 'April 15, 2026',
      category: 'E-Commerce',
      readTime: '9 min read',
      icon: Icons.apiPlatform,
      metrics: '3,500 reads',
    },
  ]

  const categories = [
    { name: 'All', count: 48, icon: null },
    { name: 'Technology', count: 12, icon: Icons.aiRouting },
    { name: 'Sustainability', count: 8, icon: Icons.sustainability },
    { name: 'Operations', count: 8, icon: Icons.groundTransport },
    { name: 'Industry', count: 6, icon: Icons.analytics },
    { name: 'Strategy', count: 4, icon: Icons.threeBar },
    { name: 'E-Commerce', count: 6, icon: Icons.apiPlatform },
  ]

  return (
    <>
      <section className="py-space-4xl bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-space-lg flex items-center gap-space-sm">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent uppercase tracking-wider text-sm font-display font-semibold">
                Insights
              </span>
              <div className="w-12 h-px bg-brand-accent"></div>
            </div>

            <h1 className="font-display font-hero font-bold text-brand-surface mb-space-md">
              Logistics Intelligence & Trends
            </h1>
            <p className="text-brand-secondary-light text-body text-xl leading-relaxed mb-space-xl">
              Stay informed with the latest industry news, expert analysis, and
              actionable insights from our logistics experts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-gradient-to-b from-brand-primary to-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-4 gap-space-3xl">
            <aside className="lg:col-span-1">
              <div className="sticky top-24 p-space-xl border border-brand-border/50 bg-brand-primary/30">
                <h3 className="font-display text-h3 font-bold text-brand-surface mb-space-lg">
                  Categories
                </h3>
                <div className="space-y-space-sm">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="w-full flex justify-between items-center px-space-md py-space-sm bg-brand-surface/5 border border-brand-border text-brand-text hover:bg-brand-surface hover:border-brand-accent/30 hover:text-brand-accent transition-all text-left group"
                    >
                      <div className="flex items-center gap-space-sm">
                        {category.icon && (
                          <span className="w-6 h-6 flex items-center justify-center text-brand-accent">
                            {category.icon}
                          </span>
                        )}
                        <span>{category.name}</span>
                      </div>
                      <span className="text-brand-muted text-sm">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-space-lg">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-brand-border/50 bg-brand-primary/30 p-space-xl hover:border-brand-accent/30 transition-all group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 flex items-center justify-center text-brand-accent text-6xl mb-space-md">
                      {post.icon}
                    </div>
                    <div className="flex items-center gap-space-sm mb-space-md text-brand-muted text-sm">
                      <span className="px-space-sm py-space-xs bg-brand-accent/20 text-brand-surface font-semibold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.metrics} reads</span>
                    </div>
                    <h3 className="font-display text-h2 font-bold text-brand-surface mb-space-md group-hover:text-brand-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-brand-secondary-light text-body text-sm leading-relaxed mb-space-md">
                      {post.excerpt}
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-space-sm text-brand-accent font-display font-semibold group-hover:gap-space-lg transition-all"
                    >
                      Read Full Article
                      <span>→</span>
                    </Link>
                  </motion.article>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-space-xl"
              >
                <button className="px-space-xl py-space-md bg-brand-surface/10 border border-brand-border text-brand-text font-display font-semibold hover:bg-brand-surface hover:border-brand-accent/30 transition-colors">
                  Load More Articles
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-space-4xl bg-brand-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-h1 font-bold text-brand-surface mb-space-md">
              Subscribe to Intelligence Updates
            </h2>
            <p className="text-brand-secondary-light text-body text-xl mb-space-2xl">
              Get the latest logistics insights delivered to your inbox weekly.
            </p>

            <form className="flex flex-col sm:flex-row gap-space-sm max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-space-lg py-space-md bg-brand-surface border-2 border-brand-border text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-space-xl py-space-md bg-brand-accent text-brand-surface font-display font-bold hover:bg-brand-accent-dark transition-colors shadow-commanding"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}