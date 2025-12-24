import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Shape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary_alpha};
  opacity: 0.5;
  will-change: transform;
`;

// Throttle function to limit updates
const useThrottledValue = (value, delay = 100) => {
    const [throttledValue, setThrottledValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setThrottledValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return throttledValue;
};

const FloatingShapes = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
    const throttledMouse = useThrottledValue(mousePosition, 50);

    useEffect(() => {
        let rafId;
        let lastX = 0;
        let lastY = 0;

        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            // Only update if moved significantly (reduces jank)
            if (Math.abs(x - lastX) > 0.02 || Math.abs(y - lastY) > 0.02) {
                lastX = x;
                lastY = y;

                // Use RAF to batch updates
                if (rafId) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => {
                    setMousePosition({ x, y });
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    // Memoize shapes config
    const shapes = useMemo(() => [
        { size: 300, x: '10%', y: '20%' },
        { size: 200, x: '80%', y: '60%' },
        { size: 250, x: '60%', y: '10%' },
        { size: 180, x: '20%', y: '70%' },
    ], []);

    return (
        <FloatingContainer>
            {shapes.map((shape, index) => (
                <Shape
                    key={index}
                    style={{
                        width: shape.size,
                        height: shape.size,
                        left: shape.x,
                        top: shape.y,
                        transform: `translate3d(${throttledMouse.x * 20}px, ${throttledMouse.y * 20}px, 0)`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: index * 0.2,
                        ease: 'easeOut',
                    }}
                />
            ))}
        </FloatingContainer>
    );
};

export default React.memo(FloatingShapes);
