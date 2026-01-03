import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light + 'dd'};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid ${({ theme }) => theme.primary + 20};
    box-shadow: ${({ theme }) => theme.shadow_sm};
    transition: all 0.3s ease;
    @media (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    align-items: center;
  }
  
  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    gap: 8px;
    
    @media (max-width: 768px) {
      width: auto;
      padding: 0;
      align-items: center;
    }
    
    @media (max-width: 640px) {
      padding: 0 0px;
      width: auto;
  }
`;

export const LogoIcon = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    display: block;
    transform: scale(2);
    transform-origin: center;
    
    @media (max-width: 640px) {
      width: 40px;
      height: 40px;
      transform: scale(2);
    }
`;

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
    line-height: 1;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.gradient_primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 1;
    }
`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 8px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    position: relative;
    padding: 8px 16px;
    border-radius: 8px;
    display: inline-block;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${({ theme }) => theme.primary_alpha};
        border-radius: 8px;
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: -1;
    }
    
    &::after {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background: ${({ theme }) => theme.primary};
        border-radius: 2px;
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: translateY(-2px);
    }
    
    &:hover::before {
        opacity: 1;
        transform: scale(1);
    }
    
    &:hover::after {
        width: calc(100% - 32px);
    }
    
    &:active {
      transform: translateY(0) scale(0.98);
      transition: transform 0.1s ease;
    }
    
    @media (max-width: 768px) {
      &:active {
        color: ${({ theme }) => theme.primary};
        transform: scale(0.97);
      }
      
      &:active::before {
        opacity: 1;
        transform: scale(1);
      }
    }

    &.active {
      color: ${({ theme }) => theme.primary};
    }
    
    &.active::before {
        opacity: 1;
        transform: scale(1);
    }
    
    &.active::after {
        width: calc(100% - 32px);
    }
`;


export const GitHubButton = styled.a`
  border: 2px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 12px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 24px;
  font-weight: 600;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  background: transparent;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradient_primary};
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }
  
  &:hover {
    color: ${({ theme }) => theme.white};
    transform: translateY(-3px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadow_glow};
    border-color: transparent;
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
  }
  
  @media screen and (max-width: 768px) { 
    font-size: 14px;
    padding: 0 16px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    position: relative;
    margin-left: auto;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    min-width: 44px;
    min-height: 44px;
    align-items: center;
    justify-content: center;
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  background: transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradient_primary};
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow_md};
  }
  
  :hover::before {
    left: 0;
  }
  
  :active {
    transform: translateY(0);
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  padding: 12px 20px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: relative;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.primary_alpha};
    border-radius: 8px;
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 0;
    background: ${({ theme }) => theme.primary};
    border-radius: 0 3px 3px 0;
    transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateX(4px);
  }
  
  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }
  
  &:hover::after {
    height: 60%;
  }

  &.active {
    color: ${({ theme }) => theme.primary};
  }
  
  &.active::before {
    opacity: 1;
    transform: scale(1);
  }
  
  &.active::after {
    height: 60%;
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;