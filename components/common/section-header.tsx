import Link from 'next/link'

import cn from '~/libs/cn'

type SectionHeaderProps = {
  title: string
  href: string
  linkLabel: string
  description?: string
  className?: string
}

export default function SectionHeader({
  title,
  href,
  linkLabel,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-10', className)}>
      <div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3'>
        <h2 className='text-foreground font-display m-0 text-4xl leading-none font-medium tracking-[-0.03em] md:text-5xl'>
          {title}
        </h2>
        <Link
          href={href}
          className='group text-fg-3 hover:text-accent-400 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest whitespace-nowrap no-underline transition-colors'>
          {linkLabel}
          <span
            aria-hidden
            className='ease-out-soft transition-transform duration-300 group-hover:translate-x-0.5'>
            →
          </span>
        </Link>
      </div>
      {description && (
        <p className='text-fg-3 mt-4 max-w-sm text-sm leading-relaxed'>{description}</p>
      )}
    </div>
  )
}
