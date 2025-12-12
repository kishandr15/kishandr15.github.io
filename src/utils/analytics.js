// Google Analytics or other analytics integration
export const trackEvent = (eventName, eventData) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData)
  }
}

export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
    })
  }
}

