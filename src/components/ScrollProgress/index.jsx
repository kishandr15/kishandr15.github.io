import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styled from 'styled-components';

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${({ theme }) => theme.primary};
  z-index: 9999;
  transform-origin: left;
  will-change: transform;
`;

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

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
