'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { reveal } from '~/libs/motion'

type Props = {
  href: string
  title: string
  summary: string
  date?: string
  meta?: string
  index?: number
}

export default function PostCard({ href, title, summary, date, meta, index = 0 }: Props) {
  return (
    <motion.div {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
      <Link
        href={href}
        className='border-border bg-surface hover:border-accent-400 block rounded-xl border p-7 no-underline transition-all duration-240ms ease-out-soft hover:-translate-y-0.5 hover:shadow-[0_8px_32px_color-mix(in_oklab,var(--color-accent-400)_12%,transparent)]'>
        {(date || meta) && (
          <div className='text-fg-3 mb-4 flex items-baseline justify-between font-mono text-xs tracking-[0.04em]'>
            <span>{date}</span>
            <span>{meta}</span>
          </div>
        )}
        <div className='text-foreground mb-2.5 text-2xl leading-[1.15] font-medium tracking-[-0.02em]'>
          {title}
        </div>
        <div className='text-fg-3 text-sm leading-[1.55]'>{summary}</div>
      </Link>
    </motion.div>
  )
}
