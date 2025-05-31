import { DetailsListValue, DetailsListValues } from '@/mdx/details-list-value'

interface DetailsListProps {
  items: {
    label: string
    value: string | string[]
  }[]
}

const DetailsList = ({ items }: DetailsListProps) => {
  return (
    <div className='relative'>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className='py-3 border-b-2 border-[#333435] flex items-center justify-between text-sm text-gray-400'>
            <span className='tracking-wider font-medium'>{item.label}</span>
            {Array.isArray(item.value) ? (
              <DetailsListValues values={item.value} />
            ) : (
              <DetailsListValue value={item.value} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default DetailsList
