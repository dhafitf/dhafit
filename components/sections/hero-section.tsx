'use client'

import { motion } from 'motion/react'

import SpotifyNowPlaying from '@/blocks/spotify-now-playing'
import { socialItems } from '~/libs/constants'
import { fadeUp, REVEAL_EASE } from '~/libs/motion'

export default function HeroSection() {
  return (
    <section className='relative mx-auto -mt-7 flex min-h-dvh max-w-7xl flex-col justify-center px-6 md:px-12'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: REVEAL_EASE, delay: 0.05 }}
        className='text-foreground relative m-0 text-[clamp(64px,9vw,140px)] leading-[0.94] font-medium tracking-[-0.04em]'>
        <span className='relative inline-block'>
          <span
            aria-hidden
            className='text-accent-400 absolute top-0 -left-0.5 opacity-60 mix-blend-screen'>
            Dhafit Farenza
          </span>
          <span className='relative'>Dhafit Farenza</span>
        </span>
        <span className='font-body text-fg-3 mt-5 block text-[0.4em] leading-[1.4] font-normal tracking-[-0.008em]'>
          ↳ <span className='text-accent-400'>TypeScript</span> engineer / translator on the side
          <span className='caret' />
        </span>
      </motion.h1>

      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.15 }}
        className='text-fg-2 mt-10 max-w-3xl sm:text-lg leading-[1.6]'>
        Full-stack engineer focused on TypeScript and product work. I also translate Japanese
        contents into Indonesian. Drawn to calm interfaces, careful tooling, and code that lasts.
      </motion.p>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
        className='text-fg-4 mt-11 flex flex-wrap items-center gap-4 font-mono text-xs tracking-[0.06em] uppercase'>
        {socialItems.map((social, index) => {
          const Icon = social.icon

          return (
            <span key={social.path} className='inline-flex items-center md:gap-4'>
              <a
                href={social.path}
                target='_blank'
                rel='noreferrer'
                title={social.label}
                aria-label={social.label}
                className='text-fg-3 hover:text-accent-400 max-md:bg-surface inline-flex items-center gap-2 rounded-md p-2 no-underline transition-colors hover:bg-[color-mix(in_oklab,var(--color-accent-400)_10%,transparent)] md:rounded-none md:p-0 md:hover:bg-transparent'>
                <Icon className='inline-flex size-4.5 md:size-3.5' />
                <span className='hidden md:inline'>{social.label}</span>
              </a>
              {index < socialItems.length - 1 && (
                <span aria-hidden className='hidden md:inline'>
                  ·
                </span>
              )}
            </span>
          )
        })}
      </motion.div>

      <SpotifyNowPlaying className='mt-5' />
    </section>
  )
}
