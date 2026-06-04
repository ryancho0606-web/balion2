'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { itineraryTabs } from '@/lib/data'

const tabColors: Record<string, string> = {
  standard: '🟡',
  premium: '🟠',
  luxury: '🔴',
}

export default function Itinerary() {
  const [activeTab, setActiveTab] = useState(0)
  const tab = itineraryTabs[activeTab]

  return (
    <section id="itinerary" className="bg-dark py-24 max-md:py-16">
      <div className="max-w-content mx-auto px-12 max-md:px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="mb-10"
        >
          <p className="font-body text-terra text-sm tracking-widest uppercase mb-3">Itinerary</p>
          <h2 className="font-heading text-cream italic leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            일정을 미리 살펴보세요
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {itineraryTabs.map((t, i) => (
            <button
              key={t.packageId}
              onClick={() => { setActiveTab(i) }}
              className={`inline-flex items-center gap-2 font-body text-sm px-5 py-2.5 rounded-full border transition-all duration-200 ${
                activeTab === i
                  ? 'bg-terra border-terra text-cream shadow-warm'
                  : 'border-white/15 text-muted hover:border-white/30 hover:text-cream/75'
              }`}
            >
              {tabColors[t.packageId]} {t.label}
            </button>
          ))}
        </div>

        {/* Schedule table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="divide-y divide-white/8 border border-white/8 rounded-2xl overflow-hidden"
          >
            {tab.days.map((day, i) => (
              <div key={i} className="flex gap-0 max-md:flex-col">

                {/* Left: Day number + title */}
                <div className="w-[130px] max-md:w-full flex-shrink-0 bg-white/3 border-r border-white/8 max-md:border-r-0 max-md:border-b p-5 flex flex-col justify-start gap-1">
                  <div className="font-heading text-gold italic font-bold leading-none"
                    style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
                    D{day.day}
                  </div>
                  <div className="font-body text-muted text-xs leading-snug">{day.title}</div>
                </div>

                {/* Right: Activities */}
                <div className="flex-1 p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {day.activities.map((act, j) => {
                      const isHighlight = act.includes('✨')
                      const clean = act.replace(' ✨', '').trim()
                      return (
                        <span
                          key={j}
                          className={`inline-flex items-center font-body text-xs px-3 py-1.5 rounded-full border ${
                            isHighlight
                              ? 'bg-terra/20 border-terra/35 text-terraLight'
                              : 'bg-white/8 border-white/12 text-cream/70'
                          }`}
                        >
                          {clean}
                        </span>
                      )
                    })}
                  </div>
                  {day.note && (
                    <p className="font-body text-muted text-xs italic leading-relaxed">
                      * {day.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
