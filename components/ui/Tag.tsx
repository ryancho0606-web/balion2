import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  variant?: 'terra' | 'gold' | 'leaf' | 'dark' | 'cream' | 'outline'
  className?: string
}

export default function Tag({ children, variant = 'terra', className }: TagProps) {
  const variants = {
    terra: 'bg-terra/15 text-terraLight border border-terra/25',
    gold: 'bg-gold/15 text-gold border border-gold/25',
    leaf: 'bg-leaf/15 text-leaf border border-leaf/25',
    dark: 'bg-dark/60 text-cream/70 border border-white/10',
    cream: 'bg-cream text-deep border border-warm',
    outline: 'bg-transparent text-muted border border-warm',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-body font-medium tracking-wide',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
