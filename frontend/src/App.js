import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Testimonials from './pages/Testimonials'

function App() {
  return (
    <Router>
      <div >
        {/* Navigation Menu */}

        <div className='nav-bar'>
        <div> {/*This div is for putting the logo of luminere*/}
          <p style={{color: 'white'}}>dsvjgsdf</p>
        </div>
       <div> {/*This div is for putting the menus of the navigation*/}
       <nav>
          <ul class='nav-address'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li className='work-hover'>Work</li>
            <li className='services-hover'>Services</li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </nav>
       </div>    
        </div>
      

        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
