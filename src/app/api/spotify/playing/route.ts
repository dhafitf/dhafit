import { NextResponse } from "next/server"
import { getNowPlaying } from "~/libs/spotify"

export async function GET(request: Request) {
  try {
    const response = await getNowPlaying()
    if (response.status === 204) return NextResponse.json({ isPlaying: false })
    const json: CurrentlyPlayingResponse = await response.json()

    const track: CurrentlyPlayingItem = {
      title: json.item.name,
      album: json.item.album.name,
      albumImageUrl: json.item.album.images[json.item.album.images.length - 1].url,
      artists: json.item.artists.map((artist) => ({
        name: artist.name,
        url: `https://open.spotify.com/artist/${artist.id}`,
      })),
      songUrl: `https://open.spotify.com/track/${json.item.id}`,
      isPlaying: json.is_playing,
    }

    return NextResponse.json(track)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 })
  }
}
