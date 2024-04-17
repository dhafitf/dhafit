import React from "react"

const Translation = ({ lyrics }: { lyrics: string[][] }) => {
  const renderData = () => {
    return lyrics.map((item, index) => {
      if (item.join("").trim() === "" && index === lyrics.length - 1) return null

      if (item.join("").trim() === "") {
        return <br key={index} />
      }

      return (
        <div key={index} className="pb-2">
          {item[0] && <div className="text-xl">{item[0]}</div>}
          {item[1] && <div className="text-base">{item[1]}</div>}
        </div>
      )
    })
  }

  return <article className="relative">{renderData()}</article>
}

export default Translation
