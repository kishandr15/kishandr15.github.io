import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { trackEvent } from '../../utils/analytics';

const CTAContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 24px;
  }

  @media (max-width: 640px) {
    justify-content: center;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }
`;

const Button = styled(motion.a)`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.15s ease;
  min-height: 44px;

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 400px) {
    width: 100%;
    padding: 12px 20px;
  }
`;

const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.card_border};

  &:hover {
    border-color: ${({ theme }) => theme.text_tertiary};
  }
`;

const AnimatedCTA = ({ resumeLink = '#', contactLink = '#contact' }) => {
  return (
    <CTAContainer>
      <PrimaryButton
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        as={motion.a}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => trackEvent('Clicked Resume', { url: resumeLink })}
      >
        View Resume
      </PrimaryButton>

      <SecondaryButton
        href={contactLink}
        as={motion.a}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => trackEvent('Clicked Get In Touch')}
      >
        Get In Touch
      </SecondaryButton>
    </CTAContainer>
  );
};

export default AnimatedCTA;
