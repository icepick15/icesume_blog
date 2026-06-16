import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'iCesume Privacy Policy — how we collect, use, and protect your personal data in compliance with NDPR and GDPR.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: June 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
          <p>
            iCesume (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website icesume.com.ng. We are
            committed to protecting your personal data and complying with the Nigeria Data Protection
            Regulation (NDPR) and the General Data Protection Regulation (GDPR) where applicable.
            This Privacy Policy explains what data we collect, why we collect it, and how we use it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Contact form data:</strong> Name, email address, and message content when you contact us.</li>
            <li><strong>Usage data:</strong> Pages visited, time spent on pages, browser type, and device information via analytics tools.</li>
            <li><strong>Cookies:</strong> We use cookies to improve your experience and to display relevant advertisements through Google AdSense.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Respond to your inquiries submitted via our contact form</li>
            <li>Improve the content and performance of our website</li>
            <li>Understand how visitors use our website (analytics)</li>
            <li>Display personalised advertisements via Google AdSense</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Google AdSense and Advertising</h2>
          <p>
            We use Google AdSense to display advertisements on our website. Google AdSense may use
            cookies and web beacons to serve ads based on your interests. Google&apos;s use of advertising
            cookies enables it and its partners to serve ads based on your visit to our site and/or
            other sites on the internet. You can opt out of personalised advertising by visiting
            Google&apos;s Ads Settings at <a href="https://adssettings.google.com" className="text-green-700 hover:underline" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>.
          </p>
          <p className="mt-2">
            For more information on how Google uses data from our site, visit{' '}
            <a href="https://policies.google.com/technologies/partner-sites" className="text-green-700 hover:underline" target="_blank" rel="noopener noreferrer">
              Google&apos;s Privacy & Terms
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
          <p>
            We use the following types of cookies:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Essential cookies:</strong> Required for the website to function.</li>
            <li><strong>Analytics cookies:</strong> Used to understand website usage (e.g., Google Analytics).</li>
            <li><strong>Advertising cookies:</strong> Used by Google AdSense to deliver relevant ads.</li>
          </ul>
          <p className="mt-2">
            You can control cookie preferences through your browser settings. Disabling cookies may
            affect some website functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Services</h2>
          <p>We use the following third-party services that may collect data:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Google Analytics</strong> — website traffic analysis</li>
            <li><strong>Google AdSense</strong> — advertisement delivery</li>
            <li><strong>Formsubmit</strong> — contact form processing</li>
          </ul>
          <p className="mt-2">
            Each of these services has its own privacy policy governing data use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Data Retention</h2>
          <p>
            We retain contact form submissions for up to 12 months. Analytics data is retained as
            configured in Google Analytics (default: 26 months). We do not sell, rent, or trade
            your personal data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Your Rights (NDPR / GDPR)</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:info@icesume.com.ng" className="text-green-700 hover:underline">
              info@icesume.com.ng
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children&apos;s Privacy</h2>
          <p>
            iCesume is not directed at children under the age of 13. We do not knowingly collect
            personal data from children. If you believe we have inadvertently collected such data,
            please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated revision date. Continued use of the website after changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:info@icesume.com.ng" className="text-green-700 hover:underline">
              info@icesume.com.ng
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
