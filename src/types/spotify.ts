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

interface TrackItem extends BaseTrack {
  duration: number
}

interface AlbumResponse {
  images: {
    url: string
  }[]
  name: string
}

interface ArtisResponse {
  name: string
  id: string
}

interface TrackResponseItem {
  album: AlbumResponse
  artists: ArtisResponse[]
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
