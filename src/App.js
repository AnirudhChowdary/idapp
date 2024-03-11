import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import HomePage from './components/Home';
import SectionContainer from './components/work/SectionContainer';
import About from './components/about/About';
import ContactUs from './components/contactUs/ContactUs';
// import AboutPage from './/AboutPage';
// Import other pages and components

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<SectionContainer/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* Define other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
