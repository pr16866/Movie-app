import React from 'react';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home">

        <Home />
      </div>
    </div>
  );
}

export default App;
