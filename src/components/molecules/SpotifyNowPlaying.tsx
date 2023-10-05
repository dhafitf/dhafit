import React from "react"
import { SiSpotify } from "react-icons/si"

import cn from "~/libs/cn"
import SpotifyItem from "@/atoms/SpotifyItem"

const dummy = {
  title: "ICON",
  artists: [
    {
      name: "TWICE",
      url: "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
    },
  ],
  album: "Formula of Love: O+T=<3",
  albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273d1961ecb307c9e05ec8f7e82",
  songUrl: "https://open.spotify.com/track/2VdU1ksBKcETBr8BYRHUvB",
  isPlaying: true,
}

const SpotifyNowPlaying = () => {
  const { title, artists, songUrl, isPlaying } = dummy

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="overflow-hidden rounded-full">
        <SiSpotify className={cn("h-5 w-5", isPlaying ? "text-[#1DB954]" : "text-gray-400")} />
      </div>
      {isPlaying ? (
        <SpotifyItem title={title} songUrl={songUrl} artists={artists} />
      ) : (
        <p className="text-gray-400">Not playing music</p>
      )}
    </div>
  )
}

export default SpotifyNowPlaying
