// DarkModeToggle.js
import React, { useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import '../App.css';

export default function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useTheme();
    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    }, [darkMode]);
    
    return (
        <button className="toggle-button" onClick={toggleDarkMode}>
            {darkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
}