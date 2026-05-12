import 'server-only'

export async function getTopTracks(): Promise<TrackItem[]> {
  const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/top-tracks`
  const res = await fetch(endpoint, { next: { revalidate: 60 * 60 * 4 } })
  if (!res.ok) throw new Error('Failed to fetch top tracks')
  return res.json()
}
