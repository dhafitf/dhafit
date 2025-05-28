"use client"

import { useState, useEffect } from "react"

import cn from "~/libs/cn"
import TrackLyricsItem from "@/molecules/TrackLyricsItem"

const TranslyricsListSection = ({ tracks }: { tracks: Track[] }) => {
  const [search, setSearch] = useState("")
  const [tracksList, setTracksList] = useState(tracks)

  useEffect(() => {
    const filteredTracks = tracks.filter((track) => {
      const lowercaseSearch = search.toLowerCase()
      if (track.title?.toLowerCase().includes(lowercaseSearch)) return true
      if (track.romanizedTitle?.toLowerCase().includes(lowercaseSearch)) return true
      if (track.artists?.some((artist) => artist.toLowerCase().includes(lowercaseSearch)))
        return true
      return false
    })
    setTracksList(filteredTracks)
  }, [tracks, search])

  return (
    <div className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Search by title or artist"
        onChange={(e) => setSearch(e.target.value)}
        className={cn(
          "appearance-none outline-none border-none bg-base-800 hover:bg-base-700",
          "focus-within:bg-base-700 focus-within:ring-1 focus-within:ring-inset focus-within:ring-gray-400",
          "rounded-lg p-3 text-white w-full text-sm"
        )}
      />
      <div className="mt-2">
        {tracksList.map((track, index) => (
          <TrackLyricsItem artistName={track.artists![0]} track={track} key={index} />
        ))}
      </div>
    </div>
  )
}

export default TranslyricsListSection
