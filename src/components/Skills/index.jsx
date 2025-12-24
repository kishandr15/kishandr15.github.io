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
  padding: 80px 0;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
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
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary} 0%, ${({ theme }) => theme.primary_light} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SubDesc = styled.div`
  font-size: 15px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_tertiary};
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    gap: 20px;
    padding: 0 16px;
    margin-top: 30px;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
    padding: 0 12px;
    margin-top: 24px;
  }
`

const Skills = () => {
  const [expandedCard, setExpandedCard] = React.useState(null);

  const handleCardClick = (index) => {
    // Toggle: if clicking the same card, close it; otherwise open the new one
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
        >
          <Title>Frontend Capabilities</Title>
          <Desc>
            Interactive showcase of technologies and real-world applications
          </Desc>
          <SubDesc>
            Click on any card to explore proficiency levels and use cases
          </SubDesc>
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