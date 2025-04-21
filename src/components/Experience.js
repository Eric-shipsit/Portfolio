// src/components/Experience.js
import React from 'react';

export default function Experience() {
  return (
    <section className="experience">
      <h2>
        Experience
      </h2>
      <hr />
      <div>
        <div className='entry'>
          <div className = 'date'>
            Feb 2022 - Feb 2024
          </div>
          <div className='info'>
            <div className = 'title'>
              Software Developer Engineer @  <a href="https://www.amazon.jobs/" target="_blank" rel="noopener noreferrer" className = "link">Amazon</a>
            </div>
            <div className = 'location'>
              Seattle, Washington
            </div>
            <div className = 'description'>
              <div className = 'bullet'>
                <span className="bullet-icon">•</span>
                <span className="bullet-text">
                  Worked on the Alexa Registry team managing customer data and connected devices
                </span>
              </div>
              <div className = 'bullet'>
                <span className="bullet-icon">•</span>
                <span className="bullet-text">
                  Used <span className="highlight">AWS</span> tools for building, debugging, and monitoring cloud-based services
                </span>
              </div>
              <div className = 'bullet'>
                <span className="bullet-icon">•</span>
                <span className="bullet-text">
                  Gained professional experience working with a large <span className="highlight">Java</span>  codebase to build and maintain backend services for Alexa
                </span>
              </div>
              <div className = 'bullet'>
                <span className="bullet-icon">•</span>
                <span className="bullet-text">
                Created <span className="highlight">design docs</span>  for team projects that were reviewed, approved, and successfully implemented
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='entry'>
          <div className = 'date'>
            Jun 2021 - Sep 2021
          </div>
          <div className='info'>
            <div className = 'title'>
              Software Engineer Intern @ <a href="https://www.varmour.com" target="_blank" rel="noopener noreferrer" className = "link">vArmour</a>
            </div>
            <div className = 'location'>
              Los Altos, California
            </div>
            <div className = 'description'>
              <div className = 'bullet'>
                <span className="bullet-icon">•</span>
                <span className="bullet-text">
                Independently planned the project roadmap and delivered all milestones on time
                </span>
              </div>
              <div className = 'bullet'>
                <span className="bullet-icon">•</span>
                <span className="bullet-text">
                Designed and implemented a full end-to-end test suite using <span className="highlight">Selenium</span>  for a new web application
                </span>
              </div>
              <div className = 'bullet'>
                <span className="bullet-icon">•</span>
                <span className="bullet-text">
                Used <span className="highlight">Docker</span>   to create a consistent and isolated environment for running and validating application tests
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}