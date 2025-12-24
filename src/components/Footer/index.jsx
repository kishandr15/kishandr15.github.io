import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.card};
  border-top: 1px solid ${({ theme }) => theme.card_border};
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled(motion.h1)`
  font-weight: 600;
  font-size: 20px;
  background: linear-gradient(
    135deg, 
    ${({ theme }) => theme.primary} 0%, 
    ${({ theme }) => theme.primary_light} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  padding: 8px 4px;
  min-height: 44px;
  display: flex;
  align-items: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 4px;
    right: 4px;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    
    &::after {
      transform: scaleX(1);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 6px 2px;
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
  width: 44px;
  height: 44px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary_alpha};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-4px);
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Kishan D R
        </Logo>

        <Nav>
          <NavLink
            href="#about"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            About
          </NavLink>
          <NavLink
            href="#skills"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Skills
          </NavLink>
          <NavLink
            href="#experience"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Experience
          </NavLink>
          <NavLink
            href="#projects"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Projects
          </NavLink>
          <NavLink
            href="#education"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Education
          </NavLink>
        </Nav>

        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsApp />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <Copyright>
          &copy; 2025 Kishan D R. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default React.memo(Footer)