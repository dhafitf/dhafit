'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import { Button } from '@/common/button'
import { activityTypes } from '~/contents/activity-log'
import cn from '~/libs/cn'

const ActivityLogFilter = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [filter, setFilter] = useState(searchParams.get('q'))

  const handleClickFilter = (item: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('q', item)
    router.push(window.location.pathname + `?${params.toString()}`)
    setFilter(item)
  }

  const clearFilter = () => {
    router.push(window.location.pathname)
    setFilter(null)
  }

  return (
    <div className='flex items-center gap-2 flex-wrap'>
      <Button
        onClick={clearFilter}
        className={cn('px-3 py-1.5 h-fit cursor-pointer', !!filter && 'opacity-50')}>
        All
      </Button>
      {activityTypes.map((item, index) => {
        const isSelected = filter?.toLowerCase() === item.toLowerCase()

        return (
          <Button
            key={index}
            onClick={() => (isSelected ? clearFilter() : handleClickFilter(item))}
            className={cn(
              'capitalize px-3 py-1.5 h-fit cursor-pointer',
              filter && (isSelected ? 'bg-base-700' : 'opacity-50')
            )}>
            {isSelected && <IoMdClose />}
            <span>{item}</span>
          </Button>
        )
      })}
    </div>
  )
}

export default ActivityLogFilter
