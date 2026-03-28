import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Nav, NavPill, NavLink, NavLinkWrapper, ActivePill, NavLogo, NavItems,
  Span, GitHubButton, ButtonContainer, MobileIcon, MobileControls, MobileMenu, MobileLink,
  Divider, MobileFooter, MobileGitHubButton
} from './NavbarStyledComponent'
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bio } from '../../data/constants';
import ThemeSwitcher from '../ThemeSwitcher';
import useActiveSection from '../../hooks/useActiveSection';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'blog', label: 'Blog' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (e, link) => {
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleScroll = () => setIsOpen(false);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const toggle = () => setIsOpen(prev => !prev);
  const close = () => setIsOpen(false);

  return (
    <Nav
      ref={navRef}
      $scrolled={scrolled}
      as={motion.nav}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <NavPill $scrolled={scrolled}>
        <NavLogo
          to='/'
          onClick={(e) => { e.preventDefault(); isHome ? window.scrollTo({ top: 0, behavior: 'smooth' }) : navigate('/'); }}
          style={{ display: "flex", alignItems: "center", cursor: 'pointer' }}
        >
          <Span>Portfolio</Span>
        </NavLogo>

        <NavItems>
          {NAV_LINKS.map((link) => (
            <NavLinkWrapper key={link.id}>
              {activeSection === link.id && (
                <ActivePill
                  as={motion.div}
                  layoutId="activeNavPill"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <NavLink
                href={link.route || `/#${link.id}`}
                onClick={(e) => handleNavClick(e, link)}
                $active={activeSection === link.id || (link.route && location.pathname.startsWith(link.route.replace(/s$/, '')))}
              >
                {link.label}
              </NavLink>
            </NavLinkWrapper>
          ))}
        </NavItems>

        <Divider />

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            <FiGithub size={14} />
            GitHub
          </GitHubButton>
          <ThemeSwitcher />
        </ButtonContainer>

        <MobileControls>
          <ThemeSwitcher />
          <MobileIcon onClick={toggle} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </MobileControls>
      </NavPill>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            as={motion.div}
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            {NAV_LINKS.map((link) => (
              <MobileLink
                key={link.id}
                href={link.route || `/#${link.id}`}
                onClick={(e) => { handleNavClick(e, link); close(); }}
                $active={activeSection === link.id || (link.route && location.pathname.startsWith(link.route.replace(/s$/, '')))}
              >
                {link.label}
              </MobileLink>
            ))}
            <MobileFooter>
              <MobileGitHubButton href={Bio.github} target="_blank">
                <FiGithub size={14} />
                GitHub
              </MobileGitHubButton>
            </MobileFooter>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  )
}

export default React.memo(Navbar)
