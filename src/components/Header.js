import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>Ricardo Nicolau</h1>
      <p>JavaScript Developer</p>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}
