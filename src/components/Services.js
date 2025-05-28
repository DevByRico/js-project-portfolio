import React from 'react';
import './Services.css';

const services = [
  { title: 'Web Design', description: 'I build modern, responsive websites focusing on clean design and great user experience.' },
  { title: 'Web Development', description: 'Using JavaScript, React, and Node.js, I develop dynamic web applications that are scalable.' },
  { title: 'Frontend Development', description: 'I focus on creating fast, accessible, and user-friendly websites optimized for all devices.' },
  { title: 'Backend Development', description: 'My backend development experience includes working with databases, APIs, and server-side logic.' }
];

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>Services I Offer</h2>
      <div className="services-list">
        {services.map((svc) => (
          <div key={svc.title} className="service-card">
            <h3>{svc.title}</h3>
            <p>{svc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
