import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import ShareButtons from '@/components/ShareButtons'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex gap-10">
        {/* Main content */}
        <article className="flex-1 min-w-0">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-green-700 mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Articles
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
              <Tag size={10} />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-NG', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readingTime} min read
            </span>
            <span className="font-medium text-gray-600">By {post.author}</span>
          </div>

          {/* MDX Content */}
          <div className="
            prose prose-gray prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900 prose-headings:scroll-mt-24
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-2
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-green-700 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-4 prose-li:my-1 prose-li:text-gray-700
            prose-ol:my-4
            prose-hr:border-gray-200 prose-hr:my-8
            prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:bg-green-50 prose-blockquote:rounded-r-xl prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:not-italic prose-blockquote:text-gray-700
            prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800 prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:overflow-x-auto
            prose-table:text-sm prose-table:w-full
            prose-thead:bg-gray-50
            prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-gray-700 prose-th:border-b prose-th:border-gray-200
            prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-gray-100 prose-td:text-gray-700
            prose-img:rounded-xl prose-img:shadow-sm
          ">
            <MDXRemote source={post.content} />
          </div>

          {/* Share Buttons */}
          <ShareButtons title={post.title} url={`https://icesume.com.ng/blog/${post.slug}`} />

          {/* Author Bio */}
          <div className="mt-10 bg-green-50 rounded-xl border border-green-100 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-800 font-bold flex-shrink-0">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-900">{post.author}</p>
                <p className="text-sm text-green-700 mb-2">iCesume Editorial</p>
                <p className="text-sm text-gray-600 leading-relaxed">{post.authorBio}</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs text-amber-700">
              <strong>Disclaimer:</strong> This article is for informational purposes only and does
              not constitute financial, legal, or career advice. Always consult a qualified
              professional before making important decisions.{' '}
              <Link href="/disclaimer" className="underline">
                Read our full disclaimer.
              </Link>
            </p>
          </div>
        </article>

        {/* Sidebar */}
        {related.length > 0 && (
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                Related Articles
              </h3>
              <div className="space-y-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="block bg-white rounded-xl border border-gray-100 p-4 hover:shadow-sm transition-shadow"
                  >
                    <span className="text-xs text-green-700 font-semibold">{p.category}</span>
                    <p className="text-sm font-semibold text-gray-900 mt-1 leading-snug hover:text-green-700 transition-colors">
                      {p.title}
                    </p>
                    <span className="text-xs text-gray-400 mt-2 block">{p.readingTime} min read</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}
