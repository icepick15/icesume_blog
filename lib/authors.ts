export interface Author {
  slug: string
  name: string
  role: string
  bio: string
  shortBio: string
  expertise: string[]
  initial: string
}

export const AUTHORS: Record<string, Author> = {
  'ajibade-akinola': {
    slug: 'ajibade-akinola',
    name: 'Ajibade Akinola',
    role: 'Founder & Editor-in-Chief',
    bio: 'Ajibade Akinola is the founder of iCesume and a technology and career development professional based in Lagos, Nigeria. With hands-on experience in software development and digital product building, he created iCesume to bridge the gap between global career resources and the daily realities facing Nigerian professionals. He writes on career strategy, tech careers, remote work, and the Nigerian job market.',
    shortBio: 'Founder of iCesume. Tech professional and career development advocate based in Lagos, Nigeria.',
    expertise: ['Career Development', 'Tech Careers', 'Remote Work', 'Job Search Strategy'],
    initial: 'AA',
  },
  'olasimbo-akinfolarin': {
    slug: 'olasimbo-akinfolarin',
    name: 'Olasimbo Akinfolarin',
    role: 'Personal Finance Writer',
    bio: 'Olasimbo Akinfolarin is a personal finance writer and financial planning enthusiast with a background in accounting and investment analysis. Based in Lagos, she specialises in breaking down complex financial topics — from PAYE tax and pension planning to stock market investing and salary benchmarking — into practical, actionable advice for Nigerian professionals at every income level.',
    shortBio: 'Personal finance writer and investment analyst based in Lagos. Specialises in Nigerian financial planning.',
    expertise: ['Personal Finance', 'Salary & Compensation', 'Investment', 'Tax Planning'],
    initial: 'OA',
  },
}

export function getAuthorBySlug(slug: string): Author | null {
  return AUTHORS[slug] ?? null
}

export function getAllAuthors(): Author[] {
  return Object.values(AUTHORS)
}
