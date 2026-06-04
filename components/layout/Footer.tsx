import Button from '@/components/ui/Button'

const footerLinks = [
  { href: '#packages', label: '패키지' },
  { href: '#itinerary', label: '여행 일정' },
  { href: '#reviews', label: '여행 후기' },
  { href: '#faq', label: 'FAQ' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F0805] border-t border-white/8">
      <div className="max-w-content mx-auto px-12 max-md:px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-terra-gradient flex items-center justify-center text-cream text-sm font-bold font-heading">
                B
              </div>
              <span className="font-heading text-cream text-xl font-bold">
                Bali<span className="text-terra">On</span>
              </span>
            </div>
            <p className="font-body text-cream/45 text-sm leading-relaxed mb-6">
              유튜버 조튜브와 함께하는<br />
              특별한 발리 풀패키지 여행
            </p>
            <Button
              variant="kakao"
              size="sm"
              href="https://pf.kakao.com/_BaliOn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💬</span> @BaliOn 채널 추가
            </Button>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-cream/60 text-xs uppercase tracking-widest mb-4">바로가기</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-cream/50 text-sm hover:text-terra transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-cream/60 text-xs uppercase tracking-widest mb-4">고객 지원</h4>
            <ul className="space-y-3">
              <li className="font-body text-cream/50 text-sm">
                카카오 채널: <span className="text-cream/70">@BaliOn</span>
              </li>
              <li className="font-body text-cream/50 text-sm">
                상담 시간: <span className="text-cream/70">평일 10:00 — 19:00</span>
              </li>
              <li className="font-body text-cream/50 text-sm">
                이메일: <span className="text-cream/70">hello@balion.kr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-cream/30 text-xs text-center md:text-left">
            © 2025 찬이엔엠(주) 여행사업부 · BaliOn · 사업자등록번호: 000-00-00000
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-cream/30 text-xs hover:text-cream/50 transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="font-body text-cream/30 text-xs hover:text-cream/50 transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
