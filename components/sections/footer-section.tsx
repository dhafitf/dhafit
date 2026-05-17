'use client'

import { motion } from 'motion/react'
import { socialItems } from '~/libs/constants'
import { reveal } from '~/libs/motion'

export default function Footer() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL

  return (
    <motion.footer
      {...reveal}
      className='border-border mx-auto max-w-7xl flex justify-between max-sm:flex-col-reverse items-center gap-x-10 gap-y-4 border-y px-6 md:px-12 py-7 w-full'>
      <div className='text-fg-4 font-mono text-[10px] tracking-widest uppercase'>
        © Dhafit Farenza
      </div>
      <div className='flex flex-col items-end gap-4 sm:gap-2 max-xs:items-center'>
        {email && (
          <a
            href={`mailto:${email}`}
            className='ax-underline text-foreground text-sm font-medium tracking-[-0.01em] no-underline'>
            {email}
          </a>
        )}
        <div className='flex flex-wrap items-center gap-4'>
          {socialItems.map((social) => {
            const Icon = social.icon

            return (
              <a
                key={social.path}
                href={social.path}
                target='_blank'
                rel='noreferrer'
                title={social.label}
                aria-label={social.label}
                className='text-fg-3 hover:text-accent-400 transition-colors'>
                <Icon size={14} />
              </a>
            )
          })}
        </div>
      </div>
    </motion.footer>
  )
}
