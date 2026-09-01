import type { HTMLAttributes } from 'react'

function Badge({ className = '', ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={`badge ${className}`.trim()} {...props} />
}

export default Badge
