'use client'

import { motion } from 'motion/react'
import { useMemo, useState } from 'react'

import PolaroidCard from '@/common/polaroid-card'
import cn from '~/libs/cn'
import { reveal } from '~/libs/motion'

type Props = { projects: PostData[] }

const ALL = 'All'

export default function ProjectsPolaroidSection({ projects }: Props) {
  const tags = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => {
      if (p.metadata.subtitle) set.add(p.metadata.subtitle)
    })
    return [ALL, ...Array.from(set)]
  }, [projects])

  const [active, setActive] = useState<string>(ALL)

  const filtered = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.metadata.subtitle === active)),
    [active, projects],
  )

  return (
    <>
      <motion.div
        {...reveal}
        transition={{ ...reveal.transition, delay: 0.05 }}
        className='mb-8 flex flex-wrap items-center justify-between gap-3'>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <button
              key={tag}
              type='button'
              onClick={() => setActive(tag)}
              className={cn(
                'font-mono text-xs tracking-widest rounded-full border px-3 py-1.5 transition-colors duration-200ms ease-out-soft',
                active === tag
                  ? 'border-accent-400 bg-accent-400/10 text-accent-300'
                  : 'border-border text-fg-3 hover:border-border-strong hover:text-fg-2',
              )}>
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      <div className='grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-3'>
        {filtered.map((p, i) => (
          <PolaroidCard key={p.slug} post={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className='border-border border-t border-dashed py-20 text-center'>
          <div className='text-fg-3 font-mono text-sm tracking-[0.18em]'>No projects found.</div>
        </div>
      )}
    </>
  )
}
