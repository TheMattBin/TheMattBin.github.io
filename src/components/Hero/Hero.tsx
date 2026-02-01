import React from 'react';
import { Profile } from '../../types/resume';
import './Hero.css';

interface HeroProps {
  profile: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="hero" id="about">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">Hi, I'm</h1>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-title">{profile.headline}</p>
            <p className="hero-location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="location-icon">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{profile.location}</span>
            </p>
            <p className="hero-bio">
              {profile.summary[0]}
            </p>
            <div className="hero-contact-wrapper">
              <a href={`mailto:${profile.email}`} className="hero-email-contact" title="Email" aria-label="Send email">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="hero-contact-text">Contact Me</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} className="profile-photo" />
            ) : (
              <div className="profile-placeholder">
                <span className="profile-initials">{profile.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;
