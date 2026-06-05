'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { packageCombos } from '@/lib/data'

export default function PackageCombos() {
  return (
    <section id="packages" className="bg-sand py-24 max-md:py-16">
      <div className="max-w-content mx-auto px-12 max-md:px-5">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <p className="font-body text-terra text-sm tracking-widest uppercase mb-3">
            Package Combos
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-serif text-deep leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              묶어서 더 특별하게
            </h2>
            <p className="font-body text-muted text-sm">
              여러 투어를 하나로. 가이드부터 차량까지 한 번에.
            </p>
          </div>
        </motion.div>

        {/* 2 × 2 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packageCombos.map((combo, i) => (
            <motion.article
              key={combo.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group rounded-2xl overflow-hidden bg-cream ${
                combo.highlight
                  ? 'shadow-warm ring-1 ring-terra/25'
                  : 'shadow-card hover:shadow-card-hover'
              } transition-shadow duration-300`}
            >
              {/* 이미지 영역 */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={combo.image}
                  alt={combo.name}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* 배지 */}
                {combo.badge && (
                  <div className="absolute top-4 left-4 bg-kakao text-kakaoD text-xs font-body font-bold px-3 py-1 rounded-full shadow-kakao">
                    {combo.badge}
                  </div>
                )}

                {/* 하단 가격 오버레이 */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/85 to-transparent p-5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-cream text-xl font-semibold leading-snug">
                      {combo.name}
                    </h3>
                    <div className="text-right flex-shrink-0 ml-4">
                      <div className="font-heading italic text-terra text-xl font-bold leading-none">
                        ₩{combo.price.toLocaleString()}
                      </div>
                      <div className="font-body text-cream/40 text-xs mt-0.5">
                        /{combo.priceUnit}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 포함 항목 + CTA */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {combo.items.map((item, j) => (
                    <span
                      key={j}
                      className="font-body text-xs text-deep/65 bg-sand border border-warm px-2.5 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href="https://pf.kakao.com/_balion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-kakao text-kakaoD font-body font-semibold text-sm px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(250,225,0,0.35)] hover:bg-yellow-300 active:scale-95 transition-all duration-200"
                >
                  💬 카카오 문의
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
