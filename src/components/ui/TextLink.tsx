import type { AnchorHTMLAttributes } from 'react'

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

function TextLink({ className = '', ...props }: TextLinkProps) {
  return <a className={`text-link ${className}`.trim()} {...props} />
}

export default TextLink
