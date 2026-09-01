import type { ReactNode } from 'react'

type SectionHeaderProps = {
  kicker?: string
  title: string
  description?: ReactNode
  className?: string
}

function SectionHeader({
  kicker,
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <header className={`section-header ${className}`.trim()}>
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2>{title}</h2>
      {description && <div className="section-description">{description}</div>}
    </header>
  )
}

export default SectionHeader
