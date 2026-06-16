'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Careers', href: '/job-resources' },
  { label: 'Finance', href: '/salary-calculator' },
  { label: 'Scholarships', href: '/scholarships' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/icesume-logo-horizontal.png"
              alt="iCesume — Nigeria's Career & Finance Hub"
              width={200}
              height={56}
              priority
              className="h-9 w-auto md:h-12 lg:h-14"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base font-medium text-gray-600 hover:text-green-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/salary-calculator"
              className="bg-green-700 text-white text-sm lg:text-base font-semibold px-5 py-2.5 rounded-lg hover:bg-green-800 transition-colors"
            >
              Salary Calculator
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-green-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-gray-700 hover:text-green-700 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/salary-calculator"
            className="block bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center hover:bg-green-800"
            onClick={() => setMenuOpen(false)}
          >
            Salary Calculator
          </Link>
        </div>
      )}
    </header>
  )
}
