interface SpotifyArtist {
  name: string
  url: string
}

interface BaseTrack {
  title: string
  album: string
  albumImageUrl: string
  artists: SpotifyArtist[]
  songUrl: string
}

interface CurrentlyPlayingItem extends BaseTrack {
  isPlaying: boolean
}

// A track is only readable once we know something is playing.
type NowPlaying = { isPlaying: false } | (BaseTrack & { isPlaying: true })

interface TrackItem extends BaseTrack {
  duration: number
}

interface AlbumResponse {
  images: {
    url: string
  }[]
  name: string
}

interface ArtistResponse {
  name: string
  id: string
}

interface TrackResponseItem {
  album: AlbumResponse
  artists: ArtistResponse[]
  duration_ms: number
  id: string
  name: string
}

interface CurrentlyPlayingResponse {
  is_playing: boolean
  item: TrackResponseItem
  actions: {
    disallows: {
      pausing?: boolean
    }
  }
}
