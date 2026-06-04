'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '@/lib/data'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number>(0)

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? -1 : i))

  return (
    <section id="faq" className="bg-cream py-24 max-md:py-16">
      <div className="max-w-content mx-auto px-12 max-md:px-5">

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">

          {/* ── Left sticky ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-28 self-start"
          >
            <p className="font-body text-terra text-sm tracking-widest uppercase mb-4">FAQ</p>
            <h2 className="font-heading text-deep italic leading-tight mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              자주 묻는<br />질문
            </h2>
            <p className="font-body text-muted text-sm leading-relaxed mb-8">
              더 궁금한 점은 카카오 채널로 바로 문의해주세요. 평일 10–19시 빠른 답변 드려요.
            </p>
            <a
              href="https://pf.kakao.com/_balion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-kakao text-kakaoD font-body font-semibold text-sm px-5 py-3 rounded-xl shadow-[0_4px_16px_rgba(250,225,0,0.35)] hover:bg-yellow-300 active:scale-95 transition-all duration-200"
            >
              💬 카카오로 문의하기
            </a>
          </motion.div>

          {/* ── Right accordion ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => {
              const isOpen = openIdx === i
              return (
                <div
                  key={i}
                  className={`rounded-xl border bg-cream overflow-hidden transition-all duration-200 ${
                    isOpen ? 'border-terra/35 shadow-warm' : 'border-warm hover:border-terra/20'
                  }`}
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-body text-deep font-medium text-sm leading-snug pr-4">
                      {faq.question}
                    </span>
                    {/* Toggle icon */}
                    <div
                      className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-terra rotate-45' : 'bg-warm'
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1v10M1 6h10" stroke={isOpen ? '#FBF8F3' : '#C67942'} strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 font-body text-muted text-sm leading-relaxed border-t border-warm pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
