import type { AnchorHTMLAttributes, Ref } from "react"
import Link from "next/link"

import cn from "~/libs/cn"

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  ref?: Ref<HTMLAnchorElement>
}

function CustomLink({ className, href, children, ref, ...rest }: CustomLinkProps) {
  const className_ = cn("cursor-pointer hover:text-cyan", className)

  if (href.startsWith("#")) {
    return <a {...rest}>{children}</a>
  }

  if (href.startsWith("http")) {
    return (
      <a
        {...rest}
        href={href}
        ref={ref}
        className={className_}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {children}
      </a>
    )
  }

  return (
    <Link {...rest} href={href} ref={ref} className={className_}>
      {children}
    </Link>
  )
}

export default CustomLink
