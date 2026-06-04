'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const creatorKpis = [
  { value: '75.6만', label: '구독자' },
  { value: '5.1억', label: '누적 조회' },
  { value: '1,961', label: '업로드' },
]

const hashtags = ['#여행', '#발리', '#로컬경험', '#동남아']

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
})

export default function Creator() {
  return (
    <section id="creator" className="bg-dark py-24 max-md:py-16">
      <div className="max-w-content mx-auto px-12 max-md:px-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Mobile: image first; Desktop: image on right ── */}
          {/* Image comes second in DOM → reorder via CSS */}

          {/* LEFT: Text content */}
          <div className="md:order-1 order-2">

            {/* Label */}
            <motion.p
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="font-body text-gold text-sm tracking-widest uppercase mb-4"
            >
              Lead Creator
            </motion.p>

            {/* h2 */}
            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-heading text-cream italic leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              조튜브와 함께<br />
              <em className="not-italic text-terra">가는 발리</em>
            </motion.h2>

            {/* Profile card */}
            <motion.div
              variants={fadeUp(0.18)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white/6 border border-white/10 rounded-2xl px-5 py-4 mb-6"
            >
              <div className="w-12 h-12 rounded-full bg-terra flex items-center justify-center text-2xl flex-shrink-0">
                🎥
              </div>
              <div>
                <div className="font-heading text-cream font-bold text-lg italic">
                  조튜브 (JoTube)
                </div>
                <div className="font-body text-cream/50 text-sm">여행·라이프 크리에이터</div>
              </div>
            </motion.div>

            {/* KPI grid */}
            <motion.div
              variants={fadeUp(0.25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 mb-6"
            >
              {creatorKpis.map((kpi, i) => (
                <div key={i} className="bg-white/6 border border-white/10 rounded-xl p-4 text-center">
                  <div className="font-heading text-terra italic text-xl font-bold">{kpi.value}</div>
                  <div className="font-body text-cream/45 text-xs mt-1">{kpi.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp(0.32)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-body text-cream/60 text-sm leading-relaxed mb-5"
            >
              발리를 누구보다 잘 아는 조튜브와 함께라면, 표준 코스는 잊어도 돼요.
              히든 카페부터 현지 맛집, 포토스팟까지 — 유튜브에 담은 그 여행을 직접 경험해보세요.
            </motion.p>

            {/* Hashtags */}
            <motion.div
              variants={fadeUp(0.38)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {hashtags.map((tag) => (
                <span key={tag} className="font-body text-terra/80 text-sm bg-terra/10 border border-terra/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Image (order-1 on mobile = appears first) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="md:order-2 order-1 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.4)]">
              <Image
                src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=85"
                alt="발리 팸투어 현장"
                fill
                className="object-cover"
              />

              {/* Overlay badge — bottom left */}
              <div className="absolute bottom-4 left-4 glass-dark rounded-xl px-4 py-3">
                <div className="font-body text-cream font-semibold text-sm">2026 발리 팸투어</div>
                <div className="font-body text-cream/55 text-xs mt-0.5">20명 한정 · 선착순 마감</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
