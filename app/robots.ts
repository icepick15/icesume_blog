import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://icesume.com.ng/sitemap.xml',
    host: 'https://icesume.com.ng',
  }
}
