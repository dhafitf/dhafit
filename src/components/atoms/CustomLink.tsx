import React from "react"
import Link from "next/link"

import cn from "~/libs/cn"

interface Props {
  className?: string
  href: string
  children: React.ReactNode
}

const CustomLink = ({ className, href, children }: Props) => {
  const isOutside = href.startsWith("http")
  const LinkComponent = isOutside ? "a" : Link

  return (
    <LinkComponent
      href={href}
      className={cn("cursor-pointer hover:text-cyan", className)}
      target={isOutside ? "_blank" : undefined}
      rel={isOutside ? "noopener noreferrer nofollow" : undefined}
    >
      {children}
    </LinkComponent>
  )
}

export default CustomLink
