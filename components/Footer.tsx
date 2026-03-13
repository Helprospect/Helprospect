import Link from 'next/link'

const secteurLinks = [
  { label: 'Énergie & ENR', href: '/secteurs/energie' },
  { label: 'Téléphonie & SaaS', href: '/secteurs/telephonie' },
  { label: 'BTP & Rénovation', href: '/secteurs/btp' },
  { label: 'Transport & Logistique', href: '/secteurs/transport' },
  { label: 'Assurance & Finance', href: '/secteurs/assurance' },
  { label: 'Industrie', href: '/secteurs/industrie' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <path d="M16 28 A12 12 0 1 1 27.196 10" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <circle cx="27.196" cy="10" r="2.5" fill="#F5C518"/>
              </svg>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem' }}>
                helprospect
              </span>
            </div>
            <p className="text-xs text-[#444] leading-relaxed mb-5">
              Agence de génération de leads B2B par téléprospection, cold email et LinkedIn.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/helprospect"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-[#1A1A1A] rounded-lg text-[#555] hover:text-[#F5C518] hover:border-[#F5C518] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold text-[#333] uppercase tracking-widest mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Notre méthode', href: '/#methode' },
                { label: 'Résultats', href: '/#resultats' },
                { label: 'FAQ', href: '/#faq' },
                { label: 'Prendre RDV', href: 'https://calendly.com/helprospect/30min' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-xs text-[#555] hover:text-[#F5C518] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Secteurs */}
          <div>
            <p className="text-xs font-bold text-[#333] uppercase tracking-widest mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
              Secteurs
            </p>
            <ul className="flex flex-col gap-3">
              {secteurLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-xs text-[#555] hover:text-[#F5C518] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold text-[#333] uppercase tracking-widest mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:contact@helprospect.fr" className="text-xs text-[#555] hover:text-[#F5C518] transition-colors">
                  contact@helprospect.fr
                </a>
              </li>
              <li>
                <a href="tel:+33756993981" className="text-xs text-[#555] hover:text-[#F5C518] transition-colors">
                  +33 7 56 99 39 81
                </a>
              </li>
              <li className="text-xs text-[#444]">Paris, France</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#111] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#333]">
            © 2025 Helprospect. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-xs text-[#333] hover:text-[#555] transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-xs text-[#333] hover:text-[#555] transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
