import React from "react"
import { techItems } from "~/libs/constants"

const TechsList = () => {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {techItems.map((item, index) => {
        const Icon = item.icon
        return (
          <div key={index} className="bg-base-bg rounded-lg flex items-center gap-1 py-1.5 px-2.5">
            <Icon className="text-xl" />
            <span className="text-sm">{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default TechsList
