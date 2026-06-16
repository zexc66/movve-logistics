interface GlassCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'light' | 'dark'
}

export function GlassCard({ children, className = '', variant = 'dark' }: GlassCardProps) {
  const baseClasses = variant === 'dark'
    ? 'bg-white/5 border-white/10'
    : 'bg-white/10 border-white/20'

  return (
    <div className={`${baseClasses} backdrop-blur-xl border rounded-2xl p-6 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}
