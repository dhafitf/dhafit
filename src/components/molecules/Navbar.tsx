import React from "react"

import { navItems } from "~/libs/constants"
import NavLink from "@/atoms/NavLink"

const Navbar = () => {
  return (
    <nav className="my-2.5 font-medium flex flex-wrap items-center gap-6 py-5">
      {navItems.map((item) => (
        <NavLink key={item.path} path={item.path} label={item.label} />
      ))}
    </nav>
  )
}

export default Navbar
