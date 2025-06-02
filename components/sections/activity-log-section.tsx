// import { Suspense } from 'react'

import ActivityList from '@/blocks/activity-list'
import ActivityLogFilter from '@/blocks/activity-log-filter'
import { ActivityType, getActivityData } from '~/contents/activity-log'

const ActivityLogSection = async ({ query }: { query?: string }) => {
  const activityData = getActivityData({ type: query as ActivityType | undefined })

  return (
    <div className='space-y-5'>
      <ActivityLogFilter />
      <ActivityList activity={activityData} />
    </div>
  )
}

export default ActivityLogSection
