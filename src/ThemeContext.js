import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Load darkMode from localStorage, default to null (auto)
    const [darkMode, setDarkMode] = useState(() => {
      const stored = localStorage.getItem('darkMode');
      return stored === null ? null : JSON.parse(stored); // converts "true"/"false" to boolean
    });
  
    useEffect(() => {
      // Save to localStorage anytime it changes
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
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