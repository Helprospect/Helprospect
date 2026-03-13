import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const secteurs: Record<string, {
  title: string
  metaDesc: string
  hero: string
  desc: string
  points: string[]
  keywords: string
}> = {
  energie: {
    title: 'Génération de Leads Énergie & ENR',
    metaDesc: 'Helprospect génère vos leads B2B dans le secteur de l\'énergie et des ENR : fournisseurs, panneaux solaires, bornes de recharge. Résultats en 72h.',
    hero: 'Leads qualifiés pour l\'énergie & les ENR',
    desc: 'Nous prospectons pour les acteurs de l\'énergie : fournisseurs alternatifs, installateurs de panneaux solaires, opérateurs de bornes de recharge, auditeurs énergétiques.',
    points: [
      'Ciblage décisionnaires : DAF, DG, responsables énergie',
      'Secteurs : industrie, tertiaire, collectivités',
      'Canaux : téléphone + cold email + LinkedIn',
      'Qualification sur la consommation et les projets en cours',
    ],
    keywords: 'leads énergie B2B, génération leads ENR, prospection panneaux solaires, leads bornes recharge',
  },
  telephonie: {
    title: 'Génération de Leads Téléphonie & SaaS',
    metaDesc: 'Helprospect génère vos leads B2B pour les éditeurs SaaS, opérateurs télécom et solutions cloud. Prospection multicanale, résultats dès 72h.',
    hero: 'Leads qualifiés pour le SaaS & la téléphonie B2B',
    desc: 'Nous prospectons pour les éditeurs de logiciels, opérateurs télécom et solutions cloud. Notre équipe est formée sur les cycles de vente complexes du SaaS B2B.',
    points: [
      'Ciblage DSI, CTO, DAF selon votre solution',
      'Qualification sur la taille d\'entreprise et le budget',
      'Prospection cold email à haute délivrabilité',
      'Scripts d\'appel adaptés aux objections SaaS',
    ],
    keywords: 'leads SaaS B2B, génération leads logiciel, prospection télécom, leads cloud',
  },
  btp: {
    title: 'Génération de Leads BTP & Rénovation',
    metaDesc: 'Helprospect génère vos leads B2B dans le BTP : maîtres d\'ouvrage, promoteurs, facility managers. Prospection téléphonique et email. Résultats en 72h.',
    hero: 'Leads qualifiés pour le BTP & la rénovation',
    desc: 'Nous prospectons pour les entreprises du bâtiment : generals contractors, bureaux d\'études, entreprises d\'isolation, second œuvre, rénovation énergétique.',
    points: [
      'Ciblage maîtres d\'ouvrage, promoteurs, DAF',
      'Qualification sur les projets en cours et le budget travaux',
      'Prospection téléphonique prioritaire sur ce secteur',
      'Base de données géolocalisée par département',
    ],
    keywords: 'leads BTP B2B, prospection bâtiment, génération leads rénovation, leads maîtres d\'ouvrage',
  },
  transport: {
    title: 'Génération de Leads Transport & Logistique',
    metaDesc: 'Helprospect génère vos leads B2B dans le transport et la logistique. Prospection multicanale pour prestataires logistiques, transporteurs. Résultats en 72h.',
    hero: 'Leads qualifiés pour le transport & la logistique',
    desc: 'Nous prospectons pour les acteurs du transport et de la logistique : prestataires 3PL, transporteurs routiers, opérateurs last-mile, solutions WMS/TMS.',
    points: [
      'Ciblage directeurs supply chain, responsables logistique, DAF',
      'Qualification sur le volume, les flux et les prestataires actuels',
      'Prospection sur les donneurs d\'ordre industriels et retail',
      'Scripts adaptés aux appels d\'offres transport',
    ],
    keywords: 'leads transport B2B, prospection logistique, génération leads supply chain, leads 3PL',
  },
  assurance: {
    title: 'Génération de Leads Assurance & Finance',
    metaDesc: 'Helprospect génère vos leads B2B pour les courtiers, CGP et cabinets comptables. Prospection multicanale, conformité RGPD. Résultats en 72h.',
    hero: 'Leads qualifiés pour l\'assurance & la finance',
    desc: 'Nous prospectons pour les courtiers en assurance d\'entreprise, les CGP, les cabinets d\'expertise comptable et les solutions de financement B2B.',
    points: [
      'Ciblage DAF, dirigeants, DRH selon le produit',
      'Qualification sur les contrats en cours et les échéances',
      'Prospection 100% conforme RGPD et DDA',
      'Cold email à haute personnalisation financière',
    ],
    keywords: 'leads assurance B2B, prospection courtier, génération leads CGP, leads cabinet comptable',
  },
  industrie: {
    title: 'Génération de Leads Industrie & Machines',
    metaDesc: 'Helprospect génère vos leads B2B dans l\'industrie : fabricants, équipementiers, maintenance. Prospection téléphonique et email. Résultats en 72h.',
    hero: 'Leads qualifiés pour l\'industrie & les équipements',
    desc: 'Nous prospectons pour les fabricants, équipementiers industriels, prestataires de maintenance et fournisseurs de matières premières.',
    points: [
      'Ciblage directeurs de production, acheteurs, DAF',
      'Qualification sur les équipements existants et les projets d\'investissement',
      'Prospection téléphonique directe sur les sites industriels',
      'Base de données par code NAF et taille d\'entreprise',
    ],
    keywords: 'leads industrie B2B, prospection industrielle, génération leads fabricants, leads maintenance industrielle',
  },
}

export async function generateStaticParams() {
  return Object.keys(secteurs).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = secteurs[params.slug]
  if (!s) return {}
  return {
    title: `${s.title} – Helprospect`,
    description: s.metaDesc,
    keywords: s.keywords,
  }
}

export default function SecteurPage({ params }: { params: { slug: string } }) {
  const s = secteurs[params.slug]
  if (!s) notFound()

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
            style={{ background: 'radial-gradient(circle, #F5C518 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
          />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <Link href="/#secteurs" className="inline-flex items-center gap-2 text-xs text-[#555] hover:text-[#F5C518] transition-colors mb-8">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M7 12L2 7l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Tous les secteurs
            </Link>
            <div
              className="inline-flex items-center gap-2 text-xs font-bold text-[#F5C518] uppercase tracking-widest mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              <span className="w-5 h-px bg-[#F5C518]" />
              Secteur spécialisé
            </div>
            <h1
              className="text-4xl md:text-5xl font-black leading-tight mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {s.hero}
            </h1>
            <p className="text-[#666] text-base leading-relaxed mb-8">
              {s.desc}
            </p>
            <a
              href="https://calendly.com/helprospect/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Démarrer une campagne
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Points forts */}
        <section className="py-16 bg-[#0D0D0D]">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-2xl font-black mb-8 text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Notre approche sur ce secteur
            </h2>
            <ul className="flex flex-col gap-4">
              {s.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4 p-5 bg-[#111] border border-[#1A1A1A] rounded-xl">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F5C518] flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm text-[#888]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2
              className="text-3xl font-black mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Prêt à générer vos premiers leads ?
            </h2>
            <p className="text-[#555] text-sm mb-8">
              Un appel de 30 minutes pour caler votre ciblage et lancer la campagne. Résultats en 72h.
            </p>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
