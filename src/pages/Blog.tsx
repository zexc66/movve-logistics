import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/utils/reducedMotion'
import { BLOG_AI_LOGISTICS, BLOG_SUSTAINABILITY, BLOG_COLD_CHAIN, BLOG_GLOBAL_TRADE, BLOG_RESILIENT_SUPPLY, BLOG_ECOMMERCE } from '@/utils/images'
import { ParticleBackground } from '../components/ParticleBackground'

gsap.registerPlugin(ScrollTrigger)

export function Blog() {
  const heroRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const newsletterRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    // Hero reveal
    if (heroRef.current) {
      const els = heroRef.current.querySelectorAll('.reveal-up')
      gsap.fromTo(els,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
        }
      )
    }

    // Cards stagger
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.blog-card')
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // Newsletter section
    if (newsletterRef.current) {
      gsap.fromTo(newsletterRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Logistics: Predictive Analytics Revolution',
      excerpt: 'How machine learning is transforming supply chain management with predictive analytics, demand forecasting, and intelligent routing.',
      date: 'May 15, 2026',
      category: 'Technology',
      readTime: '8 min read',
      metrics: '2,400 reads',
      image: BLOG_AI_LOGISTICS,
    },
    {
      id: 2,
      title: 'Sustainable Logistics: Building a Greener Supply Chain',
      excerpt: 'Exploring carbon footprint tracking, offset programs, and eco-friendly practices that are reshaping the logistics industry.',
      date: 'May 10, 2026',
      category: 'Sustainability',
      readTime: '6 min read',
      metrics: '1,800 reads',
      image: BLOG_SUSTAINABILITY,
    },
    {
      id: 3,
      title: 'Cold Chain Logistics: Best Practices for Temperature-Sensitive Shipments',
      excerpt: 'Essential strategies for maintaining product integrity in pharmaceutical and food supply chains with IoT monitoring.',
      date: 'May 5, 2026',
      category: 'Operations',
      readTime: '10 min read',
      metrics: '3,200 reads',
      image: BLOG_COLD_CHAIN,
    },
    {
      id: 4,
      title: 'Global Trade Update: Navigating New Regulations in 2026',
      excerpt: 'A comprehensive guide to the latest customs regulations, trade agreements, and compliance requirements affecting global logistics.',
      date: 'April 28, 2026',
      category: 'Industry',
      readTime: '12 min read',
      metrics: '2,600 reads',
      image: BLOG_GLOBAL_TRADE,
    },
    {
      id: 5,
      title: 'Building Resilient Supply Chains: Lessons from Recent Disruptions',
      excerpt: 'Key takeaways from recent global events and how companies can build more resilient supply chain networks.',
      date: 'April 20, 2026',
      category: 'Strategy',
      readTime: '7 min read',
      metrics: '1,900 reads',
      image: BLOG_RESILIENT_SUPPLY,
    },
    {
      id: 6,
      title: 'E-Commerce Fulfillment: Meeting Rising Customer Expectations',
      excerpt: 'How modern logistics providers are adapting to the demands of online retail with faster delivery and real-time tracking.',
      date: 'April 15, 2026',
      category: 'E-Commerce',
      readTime: '9 min read',
      metrics: '3,500 reads',
      image: BLOG_ECOMMERCE,
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

  const categoryColors: Record<string, string> = {
    Technology: 'bg-emerald-50 text-emerald-700',
    Sustainability: 'bg-teal-50 text-teal-700',
    Operations: 'bg-slate-100 text-slate-700',
    Industry: 'bg-amber-50 text-amber-700',
    Strategy: 'bg-violet-50 text-violet-700',
    'E-Commerce': 'bg-sky-50 text-sky-700',
  }

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative py-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500 rounded-full blur-[128px]" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-600 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="reveal-up inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wider uppercase rounded-full mb-8">
              Insights & Analysis
            </span>
            <h1 className="reveal-up text-5xl md:text-7xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Logistics Intelligence
              <br />
              <span className="text-emerald-400">&amp; Trends</span>
            </h1>
            <p className="reveal-up text-xl text-slate-400 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-body)' }}>
              Stay informed with the latest industry news, expert analysis, and actionable insights
              from our logistics experts.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-4 gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-1 mb-12 lg:mb-0">
              <div className="sticky top-28 bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs" style={{ fontFamily: 'var(--font-display)' }}>
                  Categories
                </h2>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="w-full flex justify-between items-center px-4 py-3 hover:bg-slate-50 transition-colors rounded-xl text-left group"
                    >
                      <span className="font-medium text-slate-700 group-hover:text-emerald-700 transition-colors">{category.name}</span>
                      <span className="text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full font-semibold">{category.count}</span>
                    </button>
                  ))}
                </div>

                {/* Newsletter mini */}
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <p className="text-sm font-semibold text-slate-900 mb-3">Weekly Digest</p>
                  <p className="text-xs text-slate-500 mb-4">Get insights delivered to your inbox every Friday.</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                    <button className="px-4 py-2 bg-emerald-500 text-white text-sm font-semibold rounded-lg hover:bg-emerald-600 transition-colors">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Grid */}
            <div className="lg:col-span-3">
              <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="blog-card group bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-300 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-emerald-500/5"
                  >
                    {/* Blog thumbnail image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg backdrop-blur-sm bg-white/90 ${categoryColors[post.category] || 'bg-slate-100 text-slate-700'}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4 text-xs text-slate-500 font-medium uppercase tracking-wider">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                        {post.title}
                      </h3>
                      <p className="text-slate-500 mb-6 leading-relaxed text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <button className="text-emerald-700 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                          <span>Read Article</span>
                          <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button>
                        <span className="text-xs text-slate-400 font-medium">{post.metrics}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-16">
                <button className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold hover:border-emerald-500 hover:text-emerald-700 transition-all duration-300 rounded-xl">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section ref={newsletterRef} className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-500 rounded-full blur-[120px]" />
        </div>
        <ParticleBackground count={12} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wider uppercase rounded-full mb-8">
              Newsletter
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Subscribe to Intelligence Updates
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Get the latest logistics insights delivered to your inbox weekly.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all rounded-xl"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-emerald-500 text-white font-bold hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 rounded-xl"
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
