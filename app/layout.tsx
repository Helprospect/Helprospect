import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agence de Génération de Leads B2B – Helprospect',
  description: 'Helprospect génère vos leads B2B qualifiés par téléprospection, cold email et LinkedIn. Premiers résultats en 72h. Sans engagement.',
  keywords: 'génération leads B2B, agence prospection B2B, téléprospection France, cold email B2B, leads qualifiés',
  openGraph: {
    title: 'Helprospect – Agence de Génération de Leads B2B',
    description: 'Nous prospectons pour vous. Vous, vous vendez.',
    url: 'https://www.helprospect.fr',
    siteName: 'Helprospect',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Helprospect",
              "description": "Agence de génération de leads B2B par téléprospection, cold email et LinkedIn",
              "url": "https://www.helprospect.fr",
              "telephone": "+33756993981",
              "email": "contact@helprospect.fr",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paris",
                "addressCountry": "FR"
              },
              "areaServed": "FR",
              "serviceType": "Génération de leads B2B"
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
