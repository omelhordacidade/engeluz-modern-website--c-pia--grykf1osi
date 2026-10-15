import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'default' | 'white-bg'
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div
        className={cn(
          'px-3 py-1 md:px-4 md:py-1.5 rounded flex items-center justify-center shadow-sm',
          variant === 'white-bg' ? 'bg-white' : 'bg-primary',
        )}
      >
        <span
          className={cn(
            'font-sans font-black text-2xl md:text-3xl tracking-tight leading-none',
            variant === 'white-bg' ? 'text-primary' : 'text-white',
          )}
        >
          ENGELUZ
        </span>
      </div>
      <span
        className={cn(
          'text-[10px] md:text-xs font-bold self-start mt-0.5',
          variant === 'white-bg' ? 'text-white' : 'text-primary',
        )}
      >
        ®
      </span>
    </div>
  )
}
