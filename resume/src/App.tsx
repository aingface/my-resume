import React from 'react';
import './App.css';
import { Greetings, OtherExperience, WorkExperience, Skills } from './items';
function App() {
  return (
    <div className="App">
      <Greetings />
      <WorkExperience />
      <OtherExperience />
      <Skills />
    </div>
  );
}

export default App;
