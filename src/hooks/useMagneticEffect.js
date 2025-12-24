import { useState, useRef } from 'react';

/**
 * Custom hook for magnetic/attraction effect on hover
 * Creates a subtle pull effect towards cursor position
 * @param {number} strength - Strength of the magnetic effect (0-1, default 0.3)
 * @returns {Object} Object with ref, position, and event handlers
 */
export const useMagneticEffect = (strength = 0.3) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return { ref, position, handleMouseMove, handleMouseLeave };
};
