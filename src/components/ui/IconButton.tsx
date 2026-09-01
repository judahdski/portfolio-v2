import type { ButtonHTMLAttributes } from 'react'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
}

function IconButton({ label, className = '', ...props }: IconButtonProps) {
  return (
    <button
      className={`icon-button ${className}`.trim()}
      aria-label={label}
      {...props}
    />
  )
}

export default IconButton
