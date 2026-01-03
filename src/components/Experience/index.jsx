import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EnhancedExperienceCard from '../Cards/EnhancedExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

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
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    margin-top: 12px;
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

const TimelineSection = styled.div`
  width: fit-content;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
  .MuiTimeline-root {
    width: 100%;
  }

  @media (max-width: 960px) {
    width: 100%;
  }


`;

const Experience = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardToggle = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <Container id="experience">
            <Wrapper>
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Title>Professional Journey</Title>
                    <Desc>
                        Building impactful products and solving complex engineering challenges
                    </Desc>
                    <SubDesc>
                        Click on any experience to see detailed impact metrics
                    </SubDesc>
                </motion.div>

                <TimelineSection>
                    <Timeline
                        position="right"
                        sx={{
                            width: '100%',
                            paddingLeft: 0,
                            paddingRight: 0,
                            '& .MuiTimelineItem-root::before': {
                                flex: 0,
                                padding: 0,
                                display: 'none',
                            },
                            '@media (max-width: 660px)': {
                                paddingLeft: '16px',
                                '& .MuiTimelineSeparator-root': {
                                    marginRight: '16px',
                                },
                            },
                        }}
                    >
                        {experiences.map((experience, index) => (
                            <TimelineItem
                                key={index}
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <TimelineSeparator
                                    sx={{
                                        '@media (max-width: 660px)': {
                                            order: 2,
                                            marginRight: '16px',
                                            paddingRight: '0px',
                                        }
                                    }}
                                >
                                    <TimelineDot
                                        variant="outlined"
                                        sx={{
                                            borderColor: '#854CE6',
                                            borderWidth: 2,
                                            width: 16,
                                            height: 16
                                        }}
                                    />
                                    {index !== experiences.length - 1 && (
                                        <TimelineConnector
                                            sx={{
                                                background: 'linear-gradient(180deg, #854CE6 0%, rgba(133, 76, 230, 0.3) 100%)',
                                                width: 2
                                            }}
                                        />
                                    )}
                                </TimelineSeparator>

                                <TimelineContent
                                    sx={{
                                        py: '12px',
                                        px: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <EnhancedExperienceCard
                                        experience={experience}
                                        isExpanded={expandedCard === index}
                                        onToggle={() => handleCardToggle(index)}
                                        index={index}
                                    />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default React.memo(Experience)