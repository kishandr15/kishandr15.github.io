import mixpanel from 'mixpanel-browser';

// Initialize Mixpanel
mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
  autocapture: true,
  record_sessions_percent: 0,
  api_host: "https://api-js.mixpanel.com",
  debug: process.env.NODE_ENV === 'development'
});

export const trackEvent = (eventName, props = {}) => {
  mixpanel.track(eventName, {
    ...props,
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
};

export const trackPageView = (path) => {
  mixpanel.track('Page View', {
    path,
    title: document.title,
  });
};

export default mixpanel;
