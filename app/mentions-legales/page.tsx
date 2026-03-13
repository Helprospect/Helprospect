import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mentions légales – Helprospect',
  description: 'Mentions légales de Helprospect, agence de génération de leads B2B.',
}

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="text-3xl font-black mb-10 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Mentions légales
          </h1>
          <div className="prose prose-invert prose-sm max-w-none text-[#666] space-y-6">
            <section>
              <h2 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Éditeur du site</h2>
              <p>Helprospect – Agence de génération de leads B2B<br />
              Paris, France<br />
              Email : contact@helprospect.fr<br />
              Téléphone : +33 7 56 99 39 81</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Hébergement</h2>
              <p>Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 900, San Francisco, CA 94104, États-Unis.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Propriété intellectuelle</h2>
              <p>L'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de Helprospect. Toute reproduction sans autorisation est interdite.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Données personnelles</h2>
              <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits : contact@helprospect.fr</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
