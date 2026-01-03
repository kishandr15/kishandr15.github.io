import mixpanel from 'mixpanel-browser';

// Initialize Mixpanel
mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
  autocapture: true,
  record_sessions_percent: 0,
  api_host: "https://api-js.mixpanel.com",
  debug: process.env.NODE_ENV === 'development'
});

// Google Analytics helper functions
const isGAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

export const trackEvent = (eventName, props = {}) => {
  // Track with Mixpanel
  mixpanel.track(eventName, {
    ...props,
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });

  // Track with Google Analytics
  if (isGAvailable()) {
    window.gtag('event', eventName, {
      ...props,
      event_category: 'engagement',
      event_label: eventName,
    });
  }
};

export const trackPageView = (path) => {
  // Track with Mixpanel
  mixpanel.track('Page View', {
    path,
    title: document.title,
  });

  // Track with Google Analytics
  if (isGAvailable()) {
    window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-2EMM7TTM9F', {
      page_path: path,
      page_title: document.title,
    });
  }
};

export default mixpanel;
