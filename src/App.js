import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Services />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
