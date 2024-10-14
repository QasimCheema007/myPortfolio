import React from 'react';
import Introduction from './components/Introduction';
import Background from './components/Background';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css'; // Import the CSS file for styling

const App = () => (
  <div className="app">
    <Introduction />
    <Background />
    <Projects />
    <Skills />
    <Experience />
    <Testimonials />
    <Blog />
    <Achievements />
    <Contact />
  </div>
);

export default App;
