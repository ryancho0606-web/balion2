import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terra: '#C67942',
        terraLight: '#E8A470',
        gold: '#D4A853',
        dark: '#1A0F08',
        deep: '#2C1810',
        cream: '#FBF8F3',
        sand: '#F0E8D8',
        warm: '#E5DDD0',
        muted: '#8B7355',
        leaf: '#4A7C59',
        kakao: '#FAE100',
        kakaoD: '#3A1D1D',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-noto-sans)', 'sans-serif'],
        serif: ['var(--font-noto-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(44,24,16,0.1)',
        'card-hover': '0 8px 40px rgba(44,24,16,0.18)',
        warm: '0 4px 24px rgba(198,121,66,0.2)',
        gold: '0 4px 32px rgba(212,168,83,0.25)',
        kakao: '0 4px 20px rgba(250,225,0,0.4)',
      },
      letterSpacing: {
        editorial: '0.2em',
        masthead: '0.35em',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-dot': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'line-grow': 'line-grow 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'line-grow': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
