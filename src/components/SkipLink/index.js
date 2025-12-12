import React from 'react'
import styled from 'styled-components'

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 12px 24px;
  text-decoration: none;
  z-index: 10000;
  font-weight: 600;
  border-radius: 0 0 8px 0;
  transition: top 0.3s ease;
  
  &:focus {
    top: 0;
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

