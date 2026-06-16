import type { Metadata } from 'next'
import { GraduationCap, ExternalLink, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Scholarships for Nigerians 2026 — Fully Funded & Partial',
  description: 'Comprehensive database of scholarships open to Nigerian students in 2026. Fully funded, partial, undergraduate, postgraduate, and professional scholarships.',
}

const scholarships = [
  {
    name: 'Chevening Scholarship',
    country: 'United Kingdom',
    level: 'Postgraduate',
    type: 'Fully Funded',
    deadline: 'November 2026',
    description: 'UK government\'s global scholarship programme offering full funding for a one-year master\'s degree at any UK university. Covers tuition, living allowance, flights, and visa costs.',
    link: 'https://www.chevening.org',
    category: 'International',
  },
  {
    name: 'Commonwealth Scholarship',
    country: 'United Kingdom',
    level: 'Postgraduate / PhD',
    type: 'Fully Funded',
    deadline: 'November 2026',
    description: 'Funded by the UK government for citizens of Commonwealth countries including Nigeria. Covers master\'s and PhD programmes at UK universities with full stipend.',
    link: 'https://cscuk.fcdo.gov.uk',
    category: 'International',
  },
  {
    name: 'DAAD Scholarship (Germany)',
    country: 'Germany',
    level: 'Postgraduate / PhD',
    type: 'Fully Funded',
    deadline: 'October 2026',
    description: 'German Academic Exchange Service offers fully funded scholarships for Nigerian students to study in Germany. Covers tuition, monthly stipend, travel, and health insurance.',
    link: 'https://www.daad.de',
    category: 'International',
  },
  {
    name: 'MasterCard Foundation Scholarship',
    country: 'Various African Universities',
    level: 'Undergraduate / Postgraduate',
    type: 'Fully Funded',
    deadline: 'Varies by institution',
    description: 'Targets young Africans with demonstrated financial need and academic excellence. Partners with top African universities including University of Lagos and University of Ibadan.',
    link: 'https://mastercardfdn.org/scholars',
    category: 'Pan-African',
  },
  {
    name: 'PTDF Overseas Scholarship',
    country: 'UK, USA, Europe',
    level: 'Postgraduate',
    type: 'Fully Funded',
    deadline: 'March 2027',
    description: 'Petroleum Technology Development Fund (PTDF) sponsors Nigerian nationals for master\'s degrees in oil and gas, engineering, and related fields at top international universities.',
    link: 'https://www.ptdf.gov.ng',
    category: 'Government',
  },
  {
    name: 'Federal Government Scholarship (FSB)',
    country: 'Nigeria (Domestic)',
    level: 'Undergraduate',
    type: 'Partial Funding',
    deadline: 'Varies annually',
    description: 'Federal Scholarship Board awards scholarships to Nigerian undergraduates studying in Nigerian universities. Priority given to science, technology, engineering, and mathematics.',
    link: 'https://fsbscholarship.edu.ng',
    category: 'Government',
  },
  {
    name: 'Aga Khan Foundation International Scholarship',
    country: 'Various Countries',
    level: 'Postgraduate',
    type: 'Fully Funded',
    deadline: 'March 2027',
    description: 'Provides postgraduate scholarships on a 50% grant and 50% loan basis for high-achieving students from developing countries with no other means of financing their studies.',
    link: 'https://www.akdn.org/our-agencies/aga-khan-foundation/international-scholarship-programme',
    category: 'International',
  },
  {
    name: 'Wellcome Trust African Research Grants',
    country: 'Nigeria / Africa',
    level: 'PhD / Research',
    type: 'Research Grant',
    deadline: 'Rolling',
    description: 'Open to African researchers and institutions working on health research. Covers PhD programmes, research training, and fellowships with significant funding for health sciences.',
    link: 'https://wellcome.org',
    category: 'Research',
  },
]

const categories = ['All', 'International', 'Government', 'Pan-African', 'Research']
const levels = ['All Levels', 'Undergraduate', 'Postgraduate', 'PhD', 'Research']

export default function ScholarshipsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Scholarships for Nigerians in 2026
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Fully funded and partial scholarships open to Nigerian students — updated for 2026. Each
          entry links directly to the official application portal.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { value: `${scholarships.length}`, label: 'Scholarships Listed' },
          { value: `${scholarships.filter(s => s.type === 'Fully Funded').length}`, label: 'Fully Funded' },
          { value: '4', label: 'Countries Covered' },
        ].map((stat) => (
          <div key={stat.label} className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
            <p className="text-2xl font-bold text-green-700">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Scholarship cards */}
      <div className="space-y-5">
        {scholarships.map((s) => (
          <div key={s.name} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    s.type === 'Fully Funded'
                      ? 'bg-green-100 text-green-700'
                      : s.type === 'Partial Funding'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {s.type}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                    {s.level}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                    {s.category}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-gray-900 mb-1">{s.name}</h2>

                <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-3">
                  <GraduationCap size={14} />
                  <span>{s.country}</span>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>

              <div className="flex flex-col gap-3 min-w-fit">
                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                  <Calendar size={14} />
                  <span>Deadline: <strong className="text-gray-700">{s.deadline}</strong></span>
                </div>
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
                >
                  Apply Now <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-sm text-amber-700">
          <strong>Note:</strong> Scholarship deadlines change annually. Always verify the current
          deadline and requirements directly on the official scholarship website before applying.
          iCesume is not affiliated with any of the scholarship bodies listed above.
        </p>
      </div>
    </div>
  )
}
