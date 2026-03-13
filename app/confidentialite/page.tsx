import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politique de confidentialité – Helprospect',
}

export default function Confidentialite() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="text-3xl font-black mb-10 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Politique de confidentialité
          </h1>
          <div className="text-[#666] space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Collecte des données</h2>
              <p>Helprospect collecte uniquement les données nécessaires à la réalisation de ses services : nom, email, téléphone, et informations relatives à votre activité professionnelle.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Utilisation des données</h2>
              <p>Vos données sont utilisées exclusivement pour vous contacter dans le cadre de nos services et ne sont jamais revendues à des tiers.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Vos droits</h2>
              <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Contactez-nous à : contact@helprospect.fr</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
