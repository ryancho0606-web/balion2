'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#creator-tour', label: '크리에이터투어' },
  { href: '#day-tours',    label: '당일투어' },
  { href: '#packages',     label: '패키지' },
  { href: '#reviews',      label: '후기' },
  { href: '#faq',          label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-warm py-3 shadow-sm'
          : 'bg-transparent py-5',
      )}
    >
      <div className="max-w-content mx-auto px-12 max-md:px-5 flex items-center justify-between">

        {/* 로고 */}
        <a href="#" className="font-heading font-bold text-xl tracking-tight">
          <span className={cn('transition-colors duration-300', scrolled ? 'text-terra' : 'text-cream')}>
            Bali
          </span>
          <span className={cn('transition-colors duration-300', scrolled ? 'text-deep' : 'text-cream')}>
            On
          </span>
        </a>

        {/* 데스크탑 링크 */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'font-body text-sm transition-colors duration-300 hover:text-terra',
                scrolled ? 'text-deep/70' : 'text-cream/80',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://pf.kakao.com/_balion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-kakao text-kakaoD font-body font-semibold text-sm px-5 py-2.5 rounded-full shadow-kakao hover:bg-yellow-300 active:scale-95 transition-all duration-200"
          >
            💛 카카오 신청
          </a>
        </div>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden p-1 flex flex-col gap-1.5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="메뉴"
        >
          {[0, 1, 2].map((n) => (
            <div
              key={n}
              className={cn(
                'w-5 h-0.5 transition-all duration-300',
                scrolled ? 'bg-deep' : 'bg-cream',
                n === 0 && menuOpen && 'rotate-45 translate-y-2',
                n === 1 && menuOpen && 'opacity-0',
                n === 2 && menuOpen && '-rotate-45 -translate-y-2',
              )}
            />
          ))}
        </button>
      </div>

      {/* 모바일 드로어 */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden bg-cream border-t border-warm"
      >
        <div className="px-5 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-deep/70 text-sm py-1 hover:text-terra transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://pf.kakao.com/_balion"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-1.5 bg-kakao text-kakaoD font-body font-semibold text-sm px-5 py-3 rounded-full"
          >
            💛 카카오 신청
          </a>
        </div>
      </motion.div>
    </header>
  )
}
