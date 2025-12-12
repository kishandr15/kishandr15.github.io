
import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
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
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
    padding: 0 20px;
    
    .MuiTimeline-root {
        width: 100%;
        padding-left: 0;
    }
    
    @media (max-width: 660px) {
        align-items: end;
        padding-left: 4px;
        padding-right: 4px;
    }
    
    @media (max-width: 480px) {
        padding-left: 32px;
        padding-right: 2px;
    }
`;



const index = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <Container id="experience">
            <Wrapper>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Title>Experience</Title>
                    <Desc>
                        My work experience as a software engineer and working on different companies and projects.
                    </Desc>
                </motion.div>
                <TimelineSection
                    as={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Timeline 
                        align="left"
                        sx={{
                            width: '100%',
                            paddingLeft: 0,
                        }}
                    >
                        {experiences.map((experience,index) => (
                            <TimelineItem 
                                key={index}
                                sx={{
                                    width: '100%',
                                    '@media (max-width: 660px)': {
                                        display: 'flex',
                                        flexDirection: 'row-reverse',
                                        justifyContent: 'flex-start', // aligns content to left in row-reverse
                                    }
                                }}
                            >
                                <TimelineSeparator
                                    sx={{
                                        '@media (max-width: 660px)': {
                                            order: 2,
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
                                        flex: 1,
                                        '@media (max-width: 660px)': {
                                            order: 1,
                                            px: 0,
                                            marginLeft: 0,
                                            marginRight: 'auto', // move card towards the left
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                        }
                                    }}
                                >
                                    <motion.div variants={itemVariants} style={{ width: '100%' }}>
                                        <ExperienceCard experience={experience}/>
                                    </motion.div>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index