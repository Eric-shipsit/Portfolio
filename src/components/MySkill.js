import React from 'react';
import "../App.css";

export default function Skill({ skill, name, info }) {
  return (
    <div>
        <div className = "skill-box">
            <div className = "skill-icon">
              <img src={`/${skill}.svg`} alt={skill} />
            </div>
            <div className='skill-info'>
                <div className = 'skill-name'>
                  {name}
                </div>
                <div className='skill-description'>
                  {info}
                </div>
            </div>
        </div>
    </div>
  );
}