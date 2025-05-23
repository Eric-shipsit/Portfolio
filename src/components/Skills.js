// src/components/skills.js
import React from 'react';
import MySkill from './MySkill';
import '../App.css';
import { useTheme } from '../ThemeContext';

export default function Skills() {
  const { darkMode } = useTheme();
  return (
    <section className="skills">
      <div>
        <h2>My Skills</h2>
        <hr/>
        <div className='allSkills'>
          <MySkill skill={"aws"} name={"AWS"} info={"Cloud platform"} darkMode={darkMode}/>
          <MySkill skill={"css"} name={"CSS"} info={"Web styling language"} />
          <MySkill skill={"cypress"} name={"Cypress"} info={"Testing framework"}/>
          <MySkill skill={"docker"} name={"Docker"} info={"Container deployment tool"} />
          <MySkill skill={"firebase"} name={"Firebase"} info={"Database"} darkMode={darkMode}/>
          <MySkill skill={"flutter"} name={"Flutter"} info={"Mobile UI toolkit"} darkMode={darkMode}/>
          <MySkill skill={"git"} name={"Git"} info={"Version control"} />
          <MySkill skill={"html"} name={"HTML"} info={"Webpage structure language"} />
          <MySkill skill={"java"} name={"Java"} info={"General programming language"} darkMode={darkMode}/>
          <MySkill skill={"javascript"} name={"JavaScript"} info={"Web programming language"}/>
          <MySkill skill={"nodejs"} name={"NodeJS"} info={"JavaScript runtime"} darkMode={darkMode}/>
          <MySkill skill={"postgresql"} name={"PostgreSQL"} info={"Relational database language"} darkMode={darkMode}/>
          <MySkill skill={"python"} name={"Python"} info={"General programming language"} darkMode={darkMode}/>
          <MySkill skill={"react"} name={"React"} info={"JavaScript library"} darkMode={darkMode}/>
          <MySkill skill={"selenium"} name={"Selenium"} info={"Test automation framework"} />
          <MySkill skill={"mongodb"} name={"MongoDB"} info={"NoSQL Database"}/>
          <MySkill skill={"nextjs"} name={"Nextjs"} info={"React framework"} />
          <MySkill skill={"typescript"} name={"TypeScript"} info={"Javascript with type"} />
          <MySkill skill={"tailwind"} name={"Tailwind"} info={"CSS framework"} />
        </div>
      </div>
    </section>
  );
}