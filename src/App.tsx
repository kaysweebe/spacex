import React from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Rockets from './components/Rockets/Rockets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar></AppBar>
        <Rockets></Rockets>
      </header>
    </div>
  );
}

export default App;
