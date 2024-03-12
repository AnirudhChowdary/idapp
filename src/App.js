import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import SectionContainer from './components/work/SectionContainer';
import About from './components/about/About';
import ContactUs from './components/contactUs/ContactUs';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<SectionContainer/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
