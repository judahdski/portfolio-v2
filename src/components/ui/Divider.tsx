import type { HTMLAttributes } from 'react'

function Divider({ className = '', ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr className={`divider ${className}`.trim()} {...props} />
}

export default Divider
