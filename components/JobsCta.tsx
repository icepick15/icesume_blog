'use client'

import { useState } from 'react'

const DESTINATION_URL = 'https://kikio.ng/abroad/fruit-picker-jobs-in-canada-with-free-visa-sponsorship/'

export default function JobsCta() {
  const [stamped, setStamped] = useState(false)

  function handleClick() {
    setStamped(true)
    window.open(DESTINATION_URL, '_blank')
  }

  return (
    <>
      <button className={`stamp-btn${stamped ? ' stamped' : ''}`} onClick={handleClick}>
        <span className="stamp-btn-label">TAP TO SEE THE JOB</span>
        <span className="stamp-btn-arrow">→</span>
      </button>
      <p className="fine-print">Opens in a new tab.</p>
    </>
  )
}
