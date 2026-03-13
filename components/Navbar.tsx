'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#1A1A1A]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <path
                d="M16 28 A12 12 0 1 1 27.196 10"
                stroke="#F5C518"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="27.196" cy="10" r="2.5" fill="#F5C518" />
            </svg>
          </div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.01em' }}>
            helprospect
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Notre méthode', href: '#methode' },
            { label: 'Résultats', href: '#resultats' },
            { label: 'Secteurs', href: '#secteurs' },
            { label: 'FAQ', href: '#faq' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#888] hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://calendly.com/helprospect/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:inline-flex text-xs"
          >
            Prendre RDV
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#1A1A1A] px-6 py-6 flex flex-col gap-5">
          {[
            { label: 'Notre méthode', href: '#methode' },
            { label: 'Résultats', href: '#resultats' },
            { label: 'Secteurs', href: '#secteurs' },
            { label: 'FAQ', href: '#faq' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-[#CCC]"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://calendly.com/helprospect/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary self-start"
          >
            Prendre RDV →
          </a>
        </div>
      )}
    </header>
  )
}
