import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Get in touch with the iCesume team. We'd love to hear from you — questions, suggestions, corrections, or partnership inquiries.",
}

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-500 text-lg">
          Have a question, correction, or topic suggestion? We read every message and respond within
          2 business days.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Email</p>
                <a href="mailto:info@icesume.com.ng" className="text-sm text-green-700 hover:underline">
                  info@icesume.com.ng
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Location</p>
                <p className="text-sm text-gray-500">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Response Time</p>
                <p className="text-sm text-gray-500">Within 2 business days</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 rounded-xl border border-green-100 p-5">
            <p className="text-sm text-green-800 font-semibold mb-2">What to contact us about:</p>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Article topic suggestions</li>
              <li>• Factual corrections</li>
              <li>• Partnership inquiries</li>
              <li>• Scholarship submissions</li>
              <li>• General questions</li>
            </ul>
          </div>
        </div>

        {/* Contact Form (client component handles ?sent=true) */}
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
