import { Link as LinkR } from 'react-router-dom';
import styled, { css } from 'styled-components';

/* ─── Outer wrapper: full-width sticky strip (holds the floating pill centered) ─── */
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 12px 16px;
  pointer-events: none;
  transition: padding 0.3s ease;

  ${({ $scrolled }) =>
    $scrolled &&
    css`
      padding: 8px 16px;
    `}

  @media (max-width: 768px) {
    position: absolute;
    padding: 0;
  }
`;

/* ─── Floating pill container ─── */
export const NavPill = styled.div`
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-radius: 50px;
  background: ${({ theme }) => theme.bg}cc;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.card_border};
  box-shadow: ${({ theme }) => theme.shadow_lg};
  transition: background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  max-width: 900px;
  width: auto;

  ${({ $scrolled, theme }) =>
    $scrolled &&
    css`
      background: ${theme.bg}e6;
      box-shadow: ${theme.shadow_xl};
    `}

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    border-radius: 0;
    padding: 4px 12px;
    gap: 2px;
    border-left: none;
    border-right: none;
    border-top: none;
  }
`;

/* ─── Logo ─── */
export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 6px 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

export const Span = styled.span`
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease;
`;

/* ─── Nav links container (desktop) ─── */
export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ─── Individual nav link (wraps the <a> + animated pill) ─── */
export const NavLinkWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  color: ${({ theme, $active }) => $active ? theme.text_primary : theme.text_secondary};
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  transition: color 0.2s ease;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 50px;
  display: inline-block;
  white-space: nowrap;
  position: relative;
  z-index: 1;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

/* ─── Animated active pill behind the link (rendered by framer-motion layoutId) ─── */
export const ActivePill = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50px;
  background: ${({ theme }) => theme.primary_alpha};
  z-index: 0;
`;

/* ─── Divider between nav links and buttons ─── */
export const Divider = styled.div`
  width: 1px;
  height: 16px;
  background: ${({ theme }) => theme.card_border};
  margin: 0 4px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ─── GitHub button ─── */
export const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  border-radius: 50px;
  color: ${({ theme }) => theme.text_secondary};
  cursor: pointer;
  padding: 0 14px;
  font-weight: 500;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.2s ease;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.card_border};
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    border-color: ${({ theme }) => theme.text_tertiary};
    background: ${({ theme }) => theme.primary_alpha};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ─── Button container (theme switch + github on desktop) ─── */
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ─── Mobile controls row (theme toggle + hamburger) ─── */
export const MobileControls = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
    flex-shrink: 0;
  }
`;

/* ─── Mobile hamburger icon ─── */
export const MobileIcon = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50px;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    font-size: 1.1rem;
    transition: background 0.15s ease;
    flex-shrink: 0;

    &:hover {
      background: ${({ theme }) => theme.primary_alpha};
    }
  }
`;

/* ─── Mobile dropdown menu ─── */
export const MobileMenu = styled.div`
  pointer-events: auto;
  position: fixed;
  top: 60px;
  left: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  background: ${({ theme }) => theme.bg}f2;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow_xl};
  z-index: 999;
`;

/* ─── Mobile link ─── */
export const MobileLink = styled.a`
  color: ${({ theme, $active }) => $active ? theme.text_primary : theme.text_secondary};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.15s ease;
  text-decoration: none;
  padding: 10px 16px;
  min-height: 44px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  background: ${({ theme, $active }) => $active ? theme.primary_alpha : 'transparent'};

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.primary_alpha};
  }
`;

/* ─── Mobile footer row inside dropdown ─── */
export const MobileFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 4px;
  margin-top: 4px;
  border-top: 1px solid ${({ theme }) => theme.card_border};
`;

export const MobileGitHubButton = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  border-radius: 50px;
  color: ${({ theme }) => theme.text_secondary};
  cursor: pointer;
  padding: 0 16px;
  font-weight: 500;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.15s ease;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.card_border};

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    border-color: ${({ theme }) => theme.text_tertiary};
  }
`;
