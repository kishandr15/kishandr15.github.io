import React, { useEffect, useRef } from 'react';
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
  filter: blur(40px);
  will-change: transform;
`;

// Different depth values create true parallax layers
const SHAPES = [
  { size: 320, x: '8%',  y: '15%', depth: 1.0 },
  { size: 220, x: '78%', y: '58%', depth: 0.5 },
  { size: 260, x: '58%', y: '8%',  depth: 0.75 },
  { size: 200, x: '18%', y: '65%', depth: 0.35 },
];

const FloatingShapes = () => {
  const refs = useRef([]);

  useEffect(() => {
    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 40;
      targetY = (e.clientY / window.innerHeight - 0.5) * 40;
    };

    const tick = () => {
      // Smooth lerp — no React state involved
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      refs.current.forEach((el, i) => {
        if (el) {
          const d = SHAPES[i].depth;
          el.style.transform = `translate3d(${currentX * d}px, ${currentY * d}px, 0)`;
        }
      });

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <FloatingContainer>
      {SHAPES.map((shape, i) => (
        <Shape
          key={i}
          ref={(el) => (refs.current[i] = el)}
          style={{ width: shape.size, height: shape.size, left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 1.4, delay: i * 0.2, ease: 'easeOut' }}
        />
      ))}
    </FloatingContainer>
  );
};

export default React.memo(FloatingShapes);
