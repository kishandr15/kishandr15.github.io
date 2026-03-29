import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp, FiTrendingUp } from 'react-icons/fi';

const Card = styled(motion.div)`
  width: 100%;
  max-width: 680px;
  min-height: 180px;
  border-radius: 12px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.2s ease;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme, $expanded }) => $expanded ? theme.text_tertiary : theme.card_border};
  margin: 0;
  cursor: pointer;

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
    padding: 16px;
    gap: 12px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 14px;
    gap: 10px;
    border-radius: 10px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

const Image = styled.img`
  height: 48px;
  width: 48px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  margin-top: 2px;
  object-fit: contain;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.card_border};

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
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
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 2px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_tertiary};
  margin-top: 2px;

  @media (max-width: 768px) {
    font-size: 11px;
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
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    border-color: ${({ theme }) => theme.text_tertiary};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 4px;
`;

const Skill = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.bgLight};
  padding: 3px 8px;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 2px 6px;
  }
`;

const ExpandedContent = styled(motion.div)`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.card_border};
  overflow: hidden;
`;

const ImpactSection = styled.div`
  margin-bottom: 16px;
`;

const SectionTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${({ theme }) => theme.primary};
    width: 15px;
    height: 15px;
  }
`;

const ImpactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ImpactItem = styled(motion.li)`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 6px 0;
  padding-left: 20px;
  position: relative;
  line-height: 1.5;

  &::before {
    content: '\u2192';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
  }
`;

const EnhancedExperienceCard = ({ experience, isExpanded, onToggle }) => {
    const handleClick = (e) => {
        e.stopPropagation();
        onToggle();
    };

    const handleExpandClick = (e) => {
        e.stopPropagation();
        onToggle();
    };

    const impactItems = experience.impact || [];

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
                layout: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
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
                            whileTap={{ scale: 0.95 }}
                            aria-expanded={isExpanded}
                            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${experience.company} experience details`}
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
                        <Skill key={`${experience.role}-skill-${index}`}>{skill}</Skill>
                    ))}
                    {!isExpanded && experience.skills.length > 6 && (
                        <Skill style={{ opacity: 0.6 }}>+{experience.skills.length - 6} more</Skill>
                    )}
                </Skills>
            )}

            <AnimatePresence>
                {isExpanded && impactItems.length > 0 && (
                    <ExpandedContent
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <ImpactSection>
                            <SectionTitle>
                                <FiTrendingUp />
                                Key Impact
                            </SectionTitle>
                            <ImpactList>
                                {impactItems.map((item, i) => (
                                    <ImpactItem
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
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
