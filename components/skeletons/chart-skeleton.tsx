const ChartSkeleton = () => {
  return (
    <ol className='m-0 list-none border-t border-border p-0'>
      {Array.from({ length: 10 }).map((_, i) => (
        <li
          key={i}
          className='pointer-events-none grid grid-cols-[36px_48px_1fr_auto] items-center gap-4 border-b border-border px-3.5 py-3'>
          <span className='font-mono text-xs tracking-[0.08em] text-fg-4 tabular-nums'>
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className='inline-block size-12 animate-pulse rounded bg-surface-2' />
          <div className='flex flex-1 flex-col gap-1.5'>
            <span className='inline-block h-3 w-1/2 animate-pulse rounded bg-surface-2' />
            <span className='inline-block h-3 w-1/3 animate-pulse rounded bg-surface-2' />
          </div>
          <span className='inline-block h-3 w-10 animate-pulse rounded bg-surface-2' />
        </li>
      ))}
    </ol>
  )
}

export default ChartSkeleton
