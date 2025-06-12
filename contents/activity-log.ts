export const activityTypes = ['Code', 'Translation', 'Writing', 'Other'] as const

export type ActivityType = (typeof activityTypes)[number]

export interface ActivityContent {
  type: ActivityType
  title: string
  description: string
}

export interface Activity {
  date: Date | string
  contents: ActivityContent[]
}

export const activityEmoji: {
  [K in ActivityType]: string
} = {
  Translation: '🌏',
  Code: '💻',
  Writing: '📚',
  Other: '🔷',
}

export const activityData: { date: string; content: ActivityContent }[] = [
  {
    date: '2025-06-01',
    content: {
      type: 'Other',
      title: 'Adding Activity Log to personal site',
      description:
        'I’ve decided to start documenting my activities and personal journey from June 2025 onward. These may include things I build, career progress, contributions, notes, or translations.',
    },
  },
  {
    date: '2025-06-05',
    content: {
      type: 'Writing',
      title: 'Created Indonesian Wikipedia page about Sayaka Kakehashi',
      description:
        'Authored and published a new [Wikipedia article in Indonesian about Sayaka Kakehashi](https://id.wikipedia.org/wiki/Sayaka_Kakehashi), a Japanese singer and former member of Nogizaka46. The article covers her biography, career highlights, and contributions to the group.',
    },
  },
  {
    date: '2025-06-11',
    content: {
      type: 'Writing',
      title: 'Created Indonesian Wikipedia page about Konatsu Kato',
      description:
        'Authored and published a new [Wikipedia article in Indonesian about Konatsu Kato](https://id.wikipedia.org/wiki/Konatsu_Kato), a Japanese actress, model, dancer, and multi-talented entertainer.',
    },
  },
]

export const getActivityData = ({ type }: { type?: ActivityType }): Activity[] => {
  const data = type ? activityData.filter((item) => item.content.type === type) : activityData

  const groupedMap = new Map<string, ActivityContent[]>()

  for (const { date, content } of data) {
    if (!groupedMap.has(date)) {
      groupedMap.set(date, [])
    }
    groupedMap.get(date)!.push(content)
  }

  const groupedArray: Activity[] = []

  for (const [date, contents] of groupedMap.entries()) {
    groupedArray.push({ date, contents })
  }

  groupedArray.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return groupedArray
}

export const getNewestActivity = (length?: 5) => {
  const data = getActivityData({})
  return data.slice(0, length)
}
