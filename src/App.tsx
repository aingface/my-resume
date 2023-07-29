import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Greetings, OtherExperience, WorkExperience } from './items';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Greetings />
        <WorkExperience />
        <OtherExperience />
      </div>
      <DarkModeToggle />
      <Footer />
    </div>
  );
}

export default App;
