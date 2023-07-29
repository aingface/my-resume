import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Greetings, OtherExperience, WorkExperience } from './items';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Greetings />
        <WorkExperience />
        <OtherExperience />
      </div>

      <Footer />
    </div>
  );
}

export default App;
