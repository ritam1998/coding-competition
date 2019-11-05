import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AddEmployee from './Components/AddEmployee';
import TotalEmployee from './Components/TotalEmployee';

function App() {
  return (
    <div>
      <Navbar />
      <TotalEmployee />
      <AddEmployee />
    </div>
  );
}

export default App;
