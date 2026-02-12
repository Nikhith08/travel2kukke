import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import { hotels, cabs, places } from './data/mockData';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Section id="hotels" title="Premium Stays" items={hotels} type="hotel" />
      <Section id="cabs" title="Reliable Transport" items={cabs} type="cab" />
      <Section id="places" title="Places to Visit" items={places} type="place" />

      <footer style={{ padding: '4rem 0', background: 'var(--primary-dark)', color: 'var(--white)', textAlign: 'center' }}>
        <div className="container">
          <p>About Us</p>
          <p>© 2026 Travel2Kukke. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
