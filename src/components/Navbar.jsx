import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/t2k_logo.png';


const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar glass-card">
      <div className="container nav-content">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="Travel2Kukke Logo" />
          <span>Travel to Kukke</span>
        </Link>
        <div className="nav-links">
          {isHome ? (
            <>
              <a href="#hotels" onClick={(e) => { e.preventDefault(); scrollToSection('hotels'); }}>Hotels</a>
              <a href="#cabs" onClick={(e) => { e.preventDefault(); scrollToSection('cabs'); }}>Cabs</a>
              <a href="#places" onClick={(e) => { e.preventDefault(); scrollToSection('places'); }}>Places</a>
            </>
          ) : (
            <>
              <Link to="/#hotels">Hotels</Link>
              <Link to="/#cabs">Cabs</Link>
              <Link to="/#places">Places</Link>
            </>
          )}
          <Link to="/about">About Us</Link>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 2rem);
          max-width: 1200px;
          z-index: 1000;
          padding: 1rem 0;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-dark);
          letter-spacing: -0.01em;
        }
        .logo img {
          height: 36px;
          display: block;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--text-main);
          font-weight: 500;
          transition: var(--transition);
        }
        .nav-links a:hover {
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
