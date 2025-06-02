import { MdxArticle } from '~/components/mdx/mdx-article'
import { Activity, activityEmoji } from '~/contents/activity-log'

const ActivityList = ({ activity }: { activity: Activity[] }) => {
  return (
    <div className='relative space-y-3'>
      {activity.map((item, index) => {
        return (
          <div key={index} className='relative'>
            <h5 className='font-semibold text-lg pb-2'>
              {new Date(item.date).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </h5>
            <div className='relative px-2'>
              {item.contents.map((content, i) => {
                return (
                  <div key={i} className='relative pb-1.5 last:pb-0'>
                    <div className='flex items-center gap-2 font-semibold'>
                      <div className='w-6 h-6 flex items-center justify-center'>
                        {activityEmoji[content.type]}
                      </div>
                      <h6>{content.title}</h6>
                    </div>
                    <div className='flex gap-2 pt-1'>
                      <div className='w-6 min-w-6 flex justify-center h-auto'>
                        <div className='bg-base-700 h-auto w-0.5 rounded-2xl'></div>
                      </div>
                      <MdxArticle source={content.description} className='prose-sm' />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ActivityList
