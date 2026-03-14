'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    setTimeout(() => el.classList.add('visible'), 100)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #F5C518 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #F5C518 0%, transparent 70%)', transform: 'translate(-40%, 40%)' }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#F5C518 1px, transparent 1px), linear-gradient(90deg, #F5C518 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div ref={heroRef} className="animate-on-scroll">
            <div className="section-label mb-8">Agence de génération de leads B2B &amp; B2C</div>

            <h1 className="font-black leading-[0.95] tracking-tight mb-8" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}>
              Vos leads{' '}
              <span className="text-gradient">qualifiés,</span>
              <br />
              <span className="text-[#888]">now.</span>
            </h1>

            <p className="text-lg text-[#888] leading-relaxed mb-10 max-w-lg" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              Helprospect génère vos leads B2B et B2C — téléprospection, cold email, ads et newsletters.{' '}
              <strong className="text-[#CCC] font-medium">100% au résultat.</strong> Vous payez uniquement les leads reçus.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="https://calendly.com/helprospect/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Prendre rendez-vous
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#methode" className="btn-secondary">
                Notre méthode
              </a>
            </div>

            {/* Social proof mini */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
                ].map((src, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] overflow-hidden relative">
                    <Image src={src} alt="Client" fill className="object-cover" unoptimized />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#F5C518">
                      <path d="M6 1l1.3 3.9H11L8.2 7l1 3.9L6 8.8 2.8 11l1-3.9L1 5h3.7z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-[#666]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  +10 clients satisfaits en France
                </p>
              </div>
            </div>
          </div>

          {/* Right: image + floating stats */}
          <div className="relative hidden lg:block">
            <div
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden"
              style={{ border: '1px solid #1A1A1A' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=750&fit=crop"
                alt="Équipe Helprospect en action"
                fill
                className="object-cover"
                priority
                unoptimized
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0A0A0A 0%, transparent 50%)' }} />
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute -left-10 top-12 bg-[#111] border border-[#222] rounded-xl p-4 shadow-2xl"
            >
              <div className="text-2xl font-black text-[#F5C518]" style={{ fontFamily: 'Syne, sans-serif' }}>72h</div>
              <div className="text-xs text-[#666] mt-0.5">Premiers leads livrés</div>
            </div>

            <div
              className="absolute -right-6 bottom-24 bg-[#111] border border-[#222] rounded-xl p-4 shadow-2xl"
            >
              <div className="text-2xl font-black text-[#F5C518]" style={{ fontFamily: 'Syne, sans-serif' }}>B2B+B2C</div>
              <div className="text-xs text-[#666] mt-0.5">Multi-marché</div>
            </div>

            <div
              className="absolute left-6 -bottom-5 bg-[#F5C518] rounded-xl p-4 shadow-2xl"
            >
              <div className="text-2xl font-black text-[#0A0A0A]" style={{ fontFamily: 'Syne, sans-serif' }}>100%</div>
              <div className="text-xs text-[#0A0A0A] font-semibold mt-0.5">au résultat</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker tape */}
      <div className="border-t border-b border-[#1A1A1A] py-3 relative z-10">
        <div className="ticker-wrap">
          <div className="ticker-content">
            {[...Array(2)].map((_, repeat) => (
              <div key={repeat} className="inline-flex items-center">
                {[
                  'Génération de leads B2B & B2C',
                  'Téléprospection',
                  'Cold Email',
                  'Ads & Newsletters',
                  'Leads requalifiés',
                  '100% au résultat',
                  'Résultats en 72h',
                  'Vous payez par lead reçu',
                ].map((text, i) => (
                  <span key={i} className="inline-flex items-center gap-4 px-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] flex-shrink-0" />
                    <span className="text-xs text-[#555] uppercase tracking-widest whitespace-nowrap" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
                      {text}
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
