import { notFound, redirect } from 'next/navigation'

import { getArtistData } from '~/libs/lyrics'

interface ArtistPageProps {
  params: Promise<{ artist: string }>
}

export default async function ArtistPage(props: ArtistPageProps) {
  const params = await props.params
  const artist = decodeURIComponent(params.artist)
  const artistData = getArtistData(artist)
  if (!artistData) notFound()

  redirect(`/translyrics?artist=${encodeURIComponent(artistData.name ?? artist)}`)
}
