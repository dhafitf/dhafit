export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

declare const window: any;

export interface EventArgs {
  /** Typically the object that was interacted with (e.g. 'Video') */
  category: string
  /** The type of interaction (e.g. 'play') */
  action: string
  /** Useful for categorizing events (e.g. 'Fall Campaign') */
  label?: string
  /** A numeric value associated with the event (e.g. 42) */
  value?: number
  /** Specifies that a hit be considered non-interactive. */
  nonInteraction?: boolean
  /**
   * This specifies the transport mechanism with which hits will be sent.
   * The options are 'beacon', 'xhr', or 'image'. By default, analytics.js
   * will try to figure out the best method based on the hit size and browser
   * capabilities. If you specify 'beacon' and the user's browser does not support
   * the `navigator.sendBeacon` method, it will fall back to 'image' or 'xhr'
   * depending on hit size.
   */
  transport?: 'beacon' | 'xhr' | 'image'
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window.ga === 'function') {
    window.ga('send', 'pageview', url)
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value, nonInteraction, transport }: EventArgs) => {
  if (typeof window.ga === 'function') {
    window.ga('send', 'event', {
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      eventValue: value,
      nonInteraction,
      transport
    })
  }
}
