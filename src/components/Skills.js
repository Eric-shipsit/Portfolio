// src/components/skills.js
import React from 'react';
import MySkill from './MySkill';
import '../App.css';

export default function Skills() {
  return (
    <section className="skills">
      <div>
        <h2>My Skills</h2>
        <div className='allSkills'>
        <MySkill skill={"react"} name={"ReactJS"} info={"JavaScript Library"} />
        <MySkill skill={"aws"} name={"AWS"} info={"Cloud computing platform"} />
        <MySkill skill={"Docker"} name={"Docker"} info={"Container deployment tool"} />
        <MySkill skill={"firebase"} name={"Firebase"} info={"Database Service"} />
        <MySkill skill={"git"} name={"Git"} info={"Version control system"} />
        <MySkill skill={"JavaScript"} name={"JavaScript"} info={"Web programming language"} />
        <MySkill skill={"py"} name={"Python"} info={"General-purpose language"} />
        <MySkill skill={"Selenium"} name={"Selenium"} info={"Test automation framework"} />
        <MySkill skill={"html"} name={"HTML"} info={"Webpage structure language"} />
        <MySkill skill={"css"} name={"CSS"} info={"Web styling language"} />
        </div>
      </div>
    </section>
  );
}