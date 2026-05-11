import ActivitySection from '@/sections/activity-section'
import HeroSection from '@/sections/hero-section'
import TranslationsSection from '@/sections/translations-section'
import WorkSection from '@/sections/work-section'
import WritingSection from '@/sections/writing-section'
import { activityData } from '~/contents/activity-log'
import { getPosts } from '~/libs/contents'
import { getTrackLyrics } from '~/libs/lyrics'

export default function Home() {
  const projects = getPosts('PROJECT')
  const posts = getPosts('BLOG').slice(0, 4)
  const tracks = getTrackLyrics()
    .sort((a, b) => new Date(b.updatedAt ?? 0).getTime() - new Date(a.updatedAt ?? 0).getTime())
    .slice(0, 6)
  const entries = [...activityData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)

  return (
    <div className='relative'>
      <HeroSection />
      <WorkSection projects={projects} />
      <WritingSection posts={posts} />
      <TranslationsSection tracks={tracks} />
      <ActivitySection entries={entries} />
    </div>
  )
}
