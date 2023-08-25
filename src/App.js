import React from 'react';
import './sass/style.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home'; 
import DigitalProducts from './components/DigitalProducts'; 
import About from './components/About'; 
import Menu from './components/Menu'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <>
    <Router>
      <Menu />
    <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/digitalproducts" element={<DigitalProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
    </Router>
    </>
  );
}

export default App;
