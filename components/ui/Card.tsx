import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  variant?: 'light' | 'dark' | 'terra' | 'glass'
  className?: string
  hover?: boolean
}

export default function Card({ children, variant = 'light', className, hover = false }: CardProps) {
  const variants = {
    light: 'bg-cream border border-warm',
    dark: 'bg-deep border border-white/10',
    terra: 'bg-terra/10 border border-terra/20',
    glass: 'glass-dark',
  }

  return (
    <div
      className={cn(
        'rounded-2xl shadow-card',
        variants[variant],
        hover && 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1',
        className,
      )}
    >
      {children}
    </div>
  )
}
