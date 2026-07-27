'use client'

import { useState } from 'react'

const DESTINATION_URL =
  'https://kikio.ng/2026/06/18/10-fully-funded-scholarships-for-nigerians-that-dont-require-ielts-2025-2026/'

export default function ScholarshipCta() {
  const [stamped, setStamped] = useState(false)

  function handleClick() {
    setStamped(true)
    window.open(DESTINATION_URL, '_blank')
  }

  return (
    <>
      <button className={`stamp-btn${stamped ? ' stamped' : ''}`} onClick={handleClick}>
        <span className="stamp-btn-label">TAP TO SEE THE LIST</span>
        <span className="stamp-btn-arrow">→</span>
      </button>
      <p className="fine-print">Opens in a new tab.</p>
    </>
  )
}
