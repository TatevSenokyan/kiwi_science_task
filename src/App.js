
import React from 'react';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';
import Analytics from './components/Analytics';
import Table from './components/Table';
import './App.css';


function App() { 

  return (
    <div className="App">
      <Navbar />
      <div style={{display: 'flex'}}>
        <Stats />
        <div style={{display: 'flex', width: '1391px', flexWrap: 'wrap', marginLeft: '10px'}}>
          <Exchanges />
          <Coins />
          <Analytics />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
