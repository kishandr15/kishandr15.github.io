import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaCode, FaProjectDiagram, FaAward, FaClock } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 0;
  background: ${({ theme }) => theme.bg};
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0 20px;
  gap: 40px;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  width: 100%;
  max-width: 1000px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`

const StatCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary + 20};
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradient_primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: ${({ theme }) => theme.shadow_lg};
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`

const StatIcon = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`

const StatNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary} 0%, ${({ theme }) => theme.primary_light} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const StatLabel = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`

const stats = [
  {
    icon: <FaCode />,
    number: "5+",
    label: "Years Coding",
    suffix: ""
  },
  {
    icon: <FaProjectDiagram />,
    number: "20+",
    label: "Projects Completed",
    suffix: ""
  },
  {
    icon: <FaAward />,
    number: "3+",
    label: "Years Experience",
    suffix: ""
  },
  {
    icon: <FaClock />,
    number: "1000+",
    label: "Hours Coding",
    suffix: "+"
  }
]

const Stats = () => {
  return (
    <Container id="stats">
      <Wrapper>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber>{stat.number}{stat.suffix}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </Wrapper>
    </Container>
  )
}

export default Stats

