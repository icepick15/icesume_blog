import type { Metadata } from 'next'
import { Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Get in touch with the iCesume team. We'd love to hear from you — questions, suggestions, corrections, or partnership inquiries.",
}

interface ContactPageProps {
  searchParams: Promise<{ sent?: string }>
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { sent } = await searchParams
  const messageSent = sent === 'true'

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
                <a
                  href="mailto:info@icesume.com.ng"
                  className="text-sm text-green-700 hover:underline"
                >
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

        {/* Contact Form */}
        <div className="md:col-span-2">
          {messageSent ? (
            /* Success state */
            <div className="bg-white rounded-xl border border-gray-100 p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
              <p className="text-gray-500 max-w-sm mb-6">
                Thank you for reaching out. We&apos;ve received your message and will respond within
                2 business days.
              </p>
              <a
                href="/contact"
                className="text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
              >
                ← Send another message
              </a>
            </div>
          ) : (
            /* Form */
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form
                action="https://formsubmit.co/info@icesume.com.ng"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New message from iCesume contact form" />
                <input type="hidden" name="_next" value="/contact?sent=true" />
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
          )}
        </div>
      </div>
    </div>
  )
}
