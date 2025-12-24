import styled from 'styled-components';

export const ToggleContainer = styled.button`
  position: relative;
  width: 70px;
  height: 32px;
  background: ${({ theme, $isDark }) =>
        $isDark ? theme.card : theme.bgLight};
  border: 2px solid ${({ theme }) => theme.card_border};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  padding: 0;
  overflow: hidden;
  
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: ${({ theme }) => theme.shadow_md};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 28px;
  }
`;

export const ToggleSlider = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.gradient_primary};
  border-radius: 50%;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${({ $isDark }) => $isDark ? '38px' : '4px'});
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow_sm};
  
  svg {
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.white};
  }
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    transform: translateX(${({ $isDark }) => $isDark ? '32px' : '4px'});
    
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: opacity 0.3s ease;
  
  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme, $active }) =>
        $active ? theme.text_primary : theme.text_tertiary};
  }
  
  &.sun {
    left: 6px;
  }
  
  &.moon {
    right: 6px;
  }
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;
