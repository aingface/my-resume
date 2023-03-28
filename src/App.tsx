import React from 'react';
import './App.css';
import { Greetings, OtherExperience, WorkExperience, Skills, Contact } from './items';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Greetings />
        <WorkExperience />
        <OtherExperience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
