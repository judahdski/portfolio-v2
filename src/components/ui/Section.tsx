import type { HTMLAttributes } from 'react'

type SectionProps = HTMLAttributes<HTMLElement>

function Section({ className = '', ...props }: SectionProps) {
  return <section className={`section ${className}`.trim()} {...props} />
}

export default Section
