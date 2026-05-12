'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

import { reveal } from '~/libs/motion'
import { getYear } from '~/libs/utils'

const ROTATIONS = ['-1.2deg', '0.6deg', '-0.4deg', '1.1deg', '-0.8deg', '0.3deg']

type Props = {
  post: PostData
  index: number
}

export default function PolaroidCard({ post, index }: Props) {
  const meta = post.metadata
  const tag = meta.subtitle ?? 'Project'
  const year = getYear(meta.publishedAt)
  const rot = ROTATIONS[index % ROTATIONS.length]
  const tapeSide = index % 2 === 0 ? 'cs-tape-l' : 'cs-tape-r'

  return (
    <motion.div {...reveal} transition={{ ...reveal.transition, delay: index * 0.05 }}>
      <Link
        href={`/projects/${post.slug}`}
        className='cs-frame group block no-underline'
        style={{ transform: `rotate(${rot})` }}>
        <span className={`cs-tape ${tapeSide}`} aria-hidden />

        <div className='cs-photo bg-background relative aspect-4/3 overflow-hidden'>
          {meta.image && (
            <Image
              src={meta.image}
              alt={meta.title}
              width={520}
              height={390}
              className='h-full w-full object-cover'
            />
          )}

          <div className='pointer-events-none absolute inset-0 z-2 flex translate-y-2 items-end p-4 opacity-0 transition-[opacity,transform] duration-400 ease-out-soft group-hover:translate-y-0 group-hover:opacity-100'>
            <div className='border-accent-400/30 bg-background/80 text-foreground max-w-full border px-3 py-2.5 font-mono text-xs leading-[1.4] tracking-[0.06em] backdrop-blur-md'>
              <div className='text-accent-400 mb-1'>
                {tag.toUpperCase()}
                {year && ` · ${year}`}
              </div>
              <div className='leading-normal'>{meta.summary}</div>
              {meta.tags?.length > 0 && (
                <div className='text-fg-3 mt-2 flex flex-wrap gap-x-2 gap-y-1'>
                  {meta.tags.map((s) => (
                    <span key={s}>· {s}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='absolute right-3.5 bottom-3 left-3.5 flex items-baseline justify-between font-mono text-xs tracking-[0.16em] uppercase'>
          <span className='text-foreground text-sm font-semibold tracking-[0.04em] normal-case'>
            {meta.title}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
