'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const creatorStats = [
  { value: '75.6만', label: '구독자', en: 'Subscribers' },
  { value: '5.1억', label: '누적 조회', en: 'Total Views' },
  { value: '1,961', label: '업로드', en: 'Videos' },
]

const hashtags = ['#여행', '#발리', '#로컬경험', '#동남아']

export default function Creator() {
  return (
    <section id="creator-tour">

      {/* ── 드론 영상 배경 섹션 ── */}
      <div className="relative min-h-[80vh] flex items-center overflow-hidden">

        {/* 폴백 이미지 (모바일 / 영상 로딩 전) */}
        <Image
          src="/images/tours/batur/Batur1.png"
          alt="발리 바투르 풍경"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* 드론 영상 (데스크탑) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover max-md:hidden"
          aria-hidden="true"
        >
          <source src="/videos/drone.mp4" type="video/mp4" />
        </video>

        {/* rgba(0,0,0,0.5) 오버레이 */}
        <div className="absolute inset-0 bg-black/50" />

        {/* 에디토리얼 텍스트 */}
        <div className="relative z-10 max-w-content mx-auto px-12 max-md:px-5 w-full py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="font-body text-terra text-sm tracking-widest uppercase mb-6"
          >
            Creator Tour
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-cream leading-[1.5] max-w-2xl mb-10"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}
          >
            좋아하는 유튜버랑 24시간 같이 밥 먹고,<br />
            투어 다니고, 영상에도 나오는 여행.<br />
            <span className="text-cream/50">
              클룩에도 없고, 패키지 여행사에도 없어요.
            </span>{' '}
            <span className="text-terra italic">BaliOn에만 있어요.</span>
          </motion.blockquote>

          {/* 크리에이터 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center gap-6"
          >
            {/* Profile */}
            <div className="flex items-center gap-4 glass-dark rounded-2xl px-5 py-4 w-fit">
              <div className="w-12 h-12 rounded-full bg-terra flex items-center justify-center text-2xl flex-shrink-0">
                🎥
              </div>
              <div>
                <div className="font-heading text-cream font-bold text-lg italic">조튜브</div>
                <div className="font-body text-cream/50 text-xs mt-0.5">여행·라이프 크리에이터</div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-5">
              {creatorStats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-heading text-terra italic text-xl font-bold">{s.value}</div>
                  <div className="font-body text-cream/40 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Hashtags */}
            <div className="flex flex-wrap gap-2">
              {hashtags.map((tag) => (
                <span key={tag} className="font-body text-xs text-terra/80 bg-terra/10 border border-terra/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── 3개 패키지 라인 카드 ── */}
      <div className="bg-dark py-16 max-md:py-12">
        <div className="max-w-content mx-auto px-12 max-md:px-5">
          <p className="font-body text-cream/35 text-xs tracking-widest uppercase text-center mb-8">
            크리에이터 투어 패키지 라인
          </p>
          <PackageLineCards />
        </div>
      </div>
    </section>
  )
}

// ── 3개 라인 카드 (인라인 컴포넌트) ──────────────────────────────────────────

import { packages } from '@/lib/data'

function PackageLineCards() {
  const tagStyle: Record<string, string> = {
    standard: 'bg-gold/20 text-gold border-gold/30',
    premium: 'bg-terra/25 text-terraLight border-terra/40',
    luxury: 'bg-red-900/30 text-red-400 border-red-700/30',
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {packages.map((pkg, i) => {
        const isPremium = pkg.featured
        const koPrice = pkg.priceNote.split(' / ')[0].replace('한국 출발 ', '')
        const localPrice = pkg.priceNote.split(' / ')[1].replace('현지 합류 ', '')

        return (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className={`rounded-2xl overflow-hidden border ${
              isPremium
                ? 'border-terra/30 shadow-warm'
                : 'border-white/10'
            }`}
          >
            {/* Head */}
            <div className={`p-6 ${isPremium ? 'bg-[#1e0e06]' : 'bg-white/5'}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-[11px] font-body px-2.5 py-0.5 rounded-full border ${tagStyle[pkg.id]}`}>
                  {pkg.tag}
                </span>
                {isPremium && (
                  <span className="text-[10px] font-body font-bold bg-kakao text-kakaoD px-2 py-0.5 rounded-full">
                    BEST
                  </span>
                )}
              </div>
              <h3 className={`font-heading italic text-xl font-bold mb-1 ${isPremium ? 'text-cream' : 'text-cream/85'}`}>
                {pkg.name}
              </h3>
              <p className={`font-body text-xs mb-4 ${isPremium ? 'text-cream/40' : 'text-cream/30'}`}>
                {pkg.nights}박 {pkg.days}일 · {pkg.hotelGrade}
              </p>
              <ul className="space-y-1.5">
                {pkg.highlights.slice(0, 4).map((h, j) => (
                  <li key={j} className={`flex items-start gap-2 font-body text-xs ${isPremium ? 'text-cream/65' : 'text-cream/45'}`}>
                    <span className="text-terra mt-0.5 flex-shrink-0">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            {/* Foot */}
            <div className={`px-6 py-4 border-t ${isPremium ? 'bg-[#1e0e06] border-terra/20' : 'bg-white/3 border-white/8'}`}>
              <div className="font-heading italic text-terra text-xl font-bold">{koPrice}</div>
              <div className={`font-body text-xs mb-4 ${isPremium ? 'text-cream/35' : 'text-cream/25'}`}>
                현지 합류 {localPrice}
              </div>
              <a
                href="https://pf.kakao.com/_balion"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-1.5 w-full font-body font-semibold text-xs px-4 py-2.5 rounded-full active:scale-95 transition-all duration-200 ${
                  isPremium
                    ? 'bg-terra text-cream hover:bg-terraLight'
                    : 'border border-white/20 text-cream/60 hover:border-white/40'
                }`}
              >
                💬 카카오로 신청
              </a>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
