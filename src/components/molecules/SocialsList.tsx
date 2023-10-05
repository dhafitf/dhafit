import React from "react"

import { socialItems } from "~/libs/constants"
import CustomLink from "@/atoms/CustomLink"

const SocialsList = () => {
  return (
    <div className="flex flex-col">
      {socialItems.map((item) => (
        <CustomLink
          key={item.path}
          href={item.path}
          className="py-3 border-b-2 border-[#333435] hover:border-white hover:text-white flex items-center justify-between"
        >
          <span className="tracking-wider font-medium">{item.label}</span>
          <span>{item.nick}</span>
        </CustomLink>
      ))}
    </div>
  )
}

export default SocialsList
