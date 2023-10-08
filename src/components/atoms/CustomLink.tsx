import React, { AnchorHTMLAttributes } from "react"
import Link from "next/link"

import cn from "~/libs/cn"

const CustomLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { className, href, children } = props

  if (href?.startsWith("#")) {
    return <a {...props} />
  }

  const isOutside = href?.startsWith("http")
  const LinkComponent = isOutside ? "a" : Link

  return (
    <LinkComponent
      {...props}
      href={`${href}`}
      className={cn("cursor-pointer hover:text-cyan", className)}
      target={isOutside ? "_blank" : undefined}
      rel={isOutside ? "noopener noreferrer nofollow" : undefined}
    >
      {children}
    </LinkComponent>
  )
}

export default CustomLink
