import React from 'react'; 
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';

import Services from './pages/Services';
import HomePage from './pages/HomePage';
import Career from './pages/Career';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';


function App() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
