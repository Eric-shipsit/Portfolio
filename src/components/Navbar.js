// src/components/navbar.js
import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import '../App.css';

export default function Navbar() {
  return (
    <section className="navbar">
      <div>
        <DarkModeToggle/>
      </div>
    </section>
  );
}