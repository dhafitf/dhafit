export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

interface EventArgs {
  category: string
  action: string
  label?: string
  value?: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.ga('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventArgs) => {
  window.ga('send', 'event', {
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
    eventValue: value,
  })
}
