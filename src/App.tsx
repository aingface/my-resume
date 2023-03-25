import React from 'react';
import './App.css';
import { Greetings, OtherExperience, WorkExperience, Skills, Contact } from './items';
function App() {
  return (
    <div className="App">
      <Greetings />
      <WorkExperience />
      <OtherExperience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
