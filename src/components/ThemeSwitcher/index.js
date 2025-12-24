import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import { ToggleContainer, ToggleSlider, IconWrapper } from './ThemeSwitcherStyle';

const ThemeSwitcher = () => {
    const { mode, setTheme } = useTheme();

    // Check if current mode is dark
    const isDark = mode === 'dark';

    const handleToggle = () => {
        // Toggle between light and dark
        setTheme(isDark ? 'light' : 'dark');
    };

    return (
        <ToggleContainer
            onClick={handleToggle}
            $isDark={isDark}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            aria-pressed={isDark}
            as={motion.button}
            whileTap={{ scale: 0.95 }}
        >
            <IconWrapper className="sun" $active={!isDark}>
                <FiSun />
            </IconWrapper>

            <ToggleSlider $isDark={isDark}>
                {isDark ? <FiMoon /> : <FiSun />}
            </ToggleSlider>

            <IconWrapper className="moon" $active={isDark}>
                <FiMoon />
            </IconWrapper>
        </ToggleContainer>
    );
};

export default ThemeSwitcher;
