import React from 'react';
import {BrowserRouter, Switch,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NetflixShow from './pages/NetflixShow';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/netflix-show" element={<NetflixShow/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
