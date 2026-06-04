'use client'

import { motion } from 'framer-motion'

const tableRows = [
  { label: '투어 가이드', general: '현지 가이드', balion: '유튜버 본인', type: 'hl' },
  { label: '그룹 규모', general: '20~50명', balion: '20명 한정', type: 'green' },
  { label: '영상 출연', general: '없음', balion: '유튜브 등장', type: 'hl' },
  { label: '히든 스팟', general: '표준 코스', balion: '유튜버 픽', type: 'green' },
  { label: '현지 합류', general: '불가', balion: '가능', type: 'green' },
  { label: '예약 방식', general: '앱 셀프', balion: '카카오 1:1', type: 'hl' },
  { label: '한국어 지원', general: '제한적', balion: '24시간', type: 'green' },
]

const strengthCards = [
  {
    icon: '🎥',
    title: '영상에 내가 나온다',
    desc: '30만 구독자 유튜브 채널에 직접 출연하는 경험. 여행이 콘텐츠가 됩니다.',
  },
  {
    icon: '🤝',
    title: '유튜버와 24시간 동행',
    desc: '식사, 투어, 이동, 숙소까지 조튜브가 직접 전 일정을 함께합니다.',
  },
  {
    icon: '🌴',
    title: '영상 공개 전 선체험',
    desc: '조튜브가 아직 공개하지 않은 발리 히든 코스를 여러분이 먼저 경험합니다.',
  },
]

export default function Difference() {
  return (
    <section id="difference" className="bg-sand py-24 max-md:py-16">
      <div className="max-w-content mx-auto px-12 max-md:px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <p className="font-body text-terra text-sm tracking-widest uppercase mb-3">Why BaliOn</p>
          <h2 className="font-heading text-deep italic leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            클룩·일반 패키지와 무엇이 다른가요?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Comparison table ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-card"
          >
            {/* Header row */}
            <div className="grid grid-cols-3 bg-dark">
              {['비교 항목', '클룩·일반', 'BaliOn'].map((h, i) => (
                <div key={i} className={`px-4 py-3.5 font-body text-xs font-semibold tracking-wide ${
                  i === 2 ? 'text-terra' : 'text-cream/50'
                }`}>
                  {h}
                </div>
              ))}
            </div>

            {/* Data rows */}
            {tableRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-b border-warm last:border-0 ${
                  i % 2 === 0 ? 'bg-cream' : 'bg-sand'
                }`}
              >
                <div className="px-4 py-3.5 font-body text-xs text-deep/65 border-r border-warm">
                  {row.label}
                </div>
                <div className="px-4 py-3.5 font-body text-xs text-muted border-r border-warm">
                  {row.general}
                </div>
                <div className={`px-4 py-3.5 font-body text-xs font-bold ${
                  row.type === 'hl' ? 'text-terra' : 'text-leaf'
                }`}>
                  {row.balion}
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── Strength cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {strengthCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-cream rounded-2xl shadow-card flex gap-0 overflow-hidden hover:shadow-card-hover transition-shadow duration-300"
              >
                {/* Terra left border */}
                <div className="w-1 bg-terra flex-shrink-0" />
                <div className="p-6">
                  <div className="text-2xl mb-3">{card.icon}</div>
                  <h3 className="font-heading text-deep italic text-xl font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="font-body text-muted text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
