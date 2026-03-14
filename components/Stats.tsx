'use client'
import React from 'react'
import { useEffect, useRef, useState } from 'react'

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState<number | null>(null)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const duration = 1800
        const step = (timestamp: number) => {
          if (!start) start = timestamp
          const progress = Math.min((timestamp - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * end))
          if (progress < 1) requestAnimationFrame(step)
          else setCount(end)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count === null ? '—' : `${count}${suffix}`}</span>
}

const stats = [
  { value: 10, suffix: '+', label: 'Clients accompagnés', sublabel: 'en France' },
  { value: 72, suffix: 'h', label: 'Pour les premiers leads', sublabel: 'dès le démarrage' },
  { value: 3, suffix: '', label: 'Canaux d\'acquisition', sublabel: 'Call · Email · LinkedIn' },
  { value: 100, suffix: '%', label: 'Sans engagement', sublabel: 'résiliation libre' },
]

const clients: { name: string; logo: React.ReactNode }[] = [
  {
    name: 'EDF',
    logo: (
      <span className="flex items-center gap-0">
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 900, fontSize: '22px', color: 'white', letterSpacing: '-1px' }}>EDF</span>
      </span>
    ),
  },
  {
    name: 'Paritel',
    logo: (
      <span className="flex items-center gap-1.5">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5"/>
          <path d="M6 8.5 C6 7 7 6 8 6 C9 6 10 7 10 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="8" y1="10" x2="8" y2="11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '17px', color: 'white' }}>paritel</span>
      </span>
    ),
  },
  {
    name: 'RDF Paris',
    logo: (
      <span className="flex flex-col items-start leading-none gap-0.5">
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 900, fontSize: '18px', color: 'white', letterSpacing: '2px' }}>RDF</span>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 400, fontSize: '8px', color: 'white', letterSpacing: '4px' }}>PARIS</span>
      </span>
    ),
  },
  {
    name: 'Wing',
    logo: (
      <span className="flex items-center gap-2">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M3 7 L11 15 L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px', color: 'white' }}>Wing</span>
      </span>
    ),
  },
  {
    name: 'Generali',
    logo: (
      <span className="flex items-center gap-2">
        <span className="flex items-center justify-center w-7 h-7 rounded-full border border-white" style={{ borderWidth: '1.5px' }}>
          <span style={{ fontFamily: 'Georgia, serif', fontWeight: 900, fontSize: '14px', color: 'white', lineHeight: 1 }}>G</span>
        </span>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '17px', color: 'white' }}>Generali</span>
      </span>
    ),
  },
  {
    name: 'Toyota MH',
    logo: (
      <span className="flex items-center gap-2">
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
          <ellipse cx="14" cy="10" rx="13" ry="6" stroke="white" strokeWidth="1.3" fill="none"/>
          <ellipse cx="14" cy="10" rx="6.5" ry="6" stroke="white" strokeWidth="1.3" fill="none"/>
          <ellipse cx="14" cy="10" rx="13" ry="2.5" stroke="white" strokeWidth="1.3" fill="none"/>
        </svg>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '13px', color: 'white', letterSpacing: '0.5px' }}>TOYOTA MH</span>
      </span>
    ),
  },
]

export default function Stats() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A] mb-24">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#0A0A0A] p-8 lg:p-10">
              <div
                className="text-4xl lg:text-5xl font-black text-[#F5C518] mb-2"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white font-semibold mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                {stat.label}
              </div>
              <div className="text-xs text-[#555]">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Clients logo marquee — full width */}
      <div className="mt-16">
        <p className="text-center text-xs text-[#444] uppercase tracking-widest mb-8" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
          Ils nous font confiance
        </p>
        {/* Fade masks on edges */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
            style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }} />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
            style={{ background: 'linear-gradient(to left, #0A0A0A, transparent)' }} />

          <div className="ticker-wrap">
            <div className="ticker-content" style={{ animation: 'ticker 30s linear infinite' }}>
              {/* First set */}
              {clients.map((client, i) => (
                <div key={`a-${i}`} className="inline-flex items-center mx-10 opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-default" title={client.name}>
                  {client.logo}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {clients.map((client, i) => (
                <div key={`b-${i}`} className="inline-flex items-center mx-10 opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-default" title={client.name}>
                  {client.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
