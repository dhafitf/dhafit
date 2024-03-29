import { NextResponse } from "next/server"
import { getTopTracks } from "~/libs/spotify"

export const revalidate = 30
export async function GET(request: Request) {
  try {
    const response = await getTopTracks()
    const { items } = await response.json()
    const tracks: TrackItem[] = items.map((track: TrackResponseItem): TrackItem => {
      return {
        title: track.name,
        album: track.album.name,
        albumImageUrl: track.album.images[track.album.images.length - 1].url,
        artists: track.artists.map((artist) => ({
          name: artist.name,
          url: `https://open.spotify.com/artist/${artist.id}`,
        })),
        duration: track.duration_ms,
        songUrl: `https://open.spotify.com/track/${track.id}`,
      }
    })

    return NextResponse.json(tracks)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 })
  }
}
