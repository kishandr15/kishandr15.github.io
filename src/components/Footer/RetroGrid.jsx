import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const gridAnimation = keyframes`
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
`;

const RetroGridContainer = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.5;
  perspective: 200px;
  top: 0;
  left: 0;
  z-index: 0;
`;

const GridWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: ${({ $angle }) => `rotateX(${$angle}deg)`};
`;

const Grid = styled.div`
  animation: ${gridAnimation} 15s linear infinite;
  background-repeat: repeat;
  background-size: 60px 60px;
  height: 300vh;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: -50%;
  transform-origin: 100% 0 0;
  width: 600vw;
  
  /* Light mode grid lines */
  background-image: 
    linear-gradient(to right, ${({ theme, $isDark }) => 
      $isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.3)'} 1px, transparent 0),
    linear-gradient(to bottom, ${({ theme, $isDark }) => 
      $isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.3)'} 1px, transparent 0);
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme, $isDark }) => 
    $isDark 
      ? `linear-gradient(to top, ${theme.bg} 0%, transparent 90%)`
      : `linear-gradient(to top, ${theme.card} 0%, transparent 90%)`};
  pointer-events: none;
`;

export const RetroGrid = ({ angle = 65, className }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <RetroGridContainer className={className}>
      <GridWrapper $angle={angle}>
        <Grid $isDark={isDark} />
      </GridWrapper>
      <GradientOverlay $isDark={isDark} />
    </RetroGridContainer>
  );
};

