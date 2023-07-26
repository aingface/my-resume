import React from 'react';
import './App.css';
import { Greetings, OtherExperience, WorkExperience, Skills } from './items';
import DarkModeToggle from './components/DarkModeToggle';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Greetings />
        <WorkExperience />
        <OtherExperience />
        <Skills />
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default App;
