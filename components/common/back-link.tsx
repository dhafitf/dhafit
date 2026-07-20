import Link from 'next/link'

type BackLinkProps = {
  href: string
  label: string
}

export default function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      href={href}
      className='text-fg-3 hover:text-accent-400 mb-8 sm:mb-10 inline-block font-mono text-xs tracking-widest uppercase no-underline transition-colors'>
      ← {label}
    </Link>
  )
}
