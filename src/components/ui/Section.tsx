import { useEffect, useRef, useState, type HTMLAttributes } from 'react'

type SectionProps = HTMLAttributes<HTMLElement>

function Section({ className = '', ...props }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setIsVisible(true)
        observer.disconnect()
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`section motion-section${isVisible ? ' is-visible' : ''} ${className}`.trim()}
      {...props}
    />
  )
}

export default Section
