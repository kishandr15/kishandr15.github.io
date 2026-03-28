import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronUp } from 'react-icons/fi';
import styled from 'styled-components';

const StyledButton = styled(motion.button)`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(133, 76, 230, 0.15);
  border: 1px solid rgba(133, 76, 230, 0.5);
  color: #854CE6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    background: rgba(133, 76, 230, 0.28);
    box-shadow: 0 0 16px rgba(133, 76, 230, 0.45);
  }

  svg {
    width: 22px;
    height: 22px;
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
