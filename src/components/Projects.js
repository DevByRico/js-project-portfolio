import React, { useState, useEffect } from 'react';


export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/devbyrico/repos?sort=created')
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {repos.map((repo) => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-card">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
