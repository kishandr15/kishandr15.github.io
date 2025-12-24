import { useEffect, useState } from 'react';

/**
 * Custom hook for Intersection Observer API
 * Detects when an element enters the viewport
 * @param {RefObject} ref - React ref to the element to observe
 * @param {Object} options - Intersection Observer options
 * @returns {boolean} indicating if element is in view
 */
export const useIntersectionObserver = (ref, options = {}) => {
    const {
        threshold = 0.1,
        root = null,
        rootMargin = '0px',
        triggerOnce = true,
    } = options;

    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const inView = entry.isIntersecting;
                setIsInView(inView);

                // If triggerOnce is true, unobserve after first intersection
                if (inView && triggerOnce && element) {
                    observer.unobserve(element);
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [ref, threshold, root, rootMargin, triggerOnce]);

    return isInView;
};

/**
 * Hook to trigger animations when element enters viewport
 * Returns both the ref and inView state
 */
export const useInViewAnimation = (options = {}) => {
    const [ref, setRef] = useState(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const inView = entry.isIntersecting;
                setIsInView(inView);

                if (inView && options.triggerOnce) {
                    observer.unobserve(ref);
                }
            },
            {
                threshold: options.threshold || 0.1,
                root: options.root || null,
                rootMargin: options.rootMargin || '0px',
            }
        );

        observer.observe(ref);

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return { ref: setRef, isInView };
};
