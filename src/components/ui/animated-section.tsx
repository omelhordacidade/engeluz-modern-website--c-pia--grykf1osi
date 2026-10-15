import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/use-in-view'

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView()
  return (
    <div
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 opacity-0 translate-y-8',
        isInView && 'opacity-100 translate-y-0',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
