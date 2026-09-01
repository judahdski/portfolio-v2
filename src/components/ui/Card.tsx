import type { HTMLAttributes } from 'react'

function Card({ className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return <article className={`card ${className}`.trim()} {...props} />
}

export default Card
