interface NowPlayingResponse {
  album: string
  albumImageUrl: string
  artists: {
    name: string
    url: string
  }[]
  isPlaying: boolean
  songUrl: string
  title: string
}
