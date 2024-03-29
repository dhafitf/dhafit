"use client"

import React from "react"
import useSWR from "swr"

import fetcher from "~/libs/fetcher"
import TrackItem from "@/molecules/TrackItem"
import SpotifyTopTracks_ from "@/skeletons/SpotifyTopTracks_"

const SpotifyTopTracks = () => {
  const { data } = useSWR<TrackItem[]>("/api/spotify/top-tracks", fetcher)

  return (
    <div>
      {data ? (
        data?.map((track, index) => <TrackItem key={index} index={index + 1} {...track} />)
      ) : (
        <SpotifyTopTracks_ />
      )}
    </div>
  )
}

export default SpotifyTopTracks
