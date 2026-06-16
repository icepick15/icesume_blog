'use client'

import { useState } from 'react'
import BlogCard from '@/components/BlogCard'
import type { PostMeta } from '@/lib/blog'

const CATEGORIES = ['All', 'Career', 'Finance', 'Scholarships', 'Remote Work', 'Business']

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === cat
                ? 'bg-green-700 text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No articles found in this category yet.</p>
          <button
            onClick={() => setActive('All')}
            className="text-green-700 font-semibold hover:underline mt-2 inline-block"
          >
            View all articles →
          </button>
        </div>
      )}
    </>
  )
}
