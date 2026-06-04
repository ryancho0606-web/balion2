'use client'

import { motion } from 'framer-motion'
import { reviews } from '@/lib/data'

const avatarEmoji: Record<string, string> = {
  '김지': '👩',
  '이준': '👫',
  '박민': '👨',
  '최수': '👩',
  '강동': '👨',
  '정은': '👩',
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-sand py-24 max-md:py-16">
      <div className="max-w-content mx-auto px-12 max-md:px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <p className="font-body text-terra text-sm tracking-widest uppercase mb-3">Reviews</p>
            <h2 className="font-heading text-deep italic leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              함께한 분들의 후기
            </h2>
          </div>
          <div className="flex items-center gap-2 font-body text-deep">
            <span className="text-gold text-xl">⭐</span>
            <span className="font-heading italic text-3xl font-bold text-terra">4.9</span>
            <span className="text-muted text-sm">· 1,200+ 후기 평균</span>
          </div>
        </motion.div>

        {/* 3-col card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              className="bg-cream rounded-2xl shadow-card p-6 flex flex-col hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className={`text-sm ${j < review.rating ? 'text-gold' : 'text-warm'}`}>★</span>
                ))}
              </div>

              {/* Review text — Noto Serif KR */}
              <p className="font-serif text-deep/80 text-sm leading-relaxed flex-1 mb-5 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-warm">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-xl flex-shrink-0">
                  {avatarEmoji[review.initials] ?? '👤'}
                </div>
                <div className="min-w-0">
                  <div className="font-body text-deep font-semibold text-sm truncate">
                    {review.name}
                  </div>
                  <div className="font-body text-muted text-xs mt-0.5">{review.ageLocation}</div>
                </div>
                <div className="ml-auto flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="bg-terra/10 text-terra text-[10px] font-body px-2 py-0.5 rounded-full border border-terra/20 whitespace-nowrap">
                    {review.packageType}
                  </span>
                  {review.badge && (
                    <span className="bg-warm text-muted text-[10px] font-body px-2 py-0.5 rounded-full whitespace-nowrap">
                      {review.badge}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
