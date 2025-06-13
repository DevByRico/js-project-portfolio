import React from "react";
import styled from "styled-components";

const Card = styled.section`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px rgba(30,30,30,0.10);
  padding: 2rem 2.5rem;
  margin-bottom: 2.5rem;
  max-width: 1000px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (max-width: 700px) {
    padding: 1.2rem 0.7rem;
  }
`;


const Title = styled.h2`
  color: ${({ theme }) => theme.accent || "#2376e0"};
  font-size: 2.1rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.13rem;
  line-height: 1.7;
  color: #5a5a5a;
  margin: 0 0 1.1rem 0;
`;

const Contact = styled.p`
  font-size: 1.08rem;
  margin-top: 1.3rem;
  color: #444;
  & a {
    color: ${({ theme }) => theme.accent || "#2376e0"};
    font-weight: 500;
    text-decoration: underline;
  }
`;

export const AboutMe = () => (
  <Card id="about">
    <Title>About Me</Title>
    <Paragraph>
      Hi! I’m Ricardo Nicolau, a curious and driven JavaScript developer with a strong passion for technology and problem-solving. I build modern, user-focused web applications using tools like React, Node.js, and MongoDB, always with a focus on writing clean, accessible, and scalable code.
    </Paragraph>
    <Paragraph>
      My background in IT support, logistics, and leadership has taught me how to thrive in fast-paced, practical environments. I’m comfortable diving into complex systems, learning quickly, and finding smart solutions to technical challenges—whether it’s debugging code, improving workflows, or supporting a team.
    </Paragraph>
    <Paragraph>
      Outside of coding, I enjoy staying active and exploring new tech. I have a natural aptitude for IT and love analyzing problems to find efficient solutions.
    </Paragraph>
    <Contact>
      Contact: <a href="mailto:devbyrico@gmail.com">devbyrico@gmail.com</a>
    </Contact>
  </Card>
);
