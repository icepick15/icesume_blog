import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Blog — Career & Finance Articles for Nigerians',
  description: 'Expert articles on career development, personal finance, scholarships, and remote work — written specifically for Nigerians and Africans.',
}

const CATEGORIES = ['All', 'Career', 'Finance', 'Scholarships', 'Remote Work', 'Business']

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams
  const allPosts = getAllPosts()

  const filtered =
    category && category !== 'All'
      ? allPosts.filter((p) => p.category.toLowerCase() === category.toLowerCase())
      : allPosts

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Articles & Guides</h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Practical, Nigeria-specific guides on career growth, personal finance, scholarships, and
          building wealth as an African professional.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => {
          const active = (!category && cat === 'All') || category === cat
          return (
            <a
              key={cat}
              href={cat === 'All' ? '/blog' : `/blog?category=${cat}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active
                  ? 'bg-green-700 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-700'
              }`}
            >
              {cat}
            </a>
          )
        })}
      </div>

      {/* Posts grid */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No articles found in this category yet.</p>
          <a href="/blog" className="text-green-700 font-semibold hover:underline mt-2 inline-block">
            View all articles →
          </a>
        </div>
      )}
    </div>
  )
}
