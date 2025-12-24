// ============================================
// ENTRANCE ANIMATIONS
// ============================================

export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // Custom easing curve
        },
    },
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

// ============================================
// SLIDE ANIMATIONS
// ============================================

export const slideInFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const slideInFromRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// ============================================
// STAGGER CONTAINERS
// ============================================

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerFast = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

export const staggerSlow = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

// ============================================
// HOVER & INTERACTION VARIANTS
// ============================================

export const buttonHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: 'easeOut',
        },
    },
    tap: {
        scale: 0.95,
    },
};

export const cardHover = {
    rest: {
        y: 0,
        scale: 1,
    },
    hover: {
        y: -8,
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const iconHover = {
    rest: { scale: 1, rotate: 0 },
    hover: {
        scale: 1.1,
        rotate: 5,
        transition: {
            duration: 0.2,
            ease: 'easeOut',
        },
    },
};

// ============================================
// SCROLL-LINKED ANIMATIONS
// ============================================

export const parallaxVariants = (offset) => ({
    hidden: { y: offset },
    visible: {
        y: 0,
        transition: {
            duration: 0,
        },
    },
});

export const scaleOnScroll = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// ============================================
// WORD/CHARACTER ANIMATIONS
// ============================================

export const wordReveal = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const letterReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

// ============================================
// SPECIAL EFFECTS
// ============================================

export const magneticEffect = {
    x: 0,
    y: 0,
    transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
    },
};

export const floatingAnimation = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

export const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

export const rotateAnimation = {
    initial: { rotate: 0 },
    animate: {
        rotate: 360,
        transition: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
        },
    },
};

// ============================================
// PAGE TRANSITIONS
// ============================================

export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
        },
    },
};

// ============================================
// MODAL/OVERLAY ANIMATIONS
// ============================================

export const modalBackdrop = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
};

export const modalContent = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Creates a stagger container with custom timing
 */
export const createStaggerContainer = (staggerDelay = 0.1, delayChildren = 0.2) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerDelay,
            delayChildren,
        },
    },
});

/**
 * Creates a slide animation from any direction
 */
export const createSlideVariant = (direction, distance = 60) => {
    const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
    const value = direction === 'left' || direction === 'up' ? -distance : distance;

    return {
        hidden: { opacity: 0, [axis]: value },
        visible: {
            opacity: 1,
            [axis]: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
};

/**
 * Respects user's reduced motion preference
 */
export const respectReducedMotion = (variants) => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.01 } },
        };
    }
    return variants;
};
