import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  metadataBase: new URL('https://icesume.com.ng'),
  title: {
    default: 'iCesume — Career & Finance Resource Hub for Nigerians',
    template: '%s | iCesume',
  },
  description:
    "Nigeria's leading career and personal finance resource hub. Salary calculator, scholarship database, job resources, and expert articles on career growth, investing, and remote work.",
  keywords: ['Nigeria careers', 'Nigerian salary', 'scholarships Nigeria', 'personal finance Nigeria', 'remote jobs Nigeria'],
  authors: [{ name: 'iCesume Editorial Team' }],
  icons: {
    icon: [
      { url: '/icesume-favicon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icesume-favicon-512.png', sizes: '192x192', type: 'image/png' },
      { url: '/icesume-favicon-512.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/icesume-favicon-512.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/icesume-favicon-512.png',
  },
  openGraph: {
    siteName: 'iCesume',
    type: 'website',
    locale: 'en_NG',
    images: [
      {
        url: '/icesume-favicon-512.png',
        width: 512,
        height: 512,
        alt: 'iCesume — Nigeria Career & Finance Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@icesumeng',
    images: ['/icesume-favicon-512.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'iCesume',
  url: 'https://icesume.com.ng',
  description: "Nigeria's leading career and personal finance resource hub.",
  inLanguage: 'en-NG',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://icesume.com.ng/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'iCesume',
  url: 'https://icesume.com.ng',
  logo: 'https://icesume.com.ng/icesume-favicon-512.png',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@icesume.com.ng',
    contactType: 'customer support',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900 antialiased font-[var(--font-geist)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
