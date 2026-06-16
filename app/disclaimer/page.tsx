import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'iCesume disclaimer — important information about the nature of content on this site including career and financial information.',
}

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Disclaimer</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: June 2026</p>

      <div className="space-y-8 text-gray-600 leading-relaxed">
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-amber-800 mb-2">Important Notice</h2>
          <p className="text-amber-700">
            The information published on iCesume (icesume.com.ng) is for general informational and
            educational purposes only. It does not constitute professional financial, legal, or career
            advice. Always consult a qualified professional before making financial or career decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. No Financial Advice</h2>
          <p>
            Nothing on this website constitutes financial advice, investment advice, trading advice,
            or any other form of professional financial guidance. The content about investing,
            savings, pensions, salaries, and money management is for informational purposes only.
          </p>
          <p className="mt-2">
            We are not registered financial advisors. We do not know your specific financial
            situation. Before making any financial decision — including investing, taking a loan,
            or changing employment — consult a licensed financial advisor in Nigeria.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. No Career or Legal Advice</h2>
          <p>
            Career guidance, CV tips, salary information, and job market data published on iCesume
            are based on publicly available information and editorial research. They do not represent
            formal career counselling or legal employment advice.
          </p>
          <p className="mt-2">
            Employment laws, company policies, and market conditions change frequently. Always
            verify current information with official sources, employers, or legal professionals.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Accuracy of Information</h2>
          <p>
            We strive to ensure all content on iCesume is accurate, current, and reliable. However,
            we make no warranties or guarantees about the accuracy, completeness, or timeliness of
            any information. Salary figures, scholarship deadlines, and financial data change
            frequently and may become outdated.
          </p>
          <p className="mt-2">
            Always verify critical information — especially scholarship deadlines, application
            requirements, and financial figures — directly with the relevant official source before acting.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. External Links</h2>
          <p>
            iCesume may link to third-party websites including scholarship portals, government
            agencies, job platforms, and financial institutions. We are not responsible for the
            content, accuracy, or privacy practices of these external sites. Links are provided
            for informational convenience only and do not constitute an endorsement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Advertising</h2>
          <p>
            iCesume displays advertisements through Google AdSense. The presence of an advertisement
            does not constitute an endorsement of the advertised product or service. We are not
            responsible for the content or claims made in third-party advertisements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Salary Calculator</h2>
          <p>
            The Salary Calculator on iCesume provides estimates based on current Nigerian tax
            brackets, PAYE formulas, and pension contribution rules. These figures are estimates
            only. Actual take-home pay may differ based on your employer, allowances, benefits,
            and individual tax status. Consult your employer&apos;s payroll department or a tax
            professional for precise figures.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
          <p>
            If you find any content that is inaccurate, misleading, or outdated, please notify us
            immediately at{' '}
            <a href="mailto:info@icesume.com.ng" className="text-green-700 hover:underline">
              info@icesume.com.ng
            </a>{' '}
            so we can review and correct it promptly.
          </p>
        </section>
      </div>
    </div>
  )
}
