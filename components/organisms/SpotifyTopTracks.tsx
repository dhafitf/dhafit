import ErrorBox from '@/common/error-box'
import TrackItem from '@/molecules/TrackItem'

const getTopTracks = async () => {
  const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/top-tracks`
  const res = await fetch(endpoint, {
    next: { revalidate: 60 * 60 * 4 }, // Revalidate every 4 hours
  })

  if (!res.ok) {
    throw new Error('Failed to fetch top tracks')
  }

  return res.json()
}

const SpotifyTopTracks = async () => {
  let data: TrackItem[] = []
  try {
    data = await getTopTracks()
  } catch (error) {
    console.log('Error fetching top tracks:', error)
    return <ErrorBox />
  }

  return (
    <div className='relative'>
      {data.map((track, index) => (
        <TrackItem key={index} index={index + 1} {...track} />
      ))}
    </div>
  )
}

export default SpotifyTopTracks
