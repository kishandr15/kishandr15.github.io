import React from 'react'
import styled from 'styled-components'

const SkipLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 12px 24px;
  text-decoration: none;
  z-index: 10000;
  font-weight: 600;
  border-radius: 0 0 8px 0;
  clip-path: inset(100% 0 0 0);
  transition: clip-path 0.3s ease;
  border: none;
  outline: none;
  
  &:focus {
    clip-path: inset(0 0 0 0);
    outline: 2px solid ${({ theme }) => theme.white};
    outline-offset: 2px;
  }
`

const SkipToMain = () => {
  return (
    <SkipLink href="#about" aria-label="Skip to main content">
      Skip to main content
    </SkipLink>
  )
}

export default SkipToMain

