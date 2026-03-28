// ============================================
// ENTRANCE ANIMATIONS
// ============================================

export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
};

// ============================================
// SLIDE ANIMATIONS
// ============================================

export const slideInFromLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const slideInFromRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
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
            staggerChildren: 0.08,
            delayChildren: 0.15,
        },
    },
};

export const staggerFast = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.1,
        },
    },
};

export const staggerSlow = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// ============================================
// HOVER & INTERACTION VARIANTS
// ============================================

export const buttonHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.15,
            ease: 'easeOut',
        },
    },
    tap: {
        scale: 0.98,
    },
};

export const cardHover = {
    rest: {
        y: 0,
    },
    hover: {
        y: -2,
        transition: {
            duration: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const iconHover = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.15,
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
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
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
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const letterReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
        },
    },
};

// ============================================
// PAGE TRANSITIONS
// ============================================

export const pageTransition = {
    initial: { opacity: 0, y: 12 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -12,
        transition: {
            duration: 0.2,
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
            duration: 0.2,
        },
    },
};

export const modalContent = {
    hidden: { opacity: 0, scale: 0.97, y: 12 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

export const createStaggerContainer = (staggerDelay = 0.08, delayChildren = 0.15) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerDelay,
            delayChildren,
        },
    },
});

export const createSlideVariant = (direction, distance = 40) => {
    const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
    const value = direction === 'left' || direction === 'up' ? -distance : distance;

    return {
        hidden: { opacity: 0, [axis]: value },
        visible: {
            opacity: 1,
            [axis]: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };
};

export const respectReducedMotion = (variants) => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.01 } },
        };
    }
    return variants;
};
