import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 1rem 0;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.2rem 0 0.7rem 0;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  letter-spacing: -2px;
  color: ${({ theme }) => theme.accent};
`;

export const Header = () => (
  <Wrapper>
    <Name>DevByRico</Name>
  </Wrapper>
);