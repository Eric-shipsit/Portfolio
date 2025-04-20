// src/components/Projects.js
import React from 'react';
import '../App.css';
import TechUsed from './TechUsed';

export default function Projects() {
  return (
    <section className="project-section">
      <div>
        <h2>Projects</h2>
        <hr/>
      </div>
      <div className="project-collection">
        <div className = "project-box">
          <div className = "project-image">
            <img src="/email-project.png" alt="Cartoon Developer" />
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
        </div>
        <div className = "project-box">
          <div className = "project-image">
            <img src="/chatroom-project.png" alt="Cartoon Developer" />
          </div>
          <div className='project-name'>
            Chatroom
          </div>
          <div className = "project-tech">
          <TechUsed skill={"NodeJS"}/>
          <TechUsed skill={"NextJS"}/>
          <TechUsed skill={"Firebase"}/>
          <TechUsed skill={"JavaScript"}/>
          </div>
        </div>
        <div className = "project-box">
          <div className = "project-image">
            <img src="/portfolio-project.png" alt="Cartoon Developer" />
          </div>
          <div className='project-name'>
            Portfolio
          </div>
          <div className = "project-tech">
          <TechUsed skill={"React"}/>
          <TechUsed skill={"JavaScript"}/>
          </div>
        </div>
        <div className = "project-box">
          <div className = "project-image">
            <img src="/sorting-project.png" alt="Cartoon Developer" />
          </div>
          <div className='project-name'>
            Emailer
          </div>
          <div className = "project-tech">
          <TechUsed skill={"HTML"}/>
          <TechUsed skill={"CSS"}/>
          <TechUsed skill={"JavaScript"}/>
          </div>
        </div>
      </div>
    </section>
  );
}