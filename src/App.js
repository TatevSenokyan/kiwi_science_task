
import React from 'react';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';
import './App.css'


function App() { 

  return (
    <div className="App">
      <Navbar />
      <div style={{display: 'flex'}}>
        <Stats />
        <Exchanges />
        <Coins />
      </div>
    </div>
  );
}

export default App;
