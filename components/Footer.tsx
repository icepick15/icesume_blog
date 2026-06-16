import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  Tools: [
    { label: 'Salary Calculator', href: '/salary-calculator' },
    { label: 'Scholarship Database', href: '/scholarships' },
    { label: 'Job Resources', href: '/job-resources' },
  ],
  Content: [
    { label: 'Career Tips', href: '/blog?category=career' },
    { label: 'Personal Finance', href: '/blog?category=finance' },
    { label: 'Remote Work', href: '/blog?category=remote-work' },
    { label: 'All Articles', href: '/blog' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/icesume-logo-dark.png"
                alt="iCesume"
                width={120}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your Career. Your Money. Your Future. Nigeria&apos;s leading career and finance resource hub.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                {group}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} iCesume. All rights reserved. Nigeria.
          </p>
          <p className="text-xs text-gray-500">
            For informational purposes only. Not financial or legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
