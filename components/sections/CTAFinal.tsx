'use client'

import { motion } from 'framer-motion'

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden">

      {/* Parallax background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1600&q=80')`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/80 to-dark/90" />

      <div className="relative z-10 py-28 max-md:py-20">
        <div className="max-w-content mx-auto px-12 max-md:px-5 text-center">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-gold text-sm tracking-widest uppercase mb-5"
          >
            20명 한정 · 선착순
          </motion.p>

          {/* h2 */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-heading text-cream leading-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
          >
            <em className="not-italic text-terra italic">지금 신청</em>하지 않으면<br />
            다음 기회를 기다려야 해요
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="font-body text-cream/65 text-base leading-relaxed max-w-md mx-auto mb-10"
          >
            조튜브와 함께하는 발리 여행은 매 회차 조기 마감됩니다.<br />
            지금 바로 자리를 확보하세요.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://pf.kakao.com/_balion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-kakao text-kakaoD font-body font-bold text-base px-8 py-4 rounded-full shadow-[0_4px_24px_rgba(250,225,0,0.45)] hover:bg-yellow-300 hover:shadow-[0_6px_32px_rgba(250,225,0,0.6)] active:scale-95 transition-all duration-200"
            >
              <span className="text-xl">💛</span>
              카카오 @BaliOn 신청하기
            </a>
            <a
              href="#packages"
              className="font-body text-cream/55 text-sm tracking-wide hover:text-cream transition-colors flex items-center gap-2"
            >
              패키지 다시 보기 <span className="text-terra">↑</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
