// src/components/Contact.js
import React from 'react';
import { useTheme } from '../ThemeContext';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

export default function Contact() {
  const { darkMode } = useTheme();
  let iconStyle = { fontSize: '24px', marginRight: '16px', color: darkMode ? '#ccc' : '#111' };
  return (
    <section className="contact">
      <div>
        <div>
          <h2>Contact</h2>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          The best way to reach me is via email at: 
          <a href="mailto: ericl.swe@gmail.com" className='email-link'>ericl.swe@gmail.com</a>.
          Alternatively, feel free to message me on any of the following platforms.
        </div>
        <div className = "icon-bar">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub style={iconStyle} />
          </a>
          <a href="mailto:ericl.swe@gmail.com">
            <FaEnvelope style={iconStyle} />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={iconStyle} />
          </a>
        </div>
      </div>
    </section>
  );
}