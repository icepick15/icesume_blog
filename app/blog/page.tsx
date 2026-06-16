import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogList from '@/components/BlogList'

export const metadata: Metadata = {
  title: 'Blog — Career & Finance Articles for Nigerians',
  description:
    'Expert articles on career development, personal finance, scholarships, and remote work — written specifically for Nigerians and Africans.',
}

export default function BlogPage() {
  const posts = getAllPosts()

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

      <BlogList posts={posts} />
    </div>
  )
}
