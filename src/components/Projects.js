// src/components/Projects.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
  background: ${({ theme }) => theme.bgCard};
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px rgba(30,30,30,0.08);
  padding: 2rem 2rem 2rem 2rem;
  margin-bottom: 2.5rem;
  max-width: 1000px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 1.3rem 0.5rem;
    max-width: 98vw;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.accent};
  font-size: 2.1rem;
  font-weight: bold;
  margin-bottom: 1.7rem;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const Card = styled.a`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(30,30,30,0.07);
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  text-decoration: none;
  color: #1a1a1a;
  transition: box-shadow 0.19s, transform 0.12s;
  border: 1px solid #f0f0f6;

  &:hover, &:focus {
    box-shadow: 0 8px 24px rgba(40,40,80,0.14);
    transform: translateY(-4px) scale(1.025);
    color: ${({ theme }) => theme.accent};
    outline: none;
  }
`;

const RepoTitle = styled.h3`
  font-size: 1.13rem;
  font-weight: bold;
  margin: 0 0 0.7rem 0;
  color: ${({ theme }) => theme.accent};
  word-break: break-all;
`;

const Desc = styled.p`
  font-size: 1.01rem;
  color: #23242bb5;
  margin: 0 0 0.6rem 0;
  flex: 1;
`;

const Github = styled.span`
  font-size: 0.95rem;
  color: #444;
  opacity: 0.75;
`;

export const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/devbyrico/repos?sort=created")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <Title id="projects-heading">Projects</Title>
      <Grid>
        {repos.map((repo) => (
          <Card
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open GitHub project ${repo.name}`}
          >
            <RepoTitle>{repo.name}</RepoTitle>
            <Desc>{repo.description || "No description"}</Desc>
            <Github>View on GitHub ↗</Github>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};
