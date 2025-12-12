import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ progress }) => progress}%;
  height: 3px;
  background: ${({ theme }) => theme.gradient_primary};
  z-index: 9999;
  transition: width 0.1s ease-out;
  box-shadow: 0 0 10px ${({ theme }) => theme.primary};
`

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollableHeight = documentHeight - windowHeight
      const progress = (scrollTop / scrollableHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return <ProgressBar progress={scrollProgress} />
}

export default ScrollProgress

