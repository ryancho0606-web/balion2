import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Creator from '@/components/sections/Creator'
import DayTours from '@/components/sections/DayTours'
import PackageCombos from '@/components/sections/PackageCombos'
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
        {/* 1. 히어로 — ATV 영상 배경 */}
        <Hero />

        {/* 2. 크리에이터 투어 — 드론 영상 배경 + 3개 패키지 라인 */}
        <Creator />

        {/* 3. 당일 투어 — 10개 블로그 카드 + 카테고리 필터 */}
        <DayTours />

        {/* 4. 조합 패키지 — 4개 피처 카드 */}
        <PackageCombos />

        {/* 5. 일정 탭 (유지) */}
        <Itinerary />

        {/* 6. 비교표 (유지) */}
        <Difference />

        {/* 7. 한국출발 / 현지합류 (유지) */}
        <Join />

        {/* 8. 후기 6개 (유지) */}
        <Reviews />

        {/* 9. FAQ (유지) */}
        <FAQ />

        {/* 10. 최종 CTA */}
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
