import type { Metadata } from 'next'
import { Playfair_Display, Noto_Sans_KR, Noto_Serif_KR, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
})

const notoSerif = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BaliOn | 유튜버와 함께 떠나는 발리',
  description:
    '조튜브와 함께 떠나는 발리 풀패키지 여행. 3박5일/4박6일/5박7일, 한국 출발 또는 현지 합류 가능. 카카오로 간편 예약.',
  keywords: ['발리 여행', '발리 패키지', '조튜브', 'BaliOn', '크리에이터 투어', '현지 합류'],
  openGraph: {
    title: 'BaliOn | 유튜버와 함께 떠나는 발리',
    description: '조튜브와 함께 떠나는 발리 풀패키지 여행. 3박5일/4박6일/5박7일, 한국 출발 또는 현지 합류 가능. 카카오로 간편 예약.',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BaliOn | 유튜버와 함께 떠나는 발리',
    description: '조튜브와 함께 떠나는 발리 풀패키지 여행. 카카오로 간편 예약.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      className={`${playfair.variable} ${cormorant.variable} ${notoSans.variable} ${notoSerif.variable}`}
    >
      <body className="font-body antialiased bg-dark">{children}</body>
    </html>
  )
}
