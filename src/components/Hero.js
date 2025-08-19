// src/components/Hero.js
import React from 'react';
import { useTheme } from '../ThemeContext';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Hero() {
  const { darkMode } = useTheme();
  let iconStyle = { fontSize: '20px', marginRight: '4px', color: darkMode ? '#aaa' : '#9ca3af' };
  return (
    <section className="hero">
      <div className='left-side'>
        <div id = "introductions">Hi I'm </div>
        <div id = "my-name">Eric Lee.</div>
        <div id = "my-location">
          <FaMapMarkerAlt style={iconStyle} />
          San Jose</div>
        <div id = "my-specialty">a Software Engineer</div>
      </div>
      <div className='right-side'>
        <div className="image-container">
          <img src="/dev-image.webp" alt="Cartoon Developer" />
        </div>
      </div>
    </section>
  );
}