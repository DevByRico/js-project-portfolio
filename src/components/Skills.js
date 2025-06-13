import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: ${({ theme }) => theme.bgCard};
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px rgba(30,30,30,0.06);
  padding: 2rem 2.5rem 2.5rem 2.5rem;
  margin-bottom: 2rem;
  max-width: 1000px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (max-width: 1100px) {
    max-width: 98vw;
    padding: 1.2rem 0.5rem;
  }
`;

const Title = styled.h2`
  margin: 0 0 1.5rem 0;
  font-size: 2rem;
`;

const SkillRow = styled.div`
  margin-bottom: 1.7rem;
`;

const RowTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.18rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  gap: 8px;
  span:first-child {
    word-break: break-all;
    min-width: 0;
  }
  span:last-child {
    flex-shrink: 0;
    margin-left: 8px;
  }
`;

const BarBackground = styled.div`
  width: 100%;
  background: #e2eafb;
  border-radius: 8px;
  height: 13px;
  overflow: hidden;
`;

const Bar = styled.div`
  background: linear-gradient(90deg, #0072ff, #4ac8ff);
  height: 100%;
  width: ${({ percent }) => percent}%;
  border-radius: 8px 0 0 8px;
  transition: width 1s;
`;

const skills = [
  { name: "HTML & CSS", percent: 85 },
  { name: "JavaScript", percent: 70 },
  { name: "React", percent: 60 },
  { name: "REST API", percent: 60 },
];

export const Skills = () => (
  <Section id="skills" aria-labelledby="skills-heading">
    <Title id="skills-heading">Skills</Title>
    {skills.map((skill) => (
      <SkillRow key={skill.name}>
        <RowTop>
          <span>{skill.name}</span>
          <span>{skill.percent}%</span>
        </RowTop>
        <BarBackground>
          <Bar percent={skill.percent} />
        </BarBackground>
      </SkillRow>
    ))}
  </Section>
);
