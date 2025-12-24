import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styled from 'styled-components';

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ theme }) => theme.gradient_primary};
  z-index: 9999;
  transform-origin: left;
  will-change: transform;
  box-shadow: 0 0 10px ${({ theme }) => theme.primary};
`;

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  // Apply spring physics for smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ProgressBar
      style={{
        scaleX,
      }}
    />
  );
};

export default ScrollProgress;
