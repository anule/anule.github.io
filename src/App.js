import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';

const App = () => (
  <div className="App container">
    <Navbar />

    {/* MAIN SECTION*/}
    <main>
      <About />
      <Projects />
    </main>
  </div>
);

export default App;
