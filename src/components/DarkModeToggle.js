// DarkModeToggle.js
import React, { useState, useEffect } from 'react';
import '../App.css';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}