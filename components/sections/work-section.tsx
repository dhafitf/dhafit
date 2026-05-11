'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

import NextFramePlaceholder from '@/common/next-frame-placeholder'
import PolaroidCard from '@/common/polaroid-card'
import { reveal } from '~/libs/motion'

export default function WorkSection({ projects }: { projects: PostData[] }) {
  return (
    <section id='work' className='relative mx-auto max-w-7xl px-6 md:px-12 py-12'>
      <motion.div {...reveal} className='mb-12 flex items-baseline justify-between'>
        <div>
          <div className='text-accent-400 mb-3 font-mono text-xs tracking-widest uppercase'>
            02 · SELECTED WORK
          </div>
          <h2 className='text-foreground m-0 text-5xl leading-none font-medium tracking-[-0.03em]'>
            Recent things.
          </h2>
        </div>
        <Link
          href='/projects'
          className='text-accent-400 font-mono text-xs tracking-widest no-underline'>
          ALL PROJECTS →
        </Link>
      </motion.div>

      <div className='grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-3'>
        {projects.map((p, i) => (
          <PolaroidCard key={p.slug} post={p} index={i} />
        ))}
        <NextFramePlaceholder delay={projects.length * 0.05} />
      </div>
    </section>
  )
}
