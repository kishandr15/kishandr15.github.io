import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Cursor = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transition: transform 0.1s ease;
  transform: translate(-50%, -50%);
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  
  @media (max-width: 768px) {
    display: none;
  }
`

const CursorFollower = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.primary + 40};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9997;
  transition: transform 0.2s ease;
  transform: translate(-50%, -50%);
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  
  @media (max-width: 768px) {
    display: none;
  }
`

const InteractiveCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const updateFollower = () => {
      setFollowerPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.1,
        y: prev.y + (cursorPos.y - prev.y) * 0.1,
      }))
    }

    const handleMouseLeave = () => {
      setVisible(false)
    }

    let animationFrame
    const animate = () => {
      updateFollower()
      animationFrame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseleave', handleMouseLeave)
    animationFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrame)
    }
  }, [cursorPos])

  return (
    <>
      <Cursor
        visible={visible}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />
      <CursorFollower
        visible={visible}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
        }}
      />
    </>
  )
}

export default InteractiveCursor

