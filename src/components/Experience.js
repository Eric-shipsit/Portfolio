// src/components/Experience.js
import React from 'react';
import './Hero.css';

export default function Experience() {
  return (
    <section className="experience">
      <h2>
        Experience
      </h2>
      <div>
        <div className='entry'>
          <div className = 'date'>
            February 2022 - February 2024
          </div>
          <div className='info'>
            <div className = 'title'>
              Software Developer Engineer
            </div>
            <div className = 'location'>
              Seattle, Washington
            </div>
            <div className = 'description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non iaculis neque. Curabitur ultrices tempus ipsum, id vestibulum risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam urna felis, vehicula at diam vel, euismod viverra orci. Nullam nulla ante, ultricies in efficitur et, ullamcorper sit amet metus. Nulla enim augue, tincidunt ut tincidunt consectetur, faucibus vitae orci. Integer et malesuada arcu. Ut pharetra velit ac urna tincidunt, sit amet consectetur diam elementum. Nullam rhoncus, libero ac pharetra lacinia, ante massa gravida est, convallis lacinia ipsum nibh et felis. 
            </div>
          </div>
        </div>
        <div className='entry'>
          <div className = 'date'>
            June 2021 - September 2021
          </div>
          <div className='info'>
            <div className = 'title'>
              Software Engineer Intern
            </div>
            <div className = 'location'>
              Los Altos, California
            </div>
            <div className = 'description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non iaculis neque. Curabitur ultrices tempus ipsum, id vestibulum risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam urna felis, vehicula at diam vel, euismod viverra orci. Nullam nulla ante, ultricies in efficitur et, ullamcorper sit amet metus. Nulla enim augue, tincidunt ut tincidunt consectetur, faucibus vitae orci. Integer et malesuada arcu. Ut pharetra velit ac urna tincidunt, sit amet consectetur diam elementum. Nullam rhoncus, libero ac pharetra lacinia, ante massa gravida est, convallis lacinia ipsum nibh et felis. 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}