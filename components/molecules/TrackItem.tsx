"use client"

import React, { useRef } from "react"
import Image from "next/image"

import formatDuration from "~/libs/formatDuration"
import CustomLink from "@/atoms/CustomLink"

interface Props extends TrackItem {
  index: number
}

const TrackItem = ({ index, album, albumImageUrl, artists, title, duration, songUrl }: Props) => {
  const trackRef = useRef<HTMLAnchorElement>(null)
  const artistRef = useRef(null)

  const handleClick = (e: React.MouseEvent) => {
    if (e.target !== artistRef.current) {
      trackRef.current?.click()
    }
  }

  return (
    <div className="flex items-center gap-3 hover:bg-base-bg p-2 rounded" onClick={handleClick}>
      <div className="flex tabular-nums text-gray-400 text-sm">
        {index.toString().padStart(2, "0")}
      </div>
      <Image
        src={albumImageUrl}
        alt={album}
        width={48}
        height={48}
        className="min-w-[48px] min-h-[48px]"
      />
      <div className="flex flex-col overflow-hidden">
        <CustomLink ref={trackRef} href={songUrl} className="font-semibold truncate text-gray-300">
          {title}
        </CustomLink>
        <div className="text-gray-400 truncate w-fit">
          {artists.map((artist, index) => (
            <span
              key={index}
              className="hover:underline text-sm w-fit after:content-[','] last:after:content-[] mr-1"
            >
              <CustomLink ref={artistRef} href={artist.url}>
                {artist.name}
              </CustomLink>
            </span>
          ))}
        </div>
      </div>
      <span className="text-gray-400 ml-auto text-sm">{formatDuration(duration)}</span>
    </div>
  )
}

export default TrackItem
