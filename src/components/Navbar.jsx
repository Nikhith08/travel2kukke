import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar glass-card">
            <div className="container nav-content">
                <div className="logo">Travel2Kukke</div>
                <div className="nav-links">
                    <a href="#hotels">Hotels</a>
                    <a href="#cabs">Cabs</a>
                    <a href="#places">Places</a>
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
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary-dark);
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
