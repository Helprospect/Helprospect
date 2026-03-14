'use client'
import { useEffect, useRef } from 'react'

const offres = [
  {
    tag: 'B2B',
    tagColor: '#F5C518',
    title: 'Vous ciblez des entreprises.',
    subtitle: 'On remplit votre pipeline.',
    desc: 'Vos décideurs n\'attendent pas un email de plus. Ils répondent à un appel bien préparé, un message LinkedIn précis, un cold email personnalisé. On gère les trois — en même temps, en votre nom.',
    levers: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
        ),
        label: 'Téléprospection',
        desc: 'Cold calling ciblé, scripts qualifiants, gestion des objections.',
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
          </svg>
        ),
        label: 'Cold Email',
        desc: 'Séquences personnalisées, copywriting B2B, relances automatisées.',
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
        ),
        label: 'LinkedIn Outreach',
        desc: 'Messages ciblés, connexions qualifiées, prise de rendez-vous.',
      },
    ],
    cta: 'Générer mes leads B2B',
    result: 'Vous recevez des rendez-vous qualifiés directement dans votre agenda.',
  },
  {
    tag: 'B2C',
    tagColor: '#fff',
    title: 'Vous ciblez des particuliers.',
    subtitle: 'On livre des prospects chauds.',
    desc: 'Un clic sur une pub ne fait pas un client. Ce qui compte, c\'est le lead qui a été rappelé, qualifié, et qui attend votre appel. On gère tout — de la création publicitaire à la transmission du contact.',
    levers: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
          </svg>
        ),
        label: 'Ads (Meta & Google)',
        desc: 'Création et pilotage de campagnes publicitaires orientées génération de leads.',
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 20V10M12 20V4M6 20v-6"/>
          </svg>
        ),
        label: 'Insertion Newsletter',
        desc: 'Accès à des bases qualifiées pour toucher votre cible avec une offre ciblée.',
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
          </svg>
        ),
        label: 'Requalification des leads',
        desc: 'Chaque lead est rappelé et validé avant transmission. Vous ne recevez que des prospects chauds.',
      },
    ],
    cta: 'Générer mes leads B2C',
    result: 'Vous recevez des leads requalifiés, prêts à convertir.',
  },
]

export default function Offre() {
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
    <section id="offre" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label mb-6 inline-block">Notre offre</div>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            Un modèle simple :{' '}
            <span className="text-gradient">vous payez les leads.</span>
          </h2>
          <p className="text-[#555] mt-4 max-w-xl mx-auto text-base leading-relaxed">
            B2B ou B2C, le principe ne change pas — vous ne payez que ce que vous recevez. Zéro abonnement, zéro minimum garanti de notre côté.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {offres.map((offre, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i] = el }}
              className="animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-full bg-[#111] border border-[#1A1A1A] rounded-2xl p-8 flex flex-col gap-6 hover:border-[#F5C518] transition-colors duration-300">
                {/* Tag */}
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-black px-3 py-1 rounded-full"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      letterSpacing: '0.1em',
                      backgroundColor: offre.tag === 'B2B' ? '#F5C518' : '#1A1A1A',
                      color: offre.tag === 'B2B' ? '#0A0A0A' : '#fff',
                      border: offre.tag === 'B2C' ? '1px solid #333' : 'none',
                    }}
                  >
                    {offre.tag}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {offre.title}
                  </h3>
                  <p className="text-[#F5C518] font-semibold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {offre.subtitle}
                  </p>
                </div>

                <p className="text-[#666] text-sm leading-relaxed">{offre.desc}</p>

                {/* Levers */}
                <div className="flex flex-col gap-4">
                  {offre.levers.map((lever, j) => (
                    <div key={j} className="flex items-start gap-4 p-4 rounded-xl bg-[#0D0D0D] border border-[#1A1A1A]">
                      <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-[#1A1A1A] text-[#F5C518]">
                        {lever.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white mb-0.5" style={{ fontFamily: 'Syne, sans-serif' }}>{lever.label}</div>
                        <div className="text-xs text-[#555] leading-relaxed">{lever.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Result */}
                <div className="flex items-start gap-3 p-4 rounded-xl border border-[#F5C518]/20 bg-[#F5C518]/5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                    <path d="M3 8l3.5 3.5L13 4" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-xs text-[#888] leading-relaxed">{offre.result}</p>
                </div>

                {/* CTA */}
                <a
                  href="https://calendly.com/helprospect/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto btn-primary text-center justify-center"
                >
                  {offre.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Performance badge */}
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          {['100% au résultat', 'Vous payez par lead reçu', 'Sans abonnement', 'Sans engagement minimum'].map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-xs text-[#555] uppercase tracking-widest" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
              <span className="w-1 h-1 rounded-full bg-[#F5C518]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
