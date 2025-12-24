import { useTransform } from 'framer-motion';

/**
 * Custom hook for parallax scroll effects
 * @param {MotionValue} value - Motion value to transform (usually scrollYProgress)
 * @param {number} distance - Distance to move (in pixels)
 * @returns {MotionValue} Transformed motion value for parallax effect
 */
export const useParallax = (value, distance) => {
    return useTransform(value, [0, 1], [-distance, distance]);
};

/**
 * Custom hook for parallax with custom range
 */
export const useParallaxCustom = (value, inputRange, outputRange) => {
    return useTransform(value, inputRange, outputRange);
};
