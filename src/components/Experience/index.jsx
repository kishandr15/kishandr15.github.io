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
  padding: 80px 24px;

  @media (max-width: 768px) {
    padding: 64px 16px;
  }

  @media (max-width: 480px) {
    padding: 48px 16px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

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
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    style={{ textAlign: 'center' }}
                >
                    <Title>Experience</Title>
                    <Desc>
                        My professional journey and key contributions
                    </Desc>
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
                                            borderColor: 'currentColor',
                                            opacity: 0.3,
                                            borderWidth: 1.5,
                                            width: 12,
                                            height: 12
                                        }}
                                    />
                                    {index !== experiences.length - 1 && (
                                        <TimelineConnector
                                            sx={{
                                                background: 'currentColor',
                                                opacity: 0.1,
                                                width: 1
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
