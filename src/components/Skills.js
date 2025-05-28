import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML & CSS', level: 85 },
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 60 },
  { name: 'REST API', level: 60 }
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      {skills.map((skill) => (
        <div key={skill.name} className="skill">
          <span>{skill.name}</span>
          <div className="progress-bar">
            <div className="fill" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </section>
  );
}
