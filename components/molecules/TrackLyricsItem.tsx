import React from "react"
import Link from "next/link"
import Image from "next/image"

interface TrackLyricsItemProps {
  artistName: string
  track: Track
}

const TrackLyricsItem = ({ artistName, track }: TrackLyricsItemProps) => {
  return (
    <Link
      href={`/translyrics/lyrics/${artistName}/${track.title}`}
      className="flex items-center gap-3 hover:bg-baseBg px-4 py-3 rounded"
    >
      {track.image ? (
        <Image
          src={track.image}
          alt={`Image of ${track.title}`}
          width={48}
          height={48}
          className="min-w-[48px] min-h-[48px] rounded-md"
        />
      ) : (
        <div className="bg-baseBg min-w-[48px] min-h-[48px] rounded-md"></div>
      )}
      <div className="flex flex-col overflow-hidden">
        <div className="font-semibold truncate text-gray-300">{track.title}</div>
        <div className="text-gray-400 truncate w-fit">
          <span className="text-sm w-fit after:content-[','] last:after:content-[] mr-1">
            {track.artists?.join(", ")}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default TrackLyricsItem
