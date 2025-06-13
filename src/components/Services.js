import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: ${({ theme }) => theme.bgCard || "#f7f7fa"};
  border-radius: 1.2rem;
  margin: 3rem auto 2.5rem auto;
  padding: 2rem 0.5rem 2.5rem 0.5rem;
  max-width: 1000px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.accent || "#2376e0"};
  font-size: 2.3rem;
  text-align: center;
  font-weight: bold;
  margin: 0 0 2.3rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.3rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(30,30,30,0.09);
  padding: 2rem 1.4rem 1.4rem 1.4rem;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s, transform 0.15s;
  border: 1px solid #f0f0f6;

  &:hover {
    box-shadow: 0 8px 24px rgba(40,40,80,0.17);
    transform: translateY(-4px) scale(1.02);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.18rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  color: #23242b;
`;

const Desc = styled.p`
  font-size: 1.05rem;
  color: #23242bb3;
  margin: 0;
`;

const services = [
  {
    title: "Web Design",
    desc: "I build modern, responsive websites focusing on clean design and great user experience.",
  },
  {
    title: "Web Development",
    desc: "Using JavaScript, React, and Node.js, I develop dynamic web applications that are scalable.",
  },
  {
    title: "Frontend Development",
    desc: "I focus on creating fast, accessible, and user-friendly websites optimized for all devices.",
  },
  {
    title: "Backend Development",
    desc: "My backend development experience includes working with databases, APIs, and server-side logic.",
  },
];

export const Services = () => (
  <Section id="services">
    <Title>Services I Offer</Title>
    <Grid>
      {services.map((service) => (
        <Card key={service.title}>
          <CardTitle>{service.title}</CardTitle>
          <Desc>{service.desc}</Desc>
        </Card>
      ))}
    </Grid>
  </Section>
);
