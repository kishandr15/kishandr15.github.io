import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import { Bio } from '../../data/constants';
import { RetroGrid } from './RetroGrid';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.card};
  border-top: 1px solid ${({ theme }) => theme.card_border};
  position: relative;
  overflow: hidden;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  z-index: 1;
`;

const Logo = styled(motion.h1)`
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.15s ease;
  padding: 8px 4px;
  min-height: 44px;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 0.5rem;
`;

const SocialMediaIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_tertiary};
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 50%;
  transition: all 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    border-color: ${({ theme }) => theme.text_tertiary};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 3px;
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 16px;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 13px;
  color: ${({ theme }) => theme.text_tertiary};
  text-align: center;
`;

const FOOTER_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'blog', label: 'Blog' },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const handleClick = (e, link) => {
    e.preventDefault();
    if (link.route) {
      navigate(link.route);
      window.scrollTo({ top: 0 });
      return;
    }
    if (isHome) {
      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `/#${link.id}`);
    } else {
      navigate({ pathname: '/', hash: `#${link.id}` });
    }
  };

  return (
    <FooterContainer>
      <RetroGrid angle={65} />
      <FooterWrapper>
        <Logo
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Kishan D R
        </Logo>

        <Nav>
          {FOOTER_LINKS.map((link) => (
            <NavLink
              key={link.id}
              href={link.route || `/#${link.id}`}
              onClick={(e) => handleClick(e, link)}
            >
              {link.label}
            </NavLink>
          ))}
        </Nav>

        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsApp />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <Copyright>
          &copy; 2026 Kishan D R. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default React.memo(Footer)
