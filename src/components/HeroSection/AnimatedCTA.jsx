import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';
import { trackEvent } from '../../utils/analytics';

const CTAContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 24px;
  }
`;

const Button = styled(motion.a)`
  padding: 14px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.gradient_primary};
  color: ${({ theme }) => theme.white};
  border: none;
  box-shadow: ${({ theme }) => theme.shadow_lg};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow_glow};
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  border: 2px solid ${({ theme }) => theme.primary};
  
  &:hover {
    background: ${({ theme }) => theme.primary_alpha};
    border-color: ${({ theme }) => theme.primary_light};
  }
`;

const AnimatedCTA = ({ resumeLink = '#', contactLink = '#contact' }) => {
  const { ref: primaryRef, position: primaryPos, handleMouseMove: primaryMove, handleMouseLeave: primaryLeave } = useMagneticEffect(0.2);
  const { ref: secondaryRef, position: secondaryPos, handleMouseMove: secondaryMove, handleMouseLeave: secondaryLeave } = useMagneticEffect(0.2);

  return (
    <CTAContainer>
      <div ref={primaryRef} onMouseMove={primaryMove} onMouseLeave={primaryLeave}>
        <PrimaryButton
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          as={motion.a}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            x: primaryPos.x,
            y: primaryPos.y
          }}
          transition={{
            opacity: { delay: 0.5, duration: 0.5 },
            y: { delay: 0.5, duration: 0.5 },
            x: { type: 'spring', stiffness: 150, damping: 15 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => trackEvent('Clicked Resume', { url: resumeLink })}
        >
          View Resume
        </PrimaryButton>
      </div>

      <div ref={secondaryRef} onMouseMove={secondaryMove} onMouseLeave={secondaryLeave}>
        <SecondaryButton
          href={contactLink}
          as={motion.a}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            x: secondaryPos.x,
            y: secondaryPos.y
          }}
          transition={{
            opacity: { delay: 0.6, duration: 0.5 },
            y: { delay: 0.6, duration: 0.5 },
            x: { type: 'spring', stiffness: 150, damping: 15 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => trackEvent('Clicked Get In Touch')}
        >
          Get In Touch
        </SecondaryButton>
      </div>
    </CTAContainer>
  );
};

export default AnimatedCTA;
