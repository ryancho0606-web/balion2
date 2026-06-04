import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Creator from '@/components/sections/Creator'
import Packages from '@/components/sections/Packages'
import Itinerary from '@/components/sections/Itinerary'
import Difference from '@/components/sections/Difference'
import Join from '@/components/sections/Join'
import Reviews from '@/components/sections/Reviews'
import FAQ from '@/components/sections/FAQ'
import CTAFinal from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Creator />
        <Packages />
        <Itinerary />
        <Difference />
        <Join />
        <Reviews />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
