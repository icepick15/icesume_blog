'use client'

import { useEffect, useState } from 'react'

type ReteraqCard = {
  src: string
  alt?: string
  title: string
  meta: string
  destinationUrl?: string
  badge?: string
  duration?: string
}

type Props = {
  images: ReteraqCard[]
  destinationUrl?: string
  redirectUrl?: string
  breakpoint?: number
  intervalMs?: number
  cardsPerPage?: number
}

function getRandomCards(cards: ReteraqCard[], count: number) {
  return [...cards].sort(() => Math.random() - 0.5).slice(0, count)
}

export default function ReteraqCta({
  images,
  destinationUrl,
  redirectUrl,
  breakpoint = 1024,
  intervalMs = 5000,
  cardsPerPage = 3,
}: Props) {
  const pageSize = Math.max(1, cardsPerPage)
  const [visibleCards, setVisibleCards] = useState(() => images.slice(0, pageSize))

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.innerWidth >= breakpoint && redirectUrl) {
      window.location.replace(redirectUrl)
      return
    }

    if (images.length <= pageSize) return

    const id = setInterval(() => {
      setVisibleCards(getRandomCards(images, pageSize))
    }, intervalMs)

    return () => clearInterval(id)
  }, [breakpoint, images, pageSize, redirectUrl, intervalMs])

  function handleClick(url?: string) {
    if (!url) return

    window.open(url, '_blank')
  }

  if (!images.length) return null

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 420,
        margin: '0 auto',
        background: '#050505',
        padding: 10,
        borderRadius: 12,
      }}
    >
      <div
        aria-live="polite"
        style={{
          display: 'grid',
          gap: 12,
        }}
      >
        {visibleCards.map((card) => (
          <article
            key={`${card.title}-${card.src}`}
            style={{
              overflow: 'hidden',
              borderRadius: 8,
              background: '#111',
              color: '#fff',
            }}
          >
            <button
              onClick={() => handleClick(card.destinationUrl ?? destinationUrl)}
              style={{
                width: '100%',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'block',
                background: 'transparent',
                color: 'inherit',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  position: 'relative',
                  display: 'block',
                  aspectRatio: '16 / 9',
                  overflow: 'hidden',
                  background: '#1f1f1f',
                }}
              >
                <img
                  src={card.src}
                  alt={card.alt ?? card.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
                {card.badge ? (
                  <span
                    style={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      borderRadius: 4,
                      background: '#ff3b3b',
                      padding: '3px 6px',
                      fontSize: 10,
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {card.badge}
                  </span>
                ) : null}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: '50% auto auto 50%',
                    transform: 'translate(-50%, -50%)',
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    border: '3px solid #fff',
                    background: 'rgba(0, 0, 0, 0.25)',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <span
                    style={{
                      width: 0,
                      height: 0,
                      marginLeft: 4,
                      borderTop: '11px solid transparent',
                      borderBottom: '11px solid transparent',
                      borderLeft: '16px solid #fff',
                    }}
                  />
                </span>
                {card.duration ? (
                  <span
                    style={{
                      position: 'absolute',
                      right: 7,
                      bottom: 7,
                      borderRadius: 4,
                      background: 'rgba(0, 0, 0, 0.75)',
                      padding: '3px 5px',
                      fontSize: 11,
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {card.duration}
                  </span>
                ) : null}
              </span>

              <span style={{ display: 'block', padding: '9px 10px 10px' }}>
                <strong
                  style={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    fontSize: 14,
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </strong>
                <span
                  style={{
                    display: 'block',
                    marginTop: 4,
                    color: '#b8b8b8',
                    fontSize: 11,
                    lineHeight: 1.35,
                  }}
                >
                  {card.meta}
                </span>
              </span>
            </button>

            <button
              onClick={() => handleClick(card.destinationUrl ?? destinationUrl)}
              style={{
                width: 'calc(100% - 20px)',
                margin: '0 10px 10px',
                border: 'none',
                borderRadius: 6,
                background: '#ff3b3b',
                color: '#fff',
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 800,
                lineHeight: 1,
                padding: '12px 10px',
              }}
            >
              Download HD
            </button>
          </article>
        ))}
      </div>

    </div>
  )
}
