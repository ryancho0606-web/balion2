import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'kakao' | 'terra' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  onClick?: () => void
  target?: string
  rel?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'terra',
  size = 'md',
  href,
  className,
  onClick,
  target,
  rel,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-medium rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap'

  const variants = {
    kakao:
      'bg-kakao text-kakaoD hover:bg-yellow-300 shadow-[0_4px_20px_rgba(250,225,0,0.4)] hover:shadow-[0_6px_28px_rgba(250,225,0,0.55)] active:scale-95',
    terra:
      'bg-terra text-cream hover:bg-terraLight shadow-warm hover:shadow-[0_6px_28px_rgba(198,121,66,0.45)] active:scale-95',
    outline:
      'border border-cream/30 text-cream hover:border-terra hover:text-terra hover:bg-terra/5 active:scale-95',
    ghost: 'text-cream/70 hover:text-cream hover:bg-white/5 active:scale-95',
    dark: 'bg-deep text-cream hover:bg-deep/80 border border-warm/20 active:scale-95',
  }

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = cn(base, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className)

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
