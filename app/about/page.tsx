import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllAuthors } from '@/lib/authors'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about iCesume — Nigeria\'s career and personal finance resource hub. Our mission, team, and why we built this platform.',
}

export default function AboutPage() {
  const authors = getAllAuthors()
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About iCesume</h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          We built iCesume because we saw a gap: millions of Nigerians searching for career and finance
          guidance, and finding mostly generic Western advice that did not apply to their reality.
        </p>
      </div>

      {/* Mission */}
      <section className="bg-green-50 border border-green-100 rounded-xl p-8 mb-10">
        <h2 className="text-xl font-bold text-green-800 mb-3">Our Mission</h2>
        <p className="text-green-900 leading-relaxed">
          To provide every Nigerian and African professional with the practical career and financial
          tools, information, and guidance they need to build a better future — in their own context,
          with their own currency, and for their own opportunities.
        </p>
      </section>

      {/* Story */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
          <p>
            iCesume started with a simple frustration: searching &ldquo;how to negotiate salary in Nigeria&rdquo;
            and finding articles written for Americans quoting dollar figures and companies like Google
            and Netflix. That advice is not wrong — it is just not built for someone earning in naira,
            working in Lagos, or applying to a multinational in Abuja.
          </p>
          <p>
            The name iCesume is a play on the word &ldquo;Resume&rdquo; — because every career starts with
            one, and we want to be the resource that helps you write yours, understand your worth,
            fund your education, and manage your money — all from one place.
          </p>
          <p>
            Today, iCesume covers career development, personal finance, scholarships, and remote work
            — all through the lens of the Nigerian and African professional experience.
          </p>
        </div>
      </section>

      {/* What we cover */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Cover</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Career Development', desc: 'CV writing, interview prep, salary negotiation, job searching strategies tailored for Nigeria.' },
            { title: 'Personal Finance', desc: 'Budgeting, investing in the NGX, understanding pensions, and growing wealth in naira.' },
            { title: 'Scholarships', desc: 'Up-to-date database of scholarships open to Nigerian and African students locally and abroad.' },
            { title: 'Remote Work', desc: 'How to land remote jobs, get paid in dollars, and build a location-independent income from Nigeria.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial standards */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Editorial Standards</h2>
        <div className="text-gray-600 leading-relaxed space-y-3">
          <p>
            Every article on iCesume is written or reviewed by people with direct experience in the
            Nigerian job market or financial system. We cite real sources — NBS data, CBN reports,
            NGX statistics, and verified employer salary data.
          </p>
          <p>
            We do not publish generic content. If an article does not contain specific, actionable
            information relevant to Nigerians and Africans, it does not go on this site.
          </p>
          <p>
            All financial content carries our disclaimer that it is for informational purposes only
            and is not professional financial or legal advice.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {authors.map((author) => (
            <Link
              key={author.slug}
              href={`/authors/${author.slug}`}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow block"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg flex-shrink-0">
                  {author.initial}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900">{author.name}</h3>
                  <p className="text-sm text-green-700 mb-2">{author.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{author.shortBio}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {author.expertise.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">Have a Question or Suggestion?</h2>
        <p className="text-gray-400 mb-5">
          We read every message. If you have a topic you want us to cover or a correction to report,
          reach out.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}
