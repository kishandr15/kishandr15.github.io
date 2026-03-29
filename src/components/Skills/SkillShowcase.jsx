import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Card = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  min-height: 260px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme, $expanded }) => $expanded ? theme.text_tertiary : theme.card_border};
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.text_tertiary};
    box-shadow: ${({ theme }) => theme.shadow_md};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 220px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    min-height: 200px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ $expanded }) => $expanded ? '20px' : '16px'};
`;

const SkillTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ExpandButton = styled(motion.button)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 6px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text_tertiary};
  transition: all 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    border-color: ${({ theme }) => theme.text_tertiary};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: ${({ $isExpanded }) => $isExpanded ? '16px' : '0'};
`;

const SkillItem = styled(motion.div)`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.card_border};
  background: ${({ theme }) => theme.bgLight};
  border-radius: 6px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.text_tertiary};
    background: ${({ theme }) => theme.card_hover};
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px 8px;
  }
`;

const SkillImage = styled.img`
  width: 18px;
  height: 18px;
  ${({ $darkInvert, theme }) =>
    $darkInvert && theme.bg === '#0A0A0B' && `filter: invert(1) brightness(2);`}

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

const ExpandedContent = styled(motion.div)`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.card_border};
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
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
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;

const ProficiencyBar = styled.div`
  height: 6px;
  background: ${({ theme }) => theme.bgLight};
  border-radius: 3px;
  overflow: hidden;
`;

const ProficiencyFill = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.primary};
  border-radius: 3px;
`;

const UseCasesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UseCase = styled(motion.li)`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 6px 0;
  padding-left: 20px;
  position: relative;

  &::before {
    content: '\u2192';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SkillShowcase = ({ skill, index, isExpanded, onToggle }) => {
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
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onToggle())}
            tabIndex={0}
            role="button"
            aria-expanded={isExpanded}
            layout
            transition={{
                layout: { duration: 0.25, ease: 'easeInOut' }
            }}
        >
            <Header $expanded={isExpanded}>
                <SkillTitle>
                    {skill.title}
                </SkillTitle>
                <ExpandButton
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggle();
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-expanded={isExpanded}
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${skill.title} skills`}
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
                            $darkInvert={item.darkInvert}
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
                        transition={{ duration: 0.25 }}
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
                                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                                />
                            </ProficiencyBar>
                        </ProficiencySection>

                        {details.useCases.length > 0 && (
                            <>
                                <ProficiencyLabel style={{ marginBottom: '10px' }}>
                                    Real-world Applications
                                </ProficiencyLabel>
                                <UseCasesList>
                                    {details.useCases.map((useCase, i) => (
                                        <UseCase
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
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
