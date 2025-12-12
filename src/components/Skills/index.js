import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { skills } from '../../data/constants'

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

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    gap: 20px;
    padding: 0 16px;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
    padding: 0 12px;
    margin-top: 20px;
  }
`

const Skill = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary + 20};
  box-shadow: ${({ theme }) => theme.shadow_md};
  border-radius: 16px;
  padding: 24px 36px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: ${({ theme }) => theme.shadow_lg};
    background: ${({ theme }) => theme.card_hover || theme.card_light};
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px 24px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 14px 20px;
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 24px;
  text-align: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary} 0%, ${({ theme }) => theme.primary_light} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled(motion.div)`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.primary + 30};
  background: ${({ theme }) => theme.primary + 10};
  border-radius: 10px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  cursor: default;
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + 20};
    box-shadow: ${({ theme }) => theme.shadow_sm};
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <Container id="skills">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Title>Skills</Title>
          <Desc>Here are some of my skills on which I have been working on for the past 2 years.
          </Desc>
        </motion.div>
        <SkillsContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={`skill-${index}-${skill.title}`}
              variants={skillVariants}
            >
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, itemIndex) => (
                  <SkillItem
                    key={`skill-item-${index}-${itemIndex}-${item.name}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SkillImage 
                        src={item.image} 
                        alt={item.name ? `${item.name} icon` : "Skill icon"}
                        loading="lazy"
                        decoding="async"
                    />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills