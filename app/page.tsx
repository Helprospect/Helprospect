import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Methode from '@/components/Methode'
import Results from '@/components/Results'
import Secteurs from '@/components/Secteurs'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Methode />
        <Results />
        <Secteurs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
