import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronUp } from 'react-icons/fi';
import styled from 'styled-components';

const StyledButton = styled(motion.button)`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 1000;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary_alpha};
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary_alpha};
    box-shadow: ${({ theme }) => theme.shadow_glow};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 16px;
    width: 40px;
    height: 40px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const SCROLL_THRESHOLD = 400;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <StyledButton
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronUp />
        </StyledButton>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
