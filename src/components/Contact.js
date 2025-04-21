// src/components/Contact.js
import React from 'react';
import { useTheme } from '../ThemeContext';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const { darkMode } = useTheme();
  let iconStyle = { fontSize: '24px', marginRight: '16px', color: darkMode ? '#ccc' : '#111' };
  return (
    <section className="contact">
      <div>
        <div>
          <h2>Contact</h2>
          <hr/>
        </div>
        <div >
          The best way to reach me is via email at: 
          <a href="mailto: ericl.swe@gmail.com" className='email-link'>ericl.swe@gmail.com</a>.
          Alternatively, feel free to message me on any of the following platforms.
        </div>
        <div className = "icon-bar">
          <a href="https://github.com/Eric-shipsit/" target="_blank" rel="noopener noreferrer">
            <FaGithub style={iconStyle} />
          </a>
          <a href="mailto:ericl.swe@gmail.com">
            <FaEnvelope style={iconStyle} />
          </a>
          <a href="https://www.linkedin.com/in/leeminhyuk" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={iconStyle} />
          </a>
        </div>
      </div>
    </section>
  );
}