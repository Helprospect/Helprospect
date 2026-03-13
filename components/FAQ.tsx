'use client'
import { useState } from 'react'

const faqs = [
  {
    q: "Qu'est-ce qu'une agence de génération de leads B2B ?",
    a: "Une agence de génération de leads B2B identifie et contacte des prospects qualifiés en votre nom, pour remplir votre pipeline commercial. Chez Helprospect, on gère tout le cycle de prospection — ciblage, prise de contact, qualification, prise de rendez-vous — pour que vos commerciaux n'aient plus qu'à vendre.",
  },
  {
    q: "Combien de temps pour obtenir mes premiers leads ?",
    a: "Nos premières campagnes sont opérationnelles en 72h après le démarrage. Le ciblage, le copywriting et les outils sont configurés dès J+1. Les premières prises de contact partent à J+3, avec des retours dès la première semaine selon votre secteur.",
  },
  {
    q: "Quelle est la différence avec un centre d'appel classique ?",
    a: "Un centre d'appel passe des appels en masse sur des fichiers génériques. Helprospect construit des campagnes ciblées, multicanales (téléphone + cold email + LinkedIn) avec un copywriting personnalisé par secteur. Nos opérateurs sont formés sur votre produit et vos personas — ce ne sont pas des téléopérateurs lisant un script générique.",
  },
  {
    q: "Combien coûte une campagne de génération de leads ?",
    a: "Nos tarifs dépendent du volume de prospects à contacter, du nombre de canaux activés et de la durée de la mission. On travaille sans engagement longue durée — vous pouvez tester avec une campagne courte. Prenez rendez-vous pour recevoir un devis personnalisé sous 24h.",
  },
  {
    q: "Est-ce que vous respectez le RGPD dans vos campagnes ?",
    a: "Oui. Toutes nos sources de données sont conformes RGPD. Pour le cold email B2B, nous opérons dans le cadre de l'intérêt légitime défini par la CNIL. Nos fichiers de prospection proviennent de sources vérifiées et nos campagnes incluent systématiquement des mécanismes de désinscription.",
  },
  {
    q: "Vous travaillez sur quels secteurs d'activité ?",
    a: "Nous intervenons principalement sur : l'énergie et les ENR, la téléphonie et le SaaS, le BTP et la rénovation, le transport et la logistique, l'assurance et la finance, et l'industrie. Si votre secteur n'est pas listé, contactez-nous — on étudie chaque demande au cas par cas.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label justify-center mb-6">FAQ</div>
          <h2
            className="text-4xl lg:text-5xl font-black leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Vos questions,
            <br />
            <span className="text-gradient">nos réponses.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#111] border rounded-xl overflow-hidden transition-colors duration-200"
              style={{ borderColor: open === i ? '#F5C518' : '#1A1A1A' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left flex items-center justify-between gap-4 p-6"
              >
                <span
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-200"
                  style={{ background: open === i ? '#F5C518' : '#1A1A1A', color: open === i ? '#0A0A0A' : '#888' }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d={open === i ? 'M2 5h6' : 'M5 2v6M2 5h6'}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                style={{
                  maxHeight: open === i ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}
              >
                <p className="px-6 pb-6 text-sm text-[#666] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
