'use client'

import { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
  breakpoint?: number
  largeScreenRedirectUrl?: string
}

export default function ReteraqAgeGate({
  children,
  breakpoint = 1024,
  largeScreenRedirectUrl,
}: Props) {
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    if (!largeScreenRedirectUrl) return

    if (window.innerWidth >= breakpoint) {
      window.location.replace(largeScreenRedirectUrl)
    }
  }, [breakpoint, largeScreenRedirectUrl])

  return (
    <>
      {children}

      {!verified ? (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'grid',
            placeItems: 'center',
            padding: 20,
            background: 'rgba(0, 0, 0, 0.18)',
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="age-title"
            aria-describedby="age-question"
            style={{
              width: '100%',
              maxWidth: 360,
              border: '1px solid rgba(255, 255, 255, 0.28)',
              borderRadius: 14,
              background: 'rgba(12, 12, 12, 0.46)',
              boxShadow: '0 24px 70px rgba(0, 0, 0, 0.5)',
              color: '#fff',
              padding: 22,
              textAlign: 'center',
              backdropFilter: 'blur(8px)',
            }}
          >
            <h1
              id="age-title"
              style={{
                margin: 0,
                fontSize: 24,
                fontWeight: 900,
                lineHeight: 1.1,
              }}
            >
              18+ verification
            </h1>
            <p
              id="age-question"
              style={{
                margin: '12px 0 0',
                color: '#e5e5e5',
                fontSize: 15,
                lineHeight: 1.4,
              }}
            >
              Are you above 18 years old?
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginTop: 20,
              }}
            >
              <button
                onClick={() => setVerified(true)}
                style={{
                  border: 'none',
                  borderRadius: 8,
                  background: '#16a34a',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 15,
                  fontWeight: 900,
                  lineHeight: 1,
                  padding: '13px 12px',
                }}
              >
                Yes
              </button>
              <button
                onClick={() => setVerified(true)}
                style={{
                  border: 'none',
                  borderRadius: 8,
                  background: '#dc2626',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 15,
                  fontWeight: 900,
                  lineHeight: 1,
                  padding: '13px 12px',
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
