import { motion } from 'framer-motion'

export function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Logistics: Predictive Analytics Revolution',
      excerpt: 'How machine learning is transforming supply chain management with predictive analytics, demand forecasting, and intelligent routing.',
      date: 'May 15, 2026',
      category: 'Technology',
      readTime: '8 min read',
      image: '🤖',
    },
    {
      id: 2,
      title: 'Sustainable Logistics: Building a Greener Supply Chain',
      excerpt: 'Exploring carbon footprint tracking, offset programs, and eco-friendly practices that are reshaping the logistics industry.',
      date: 'May 10, 2026',
      category: 'Sustainability',
      readTime: '6 min read',
      image: '🌱',
    },
    {
      id: 3,
      title: 'Cold Chain Logistics: Best Practices for Temperature-Sensitive Shipments',
      excerpt: 'Essential strategies for maintaining product integrity in pharmaceutical and food supply chains with IoT monitoring.',
      date: 'May 5, 2026',
      category: 'Operations',
      readTime: '10 min read',
      image: '🌡️',
    },
    {
      id: 4,
      title: 'Global Trade Update: Navigating New Regulations in 2026',
      excerpt: 'A comprehensive guide to the latest customs regulations, trade agreements, and compliance requirements affecting global logistics.',
      date: 'April 28, 2026',
      category: 'Industry',
      readTime: '12 min read',
      image: '🌍',
    },
    {
      id: 5,
      title: 'Building Resilient Supply Chains: Lessons from Recent Disruptions',
      excerpt: 'Key takeaways from recent global events and how companies can build more resilient, flexible supply chain networks.',
      date: 'April 20, 2026',
      category: 'Strategy',
      readTime: '7 min read',
      image: '🛡️',
    },
    {
      id: 6,
      title: 'E-Commerce Fulfillment: Meeting Rising Customer Expectations',
      excerpt: 'How modern logistics providers are adapting to the demands of online retail with faster delivery and real-time tracking.',
      date: 'April 15, 2026',
      category: 'E-Commerce',
      readTime: '9 min read',
      image: '📦',
    },
  ]

  const categories = [
    { name: 'All', count: 24 },
    { name: 'Technology', count: 8 },
    { name: 'Sustainability', count: 5 },
    { name: 'Operations', count: 4 },
    { name: 'Industry', count: 3 },
    { name: 'Strategy', count: 2 },
    { name: 'E-Commerce', count: 2 },
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
              <span>BLOG</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Logistics Insights & Trends
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay informed with the latest industry news, expert analysis, and
              actionable insights from our logistics experts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-navy to-blue-900">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sticky top-24"
              >
                <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="w-full flex justify-between items-center px-4 py-3 bg-white/5 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors text-left"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </aside>

            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-crimson/20 to-blue-900/20 flex items-center justify-center text-6xl">
                      {post.image}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-sm">
                        <span className="px-3 py-1 bg-crimson/20 text-crimson rounded-full font-semibold">
                          {post.category}
                        </span>
                        <span className="text-gray-400">{post.date}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-crimson transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-crimson font-semibold group-hover:gap-3 transition-all"
                      >
                        Read More →
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  Load More Posts
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest logistics insights delivered to your inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crimson"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-crimson text-white rounded-lg font-bold hover:bg-crimson/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}