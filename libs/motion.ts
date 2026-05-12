export const REVEAL_EASE = [0.22, 1, 0.36, 1] as const

export const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px -40px 0px' },
  transition: { duration: 0.6, ease: REVEAL_EASE },
} as const

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: REVEAL_EASE },
} as const
