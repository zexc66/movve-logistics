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
      metrics: '2,400 reads',
    },
    {
      id: 2,
      title: 'Sustainable Logistics: Building a Greener Supply Chain',
      excerpt: 'Exploring carbon footprint tracking, offset programs, and eco-friendly practices that are reshaping the logistics industry.',
      date: 'May 10, 2026',
      category: 'Sustainability',
      readTime: '6 min read',
      metrics: '1,800 reads',
    },
    {
      id: 3,
      title: 'Cold Chain Logistics: Best Practices for Temperature-Sensitive Shipments',
      excerpt: 'Essential strategies for maintaining product integrity in pharmaceutical and food supply chains with IoT monitoring.',
      date: 'May 5, 2026',
      category: 'Operations',
      readTime: '10 min read',
      metrics: '3,200 reads',
    },
    {
      id: 4,
      title: 'Global Trade Update: Navigating New Regulations in 2026',
      excerpt: 'A comprehensive guide to the latest customs regulations, trade agreements, and compliance requirements affecting global logistics.',
      date: 'April 28, 2026',
      category: 'Industry',
      readTime: '12 min read',
      metrics: '2,600 reads',
    },
    {
      id: 5,
      title: 'Building Resilient Supply Chains: Lessons from Recent Disruptions',
      excerpt: 'Key takeaways from recent global events and how companies can build more resilient supply chain networks.',
      date: 'April 20, 2026',
      category: 'Strategy',
      readTime: '7 min read',
      metrics: '1,900 reads',
    },
    {
      id: 6,
      title: 'E-Commerce Fulfillment: Meeting Rising Customer Expectations',
      excerpt: 'How modern logistics providers are adapting to the demands of online retail with faster delivery and real-time tracking.',
      date: 'April 15, 2026',
      category: 'E-Commerce',
      readTime: '9 min read',
      metrics: '3,500 reads',
    },
  ]

  const categories = [
    { name: 'All', count: 48 },
    { name: 'Technology', count: 12 },
    { name: 'Sustainability', count: 8 },
    { name: 'Operations', count: 8 },
    { name: 'Industry', count: 6 },
    { name: 'Strategy', count: 4 },
    { name: 'E-Commerce', count: 6 },
  ]

  return (
    <>
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Logistics Intelligence & Trends
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Stay informed with the latest industry news, expert analysis, and actionable insights
              from our logistics experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-4 gap-16">
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-white border border-slate-200 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="w-full flex justify-between items-center px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors rounded-lg text-left"
                    >
                      <span className="font-medium text-slate-700">{category.name}</span>
                      <span className="text-sm text-slate-500">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>
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
                    className="bg-white border border-slate-200 hover:border-slate-300 transition-colors rounded-lg overflow-hidden"
                  >
                    <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-300 text-6xl mb-6">
                      📦
                    </div>
                    <div className="p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-slate-600">
                        <span className="px-3 py-1 bg-slate-100 font-semibold rounded">
                          {post.category}
                        </span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <button className="text-slate-900 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        <span>Read Full Article</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="text-center mt-16">
                <button className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-300 transition-colors rounded-lg">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Subscribe to Intelligence Updates
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Get the latest logistics insights delivered to your inbox weekly.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-slate-800 border-2 border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors rounded-lg"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors rounded-lg"
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