'use client'
import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Ciblage',
    desc: 'On définit ensemble votre ICP (profil client idéal) — secteur, taille entreprise, poste décisionnaire. On construit la liste de prospects avec Sales Navigator et nos bases propriétaires.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Copywriting',
    desc: 'Nos rédacteurs spécialisés B2B créent des séquences de messages percutantes — cold emails personnalisés, scripts d\'appel, messages LinkedIn. Zéro template générique.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Prospection',
    desc: 'On prospecte en votre nom sur 3 canaux simultanément : téléphone, cold email, LinkedIn. Notre équipe gère tout — relances, objections, qualification initiale.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Livraison',
    desc: 'Vous recevez des rendez-vous qualifiés directement dans votre agenda. Reporting hebdomadaire, accès au dashboard temps réel, intégration CRM. Vous fermez les deals, on s\'occupe du reste.',
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
              De la cible au
              <br />
              <span className="text-gradient">rendez-vous.</span>
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-8">
              Une machine de prospection complète, opérée par des humains. Pas un bot, pas un outil SaaS — une vraie équipe dédiée à votre acquisition.
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
