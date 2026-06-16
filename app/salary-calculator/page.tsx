import type { Metadata } from 'next'
import SalaryCalculator from '@/components/SalaryCalculator'

export const metadata: Metadata = {
  title: 'Nigerian Salary Calculator 2026 — Calculate Your Take-Home Pay',
  description: 'Calculate your exact take-home pay after PAYE tax, pension (PFA), and NHF deductions. Built specifically for Nigerian employees in 2026.',
}

export default function SalaryCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Nigerian Salary Calculator 2026
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Enter your gross monthly salary to instantly calculate your take-home pay after PAYE
          income tax, pension contributions (PFA), and NHF deductions — using current Nigerian tax
          brackets.
        </p>
      </div>

      <SalaryCalculator />

      {/* How it works */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Nigerian Salary Deductions Work</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: 'PAYE Income Tax',
              description:
                'Pay As You Earn (PAYE) is deducted by your employer monthly. Nigeria uses a progressive tax system: the more you earn, the higher your tax rate — from 7% on the first ₦300,000 to 24% above ₦3.2 million annually.',
              color: 'border-blue-200',
            },
            {
              title: 'Pension (PFA)',
              description:
                'Under the Pension Reform Act, employees contribute 8% of their monthly gross salary to their Pension Fund Administrator (PFA). Your employer adds a minimum of 10%. Only the employee\'s 8% reduces your take-home pay.',
              color: 'border-green-200',
            },
            {
              title: 'NHF Contribution',
              description:
                'National Housing Fund (NHF) contributions are 2.5% of your basic salary. This applies to Nigerians in employment and is deducted monthly. You can claim a refund when you retire or reach age 60.',
              color: 'border-amber-200',
            },
          ].map((item) => (
            <div key={item.title} className={`bg-white rounded-xl border-2 ${item.color} p-5`}>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tax Brackets */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2026 Nigerian Income Tax Brackets (PAYE)</h2>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Annual Income Band</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Tax Rate</th>
                <th className="text-right px-5 py-3 font-semibold text-gray-700">Max Tax on Band</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { band: 'First ₦300,000', rate: '7%', max: '₦21,000' },
                { band: 'Next ₦300,000', rate: '11%', max: '₦33,000' },
                { band: 'Next ₦500,000', rate: '15%', max: '₦75,000' },
                { band: 'Next ₦500,000', rate: '19%', max: '₦95,000' },
                { band: 'Next ₦1,600,000', rate: '21%', max: '₦336,000' },
                { band: 'Above ₦3,200,000', rate: '24%', max: 'Unlimited' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-5 py-3 text-gray-700">{row.band}</td>
                  <td className="px-5 py-3 font-semibold text-green-700">{row.rate}</td>
                  <td className="px-5 py-3 text-right text-gray-500">{row.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Source: Federal Inland Revenue Service (FIRS). Consolidated Relief Allowance (CRA) of ₦200,000 +
          20% of gross income is deducted before tax is calculated. This calculator applies CRA automatically.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What is the minimum wage in Nigeria in 2026?',
              a: 'The Nigerian national minimum wage was increased to ₦70,000 per month in 2024. As of 2026, some states have adopted higher minimum wages. Always check the current rate with the National Minimum Wage Act.',
            },
            {
              q: 'Do I have to pay tax if I earn below the minimum wage?',
              a: 'Nigerians earning below ₦300,000 annually (about ₦25,000/month) are taxed at 7% on only the income above the Consolidated Relief Allowance. In practice, most minimum wage earners pay very little PAYE tax after CRA is applied.',
            },
            {
              q: 'What is CRA and how does it reduce my tax?',
              a: 'The Consolidated Relief Allowance (CRA) is a tax relief of ₦200,000 plus 20% of your gross income. This amount is deducted from your income before PAYE is calculated, significantly reducing how much tax you pay.',
            },
            {
              q: 'Can I opt out of pension contributions?',
              a: 'No. The Pension Reform Act 2014 makes pension contributions mandatory for employees in organisations with 3 or more staff. Your employer deducts 8% from your salary every month on your behalf.',
            },
          ].map((item) => (
            <details key={item.q} className="bg-white rounded-xl border border-gray-100 p-5 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                {item.q}
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4">▼</span>
              </summary>
              <p className="text-sm text-gray-500 leading-relaxed mt-3">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-xs text-amber-700">
          <strong>Disclaimer:</strong> This calculator provides estimates for informational purposes
          only. Actual deductions depend on your employer, allowance structure, and specific tax
          status. Consult your HR department or a certified tax professional for precise figures.
        </p>
      </div>
    </div>
  )
}
