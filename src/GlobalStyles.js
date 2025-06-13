import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    width: 100%;      /* FIX! */
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    transition: background 0.2s, color 0.2s;
    margin: 0;
    min-height: 100vh;
  }

  ::selection {
    background: ${({ theme }) => theme.accent}55;
  }
  a {
    color: ${({ theme }) => theme.link};
    text-decoration: underline;
  }
  a:focus, a:hover {
    color: ${({ theme }) => theme.accent};
  }
  *:focus {
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: 2px;
  }
  img {
    max-width: 100%;
    display: block;
  }
`;
