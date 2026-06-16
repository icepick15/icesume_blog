import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  authorBio: string
  category: string
  tags: string[]
  readingTime: number
  featured?: boolean
}

export interface Post extends PostMeta {
  content: string
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.(mdx|md)$/, '')
      const filePath = path.join(BLOG_DIR, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)

      return {
        slug,
        title: data.title ?? '',
        excerpt: data.excerpt ?? '',
        date: data.date ?? '',
        author: data.author ?? 'iCesume Editorial',
        authorBio: data.authorBio ?? 'Career and finance expert focused on Nigerian professionals.',
        category: data.category ?? 'General',
        tags: data.tags ?? [],
        readingTime: estimateReadingTime(content),
        featured: data.featured ?? false,
      } satisfies PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const extensions = ['.mdx', '.md']
  let filePath: string | null = null

  for (const ext of extensions) {
    const candidate = path.join(BLOG_DIR, `${slug}${ext}`)
    if (fs.existsSync(candidate)) {
      filePath = candidate
      break
    }
  }

  if (!filePath) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    date: data.date ?? '',
    author: data.author ?? 'iCesume Editorial',
    authorBio: data.authorBio ?? 'Career and finance expert focused on Nigerian professionals.',
    category: data.category ?? 'General',
    tags: data.tags ?? [],
    readingTime: estimateReadingTime(content),
    featured: data.featured ?? false,
    content,
  }
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category.toLowerCase() === category.toLowerCase())
}

export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts().filter((p) => p.featured)
}
