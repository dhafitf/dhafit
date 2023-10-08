/* eslint-disable @next/next/no-img-element */
import React from "react"

interface Props {
  images: {
    src: string
    alt: string
  }[]
}

const FigureImage = ({ images }: Props) => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {images.map((image, index) => (
        <figure key={index} className="relative">
          <img src={image.src} alt={image.alt} className="object-contain" />
        </figure>
      ))}
    </div>
  )
}

export default FigureImage
