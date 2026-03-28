import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useState } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { darkTheme, lightTheme } from './utils/Themes.js'
import { ThemeProvider, useTheme } from './contexts/ThemeContext.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import ScrollProgress from "./components/ScrollProgress";
import SEO from "./components/SEO";
import SkipToMain from "./components/SkipLink";
import styled from "styled-components";
import React, { Suspense, useEffect } from "react";
import { trackPageView } from './utils/analytics';
import ErrorBoundary from './components/ErrorBoundary';
import BlogPreview from './components/Blog/BlogPreview';
const BackToTop = React.lazy(() => import('./components/BackToTop'));

const ProjectDetails = React.lazy(() => import('./components/ProjectDetails'));
const Experience = React.lazy(() => import('./components/Experience'));
const Education = React.lazy(() => import('./components/Education'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const BlogPost = React.lazy(() => import('./components/Blog/BlogPost'));

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
  padding-top: 0;
`

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

// Handles scroll on navigation — scroll to top or to #hash
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    let cancelled = false;
    let lastTop = -1;
    let stableCount = 0;

    // Keep scrolling until the element's position stabilises (no more layout shifts)
    const settle = (attempts = 0) => {
      if (cancelled || attempts > 40) return;
      const el = document.getElementById(hash);
      if (!el) {
        setTimeout(() => settle(attempts + 1), 100);
        return;
      }
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (Math.abs(top - lastTop) < 2) {
        stableCount++;
        if (stableCount >= 3) {
          // Position stable — do final scroll
          window.scrollTo({ top: top - 80, behavior: 'smooth' });
          return;
        }
      } else {
        stableCount = 0;
        window.scrollTo({ top: top - 80, behavior: 'auto' });
      }
      lastTop = top;
      setTimeout(() => settle(attempts + 1), 150);
    };

    setTimeout(() => settle(), 50);

    return () => { cancelled = true; };
  }, [location]);

  return null;
};

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
        <ScrollToHash />
        <SEO />
        <SkipToMain />
        <ScrollProgress />
        <Navbar />

        <Routes>
          <Route path="/blog/:slug" element={
            <Body>
              <Suspense fallback={<SkeletonLoader height="80vh" />}>
                <BlogPost />
              </Suspense>
              <ErrorBoundary sectionName="Footer">
                <Suspense fallback={null}>
                  <Footer />
                </Suspense>
              </ErrorBoundary>
            </Body>
          } />
          <Route path="*" element={
            <Body>
              <HeroSection />

              <Wrapper>
                <ErrorBoundary sectionName="Skills & Experience">
                  <Suspense fallback={<SkeletonLoader height="600px" />}>
                    <Skills />
                    <Experience />
                  </Suspense>
                </ErrorBoundary>
              </Wrapper>

              <ErrorBoundary sectionName="Projects">
                <Suspense fallback={<SkeletonLoader height="800px" />}>
                  <Projects openModal={openModal} setOpenModal={setOpenModal} />
                </Suspense>
              </ErrorBoundary>

              <Wrapper>
                <ErrorBoundary sectionName="Education & Contact">
                  <Suspense fallback={<SkeletonLoader height="500px" />}>
                    <Education />
                  </Suspense>
                </ErrorBoundary>
              </Wrapper>

              <BlogPreview />

              <Wrapper>
                <ErrorBoundary sectionName="Contact">
                  <Suspense fallback={<SkeletonLoader height="400px" />}>
                    <Contact />
                  </Suspense>
                </ErrorBoundary>
              </Wrapper>

              <ErrorBoundary sectionName="Footer">
                <Suspense fallback={null}>
                  <Footer />
                </Suspense>
              </ErrorBoundary>
              {openModal.state &&
                <Suspense fallback={null}>
                  <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                </Suspense>
              }
              <Suspense fallback={null}>
                <BackToTop />
              </Suspense>
            </Body>
          } />
        </Routes>

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
