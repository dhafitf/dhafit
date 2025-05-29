import Image from 'next/image'
import { type JSX } from 'react'
import { SiSpotify, SiYoutube } from 'react-icons/si'

import CustomLink from '@/common/custom-link'
import Translation from '@/molecules/Translation'
import { Button } from '@/ui/button'

interface LyricsPageProps {
  track: Track
  lyrics: string[][]
  subtitle?: string
  metadata?: TrackFrontMatter
  lyricsFile: string
}

const TranslationSection = ({ track, lyrics, subtitle, metadata, lyricsFile }: LyricsPageProps) => {
  const GITHUB_REPO_URL =
    'https://github.com/dhafitf/dhafit/blob/master/contents/lyrics/' +
    `${track.artists![0]}/` +
    lyricsFile

  return (
    <div>
      <div className='mx-auto mb-4 rounded-xl overflow-hidden w-[clamp(144px,30vw,192px)] aspect-square relative'>
        {track.image ? (
          <Image
            src={track.image}
            alt={`Image of ${track.title}`}
            width={192}
            height={192}
            draggable={false}
            className='object-cover object-center w-full h-full w'
          />
        ) : (
          <div className='bg-base-800 w-full h-full'></div>
        )}
      </div>
      <div className='flex items-center justify-center flex-col border-b-2 border-white/10 pb-8'>
        <div className='flex items-center text-sm pb-3'>
          {track.artists && track.artists.length > 0 && (
            <span className='text-gray-400'>{track.artists.join(', ')}</span>
          )}
        </div>
        <h1 className='font-bold text-3xl text-white text-center pb-1'>{track.title}</h1>
        {subtitle && <p className='text-gray-400'>{subtitle}</p>}
      </div>
      <div className='pt-8'>
        <Translation lyrics={lyrics} />
        {metadata?.contributors && (
          <div className='text-gray-400 text-sm mt-8'>
            <span>Contributors: </span>
            {metadata.contributors.map((contributor, index) => {
              if (contributor.url) {
                return (
                  <span key={index} className="after:content-[','] last:after:content-[''] mr-1">
                    <CustomLink href={contributor.url}>{contributor.name}</CustomLink>
                  </span>
                )
              }

              return (
                <span key={index} className="after:content-[','] last:after:content-[''] mr-1">
                  {contributor.name}
                </span>
              )
            })}
          </div>
        )}
      </div>
      <div className='relative'>
        <div className='border-t-2 border-white/10 py-4 mt-6'>
          <div className='flex items-center gap-4 flex-wrap mt-2'>
            {track.links?.map((link, index) => {
              const icons: { [key: string]: JSX.Element } = {
                Spotify: <SiSpotify className='h-[18px] w-[18px]' />,
                Youtube: <SiYoutube className='h-[18px] w-[18px]' />,
              }

              return (
                <Button asChild key={index} className='hover:text-white w-fit'>
                  <CustomLink href={link.url}>
                    {icons[link.name]}
                    {link.name}
                  </CustomLink>
                </Button>
              )
            })}
          </div>
          {metadata?.usedIn && (
            <div className='py-2 mt-4'>
              <h2 className='font-semibold text-lg pb-2'>This lyrics used in these videos</h2>
              <div className='space-y-4'>
                {metadata.usedIn.map((item, index) => {
                  return (
                    <div key={index} className='aspect-video'>
                      <iframe
                        className='w-full h-full'
                        src={item.url}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen></iframe>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
        <div className='border-t-2 border-white/10 py-4 mt-4'>
          <CustomLink
            href={GITHUB_REPO_URL}
            className='flex items-center text-gray-400 hover:underline w-fit text-sm'>
            <span>Edit this lyrics on github</span>
          </CustomLink>
        </div>
      </div>
    </div>
  )
}

export default TranslationSection
