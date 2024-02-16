import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import SectionContainer from './components/work/SectionContainer';
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
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* Define other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
