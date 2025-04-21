import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
      const stored = localStorage.getItem('darkMode');
      return stored !== null ? JSON.parse(stored) : null;
    });

    useEffect(() => {
      if (darkMode !== null) {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
      }
    }, [darkMode]);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
  
    return (
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export const useTheme = () => useContext(ThemeContext);