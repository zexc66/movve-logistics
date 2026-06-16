import { forwardRef, ReactNode, ButtonHTMLAttributes } from 'react'
import { useMagneticHover } from '@/hooks/useMagneticHover'

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, variant = 'primary', className = '', onClick, ...props }, forwardedRef) => {
    const { ref } = useMagneticHover<HTMLButtonElement>()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const ripple = document.createElement('span')
      const rect = e.currentTarget.getBoundingClientRect()
      ripple.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,255,255,0.4);transform:scale(0);animation:ripple 0.6s linear;pointer-events:none;left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;width:100px;height:100px;margin-left:-50px;margin-top:-50px;`
      e.currentTarget.appendChild(ripple)
      setTimeout(() => ripple.remove(), 600)
      onClick?.(e)
    }

    const variantClasses = variant === 'primary'
      ? 'bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/25'
      : 'border border-slate-700 text-slate-300 hover:border-emerald-500/50 hover:text-white'

    return (
      <button
        ref={(el: HTMLButtonElement | null) => {
          (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el
          if (typeof forwardedRef === 'function') forwardedRef(el)
          else if (forwardedRef) forwardedRef.current = el
        }}
        className={`relative overflow-hidden px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${variantClasses} ${className}`}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)

MagneticButton.displayName = 'MagneticButton'
