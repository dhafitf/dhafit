"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import cn from "~/libs/cn"

interface Props {
  path: string
  label: string
}

const NavLink = ({ path, label }: Props) => {
  const pathname = usePathname()

  return (
    <Link
      href={path}
      className={cn(pathname !== path ? "text-gray-500 hover:text-white" : "text-white")}
    >
      {label}
    </Link>
  )
}

export default NavLink
