import type { Metadata } from 'next'
import { ExternalLink, Briefcase, Globe, FileText } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Job Resources for Nigerians 2026 — Platforms, CV Templates & Tools',
  description: 'Curated job platforms, CV resources, and career tools for Nigerian job seekers in 2026. Find local and remote opportunities, write a winning CV, and land your next role.',
}

const jobPlatforms = [
  {
    name: 'Jobberman',
    type: 'Nigerian Jobs',
    description: 'Nigeria\'s largest job portal with thousands of verified local listings across sectors including banking, technology, oil & gas, and FMCG.',
    link: 'https://www.jobberman.com',
    free: true,
  },
  {
    name: 'MyJobMag',
    type: 'Nigerian Jobs',
    description: 'Focuses on entry-level to mid-level positions in Nigeria. Good for fresh graduates and corps members seeking their first professional role.',
    link: 'https://www.myjobmag.com',
    free: true,
  },
  {
    name: 'LinkedIn',
    type: 'Global & Remote',
    description: 'The world\'s largest professional network. Increasingly important for Nigerian professionals seeking remote work and multinational opportunities.',
    link: 'https://www.linkedin.com/jobs',
    free: true,
  },
  {
    name: 'Remote OK',
    type: 'Remote Jobs',
    description: 'A large remote job board with hundreds of tech and non-tech remote roles. Many listings accept applicants from Nigeria with no location restrictions.',
    link: 'https://remoteok.com',
    free: true,
  },
  {
    name: 'We Work Remotely',
    type: 'Remote Jobs',
    description: 'One of the most trusted remote job boards globally. Strong on software development, design, marketing, and customer support roles.',
    link: 'https://weworkremotely.com',
    free: true,
  },
  {
    name: 'Upwork',
    type: 'Freelance',
    description: 'The world\'s largest freelance marketplace. Nigerian freelancers use Upwork to earn in dollars from clients globally in writing, design, development, and virtual assistance.',
    link: 'https://www.upwork.com',
    free: true,
  },
  {
    name: 'Toptal',
    type: 'Freelance (Elite)',
    description: 'A premium freelance network that accepts only the top 3% of applicants. Higher pay rates but requires passing a rigorous screening process.',
    link: 'https://www.toptal.com',
    free: true,
  },
  {
    name: 'NGCareers',
    type: 'Nigerian Jobs',
    description: 'Nigerian job board with listings across all sectors including government agencies, NGOs, and private companies. Good for roles outside Lagos.',
    link: 'https://ngcareers.com',
    free: true,
  },
]

const careerTools = [
  {
    name: 'Novoresume',
    type: 'CV Builder',
    description: 'Clean, professional CV templates that work for Nigerian job applications. Free tier available with premium options.',
    link: 'https://novoresume.com',
    icon: FileText,
  },
  {
    name: 'Canva Resume Builder',
    type: 'CV Builder',
    description: 'Create visually appealing CVs and cover letters using Canva\'s free templates. Many Nigerian professionals use this for creative roles.',
    link: 'https://www.canva.com/resumes',
    icon: FileText,
  },
  {
    name: 'Google Interview Warmup',
    type: 'Interview Prep',
    description: 'Free AI-powered interview practice tool from Google. Useful for practising answers to common interview questions across different job categories.',
    link: 'https://grow.google/certificates/interview-warmup',
    icon: Briefcase,
  },
  {
    name: 'Glassdoor Nigeria',
    type: 'Salary Research',
    description: 'Research salaries, read company reviews, and find job listings. Useful for benchmarking what companies in Nigeria pay before your negotiation.',
    link: 'https://www.glassdoor.com/Job/nigeria-jobs-SRCH_IL.0,7_IN178.htm',
    icon: Globe,
  },
]

export default function JobResourcesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Job Resources for Nigerians in 2026
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Verified job platforms, CV builders, and career tools curated specifically for Nigerian
          job seekers — from local roles to remote dollar-paying positions.
        </p>
      </div>

      {/* Job Platforms */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Platforms</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {jobPlatforms.map((platform) => (
            <div key={platform.name} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">{platform.name}</h3>
                  <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                    {platform.type}
                  </span>
                </div>
                {platform.free && (
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    Free
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mt-2 mb-4">{platform.description}</p>
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-800"
              >
                Visit Platform <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Career Tools */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">CV & Career Tools</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {careerTools.map((tool) => (
            <div key={tool.name} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <tool.icon size={16} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{tool.name}</h3>
                  <span className="text-xs text-blue-600">{tool.type}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{tool.description}</p>
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-800"
              >
                Open Tool <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Career Tips CTA */}
      <section className="bg-green-800 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Need Help With Your Nigerian CV or Job Search?</h2>
        <p className="text-green-200 mb-6 max-w-xl mx-auto">
          Read our expert guides on writing a Nigerian CV, negotiating salary, and landing your
          first remote job.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/blog?category=career"
            className="bg-amber-400 text-amber-900 font-bold px-5 py-2.5 rounded-lg hover:bg-amber-300 transition-colors text-sm"
          >
            Read Career Articles
          </Link>
          <Link
            href="/salary-calculator"
            className="border border-white/40 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
          >
            Check Your Salary
          </Link>
        </div>
      </section>
    </div>
  )
}
