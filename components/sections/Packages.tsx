'use client'

import { motion } from 'framer-motion'
import { packages } from '@/lib/data'

const tagStyle: Record<string, string> = {
  standard: 'bg-gold/20 text-gold border-gold/30',
  premium: 'bg-terra/25 text-terraLight border-terra/40',
  luxury: 'bg-red-900/30 text-red-400 border-red-700/30',
}

export default function Packages() {
  return (
    <section id="packages" className="bg-cream py-24 max-md:py-16">
      <div className="max-w-content mx-auto px-12 max-md:px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <p className="font-body text-terra text-sm tracking-widest uppercase mb-3">Travel Packages</p>
          <h2 className="font-heading text-deep italic leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            나에게 맞는 발리를 고르세요
          </h2>
        </motion.div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, i) => {
            const isPremium = pkg.featured
            const koPrice = pkg.priceNote.split(' / ')[0].replace('한국 출발 ', '')
            const localPrice = pkg.priceNote.split(' / ')[1].replace('현지 합류 ', '')

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`rounded-2xl overflow-hidden flex flex-col shadow-card transition-shadow duration-300 hover:shadow-card-hover ${
                  isPremium
                    ? '-translate-y-4 shadow-[0_12px_48px_rgba(198,121,66,0.35)]'
                    : ''
                }`}
              >
                {/* pkg-head */}
                <div className={`p-7 flex-1 ${isPremium ? 'bg-dark' : 'bg-cream border-b border-warm'}`}>

                  {/* Tag badge */}
                  <span className={`inline-flex items-center text-xs font-body px-2.5 py-1 rounded-full border mb-4 ${tagStyle[pkg.id]}`}>
                    {pkg.tag}
                  </span>

                  {/* Name + duration */}
                  <div className="mb-1">
                    <div className={`font-heading italic text-2xl font-bold ${isPremium ? 'text-cream' : 'text-deep'}`}>
                      {pkg.name}
                      {isPremium && (
                        <span className="ml-2 text-xs font-body font-bold bg-kakao text-kakaoD px-2 py-0.5 rounded-full not-italic">
                          BEST
                        </span>
                      )}
                    </div>
                    <div className={`font-body text-xs mt-1 ${isPremium ? 'text-cream/45' : 'text-muted'}`}>
                      {pkg.nights}박 {pkg.days}일 · {pkg.hotelGrade}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={`my-5 h-px ${isPremium ? 'bg-white/10' : 'bg-warm'}`} />

                  {/* Includes list — first 5 */}
                  <ul className="space-y-2.5">
                    {pkg.includes.slice(0, 5).map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="text-terra flex-shrink-0 mt-0.5 text-xs">✦</span>
                        <span className={`font-body text-sm leading-snug ${isPremium ? 'text-cream/70' : 'text-deep/75'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* pkg-foot */}
                <div className={`p-6 ${isPremium ? 'bg-dark border-t border-white/10' : 'bg-cream'}`}>
                  {/* Price */}
                  <div className="mb-1">
                    <span className={`font-body text-xs ${isPremium ? 'text-cream/40' : 'text-muted'}`}>
                      한국 출발
                    </span>
                    <div className="font-heading text-terra italic text-2xl font-bold leading-tight">
                      {koPrice}
                    </div>
                  </div>
                  <div className={`font-body text-xs mb-5 ${isPremium ? 'text-cream/35' : 'text-muted'}`}>
                    현지 합류 {localPrice}
                  </div>

                  {/* CTA */}
                  <a
                    href="https://pf.kakao.com/_balion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-body font-semibold text-sm px-5 py-3 rounded-full active:scale-95 transition-all duration-200 ${
                      isPremium
                        ? 'bg-terra text-cream hover:bg-terraLight shadow-warm'
                        : 'bg-dark text-cream hover:bg-deep'
                    }`}
                  >
                    💬 카카오로 신청
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
