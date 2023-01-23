
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Stats from './components/Stats/Stats';
import Exchanges from './components/Exchanges/Exchanges';
import Coins from './components/Coins/Coins';
import Analytics from './components/Analytics/Analytics';
import Table from './components/Table/Table';
import LineChart from './components/LineChart/LineChart';
import BarChart from './components/BarChart/BarChart';
import AreaChart from './components/AreaChart/AreaChart';
import './App.css';


function App() { 

  return (
    <div className='App'>
      <Navbar />
      <div className='mainContainer'>
        <Stats />
        <div className='mainWrapper'>
          <LineChart />
          <Exchanges />
          <Coins />
          <BarChart />
          <Analytics />
          <AreaChart />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
