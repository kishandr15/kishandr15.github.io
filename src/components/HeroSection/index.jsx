import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import AnimatedCTA from './AnimatedCTA'
import { HeroContainer, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { trackEvent } from '../../utils/analytics';
import { useTheme } from '../../contexts/ThemeContext';

const ShaderAnimation = React.lazy(() => import('../ShaderAnimation'));

const HeroSection = () => {
    const nameWords = Bio.name.split(' ');
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    return (
        <div id="about">
            <HeroContainer>
                <Suspense fallback={null}>
                    <ShaderAnimation isDark={isDark} />
                </Suspense>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <Title>
                                Hi, I am <br />
                                {nameWords.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        style={{ display: 'inline-block', marginRight: '0.3em' }}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.15 + i * 0.08,
                                            duration: 0.5,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </Title>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
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
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <SubTitle>{Bio.description}</SubTitle>
                        </motion.div>

                        <AnimatedCTA resumeLink={Bio.resume} contactLink="#contact" />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
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
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            delay: 0.7 + index * 0.05,
                                            duration: 0.3,
                                        }}
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
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <Img
                                src={HeroImg}
                                alt="Kishan D R - Frontend Developer & Software Engineer Portfolio"
                                loading="eager"
                                fetchpriority="high"
                            />
                        </motion.div>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default React.memo(HeroSection)
