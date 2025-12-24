import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        if (typeof window === 'undefined') return 'dark';
        const stored = localStorage.getItem('theme-preference');
        // Default to 'dark' if no preference or if it was 'system'
        if (!stored || stored === 'system') return 'dark';
        return stored;
    });

    const [resolvedTheme, setResolvedTheme] = useState('dark');

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Simply use the mode directly (no system option)
        setResolvedTheme(mode);
    }, [mode]);

    const setTheme = (newMode) => {
        setMode(newMode);
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme-preference', newMode);
        }
    };

    return (
        <ThemeContext.Provider value={{ mode, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};
