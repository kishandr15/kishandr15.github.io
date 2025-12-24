import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp, FiTrendingUp } from 'react-icons/fi';

const Card = styled(motion.div)`
  width: 650px;
  min-height: 200px;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow_md};
  padding: 24px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme, $expanded }) => $expanded ? theme.primary : theme.primary + 20};
  margin: 0;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.gradient_primary};
    transform: scaleY(${({ $expanded }) => $expanded ? 1 : 0});
    transform-origin: top;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow_lg};
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_hover || theme.card_light};
  }
  
  &:hover::before {
    transform: scaleY(1);
  }
  
  @media (max-width: 768px) {
    padding: 16px;
    gap: 12px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 12px;
    gap: 10px;
    border-radius: 12px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

const Image = styled.img`
  height: 56px;
  width: 56px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 12px;
  margin-top: 4px;
  object-fit: contain;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.primary + 20};
  transition: all 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.1);
    border-color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 768px) {
    height: 44px;
    width: 44px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

const TitleSection = styled.div`
  flex: 1;
`;

const Role = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 4px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const ExpandButton = styled(motion.button)`
  background: ${({ theme }) => theme.primary_alpha};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  transition: all 0.2s ease;
  flex-shrink: 0;
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Skill = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.primary + 15};
  border: 1px solid ${({ theme }) => theme.primary + 30};
  padding: 4px 10px;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary + 25};
    border-color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px 8px;
  }
`;

const ExpandedContent = styled(motion.div)`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.card_border};
`;

const ImpactSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ImpactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ImpactItem = styled(motion.li)`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
  line-height: 1.5;
  
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

const EnhancedExperienceCard = ({ experience, isExpanded, onToggle, index = 0 }) => {
    const handleClick = (e) => {
        e.stopPropagation();
        onToggle();
    };

    const handleExpandClick = (e) => {
        e.stopPropagation();
        onToggle();
    };

    // Enhanced data with impact metrics
    const impactMetrics = {
        'Frontend Developer': {
            impact: [
                'Built enterprise-grade security dashboards serving 1000+ users',
                'Improved dashboard load time by 40% through code splitting and lazy loading',
                'Implemented reusable component library reducing development time by 30%',
            ],
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Tanstack Query'],
        },
        'Software Developer': {
            impact: [
                'Developed AML platform processing 10,000+ transactions daily',
                'Reduced false positives by 15% using ML-based anomaly detection',
                'Built microservices architecture handling 99.9% uptime',
                'Optimized database queries improving response time by 50%',
            ],
            technologies: ['Spring Boot', 'Angular', 'MySQL', 'Python'],
        },
    };

    const details = impactMetrics[experience.role] || {
        impact: [],
        technologies: [],
    };

    return (
        <Card
            $expanded={isExpanded}
            onClick={handleClick}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                opacity: { duration: 0.4, delay: index * 0.1 },
                y: { duration: 0.4, delay: index * 0.1 },
                layout: { duration: 0.3, ease: 'easeInOut' },
            }}
        >
            <Top>
                <Image
                    src={experience.img}
                    alt={experience.company ? `${experience.company} logo` : 'Company logo'}
                    loading="lazy"
                    decoding="async"
                />
                <Body>
                    <Header>
                        <TitleSection>
                            <Role>{experience.role}</Role>
                            <Company>{experience.company}</Company>
                            <Date>{experience.date}</Date>
                        </TitleSection>
                        <ExpandButton
                            onClick={handleExpandClick}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                        </ExpandButton>
                    </Header>
                </Body>
            </Top>

            <Description>{experience.desc}</Description>

            {experience.skills && (
                <Skills>
                    {experience.skills.slice(0, isExpanded ? experience.skills.length : 6).map((skill, index) => (
                        <Skill key={`${experience.role}-skill-${index}`}>• {skill}</Skill>
                    ))}
                    {!isExpanded && experience.skills.length > 6 && (
                        <Skill style={{ opacity: 0.7 }}>+{experience.skills.length - 6} more</Skill>
                    )}
                </Skills>
            )}

            <AnimatePresence>
                {isExpanded && details.impact.length > 0 && (
                    <ExpandedContent
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ImpactSection>
                            <SectionTitle>
                                <FiTrendingUp />
                                Key Impact & Achievements
                            </SectionTitle>
                            <ImpactList>
                                {details.impact.map((item, i) => (
                                    <ImpactItem
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        {item}
                                    </ImpactItem>
                                ))}
                            </ImpactList>
                        </ImpactSection>
                    </ExpandedContent>
                )}
            </AnimatePresence>
        </Card>
    );
};

export default EnhancedExperienceCard;
