import SectionHeader from '@/common/section-header'
import TrackCard from '@/common/track-card'

export default function TranslationsSection({ tracks }: { tracks: Track[] }) {
  return (
    <section
      id='translations'
      className='border-border mx-auto max-w-7xl border-t px-6 md:px-12 py-20'>
      <SectionHeader title="Songs I've translated." href='/translyrics' linkLabel='All translyrics' />
      <div className='grid grid-cols-3 gap-x-5 gap-y-8 md:grid-cols-4 xl:grid-cols-6'>
        {tracks.map((t, i) => (
          <TrackCard key={`${t.artists?.[0] ?? 'unknown'}-${t.title}-${i}`} track={t} index={i} />
        ))}
      </div>
    </section>
  )
}
