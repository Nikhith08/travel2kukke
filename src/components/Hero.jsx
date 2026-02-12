import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1>Discover the Spiritual Charm of <span className="highlight">Kukke Subramanya</span></h1>
                <p>Your one-stop guide for comfortable stays, reliable transport, and must-visit spiritual sites.</p>
                <div className="hero-btns">
                    <button className="btn btn-primary">Explore Hotels</button>
                    <button className="btn" style={{ background: 'var(--white)', border: '1px solid var(--primary)' }}>View Cabs</button>
                </div>
            </div>
            <style>{`
        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, rgba(46, 125, 50, 0.1) 0%, rgba(255, 160, 0, 0.05) 100%);
          padding-top: 8rem;
        }
        .hero-content {
          text-align: center;
          max-width: 800px;
        }
        .hero h1 {
          font-size: clamp(2.5rem, 8vw, 4rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .highlight {
          color: var(--primary);
        }
        .hero p {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .hero-btns {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }
        @media (max-width: 480px) {
          .hero-btns {
            flex-direction: column;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
