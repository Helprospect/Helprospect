'use client'
import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Cadrage',
    desc: 'On définit ensemble votre cible idéale — B2B (secteur, poste, taille) ou B2C (âge, géo, intention). On choisit les canaux adaptés et on construit la stratégie avant de prospecter.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Activation',
    desc: 'Nos équipes activent les leviers retenus : cold call, cold email, LinkedIn en B2B — ads Meta/Google, insertion newsletter en B2C. Tout est opéré par des humains, pas des bots.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Requalification',
    desc: 'Chaque lead généré est requalifié par notre équipe avant transmission. On vérifie l\'intention, le besoin et la disponibilité. Vous ne recevez que des contacts réellement prêts.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Livraison & facturation',
    desc: 'Vous recevez vos leads directement — RDV agenda en B2B, fiche contact qualifiée en B2C. Vous êtes facturé uniquement sur les leads livrés. Reporting temps réel inclus.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
]

export default function Methode() {
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
    <section id="methode" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left sticky */}
          <div className="lg:sticky lg:top-28">
            <div className="section-label mb-6">Notre méthode</div>
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Du contact au
              <br />
              <span className="text-gradient">lead livré.</span>
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-8">
              B2B ou B2C, notre process est le même : cibler, activer, requalifier, livrer. Opéré par des humains. Facturé au résultat.
            </p>
            <a
              href="https://calendly.com/helprospect/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Démarrer en 72h
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: steps */}
          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => { refs.current[i] = el }}
                className="animate-on-scroll card-hover bg-[#111] border border-[#1A1A1A] rounded-2xl p-6 lg:p-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-[#1A1A1A] text-[#F5C518]">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-black text-[#F5C518]"
                        style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '0.1em' }}
                      >
                        {step.num}
                      </span>
                      <h3
                        className="text-lg font-bold text-white"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#666] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
