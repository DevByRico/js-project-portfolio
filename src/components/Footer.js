// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100vw;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* Ser till att footern inte sticker ut på mobil */
  overflow-x: hidden;
`;

const FooterInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.3rem 1rem 1.2rem 1rem;
  text-align: center;
  font-size: 1.05rem;
  letter-spacing: 0.01em;

  @media (max-width: 600px) {
    font-size: 0.98rem;
    padding: 1.2rem 0.5rem 1.1rem 0.5rem;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        © {new Date().getFullYear()} DevByRico. All rights reserved.
      </FooterInner>
    </FooterWrapper>
  );
}
