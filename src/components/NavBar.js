import React, { useState } from "react";
import styled from "styled-components";

const NavBarWrapper = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 3vw;
  min-height: 46px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 0.55rem 1vw;
  }
`;

const Logo = styled.div`
  font-size: 1.35rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: -1px;
  padding: 0 0.5rem;
`;

const Menu = styled.ul`
  display: flex;
  gap: 1.4rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 700px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 46px;
    left: 0;
    width: 100vw;  /* OK här för dropdown, men om det buggar: byt till 100% */
    background: ${({ theme }) => theme.accent};
    padding: 1rem 0 1.5rem 0;
    z-index: 101;
    gap: 1rem;
  }
`;

const NavLink = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.01em;
    transition: opacity 0.18s, border-bottom 0.15s;
    border-bottom: 2px solid transparent;
    padding: 0.1em 0.14em;
    &:hover,
    &:focus {
      opacity: 0.86;
      border-bottom: 2px solid #fff;
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 700px) {
    display: block;
  }
`;

const DarkModeToggle = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  margin-left: 1.1rem;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: 2px solid #fff;
  }
`;

export const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavBarWrapper>
      <Logo>DevByRico</Logo>
      <Hamburger
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "✖️" : "☰"}
      </Hamburger>
      <Menu open={menuOpen}>
        <NavLink>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
            About Me
          </a>
        </NavLink>
        <NavLink>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>
            Skills
          </a>
        </NavLink>
        <NavLink>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")}>
            Services I Offer
          </a>
        </NavLink>
        <NavLink>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
            Projects
          </a>
        </NavLink>
        <NavLink>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
            Contact
          </a>
        </NavLink>
        <li>
          <DarkModeToggle
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleDarkMode}
          >
            {darkMode ? "☀️" : "🌙"}
          </DarkModeToggle>
        </li>
      </Menu>
    </NavBarWrapper>
  );
};
