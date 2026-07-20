import cn from '~/libs/cn'

type PageHeaderProps = {
  title: string
  description: string
  divider?: boolean
}

export default function PageHeader({ title, description, divider = true }: PageHeaderProps) {
  return (
    <div className={cn('mt-4 mb-10 w-full', divider && 'border-border border-b pb-8 sm:pb-10')}>
      <h1 className='text-foreground font-display m-0 mb-4 text-5xl leading-none font-medium tracking-[-0.03em]'>
        {title}
      </h1>
      <p className='text-fg-3 max-w-[60ch] text-base leading-[1.6]'>{description}</p>
    </div>
  )
}
