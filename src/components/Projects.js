// src/components/Projects.js
import React from 'react';
import '../App.css';
import TechUsed from './TechUsed';
import { useTheme } from '../ThemeContext';
import { FaGithub, FaLink } from 'react-icons/fa';

export default function Projects() {
  const { darkMode } = useTheme();
  let iconStyle = { fontSize: '24px', marginRight: '16px', color: darkMode ? '#ccc' : '#008080' };

  return (
    <section className="project-section">
      <div>
        <h2>Projects</h2>
        <hr/>
      </div>
      <div className="project-collection">
        <div className = "project-box">
          <div className = "project-image">
            <img src="/pocket-panda.png" alt="Pocket Panda" />
          </div>
          <div className='project-name'>
            Transaction Tracker
          </div>
          <div className = "project-tech">
            <TechUsed skill={"NextJS"}/>
            <TechUsed skill={"MongoDB"}/>
            <TechUsed skill={"TypeScript"}/>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/Eric-shipsit/PocketPanda" target="_blank" rel="noopener noreferrer">
              <FaGithub style={iconStyle} />
            </a>
            <a href="https://pocket-panda-taupe.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FaLink style={iconStyle} />
            </a>
          </div>
        </div>
        <div className = "project-box">
          <div className = "project-image">
            <img src="/BlipNotes.png" alt="BlipNotes" />
          </div>
          <div className='project-name'>
            BlipNotes
          </div>
          <div className = "project-tech">
          <TechUsed skill={"Python"}/>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/Eric-shipsit/BlipNotes" target="_blank" rel="noopener noreferrer">
              <FaGithub style={iconStyle} />
            </a>
          </div>
        </div>
        <div className = "project-box">
          <div className = "project-image">
            <img src="/portfolio-project.webp" alt="Cartoon Developer" />
          </div>
          <div className='project-name'>
            Portfolio
          </div>
          <div className = "project-tech">
            <TechUsed skill={"React"}/>
            <TechUsed skill={"JavaScript"}/>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/Eric-shipsit/Portfolio" target="_blank" rel="noopener noreferrer">
              <FaGithub style={iconStyle} />
            </a>
            <a href="https://ericl.netlify.app/" target="_blank" rel="noopener noreferrer">
              <FaLink style={iconStyle} />
            </a>
          </div>
        </div>
        <div className = "project-box">
          <div className = "project-image">
            <img src="/email-project.png" alt="Emailer" />
          </div>
          <div className='project-name'>
            Emailer
          </div>
          <div className = "project-tech">
          <TechUsed skill={"NodeJS"}/>
          <TechUsed skill={"React"}/>
          <TechUsed skill={"Docker"}/>
          <TechUsed skill={"Cypress"}/>
          <TechUsed skill={"JavaScript"}/>
          </div>
          
          <div className="project-buttons">
            <a href="https://github.com/Eric-shipsit/Emailer" target="_blank" rel="noopener noreferrer">
              <FaGithub style={iconStyle} />
            </a>
          </div>
        </div>
        <div className = "project-box">
          <div className = "project-image">
            <img src="/chatroom-project.png" alt="Chatroom" />
          </div>
          <div className='project-name'>
            Chatroom
          </div>
          <div className = "project-tech">
          <TechUsed skill={"ReactJS"}/>
          <TechUsed skill={"Firebase"}/>
          <TechUsed skill={"JavaScript"}/>
          </div>
        </div>
      </div>
    </section>
  );
}