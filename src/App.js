import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import './App.css'

const App = () => (
  <div className="App">
    <Navbar />

    {/* MAIN SECTION*/}
    <main className="page-container">
      <About />
      <Projects />
    </main>
  </div>
);

export default App;
