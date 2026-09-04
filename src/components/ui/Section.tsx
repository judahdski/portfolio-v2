import { useEffect, useRef, type HTMLAttributes } from 'react'

type SectionProps = HTMLAttributes<HTMLElement>

function Section({ className = '', ...props }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    if (!('IntersectionObserver' in window)) {
      section.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        section.classList.add('is-visible')
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
      className={`section motion-section ${className}`.trim()}
      {...props}
    />
  )
}

export default Section
