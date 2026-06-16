import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'iCesume Terms of Service — the rules and conditions for using icesume.com.ng.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: June 2026</p>

      <div className="space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using iCesume (icesume.com.ng), you agree to be bound by these Terms
            of Service. If you do not agree to these terms, please do not use this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Use of the Website</h2>
          <p>You agree to use iCesume only for lawful purposes and in a manner that does not:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Infringe the rights of others</li>
            <li>Violate any applicable laws or regulations in Nigeria or your jurisdiction</li>
            <li>Introduce malware, viruses, or harmful code</li>
            <li>Attempt to gain unauthorised access to any part of the website</li>
            <li>Scrape, harvest, or copy content from the website without written permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Intellectual Property</h2>
          <p>
            All content on iCesume — including articles, guides, tools, graphics, and the website
            design — is the property of iCesume and is protected by Nigerian and international
            copyright law. You may not reproduce, distribute, or create derivative works from
            our content without explicit written permission.
          </p>
          <p className="mt-2">
            You may share links to our articles. Short quotes (under 100 words) with proper
            attribution and a link back to the source are permitted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Disclaimer of Warranties</h2>
          <p>
            iCesume is provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied.
            We do not warrant that the website will be uninterrupted, error-free, or free of
            viruses. We make no representations about the accuracy, reliability, or completeness
            of any content on the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by Nigerian law, iCesume and its operators shall not
            be liable for any direct, indirect, incidental, special, or consequential damages
            arising from your use of the website or reliance on any content published on it,
            including decisions made based on career or financial information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Links</h2>
          <p>
            iCesume may contain links to third-party websites. These links are provided for your
            convenience only. We have no control over the content of those sites and accept no
            responsibility for them or for any loss or damage that may arise from your use of them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Advertising</h2>
          <p>
            This website uses Google AdSense to display advertisements. By using this website, you
            acknowledge that you may see advertisements. We are not responsible for the content of
            third-party advertisements displayed on our site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Updated terms will
            be posted on this page with a revised date. Continued use of the website after changes
            constitutes your acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">9. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of
            the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject
            to the exclusive jurisdiction of Nigerian courts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact</h2>
          <p>
            Questions about these Terms of Service should be sent to:{' '}
            <a href="mailto:info@icesume.com.ng" className="text-green-700 hover:underline">
              info@icesume.com.ng
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
