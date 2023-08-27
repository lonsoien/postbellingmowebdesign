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
import Blogs from './components/Blogs';
import Business from './components/Business';
import Portfolio from './components/Portfolio';
import Websites from './components/Websites';

function App() {
  return (
    <>
    <Router>
      <Menu />
    <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/digitalproducts" element={<DigitalProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/business" element={<Business />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
    </Router>
    </>
  );
}

export default App;
