// App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./GlobalStyles";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Photo } from "./components/Photo";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Thoughts } from "./components/Thoughts";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const Page = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "2.2rem 1rem 0 1rem",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((d) => !d);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> {/* Utsida! */}
      <div style={Page}>
        <Header />
        <Photo />
        <section id="about"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Projects /></section>
        <Thoughts />
        <section id="contact"><Contact /></section>
      </div>
      <Footer /> {/* Utsida! */}
    </ThemeProvider>
  );
}
export default App;
