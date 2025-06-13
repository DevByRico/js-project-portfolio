import React from "react";
import styled from "styled-components";
import { Moon, Sun } from "lucide-react";

const Button = styled.button`
  background: none;
  border: 1.5px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  border-radius: 1.5rem;
  padding: 0.4rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s, color 0.2s, border 0.2s;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <Button onClick={toggleDarkMode} aria-label="Toggle dark mode">
    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    {darkMode ? "Light Mode" : "Dark Mode"}
  </Button>
);
