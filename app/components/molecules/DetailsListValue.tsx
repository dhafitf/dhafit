import React from "react"

import CustomLink from "@/atoms/CustomLink"

export const DetailsListValue = ({ value }: { value: string }) => {
  const isLink = value.includes("http")
  return (
    <div className="text-end">
      {isLink ? (
        <CustomLink href={value} className="text-gray-400">
          {value}
        </CustomLink>
      ) : (
        <span className="min-w-[150px]">{value}</span>
      )}
    </div>
  )
}

export const DetailsListValues = ({ values }: { values: string[] }) => {
  const isLink = values.includes("http")

  if (isLink) {
    return (
      <div className="flex items-center text-end">
        {values.map((value, index) => (
          <CustomLink
            key={index}
            href={value}
            className="after:content-[','] last:after:content-[] mr-1 text-gray-400"
          >
            {value}
          </CustomLink>
        ))}
      </div>
    )
  }

  return <span className="min-w-[150px] text-end">{values.join(", ")}</span>
}
