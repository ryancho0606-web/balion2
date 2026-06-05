'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { dayTours } from '@/lib/data'
import type { DayTour } from '@/lib/types'

const CATEGORIES = ['전체', '액티비티', '자연', '문화', '가족'] as const
type Category = (typeof CATEGORIES)[number]

// ─────────────────────────────── 투어 카드 ────────────────────────────────────

function TourCard({ tour }: { tour: DayTour }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)
  const hasVideo = Boolean(tour.videoSrc)

  const handleEnter = () => {
    if (!hasVideo) return
    setHovered(true)
    videoRef.current?.play().catch(() => {})
  }
  const handleLeave = () => {
    if (!hasVideo) return
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <article
      className="group"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* ── 이미지 / 영상 영역 ── */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-sand">
        {/* 폴백 / 기본 이미지 */}
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className={`object-cover transition-all duration-700 ${
            hovered ? 'opacity-0' : 'opacity-100 group-hover:scale-[1.04]'
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* 패러글라이딩 호버 영상 (데스크탑 전용) */}
        {hasVideo && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover hidden md:block transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          >
            <source src={tour.videoSrc} type="video/mp4" />
          </video>
        )}

        {/* 카테고리 태그 */}
        <div className="absolute top-3 left-3 bg-dark/55 backdrop-blur-sm text-cream/85 text-[11px] font-body px-2.5 py-1 rounded-full">
          {tour.category}
        </div>

        {/* 영상 재생 중 표시 */}
        {hovered && hasVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-dark/65 text-cream text-[10px] font-body px-2.5 py-1 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-terra animate-pulse-dot" />
            영상 재생 중
          </motion.div>
        )}
      </div>

      {/* ── 텍스트 영역 (이미지 아래 분리) ── */}
      <div>
        {/* 가격 · 소요시간 메타 */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="font-body text-xs text-muted">
            ₩{tour.price.toLocaleString()}
          </span>
          {tour.duration !== '-' && (
            <>
              <span className="text-warm text-xs">·</span>
              <span className="font-body text-xs text-muted">{tour.duration}</span>
            </>
          )}
        </div>

        {/* 제목 — Noto Serif KR */}
        <h3 className="font-serif text-deep text-lg font-semibold leading-snug mb-2">
          {tour.title}
        </h3>

        {/* 카피 — 에디토리얼 italic */}
        <p className="font-serif text-terra italic text-sm mb-3 leading-snug">
          {tour.copy}
        </p>

        {/* 스토리 텍스트 — Kinfolk 스타일 */}
        <p className="font-serif text-muted text-sm leading-[1.75] mb-4">
          {tour.story}
        </p>

        {/* 예약 링크 */}
        <a
          href="https://pf.kakao.com/_balion"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-terra text-sm hover:underline underline-offset-2 transition-all inline-flex items-center gap-1"
        >
          예약 문의 <span className="text-xs">→</span>
        </a>
      </div>
    </article>
  )
}

// ─────────────────────────────── 섹션 ────────────────────────────────────────

export default function DayTours() {
  const [active, setActive] = useState<Category>('전체')

  const filtered =
    active === '전체'
      ? dayTours
      : dayTours.filter((t) => t.category === active)

  return (
    <section id="day-tours" className="bg-cream py-24 max-md:py-16">
      <div className="max-w-content mx-auto px-12 max-md:px-5">

        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="mb-12"
        >
          <p className="font-body text-terra text-sm tracking-widest uppercase mb-3">Day Tours</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-serif text-deep leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              발리에서 오늘 할 것들
            </h2>
            <p className="font-body text-muted text-sm max-w-xs">
              투어부터 스파, 일출 트레킹까지.<br />
              조튜브가 직접 다녀온 코스만 담았어요.
            </p>
          </div>
        </motion.div>

        {/* 카테고리 필터 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                active === cat
                  ? 'bg-terra border-terra text-cream shadow-warm'
                  : 'border-warm text-muted hover:border-terra/40 hover:text-terra bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* 카드 그리드 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          >
            {filtered.map((tour, i) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.07, 0.42) }}
              >
                <TourCard tour={tour} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
