import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Greetings, OtherExperience, Skills, WorkExperience } from './items';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Greetings />
        <WorkExperience />
        <OtherExperience />
        <Skills />
      </div>
    </div>
  );
}

export default App;
