
import React from 'react';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Exchanges from './components/Exchanges';
import './App.css'


function App() { 

  return (
    <div className="App">
      <Navbar />
      <div style={{display: 'flex'}}>
        <Stats />
        <Exchanges />
      </div>
    </div>
  );
}

export default App;
