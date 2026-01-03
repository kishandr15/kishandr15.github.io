import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp, FiCode } from 'react-icons/fi';

const Card = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  min-height: 280px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme, $expanded }) => $expanded ? theme.primary : theme.card_border};
  box-shadow: ${({ theme, $expanded }) => $expanded ? theme.shadow_xl : theme.shadow_md};
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradient_primary};
    transform: scaleX(${({ $expanded }) => $expanded ? 1 : 0});
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: ${({ theme }) => theme.shadow_lg};
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    min-height: 260px;
    padding: 20px;
  }
  
  @media (max-width: 500px) {
    max-width: 330px;
    min-height: 240px;
    padding: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ $expanded }) => $expanded ? '20px' : '16px'};
`;

const SkillTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary} 0%, ${({ theme }) => theme.primary_light} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ExpandButton = styled(motion.button)`
  background: ${({ theme }) => theme.primary_alpha};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: ${({ $isExpanded }) => $isExpanded ? '16px' : '0'};
`;

const SkillItem = styled(motion.div)`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.primary + 30};
  background: ${({ theme }) => theme.primary + 10};
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + 20};
    box-shadow: ${({ theme }) => theme.shadow_sm};
  }
  
  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 10px;
    
    &:active {
      transform: scale(0.93);
      border-color: ${({ theme }) => theme.primary};
      background: ${({ theme }) => theme.primary + 20};
    }
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

const ExpandedContent = styled(motion.div)`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.card_border};
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ProficiencySection = styled.div`
  margin-bottom: 16px;
`;

const ProficiencyLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;

const ProficiencyBar = styled.div`
  height: 8px;
  background: ${({ theme }) => theme.card_light};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProficiencyFill = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.gradient_primary};
  border-radius: 4px;
`;

const UseCasesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UseCase = styled(motion.li)`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
  
  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const SkillShowcase = ({ skill, index, isExpanded, onToggle }) => {
    // Enhanced skill data with descriptions and use cases
    const skillDetails = {
        'Frontend': {
            description: 'Building modern, responsive user interfaces with cutting-edge frameworks and libraries. Focus on performance, accessibility, and user experience.',
            proficiency: 90,
            useCases: [
                'Building complex dashboards with real-time data visualization',
                'Creating reusable component libraries and design systems',
                'Implementing advanced animations and micro-interactions',
                'Optimizing bundle size and runtime performance',
            ]
        },
        'Backend': {
            description: 'Designing and implementing scalable server-side applications, RESTful APIs, and database architectures for enterprise-grade systems.',
            proficiency: 85,
            useCases: [
                'Building microservices architecture with Spring Boot',
                'Designing RESTful APIs with proper authentication and authorization',
                'Optimizing database queries and stored procedures',
                'Implementing caching strategies for improved performance',
            ]
        },
        'Others': {
            description: 'Leveraging modern development tools, DevOps practices, and emerging technologies to enhance productivity and code quality.',
            proficiency: 80,
            useCases: [
                'Containerizing applications with Docker',
                'Implementing machine learning models for predictive analytics',
                'Ensuring code quality with comprehensive testing strategies',
            ]
        }
    };

    const details = skillDetails[skill.title] || {
        description: 'Expertise in various technologies and tools.',
        proficiency: 75,
        useCases: []
    };

    const handleClick = (e) => {
        e.stopPropagation();
        onToggle();
    };

    return (
        <Card
            $expanded={isExpanded}
            onClick={handleClick}
            layout
            transition={{
                layout: { duration: 0.3, ease: 'easeInOut' }
            }}
        >
            <Header $expanded={isExpanded}>
                <SkillTitle>
                    <FiCode />
                    {skill.title}
                </SkillTitle>
                <ExpandButton
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggle();
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                </ExpandButton>
            </Header>

            <SkillList $isExpanded={isExpanded}>
                {skill.skills.map((item, itemIndex) => (
                    <SkillItem
                        key={`${skill.title}-${item.name}-${itemIndex}`}
                    >
                        <SkillImage
                            src={item.image}
                            alt={`${item.name} icon`}
                            loading="lazy"
                        />
                        {item.name}
                    </SkillItem>
                ))}
            </SkillList>

            <AnimatePresence>
                {isExpanded && (
                    <ExpandedContent
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Description>{details.description}</Description>

                        <ProficiencySection>
                            <ProficiencyLabel>
                                <span>Proficiency</span>
                                <span>{details.proficiency}%</span>
                            </ProficiencyLabel>
                            <ProficiencyBar>
                                <ProficiencyFill
                                    initial={{ width: 0 }}
                                    animate={{ width: `${details.proficiency}%` }}
                                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                                />
                            </ProficiencyBar>
                        </ProficiencySection>

                        {details.useCases.length > 0 && (
                            <>
                                <ProficiencyLabel style={{ marginBottom: '12px' }}>
                                    Real-world Applications
                                </ProficiencyLabel>
                                <UseCasesList>
                                    {details.useCases.map((useCase, i) => (
                                        <UseCase
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            {useCase}
                                        </UseCase>
                                    ))}
                                </UseCasesList>
                            </>
                        )}
                    </ExpandedContent>
                )}
            </AnimatePresence>
        </Card>
    );
};

export default SkillShowcase;
