import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import type { PostMeta } from '@/lib/blog'

interface BlogCardProps {
  post: PostMeta
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    Career: 'bg-blue-100 text-blue-700',
    Finance: 'bg-green-100 text-green-700',
    Scholarships: 'bg-purple-100 text-purple-700',
    'Remote Work': 'bg-amber-100 text-amber-700',
    Business: 'bg-orange-100 text-orange-700',
  }

  const colorClass = categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'

  return (
    <article
      className={`bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow overflow-hidden ${
        featured ? 'md:flex' : ''
      }`}
    >
      <div className="p-6 flex flex-col justify-between h-full">
        {/* Category */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
            <Tag size={10} />
            {post.category}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h2
            className={`font-bold text-gray-900 hover:text-green-700 transition-colors leading-snug mb-2 ${
              featured ? 'text-xl' : 'text-base'
            }`}
          >
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-400 mt-auto">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString('en-NG', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readingTime} min read
          </span>
          <span className="font-medium text-gray-600">{post.author}</span>
        </div>
      </div>
    </article>
  )
}
