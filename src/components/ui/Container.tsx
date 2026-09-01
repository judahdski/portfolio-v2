import type { HTMLAttributes } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement>

function Container({ className = '', ...props }: ContainerProps) {
  return <div className={`container ${className}`.trim()} {...props} />
}

export default Container
