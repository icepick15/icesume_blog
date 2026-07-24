'use client'

import { useRef, useState } from 'react'

const DESTINATION_URL =
  'https://kikio.ng/2026/06/18/10-fully-funded-scholarships-for-nigerians-that-dont-require-ielts-2025-2026/'

const COUNTRIES = [
  { flag: '🇺🇸', label: 'USA' },
  { flag: '🇨🇦', label: 'Canada' },
  { flag: '🇬🇧', label: 'UK' },
  { flag: '🇩🇪', label: 'Germany' },
]

export default function ScholarshipPicker() {
  const [selected, setSelected] = useState<string | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

  function pick(country: string) {
    setSelected(country)
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
  }

  return (
    <>
      <div className="picker">
        <div className="wrap">
          <h2>Where do you want to go?</h2>
          <div className="countries">
            {COUNTRIES.map((c) => (
              <button
                key={c.label}
                className={`country-btn${selected === c.label ? ' selected' : ''}`}
                onClick={() => pick(c.label)}
              >
                <span className="flag">{c.flag}</span> {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`form-section${selected ? ' active' : ''}`} ref={formRef}>
        <div className="wrap">
          <h3>Almost there.</h3>
          <p className="picked">{selected ? `Destination: ${selected}` : ''}</p>
          <button className="cta-btn" onClick={() => window.open(DESTINATION_URL, '_blank')}>
            See Fully Funded Scholarships →
          </button>
          <p className="fine-print">Opens the full list in a new tab.</p>
        </div>
      </div>
    </>
  )
}
