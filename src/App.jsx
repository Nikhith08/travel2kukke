import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import AboutUs from './pages/AboutUs';
import { hotels, cabs, places } from './data/mockData';

const Home = () => (
  <>
    <Hero />
    <Section id="hotels" title="Premium Stays" items={hotels} type="hotel" />
    <Section id="cabs" title="Reliable Transport" items={cabs} type="cab" />
    <Section id="places" title="Places to Visit" items={places} type="place" />
  </>
);

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <footer style={{ padding: '4rem 0', background: 'var(--primary-dark)', color: 'var(--white)', textAlign: 'center' }}>
          <div className="container">
            <p><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link></p>
            <p>© 2026 Travel2Kukke. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </Router>
  );
}

export default App;
