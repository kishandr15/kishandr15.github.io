import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import SkillShowcase from './SkillShowcase'
import { fadeInUp, staggerContainer } from '../../utils/motionVariants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 24px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(to bottom, ${({ theme }) => theme.bg}, transparent);
    pointer-events: none;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 64px 16px;
  }

  @media (max-width: 480px) {
    padding: 48px 16px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  gap: 24px;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 24px;
  }

  @media (max-width: 480px) {
    gap: 16px;
    margin-top: 20px;
  }
`

const Skills = () => {
  const [expandedCard, setExpandedCard] = React.useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Container id="skills">
      <Wrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{ textAlign: 'center' }}
        >
          <Title>Skills</Title>
          <Desc>
            Technologies and tools I work with
          </Desc>
        </motion.div>

        <SkillsContainer
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillShowcase
              key={`skill-${index}-${skill.title}`}
              skill={skill}
              index={index}
              isExpanded={expandedCard === index}
              onToggle={() => handleCardClick(index)}
            />
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default React.memo(Skills)
