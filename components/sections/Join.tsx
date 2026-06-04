'use client'

import { motion } from 'framer-motion'

const koSteps = [
  '카카오 @BaliOn 채널에서 라인 선택 후 신청',
  '예약금 30% 결제 (카카오페이)',
  '출발 30일 전 잔금 결제 + 항공 정보 전달',
  'D-7 준비물·집합 장소 안내 알림톡',
  '인천공항에서 인솔자 만나서 출발!',
]

const localSteps = [
  '카카오 @BaliOn 채널에서 현지 합류 선택',
  '항공·숙박 개별 준비 (추천 리스트 제공)',
  '현지 합류비 결제 후 일정 확정',
  '첫날 저녁 웰컴 디너 장소에서 합류',
  '마지막 날 이후 개별 일정 자유롭게',
]

const koPrices = [
  { nights: '3박5일', price: '199만~' },
  { nights: '4박6일', price: '299만~' },
  { nights: '5박7일', price: '449만~' },
]

const localPrices = [
  { nights: '3박5일', price: '99만~' },
  { nights: '4박6일', price: '169만~' },
  { nights: '5박7일', price: '299만~' },
]

export default function Join() {
  return (
    <section id="join" className="bg-cream py-24 max-md:py-16">
      <div className="max-w-content mx-auto px-12 max-md:px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="text-center mb-12"
        >
          <p className="font-body text-terra text-sm tracking-widest uppercase mb-3">How to Join</p>
          <h2 className="font-heading text-deep italic leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            어떻게 참여하나요?
          </h2>
        </motion.div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* ── Korea departure card ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0 }}
            className="rounded-2xl overflow-hidden bg-dark shadow-card"
          >
            <div className="p-7">
              {/* Tag */}
              <span className="inline-flex items-center gap-1.5 font-body text-xs px-3 py-1 rounded-full bg-terra/20 border border-terra/35 text-terraLight mb-5">
                ✈ 한국 출발 패키지
              </span>

              <h3 className="font-heading text-cream italic text-2xl font-bold mb-6">
                인천에서 시작해요
              </h3>

              {/* Steps */}
              <ol className="space-y-4 mb-7">
                {koSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-terra flex items-center justify-center text-cream text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="font-body text-cream/70 text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>

              {/* Price box */}
              <div className="bg-white/8 border border-white/12 rounded-xl p-4">
                <div className="font-body text-cream/40 text-xs mb-3 tracking-wide uppercase">한국 출발 기준 가격</div>
                <div className="grid grid-cols-3 gap-3">
                  {koPrices.map((p, i) => (
                    <div key={i} className="text-center">
                      <div className="font-heading text-terra italic text-lg font-bold">{p.price}</div>
                      <div className="font-body text-cream/40 text-xs mt-0.5">{p.nights}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Local join card ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="rounded-2xl overflow-hidden bg-cream border border-warm shadow-card"
          >
            <div className="p-7">
              {/* Tag */}
              <span className="inline-flex items-center gap-1.5 font-body text-xs px-3 py-1 rounded-full bg-leaf/15 border border-leaf/30 text-leaf mb-5">
                🌴 현지 합류
              </span>

              <h3 className="font-heading text-deep italic text-2xl font-bold mb-6">
                발리에서 바로 합류
              </h3>

              {/* Steps */}
              <ol className="space-y-4 mb-7">
                {localSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-leaf flex items-center justify-center text-cream text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="font-body text-deep/65 text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>

              {/* Price box */}
              <div className="bg-sand border border-warm rounded-xl p-4">
                <div className="font-body text-muted text-xs mb-3 tracking-wide uppercase">현지 합류 기준 가격</div>
                <div className="grid grid-cols-3 gap-3">
                  {localPrices.map((p, i) => (
                    <div key={i} className="text-center">
                      <div className="font-heading text-terra italic text-lg font-bold">{p.price}</div>
                      <div className="font-body text-muted text-xs mt-0.5">{p.nights}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Warning/notice box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-terra/8 border border-terra/20 p-5"
        >
          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center">
            {[
              '최소 10명 / 최대 20명 한정',
              '여행자 보험 필수',
              '취소: 60일전 100% · 30일전 80% · 14일전 50% · 7일전 30%',
            ].map((note, i) => (
              <span key={i} className="font-body text-terra/80 text-xs flex items-center gap-1.5">
                <span className="text-terra">✦</span> {note}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
