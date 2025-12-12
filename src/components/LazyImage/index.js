import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  width: 100%;
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ theme }) => theme.card_light};
  border-radius: ${({ borderRadius }) => borderRadius || '12px'};
  overflow: hidden;
  position: relative;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  transition: opacity 0.3s ease;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
`

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.card_light} 0%, 
    ${({ theme }) => theme.card} 50%, 
    ${({ theme }) => theme.card_light} 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  opacity: ${({ loaded }) => (loaded ? 0 : 1)};
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`

const LazyImage = ({ 
  src, 
  alt, 
  height, 
  borderRadius, 
  objectFit,
  className,
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  return (
    <ImageContainer 
      ref={imgRef}
      height={height}
      borderRadius={borderRadius}
      className={className}
    >
      <Placeholder loaded={loaded} />
      {inView && (
        <StyledImage
          src={src}
          alt={alt}
          objectFit={objectFit}
          loaded={loaded}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          decoding="async"
          {...props}
        />
      )}
    </ImageContainer>
  )
}

export default LazyImage

