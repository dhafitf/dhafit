import 'server-only'

import qs from 'query-string'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

const TOP_TRACKS_REVALIDATE = 60 * 60 * 4 // 4 hours

// Access tokens live ~1h; cache and reuse until shortly before expiry so we
// don't round-trip to the token endpoint on every call.
let cachedToken: { value: string; expiresAt: number } | null = null

async function getAccessToken() {
  if (cachedToken && Date.now() < cachedToken.expiresAt) return cachedToken.value

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify({ grant_type: 'refresh_token', refresh_token }),
    cache: 'no-store',
  })

  if (!response.ok) throw new Error(`Spotify token request failed: ${response.status}`)

  const { access_token, expires_in } = await response.json()
  if (!access_token) throw new Error('Spotify token response missing access_token')

  // Refresh 60s early to avoid racing the boundary.
  cachedToken = { value: access_token, expiresAt: Date.now() + (expires_in - 60) * 1000 }
  return access_token
}

async function spotifyFetch(url: string, init?: RequestInit) {
  const access_token = await getAccessToken()
  return fetch(url, {
    ...init,
    headers: { ...init?.headers, Authorization: `Bearer ${access_token}` },
  })
}

function toTrackItem(track: TrackResponseItem): TrackItem {
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
}

function toNowPlaying(json: CurrentlyPlayingResponse): NowPlaying {
  const { item } = json
  return {
    isPlaying: true,
    title: item.name,
    album: item.album.name,
    albumImageUrl: item.album.images[item.album.images.length - 1].url,
    artists: item.artists.map((artist) => ({
      name: artist.name,
      url: `https://open.spotify.com/artist/${artist.id}`,
    })),
    songUrl: `https://open.spotify.com/track/${item.id}`,
  }
}

export async function getTopTracks(): Promise<TrackItem[]> {
  const url = qs.stringifyUrl({
    url: TOP_TRACKS_ENDPOINT,
    query: {
      time_range: 'short_term', // long_term (1 yr), medium_term (6 mo), short_term (4 wk)
      limit: 10,
    },
  })

  const response = await spotifyFetch(url, { next: { revalidate: TOP_TRACKS_REVALIDATE } })
  if (!response.ok) throw new Error(`Spotify top tracks request failed: ${response.status}`)

  const { items }: { items: TrackResponseItem[] } = await response.json()
  return items.map(toTrackItem)
}

export async function getNowPlaying(): Promise<NowPlaying> {
  const response = await spotifyFetch(NOW_PLAYING_ENDPOINT, { cache: 'no-store' })
  if (response.status === 204) return { isPlaying: false }
  if (!response.ok) throw new Error(`Spotify now playing request failed: ${response.status}`)

  const json: CurrentlyPlayingResponse = await response.json()
  if (!json.is_playing || !json.item) return { isPlaying: false }
  return toNowPlaying(json)
}
