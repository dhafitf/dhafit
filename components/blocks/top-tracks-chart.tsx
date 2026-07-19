import ErrorBox from '@/common/error-box'
import { getTopTracks } from '~/libs/spotify'
import TrackItem from '../common/track-item'

const TopTracksChart = async () => {
  let tracks: TrackItem[] = []
  try {
    tracks = await getTopTracks()
  } catch (err) {
    console.log('Error fetching top tracks:', err)
    return <ErrorBox />
  }

  return (
    <ol className='m-0 list-none border-t border-border p-0'>
      {tracks.map((track, i) => (
        <TrackItem
          key={i}
          index={i}
          album={track.album}
          albumImageUrl={track.albumImageUrl}
          artists={track.artists}
          duration={track.duration}
          songUrl={track.songUrl}
          title={track.title}
        />
      ))}
    </ol>
  )
}

export default TopTracksChart
