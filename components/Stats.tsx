'use client'
import { useEffect, useRef, useState } from 'react'

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const duration = 1500
        const step = (timestamp: number) => {
          if (!start) start = timestamp
          const progress = Math.min((timestamp - start) / duration, 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) requestAnimationFrame(step)
          else setCount(end)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 10, suffix: '+', label: 'Clients accompagnés', sublabel: 'en France' },
  { value: 72, suffix: 'h', label: 'Pour les premiers leads', sublabel: 'dès le démarrage' },
  { value: 3, suffix: '', label: 'Canaux d\'acquisition', sublabel: 'Call · Email · LinkedIn' },
  { value: 100, suffix: '%', label: 'Sans engagement', sublabel: 'résiliation libre' },
]

const clients = [
  { name: 'Paritel', initial: 'P' },
  { name: 'Client B', initial: 'B' },
  { name: 'Client C', initial: 'C' },
  { name: 'Client D', initial: 'D' },
  { name: 'Client E', initial: 'E' },
  { name: 'Client F', initial: 'F' },
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
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-50">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-28 h-10 border border-[#222] rounded-lg text-[#666] text-sm font-bold"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
