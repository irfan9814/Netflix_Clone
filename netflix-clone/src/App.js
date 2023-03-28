import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NetflixShow from './pages/NetflixShow';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/netflix-show" element={<NetflixShow />} /> 
    </Routes>
    </BrowserRouter>
    <Footer />
    <ScrollToTop />
    </div>
  );
}

export default App;
