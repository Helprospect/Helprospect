'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    quote: "En 3 semaines, Helprospect nous a généré 14 rendez-vous qualifiés avec des DSI. Notre pipeline était vide, il est maintenant à 180k€ d'opportunités.",
    name: 'Thomas D.',
    role: 'Directeur Commercial',
    company: 'Éditeur SaaS B2B',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    result: '+14 RDV',
    period: 'en 3 semaines',
  },
  {
    quote: "On cherchait à cibler des DAF de PME industrielles. Helprospect a tout géré : ciblage, scripts, relances. Résultats dès la première semaine.",
    name: 'Sophie M.',
    role: 'CEO',
    company: 'Cabinet de conseil Finance',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face',
    result: '8 RDV',
    period: 'en 2 semaines',
  },
  {
    quote: "Paritel fait confiance à Helprospect pour ses campagnes de prospection. Leur approche multicanale dépasse ce qu'on avait essayé en interne.",
    name: 'Marc L.',
    role: 'Responsable Développement',
    company: 'Paritel',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face',
    result: '×3 leads',
    period: 'vs objectif',
  },
]

export default function Results() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    refs.current.forEach((r) => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resultats" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-6">Résultats clients</div>
          <h2
            className="text-4xl lg:text-5xl font-black leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Vos objectifs,
            <br />
            <span className="text-gradient">nos preuves.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i] = el }}
              className="animate-on-scroll card-hover bg-[#111] border border-[#1A1A1A] rounded-2xl p-7 flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Result badge */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-2xl font-black text-[#F5C518]" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {t.result}
                  </div>
                  <div className="text-xs text-[#555]">{t.period}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="10" height="10" viewBox="0 0 12 12" fill="#F5C518">
                      <path d="M6 1l1.3 3.9H11L8.2 7l1 3.9L6 8.8 2.8 11l1-3.9L1 5h3.7z"/>
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-sm text-[#888] leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-[#1A1A1A]">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" unoptimized />
                </div>
                <div>
                  <div className="text-sm font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {t.name}
                  </div>
                  <div className="text-xs text-[#555]">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
