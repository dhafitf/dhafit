/* eslint-disable @next/next/no-img-element */
import React from "react"

import cn from "~/libs/cn"

interface Props {
  images: {
    src: string
    alt: string
  }[]
}

const FigureImage = ({ images }: Props) => {
  const isSingleImage = images.length === 1

  return (
    <div className={cn(!isSingleImage && "grid sm:grid-cols-2 gap-4")}>
      {images.map((image, index) => (
        <figure key={index} className="relative rounded-lg overflow-hidden">
          <img src={image.src} alt={image.alt} className="object-contain" />
        </figure>
      ))}
    </div>
  )
}

export default FigureImage
