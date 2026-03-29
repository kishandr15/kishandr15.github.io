const isGAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

export const trackEvent = (eventName, props = {}) => {
  if (isGAvailable()) {
    window.gtag('event', eventName, {
      ...props,
      event_category: 'engagement',
      event_label: eventName,
    });
  }
};

export const trackPageView = (path) => {
  if (isGAvailable()) {
    window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-2EMM7TTM9F', {
      page_path: path,
      page_title: document.title,
    });
  }
};
