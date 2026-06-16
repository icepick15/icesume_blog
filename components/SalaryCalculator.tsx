'use client'

import { useState, useMemo } from 'react'

function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

function calculatePAYE(annualGross: number): number {
  const cra = Math.max(200000 + 0.2 * annualGross, 200000)
  const taxable = Math.max(annualGross - cra, 0)

  const brackets = [
    { limit: 300000, rate: 0.07 },
    { limit: 300000, rate: 0.11 },
    { limit: 500000, rate: 0.15 },
    { limit: 500000, rate: 0.19 },
    { limit: 1600000, rate: 0.21 },
    { limit: Infinity, rate: 0.24 },
  ]

  let tax = 0
  let remaining = taxable

  for (const bracket of brackets) {
    if (remaining <= 0) break
    const taxable_in_bracket = Math.min(remaining, bracket.limit)
    tax += taxable_in_bracket * bracket.rate
    remaining -= taxable_in_bracket
  }

  return tax
}

export default function SalaryCalculator() {
  const [grossMonthly, setGrossMonthly] = useState('')
  const [basicPercent, setBasicPercent] = useState(60)

  const result = useMemo(() => {
    const gross = parseFloat(grossMonthly.replace(/,/g, ''))
    if (!gross || gross <= 0) return null

    const annualGross = gross * 12
    const basicSalary = gross * (basicPercent / 100)

    // Pension: 8% of gross
    const pensionMonthly = gross * 0.08

    // NHF: 2.5% of basic
    const nhfMonthly = basicSalary * 0.025

    // PAYE
    const annualPAYE = calculatePAYE(annualGross)
    const monthlyPAYE = annualPAYE / 12

    const totalDeductions = pensionMonthly + nhfMonthly + monthlyPAYE
    const takeHome = gross - totalDeductions

    return {
      gross,
      pension: pensionMonthly,
      nhf: nhfMonthly,
      paye: monthlyPAYE,
      totalDeductions,
      takeHome,
      effectiveTaxRate: (monthlyPAYE / gross) * 100,
    }
  }, [grossMonthly, basicPercent])

  const handleGrossInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, '').replace(/[^0-9]/g, '')
    setGrossMonthly(raw ? Number(raw).toLocaleString() : '')
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Inputs */}
      <div className="p-6 md:p-8 border-b border-gray-100">
        <h2 className="text-lg font-bold text-gray-900 mb-5">Enter Your Details</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Monthly Gross Salary (₦)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">₦</span>
              <input
                type="text"
                value={grossMonthly}
                onChange={handleGrossInput}
                placeholder="e.g. 300,000"
                className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Basic Salary (% of Gross) — for NHF
            </label>
            <select
              value={basicPercent}
              onChange={(e) => setBasicPercent(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            >
              <option value={40}>40% of Gross</option>
              <option value={50}>50% of Gross</option>
              <option value={60}>60% of Gross (common)</option>
              <option value={70}>70% of Gross</option>
              <option value={100}>100% (all basic)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {result ? (
        <div className="p-6 md:p-8">
          {/* Take-home highlight */}
          <div className="bg-green-700 text-white rounded-xl p-6 mb-6 text-center">
            <p className="text-green-200 text-sm mb-1">Estimated Monthly Take-Home Pay</p>
            <p className="text-4xl font-bold">{formatNaira(result.takeHome)}</p>
            <p className="text-green-300 text-xs mt-1">
              Effective tax rate: {result.effectiveTaxRate.toFixed(1)}%
            </p>
          </div>

          {/* Breakdown */}
          <h3 className="font-bold text-gray-900 mb-4">Monthly Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-sm text-gray-600">Gross Salary</span>
              <span className="font-semibold text-gray-900">{formatNaira(result.gross)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <div>
                <span className="text-sm text-gray-600">PAYE Income Tax</span>
                <span className="text-xs text-gray-400 block">Federal Inland Revenue Service</span>
              </div>
              <span className="font-semibold text-red-600">- {formatNaira(result.paye)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <div>
                <span className="text-sm text-gray-600">Pension Contribution</span>
                <span className="text-xs text-gray-400 block">8% of gross (PFA)</span>
              </div>
              <span className="font-semibold text-red-600">- {formatNaira(result.pension)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <div>
                <span className="text-sm text-gray-600">NHF Contribution</span>
                <span className="text-xs text-gray-400 block">2.5% of basic salary</span>
              </div>
              <span className="font-semibold text-red-600">- {formatNaira(result.nhf)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-sm font-semibold text-gray-700">Total Deductions</span>
              <span className="font-bold text-red-600">- {formatNaira(result.totalDeductions)}</span>
            </div>
            <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-3 mt-2">
              <span className="font-bold text-gray-900">Net Take-Home Pay</span>
              <span className="font-bold text-green-700 text-lg">{formatNaira(result.takeHome)}</span>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-5 text-center">
            Calculator uses 2026 PAYE brackets and standard CRA. Results are estimates only.
          </p>
        </div>
      ) : (
        <div className="p-8 text-center text-gray-400">
          <p className="text-sm">Enter your gross salary above to see your breakdown</p>
        </div>
      )}
    </div>
  )
}
