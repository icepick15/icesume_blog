import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import BlogCard from '@/components/BlogCard'
import { Calculator, GraduationCap, Briefcase, TrendingUp, Users, BookOpen } from 'lucide-react'

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6)

  const features = [
    {
      icon: Calculator,
      title: 'Salary Calculator',
      description: 'Calculate your take-home pay after tax, pension, and deductions — built for Nigerian salaries.',
      href: '/salary-calculator',
      color: 'text-green-600 bg-green-50',
    },
    {
      icon: GraduationCap,
      title: 'Scholarship Database',
      description: 'Browse fully funded and partial scholarships available to Nigerian students in 2026.',
      href: '/scholarships',
      color: 'text-purple-600 bg-purple-50',
    },
    {
      icon: Briefcase,
      title: 'Job Resources',
      description: 'Curated platforms, CV templates, and career tools for Nigerian job seekers.',
      href: '/job-resources',
      color: 'text-blue-600 bg-blue-50',
    },
  ]

  const stats = [
    { value: '23+', label: 'Expert Articles' },
    { value: '50+', label: 'Scholarships Listed' },
    { value: '30+', label: 'Job Platforms' },
    { value: '100%', label: 'Nigeria Focused' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
              Nigeria&apos;s Career &amp; Finance Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Your Career. Your Money.{' '}
              <span className="text-amber-400">Your Future.</span>
            </h1>
            <p className="text-green-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Expert career advice, personal finance guides, scholarship listings, and salary tools
              — built specifically for Nigerians and Africans.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/salary-calculator"
                className="bg-amber-400 text-amber-900 font-bold px-6 py-3 rounded-lg hover:bg-amber-300 transition-colors"
              >
                Calculate My Salary
              </Link>
              <Link
                href="/blog"
                className="bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Read Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-green-700">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Tools */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Free Tools Built for Nigerians
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Practical resources that actually work in the Nigerian context — not generic Western advice.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow group"
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                <feature.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog section */}
      {posts.length > 0 && (
        <section className="bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest Articles</h2>
                <p className="text-gray-500 mt-1">Expert guides for Nigerian professionals</p>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore by Topic</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Briefcase, label: 'Career Growth', href: '/blog?category=career', color: 'border-blue-200 hover:border-blue-400 hover:bg-blue-50' },
            { icon: TrendingUp, label: 'Personal Finance', href: '/blog?category=finance', color: 'border-green-200 hover:border-green-400 hover:bg-green-50' },
            { icon: GraduationCap, label: 'Scholarships', href: '/scholarships', color: 'border-purple-200 hover:border-purple-400 hover:bg-purple-50' },
            { icon: Users, label: 'Remote Work', href: '/blog?category=remote-work', color: 'border-amber-200 hover:border-amber-400 hover:bg-amber-50' },
          ].map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 bg-white transition-all ${cat.color}`}
            >
              <cat.icon size={24} className="text-gray-600" />
              <span className="text-sm font-semibold text-gray-700 text-center">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <BookOpen size={40} className="mx-auto mb-4 text-amber-400" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Take Control of Your Career and Finances?
          </h2>
          <p className="text-green-200 mb-8 max-w-xl mx-auto">
            Join thousands of Nigerians using iCesume to navigate career decisions and build financial confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="bg-amber-400 text-amber-900 font-bold px-6 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Reading
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
