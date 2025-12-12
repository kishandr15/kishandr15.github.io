import React from 'react'
import { motion } from 'framer-motion'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, SocialMediaIcons, SocialMediaIcon } from './HeroStyle'
import HeroImg from '../../images/HeroImage2.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Title>
                                Hi, I am <br /> 
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    {Bio.name}
                                </motion.span>
                            </Title>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <TextLoop>
                                I am a
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 50,
                                        }}
                                    />
                                </Span>
                            </TextLoop>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <SubTitle>{Bio.description}</SubTitle>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                        >
                            <ResumeButton href={Bio.resume} target='_blank' rel="noopener noreferrer">
                                View Resume
                            </ResumeButton>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <SocialMediaIcons>
                                <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <FaGithub />
                                </SocialMediaIcon>
                                <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </SocialMediaIcon>
                                <SocialMediaIcon href={Bio.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialMediaIcon>
                                <SocialMediaIcon href={Bio.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                    <FaWhatsapp />
                                </SocialMediaIcon>
                            </SocialMediaIcons>
                        </motion.div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Img 
                                    src={HeroImg} 
                                    alt="hero-image"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </motion.div>
                        </motion.div>
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection