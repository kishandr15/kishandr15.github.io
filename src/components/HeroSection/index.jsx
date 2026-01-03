import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroBgAnimation from '../HeroBgAnimation'
import FloatingShapes from './FloatingShapes'
import AnimatedCTA from './AnimatedCTA'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, GradientLinesWrapper, GradientLines, GradientLine } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { trackEvent } from '../../utils/analytics';

const HeroSection = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    // Parallax effect for hero content
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Split name into words for animation
    const nameWords = Bio.name.split(' ');

    return (
        <div id="about" ref={containerRef}>
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                    <FloatingShapes />
                </HeroBg>
                <HeroInnerContainer style={{ y, opacity }}>
                    <HeroLeftContainer id="Left">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Title>
                                Hi, I am <br />
                                {nameWords.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        style={{ display: 'inline-block', marginRight: '0.3em' }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.2 + i * 0.1,
                                            duration: 0.6,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </Title>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                            transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <SubTitle>{Bio.description}</SubTitle>
                        </motion.div>

                        <AnimatedCTA resumeLink={Bio.resume} contactLink="#contact" />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            <SocialMediaIcons>
                                {[
                                    { href: Bio.github, icon: FaGithub, label: 'GitHub' },
                                    { href: Bio.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
                                    { href: Bio.twitter, icon: FaTwitter, label: 'Twitter' },
                                    { href: Bio.whatsapp, icon: FaWhatsapp, label: 'WhatsApp' },
                                ].map(({ href, icon: Icon, label }, index) => (
                                    <SocialMediaIcon
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        tabIndex={0}
                                        as={motion.a}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: 0.8 + index * 0.1,
                                            type: 'spring',
                                            stiffness: 200,
                                            damping: 15
                                        }}
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 5,
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => trackEvent('Social Link Click', { platform: label, url: href })}
                                    >
                                        <Icon />
                                    </SocialMediaIcon>
                                ))}
                            </SocialMediaIcons>
                        </motion.div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    rotate: 2,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <Img
                                    src={HeroImg}
                                    alt="Kishan D R - Frontend Developer & Software Engineer Portfolio"
                                    loading="eager"
                                    fetchpriority="high"
                                />
                            </motion.div>
                            <GradientLinesWrapper>
                                <GradientLines>
                                    <GradientLine />
                                    <GradientLine />
                                    <GradientLine />
                                    <GradientLine />
                                </GradientLines>
                            </GradientLinesWrapper>
                        </motion.div>
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default React.memo(HeroSection)