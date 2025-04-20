import React from 'react';
import "../App.css";

export default function TechUsed({ skill }) {
  return (
    <div className = "tech-box">
      {skill}
    </div>
  );
}