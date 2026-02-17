import React from 'react';
import { Link } from 'react-router-dom';
import devImg from '../assets/dev_img.jpg';
import AdSlot from '../components/AdSlot';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="container">
        <Link to="/" className="back-link">← Back to Explore</Link>
        <div className="about-content glass-card">
          <div className="developer-profile">
            <div className="profile-image-container">
              <img src={devImg} alt="Nikhith Gowda" className="profile-image" />
            </div>
            <div className="profile-details">
              <h1>Nikhith Gowda</h1>
              <p className="role">Software Developer</p>
              <div className="contact-info">
                <p><strong>Email:</strong> <a href="mailto:mvnikhithgowda@gmail.com">mvnikhithgowda@gmail.com</a></p>
              </div>
              <div className="bio">
                <p>
                  Hi! I'm Nikhith, the creator of Travel2Kukke. I built this platform to make your journey to Kukke Subrahmanya
                  seamless and memorable. Whether you're looking for a peaceful stay, a reliable ride, or hidden gems to explore,
                  we've got you covered.
                </p>
                <p>
                  My goal is to provide a user-friendly and aesthetically pleasing experience for all pilgrims and travelers
                  visiting this sacred destination.
                </p>
              </div>
              <div className="social-links">
                <button className="btn btn-primary">Connect with me</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-container {
          padding-top: 8rem;
          padding-bottom: 4rem;
          min-height: 100vh;
          background: var(--bg-soft);
        }
        .back-link {
          display: inline-block;
          margin-bottom: 2rem;
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition);
        }
        .back-link:hover {
          transform: translateX(-5px);
        }
        .about-content {
          padding: 3rem;
          border-radius: 2rem;
        }
        .developer-profile {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: center;
        }
        .profile-image-container {
          position: relative;
        }
        .profile-image-container::before {
          content: '';
          position: absolute;
          inset: -10px;
          border: 2px solid var(--primary);
          border-radius: 2rem;
          z-index: -1;
          opacity: 0.3;
        }
        .profile-image {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: var(--shadow-lg);
          display: block;
        }
        .profile-details h1 {
          font-size: 3rem;
          color: var(--primary-dark);
          margin-bottom: 0.5rem;
        }
        .role {
          font-size: 1.2rem;
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 2rem;
        }
        .contact-info {
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
        .contact-info a {
          color: var(--text-main);
          text-decoration: none;
          transition: var(--transition);
        }
        .contact-info a:hover {
          color: var(--primary);
        }
        .bio {
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .bio p {
          margin-bottom: 1rem;
        }
        @media (max-width: 992px) {
          .developer-profile {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .profile-image-container {
            max-width: 300px;
            margin: 0 auto;
          }
          .profile-details h1 {
            font-size: 2.5rem;
          }
      `}</style>

      {/* Google AdSense Slot */}
      <AdSlot adSlot="1234567890" />
    </div>
  );
};

export default AboutUs;
