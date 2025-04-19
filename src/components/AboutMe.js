// src/components/AboutMe.js
import React from 'react';
import Input from './Input';
import Output from './Output';
import SubOutput from './SubOutput';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section className="about-me">
        <div class = "aboutMe">
            <div id="about">
            <div><h2>About Eric</h2></div>
                <div class="inner">
                    <div id="code">
                        <div id="console">
                            <Input text="name"/>
                            <Output text = '"Eric Lee"'/>
                            <Input text="location"/>
                            <Output text = '"San Jose, California"'/>
                            <Input text="specialty"/>
                            <Output text = '"Fullstack Web Development"'/>
                            <Input text="currently"/>
                            <Output text = '"Working on projects to improve my skill as a Web Developer"'/>
                            <Input text="education"/>
                            <Output text = '"University of California, Santa Cruz"'/>
                            <SubOutput title = 'degree' info = {"\"Bachelor's in Computer Science\""}/>
                            <SubOutput title = 'graduated' info = {"May 2021"}/>
                            <Input text="hobbies"/>
                            <Output text = {"[\"Chess\", \"Game Design\", \"Movies\", \"Cooking\", \"Puzzles\", \"Anime\", \"Music\"]"}/>
                            <Input text="learning"/>
                            <Output text = {"[\"Mobile Development\", \"Swift\", \"PHP\", \"Angular\", \"NextJS\", \"Animations\"]"}/>
                            <div style={{marginTop: '20px'}}>
                                &gt;<div id = "end"></div><br/>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        </div>  
    </section>
  );
}