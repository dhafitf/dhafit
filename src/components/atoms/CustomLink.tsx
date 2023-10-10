import React, { forwardRef } from "react"
import Link from "next/link"

import cn from "~/libs/cn"

type CustomLinkProps = React.PropsWithChildren<
  {
    className?: string
    href: string
    ref?: React.Ref<HTMLAnchorElement>
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>
>

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>((props, ref) => {
  const { className, href, children, ...rest } = props
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
})

CustomLink.displayName = "CustomLink"

export default CustomLink
