'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const kpis = [
  { value: '20명', label: '한정 소규모' },
  { value: '75.6만', label: '조튜브 구독자' },
  { value: '4.9★', label: '평균 만족도' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ── 폴백 이미지 (항상 렌더링 — 영상 로딩 전 / 모바일) ── */}
      <Image
        src="/images/tours/nusa/Nusa_Penida_1.JPG"
        alt="발리 누사 페니다 풍경"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ── ATV 영상 배경 (데스크탑 전용) ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover max-md:hidden"
        aria-hidden="true"
      >
        <source src="/videos/atv.mp4" type="video/mp4" />
      </video>

      {/* ── 그라데이션 오버레이 ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/55 to-dark/10" />

      {/* ── 좌하단 메인 콘텐츠 ── */}
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="max-w-content mx-auto px-12 max-md:px-5 w-full pb-20 max-md:pb-16">
          <div className="max-w-2xl">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-kakao/50 bg-kakao/10 text-cream rounded-full px-4 py-1.5 text-sm font-body mb-7"
            >
              🎥 <span>Creator Tour · BaliOn × 조튜브</span>
            </motion.div>

            {/* h1 */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12 }}
              className="font-heading text-cream leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
            >
              유튜버와 함께<br />
              <em className="not-italic italic text-terra">떠나는 발리</em>
            </motion.h1>

            {/* Sub — editorial serif */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="font-serif text-cream/70 text-base max-md:text-sm leading-relaxed max-w-xl mb-9"
            >
              클룩엔 없어요. 발리에서 좋아하는 유튜버와
              24시간 같이 먹고 놀고 촬영하는 딱 하나뿐인 여행.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#day-tours"
                className="inline-flex items-center gap-2 bg-cream text-deep font-body font-semibold text-sm px-6 py-3 rounded-full hover:bg-sand active:scale-95 transition-all duration-200"
              >
                🌴 투어 둘러보기
              </a>
              <a
                href="https://pf.kakao.com/_balion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-kakao text-kakaoD font-body font-semibold text-sm px-6 py-3 rounded-full shadow-kakao hover:bg-yellow-300 active:scale-95 transition-all duration-200"
              >
                💛 카카오로 신청
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── 우하단 KPI (데스크탑 전용) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="absolute right-12 bottom-20 hidden lg:flex flex-col gap-5"
      >
        {kpis.map((kpi, i) => (
          <div key={i} className="text-right">
            <div className="font-heading text-gold italic text-3xl font-bold leading-none">
              {kpi.value}
            </div>
            <div className="font-body text-cream/40 text-xs mt-1 tracking-wide">
              {kpi.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── 하단 중앙 스크롤 힌트 ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-cream/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-5 h-5 border-b-2 border-r-2 border-cream/25 rotate-45"
        />
      </motion.div>
    </section>
  )
}
