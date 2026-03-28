import styled from 'styled-components';

export const ToggleContainer = styled.button`
  position: relative;
  width: 64px;
  height: 30px;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  padding: 0;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.text_tertiary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 26px;
  }
`;

export const ToggleSlider = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  transition: transform 0.2s ease;
  transform: translateX(${({ $isDark }) => $isDark ? '36px' : '4px'});
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  svg {
    width: 12px;
    height: 12px;
    color: ${({ theme }) => theme.white};
  }

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    transform: translateX(${({ $isDark }) => $isDark ? '32px' : '4px'});

    svg {
      width: 10px;
      height: 10px;
    }
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  transition: opacity 0.2s ease;
  z-index: 1;
  opacity: ${({ $active }) => ($active ? 0 : 0.5)};

  svg {
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.text_tertiary};
  }

  &.sun {
    left: 5px;
  }

  &.moon {
    right: 5px;
  }

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;
