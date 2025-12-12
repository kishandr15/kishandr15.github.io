import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import InteractiveCursor from "./components/InteractiveCursor";
import SEO from "./components/SEO";
import SkipToMain from "./components/SkipLink";
import styled from "styled-components";
import React, { Suspense } from "react";

const ParticlesBackground = React.lazy(() => import('./components/ParticlesBackground'));
const ProjectDetails = React.lazy(() => import('./components/ProjectDetails'));
const Experience = React.lazy(() => import('./components/Experience'));
const Education = React.lazy(() => import('./components/Education'));
const Skills = React.lazy(() => import('./components/Skills'));

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
function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  
  return (
    <HelmetProvider>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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
            <Suspense fallback={null}>
            <Skills />
            <Experience />
            </Suspense>
          </Wrapper>

          <Projects openModal={openModal} setOpenModal={setOpenModal} />

          <Wrapper>
            <Suspense fallback={null}>
            <Education />
            </Suspense>
            <Contact />
          </Wrapper>
          
          <Footer />
          {openModal.state &&
            <Suspense fallback={null}>
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            </Suspense>
          }
        </Body>

      </Router>
    </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
