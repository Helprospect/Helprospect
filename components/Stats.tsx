'use client'
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

const clients = [
  {
    name: 'EDF',
    svg: (
      <svg viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="22" fontFamily="Syne, sans-serif" fontWeight="800" fontSize="26" fill="white" letterSpacing="-1">EDF</text>
      </svg>
    ),
  },
  {
    name: 'Paritel',
    svg: (
      <svg viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="21" fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="20" fill="white" letterSpacing="0.5">paritel</text>
      </svg>
    ),
  },
  {
    name: 'RDF Paris',
    svg: (
      <svg viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="20" fontFamily="Syne, sans-serif" fontWeight="800" fontSize="17" fill="white" letterSpacing="2">RDF</text>
        <text x="0" y="28" fontFamily="Syne, sans-serif" fontWeight="400" fontSize="9" fill="white" letterSpacing="3.5">PARIS</text>
      </svg>
    ),
  },
  {
    name: 'Wing',
    svg: (
      <svg viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <path d="M4 8 L16 20 L28 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <text x="34" y="21" fontFamily="Syne, sans-serif" fontWeight="700" fontSize="18" fill="white">Wing</text>
      </svg>
    ),
  },
  {
    name: 'Generali',
    svg: (
      <svg viewBox="0 0 130 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <circle cx="12" cy="14" r="10" stroke="white" strokeWidth="1.5"/>
        <text x="9" y="19" fontFamily="serif" fontWeight="900" fontSize="13" fill="white">G</text>
        <text x="28" y="21" fontFamily="DM Sans, sans-serif" fontWeight="600" fontSize="17" fill="white" letterSpacing="0.3">Generali</text>
      </svg>
    ),
  },
  {
    name: 'Toyota MH',
    svg: (
      <svg viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <ellipse cx="14" cy="14" rx="13" ry="8" stroke="white" strokeWidth="1.5" fill="none"/>
        <ellipse cx="14" cy="14" rx="7" ry="8" stroke="white" strokeWidth="1.5" fill="none"/>
        <ellipse cx="14" cy="14" rx="13" ry="4" stroke="white" strokeWidth="1.5" fill="none"/>
        <text x="33" y="21" fontFamily="Syne, sans-serif" fontWeight="700" fontSize="13" fill="white" letterSpacing="0.5">TOYOTA MH</text>
      </svg>
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

        {/* Clients logos */}
        <div className="text-center mb-10">
          <p className="text-xs text-[#444] uppercase tracking-widest" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
            Ils nous font confiance
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-300"
              title={client.name}
            >
              {client.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
