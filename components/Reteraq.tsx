"use client"

import React, { useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
  redirectUrl?: string;
  breakpoint?: number; // px, screens >= this will redirect
  intervalMs?: number;
};

export default function Reteraq({
  images,
  redirectUrl = "",
  breakpoint = 1024,
  intervalMs = 2600,
}: Props) {
  const [index, setIndex] = useState(0);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;
    // If on a large screen, redirect immediately
    if (width >= breakpoint && redirectUrl) {
      // Use replace to avoid creating history entries
      window.location.replace(redirectUrl);
      return;
    }

    // Otherwise, start auto-rotate carousel
    mountedRef.current = true;
    const id = setInterval(() => {
      setIndex((i) => (images.length ? (i + 1) % images.length : 0));
    }, intervalMs);

    return () => {
      clearInterval(id);
      mountedRef.current = false;
    };
  }, [images.length, breakpoint, redirectUrl, intervalMs]);

  if (!images || images.length === 0) return null;

  return (
    <div style={{ width: "100%", maxWidth: 420, margin: "0 auto" }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 10 }}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            style={{
              display: i === index ? "block" : "none",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                border: "none",
                padding: 0,
                background: i === index ? "#fff" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
