import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllAuthors, getAuthorBySlug } from '@/lib/authors'
import { getAllPosts } from '@/lib/blog'
import BlogCard from '@/components/BlogCard'
import { ArrowLeft, BookOpen } from 'lucide-react'

interface AuthorPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllAuthors().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) return {}
  return {
    title: `${author.name} — ${author.role}`,
    description: author.shortBio,
  }
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) notFound()

  const posts = getAllPosts().filter((p) => p.authorSlug === slug)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/about"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-green-700 mb-8 transition-colors"
      >
        <ArrowLeft size={14} /> Back to About
      </Link>

      {/* Author hero */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-10">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-2xl flex-shrink-0">
            {author.initial}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{author.name}</h1>
            <p className="text-green-700 font-medium mb-4">{author.role} · iCesume</p>
            <p className="text-gray-600 leading-relaxed mb-5">{author.bio}</p>
            <div className="flex flex-wrap gap-2">
              {author.expertise.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Articles by this author */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
          <BookOpen size={18} className="text-green-600" />
          Articles by {author.name}
          <span className="text-sm font-normal text-gray-400 ml-1">({posts.length})</span>
        </h2>

        {posts.length === 0 ? (
          <p className="text-gray-400 text-sm">No articles published yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-5">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
