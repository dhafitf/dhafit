import Link from 'next/link'

import TrackCard from '@/common/track-card'

export default function TranslationsSection({ tracks }: { tracks: Track[] }) {
  return (
    <section
      id='translations'
      className='border-border mx-auto max-w-7xl border-t px-6 md:px-12 py-24'>
      <div className='mb-12 flex items-baseline justify-between'>
        <div>
          <div className='text-accent-400 mb-3 font-mono text-xs tracking-widest uppercase'>
            04 · TRANSLATION
          </div>
          <h2 className='text-foreground m-0 text-5xl leading-none font-medium tracking-[-0.03em]'>
            Songs I&apos;ve translated.
          </h2>
        </div>
        <Link
          href='/translyrics'
          className='text-accent-400 font-mono text-xs tracking-widest no-underline'>
          All Translyrics →
        </Link>
      </div>
      <div className='grid grid-cols-3 gap-x-5 gap-y-8 md:grid-cols-4 xl:grid-cols-6'>
        {tracks.map((t, i) => (
          <TrackCard key={`${t.artists?.[0] ?? 'unknown'}-${t.title}-${i}`} track={t} index={i} />
        ))}
      </div>
    </section>
  )
}
