import NextFramePlaceholder from '@/common/next-frame-placeholder'
import PolaroidCard from '@/common/polaroid-card'
import SectionHeader from '@/common/section-header'

export default function WorkSection({ projects }: { projects: PostData[] }) {
  return (
    <section id='work' className='relative mx-auto max-w-7xl px-6 md:px-12 pt-16 pb-20'>
      <SectionHeader
        title='Recent things.'
        href='/projects'
        linkLabel='All projects'
        description="A few projects I've designed, built, and shipped lately."
      />

      <div className='grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-3'>
        {projects.map((p, i) => (
          <PolaroidCard key={p.slug} post={p} index={i} />
        ))}
        <NextFramePlaceholder delay={projects.length * 0.05} />
      </div>
    </section>
  )
}
