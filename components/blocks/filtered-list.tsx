'use client'

import { motion } from 'motion/react'
import { Fragment, useMemo, useState, type ReactNode } from 'react'
import { IoSearch } from 'react-icons/io5'

import cn from '~/libs/cn'
import { reveal } from '~/libs/motion'

const ALL = 'All'

type FilteredListProps<T> = {
  items: T[]
  /** Facet values an item belongs to — populate the chip row and drive filtering. */
  getFacets: (item: T) => string[] | undefined
  /** Free-text haystack for the search box. Omit to render no search input. */
  getSearchText?: (item: T) => string
  renderItem: (item: T, index: number) => ReactNode
  getKey: (item: T, index: number) => string
  gridClassName: string
  searchPlaceholder?: string
  searchAriaLabel?: string
  /** Used in the empty state: "No {emptyNoun} match". */
  emptyNoun: string
  /** Pre-select a facet (case-insensitive); falls back to All when unmatched. */
  initialFacet?: string
}

export default function FilteredList<T>({
  items,
  getFacets,
  getSearchText,
  renderItem,
  getKey,
  gridClassName,
  searchPlaceholder,
  searchAriaLabel,
  emptyNoun,
  initialFacet,
}: FilteredListProps<T>) {
  const [query, setQuery] = useState('')

  const facets = useMemo(() => {
    const set = new Set<string>()
    items.forEach((item) => getFacets(item)?.forEach((f) => f && set.add(f)))
    return [ALL, ...Array.from(set).sort()]
  }, [items, getFacets])

  const [activeFacet, setActiveFacet] = useState<string>(() => {
    if (!initialFacet) return ALL
    const match = facets.find((f) => f.toLowerCase() === initialFacet.toLowerCase())
    return match ?? ALL
  })

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => {
      const matchesFacet = activeFacet === ALL || getFacets(item)?.includes(activeFacet)
      if (!matchesFacet) return false
      if (!q || !getSearchText) return true
      return getSearchText(item).toLowerCase().includes(q)
    })
  }, [items, query, activeFacet, getFacets, getSearchText])

  return (
    <div className='flex flex-col gap-8'>
      <motion.div {...reveal} className='flex flex-col gap-5'>
        {getSearchText && (
          <div className='border-border bg-surface focus-within:border-accent-400 flex items-center gap-3 rounded-xl border px-4 py-3 transition-colors'>
            <IoSearch className='text-fg-3 size-4 shrink-0' />
            <input
              type='search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              aria-label={searchAriaLabel}
              className='text-foreground placeholder:text-fg-4 w-full bg-transparent text-sm outline-none'
            />
            {query && (
              <button
                type='button'
                onClick={() => setQuery('')}
                className='text-fg-3 hover:text-foreground font-mono text-[10px] tracking-[0.18em] uppercase'>
                Clear
              </button>
            )}
          </div>
        )}

        <div className='flex flex-wrap gap-2'>
          {facets.map((facet) => (
            <button
              key={facet}
              type='button'
              onClick={() => setActiveFacet(facet)}
              className={cn(
                'font-mono text-xs tracking-widest rounded-full border px-3 py-1.5 transition-colors duration-200ms ease-out-soft',
                activeFacet === facet
                  ? 'border-accent-400 bg-accent-400/10 text-accent-300'
                  : 'border-border text-fg-3 hover:border-border-strong hover:text-fg-2',
              )}>
              {facet}
            </button>
          ))}
        </div>
      </motion.div>

      {filtered.length > 0 ? (
        <div className={gridClassName}>
          {filtered.map((item, i) => (
            <Fragment key={getKey(item, i)}>{renderItem(item, i)}</Fragment>
          ))}
        </div>
      ) : (
        <div className='border-border border-t border-dashed py-20 text-center'>
          <div className='text-fg-3 flex flex-col gap-1 font-mono text-xs tracking-[0.18em] uppercase truncate'>
            <span>No {emptyNoun} match</span>
            <span className='text-accent-400'>{query ? `“${query}”` : activeFacet}</span>
          </div>
        </div>
      )}
    </div>
  )
}
