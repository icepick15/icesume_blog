'use client'

import { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [messageSent, setMessageSent] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('sent') === 'true') setMessageSent(true)
  }, [])

  if (messageSent) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
        <p className="text-gray-500 max-w-sm mb-6">
          Thank you for reaching out. We&apos;ve received your message and will respond within 2
          business days.
        </p>
        <a
          href="/contact"
          className="text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
        >
          ← Send another message
        </a>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
      <form
        action="https://formsubmit.co/info@icesume.com.ng"
        method="POST"
        className="space-y-5"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New message from iCesume contact form" />
        <input type="hidden" name="_next" value="https://icesume.com.ng/contact/?sent=true" />
        <input type="hidden" name="_template" value="table" />

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
          >
            <option value="">Select a subject</option>
            <option value="Article Suggestion">Article Suggestion</option>
            <option value="Factual Correction">Factual Correction</option>
            <option value="Scholarship Submission">Scholarship Submission</option>
            <option value="Partnership Inquiry">Partnership Inquiry</option>
            <option value="General Question">General Question</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            placeholder="Tell us what's on your mind..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition-colors"
        >
          Send Message
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting this form you agree to our{' '}
          <a href="/privacy-policy" className="underline hover:text-gray-600">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  )
}
