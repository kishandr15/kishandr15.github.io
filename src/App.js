import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useState } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { darkTheme, lightTheme } from './utils/Themes.js'
import { ThemeProvider, useTheme } from './contexts/ThemeContext.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import ScrollProgress from "./components/ScrollProgress";
import InteractiveCursor from "./components/InteractiveCursor";
import SEO from "./components/SEO";
import SkipToMain from "./components/SkipLink";
import styled from "styled-components";
import React, { Suspense, useEffect } from "react";
import { trackPageView } from './utils/analytics';

const ParticlesBackground = React.lazy(() => import('./components/ParticlesBackground'));
const ProjectDetails = React.lazy(() => import('./components/ProjectDetails'));
const Experience = React.lazy(() => import('./components/Experience'));
const Education = React.lazy(() => import('./components/Education'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

// Skeleton loader to prevent layout shifts
const SkeletonLoader = styled.div`
  min-height: ${({ height }) => height || '400px'};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(133, 76, 230, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(133, 76, 230, 0.06) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`

const Wrapper = styled.div`
  background: linear-gradient(135deg, rgba(133, 76, 230, 0.1) 0%, rgba(133, 76, 230, 0.05) 50%, rgba(133, 76, 230, 0.1) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(133, 76, 230, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
`

// Inner component that uses the theme context
const AppContent = () => {
  const { resolvedTheme } = useTheme();
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const currentTheme = resolvedTheme === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  return (
    <StyledThemeProvider theme={currentTheme}>
      <Router>
        <SEO />
        <SkipToMain />
        <InteractiveCursor />
        <ScrollProgress />
        {typeof window !== 'undefined' && window.innerWidth > 768 && (
          <Suspense fallback={null}>
            <ParticlesBackground />
          </Suspense>
        )}
        <Navbar />

        <Body>
          <HeroSection />

          <Wrapper>
            <Suspense fallback={<SkeletonLoader height="600px" />}>
              <Skills />
              <Experience />
            </Suspense>
          </Wrapper>

          <Suspense fallback={<SkeletonLoader height="800px" />}>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </Suspense>

          <Wrapper>
            <Suspense fallback={<SkeletonLoader height="500px" />}>
              <Education />
              <Contact />
            </Suspense>
          </Wrapper>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          {openModal.state &&
            <Suspense fallback={null}>
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            </Suspense>
          }
        </Body>

      </Router>
    </StyledThemeProvider>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
