'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const secteurs = [
  {
    slug: 'energie',
    label: 'Énergie & ENR',
    desc: 'Fournisseurs d\'énergie, panneaux solaires, bornes de recharge, efficacité énergétique.',
    icon: '⚡',
    keywords: 'leads énergie B2B, prospection ENR',
  },
  {
    slug: 'telephonie',
    label: 'Téléphonie & SaaS',
    desc: 'Opérateurs télécom, éditeurs logiciels, solutions cloud et outils de communication B2B.',
    icon: '📡',
    keywords: 'leads SaaS B2B, prospection télécom',
  },
  {
    slug: 'btp',
    label: 'BTP & Rénovation',
    desc: 'Entreprises générales, isolation, toiture, second œuvre — prospection artisans et maîtres d\'œuvre.',
    icon: '🏗️',
    keywords: 'leads BTP, prospection bâtiment',
  },
  {
    slug: 'transport',
    label: 'Transport & Logistique',
    desc: 'Transporteurs, prestataires logistiques, livraison last-mile, supply chain.',
    icon: '🚚',
    keywords: 'leads transport B2B, prospection logistique',
  },
  {
    slug: 'assurance',
    label: 'Assurance & Finance',
    desc: 'Courtiers, CGP, cabinets d\'expertise comptable, solutions de financement d\'entreprise.',
    icon: '🏦',
    keywords: 'leads assurance B2B, prospection finance',
  },
  {
    slug: 'industrie',
    label: 'Industrie & Machines',
    desc: 'Fabricants, équipementiers, maintenance industrielle, fournitures et matières premières.',
    icon: '⚙️',
    keywords: 'leads industrie B2B, prospection industrielle',
  },
]

export default function Secteurs() {
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
    <section id="secteurs" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="section-label mb-6">Secteurs d'activité</div>
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Votre secteur,
              <br />
              <span className="text-gradient">notre expertise.</span>
            </h2>
          </div>
          <p className="text-[#555] text-sm max-w-xs leading-relaxed">
            Chaque secteur a ses codes, ses objections, ses décisionnaires. Nos équipes sont formées sur votre marché avant de prospecter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {secteurs.map((s, i) => (
            <div
              key={s.slug}
              ref={(el) => { refs.current[i] = el }}
              className="animate-on-scroll"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Link
                href={`/secteurs/${s.slug}`}
                className="card-hover group bg-[#111] border border-[#1A1A1A] rounded-2xl p-6 flex flex-col gap-4 block"
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{s.icon}</span>
                  <svg
                    className="w-4 h-4 text-[#333] group-hover:text-[#F5C518] transition-colors"
                    viewBox="0 0 16 16" fill="none"
                  >
                    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {s.label}
                  </h3>
                  <p className="text-xs text-[#555] leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#444]">
            Votre secteur n'est pas listé ?{' '}
            <a
              href="https://calendly.com/helprospect/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5C518] hover:underline"
            >
              Parlons-en directement →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
