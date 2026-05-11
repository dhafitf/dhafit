'use client'

import { motion } from 'motion/react'
import { reveal } from '~/libs/motion'

export default function NextFramePlaceholder({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      {...reveal}
      transition={{ ...reveal.transition, delay }}
      aria-hidden
      className='border-border-strong bg-surface/30 text-fg-4 hidden aspect-4/3 flex-col items-center justify-center rounded-sm border border-dashed p-8 text-center font-mono text-xs tracking-[0.18em] uppercase md:flex'>
      <div className='text-fg-2 mb-3 text-2xl tracking-[-0.02em] normal-case'>
        <span className='text-accent-400'>+</span> next frame
      </div>
      <div className='text-fg-3 leading-[1.7] tracking-normal normal-case'>
        something is in the developer.
        <br />
        check back soon.
      </div>
    </motion.div>
  )
}
