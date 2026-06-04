'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#packages', label: '패키지' },
  { href: '#itinerary', label: '일정' },
  { href: '#difference', label: '왜 BaliOn' },
  { href: '#join', label: '참여 방법' },
  { href: '#reviews', label: '후기' },
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

        {/* Logo */}
        <a href="#" className="font-heading font-bold text-xl tracking-tight">
          <span className={cn('transition-colors duration-300', scrolled ? 'text-terra' : 'text-cream')}>
            Bali
          </span>
          <span className={cn('transition-colors duration-300', scrolled ? 'text-deep' : 'text-cream')}>
            On
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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
            className="inline-flex items-center gap-1.5 bg-kakao text-kakaoD font-body font-semibold text-sm px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(250,225,0,0.4)] hover:bg-yellow-300 hover:shadow-[0_4px_24px_rgba(250,225,0,0.55)] active:scale-95 transition-all duration-200"
          >
            💛 카카오 신청
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 flex flex-col gap-1.5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="메뉴"
        >
          <div className={cn('w-5 h-0.5 transition-all duration-300', scrolled ? 'bg-deep' : 'bg-cream', menuOpen && 'rotate-45 translate-y-2')} />
          <div className={cn('w-5 h-0.5 transition-all duration-300', scrolled ? 'bg-deep' : 'bg-cream', menuOpen && 'opacity-0')} />
          <div className={cn('w-5 h-0.5 transition-all duration-300', scrolled ? 'bg-deep' : 'bg-cream', menuOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </div>

      {/* Mobile drawer */}
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
            className="mt-2 inline-flex items-center justify-center gap-1.5 bg-kakao text-kakaoD font-body font-semibold text-sm px-5 py-3 rounded-full active:scale-95"
          >
            💛 카카오 신청
          </a>
        </div>
      </motion.div>
    </header>
  )
}
