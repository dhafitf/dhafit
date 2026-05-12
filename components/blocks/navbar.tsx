'use client'

import AnimatedMonogram from '@/common/animated-monogram'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { navItems } from '~/libs/constants'
import { REVEAL_EASE } from '~/libs/motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  return (
    <>
      <nav className='sticky w-full inset-x-0 top-0 z-30 mx-auto grid max-w-7xl grid-cols-[auto_1fr] items-center gap-6 bg-[color-mix(in_oklab,var(--color-background)_80%,transparent)] px-5 py-3.5 shadow-[0_1px_0_0_var(--color-border)] backdrop-blur-md backdrop-saturate-150 md:px-10'>
        <Link
          href='/'
          onClick={() => setOpen(false)}
          className='flex items-baseline gap-1 no-underline'>
          <AnimatedMonogram />
        </Link>

        <div className='hidden items-center justify-end gap-7 md:flex'>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className='text-fg-2 hover:text-accent-400 text-sm font-medium no-underline transition-colors'>
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type='button'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className='justify-self-end flex size-6 flex-col items-center justify-center gap-1.5 md:hidden'>
          <motion.span
            className='bg-foreground block h-0.5 w-5 origin-center rounded-sm'
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: REVEAL_EASE }}
          />
          <motion.span
            className='bg-foreground block h-0.5 w-5 origin-center rounded-sm'
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: REVEAL_EASE }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className='bg-background/95 fixed inset-0 z-20 backdrop-blur-md md:hidden'>
            <motion.ul
              initial='closed'
              animate='open'
              exit='closed'
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              }}
              onClick={(e) => e.stopPropagation()}
              className='mx-auto flex max-w-7xl flex-col gap-2 px-5 pt-24'>
              {navItems.map((item) => (
                <motion.li
                  key={item.path}
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.45, ease: REVEAL_EASE },
                    },
                    closed: {
                      opacity: 0,
                      y: 16,
                      transition: { duration: 0.2 },
                    },
                  }}>
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className='text-foreground hover:text-accent-400 block py-2 text-2xl font-medium tracking-[-0.02em] no-underline transition-colors'>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
