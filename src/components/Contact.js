import React from "react";
import styled from "styled-components";
import { Mail, Linkedin, Github } from "lucide-react";

const Section = styled.section`
  background: ${({ theme }) => theme.bgCard};
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px rgba(30,30,30,0.05);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.07rem;
`;

export const Contact = () => (
  <Section id="contact" aria-labelledby="contact-heading">
    <h2 id="contact-heading" style={{marginTop:0}}>Contact</h2>
    <List>
      <Item>
        <Mail size={18}/> 
        <a href="mailto:devbyrico@gmail.com">devbyrico@gmail.com</a>
      </Item>
      <Item>
        <Linkedin size={18}/>
        <a href="https://linkedin.com/in/devbyrico" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </Item>
      <Item>
        <Github size={18}/>
        <a href="https://github.com/devbyrico" target="_blank" rel="noopener noreferrer">GitHub</a>
      </Item>
    </List>
  </Section>
);
