import React from "react";
import styled from "styled-components";
import { MessageSquare } from "lucide-react";

const Section = styled.section`
  background: ${({ theme }) => theme.bgCard};
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px rgba(30,30,30,0.05);
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const Thoughts = () => (
  <Section aria-labelledby="thoughts-heading">
    <h2 id="thoughts-heading" style={{marginTop:0, display:"flex", alignItems:"center", gap:"0.5rem"}}>
      <MessageSquare size={22}/> Thoughts on Code
    </h2>
    <p>
      {/* - */}
      "Learning to code is like learning a new language. I love building things and solving problems. The best moments are those tiny 'aha!' moments when something suddenly makes sense. Code is creative!"
    </p>
  </Section>
);
