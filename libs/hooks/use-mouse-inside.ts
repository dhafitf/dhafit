'use client'

import { useEffect, useState, type RefObject } from 'react'

export type MousePoint = { x: number; y: number; inside: boolean }

export function useMouseInside(ref: RefObject<HTMLElement | null>) {
  const [pt, setPt] = useState<MousePoint>({ x: -9999, y: -9999, inside: false })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      setPt({ x: e.clientX - r.left, y: e.clientY - r.top, inside: true })
    }
    const leave = () => setPt((p) => ({ ...p, inside: false }))

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [ref])

  return pt
}
