import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          if (currentRef) observer.unobserve(currentRef)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 transition-opacity duration-1000',
        isVisible && 'animate-fade-in-up opacity-100',
        className,
      )}
    >
      {children}
    </div>
  )
}
