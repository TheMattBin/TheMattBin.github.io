import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Publications from './components/Publications/Publications';
import Footer from './components/Footer/Footer';
import { ResumeData } from './types/resume';
import { fetchResumeData } from './services/resumeService';
import './App.css';

const App: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'portfolio' | 'cv'>('portfolio');

  useEffect(() => {
    const loadData = async () => {
      try {
        // Load summary version for portfolio mode, full version for CV mode
        const data = await fetchResumeData(viewMode === 'portfolio' ? 'portfolio' : 'full');
        setResumeData(data);
      } catch (error) {
        console.error('Failed to load resume data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [viewMode]); // Re-load data when viewMode changes

  const handleViewToggle = () => {
    setViewMode((prev) => (prev === 'portfolio' ? 'cv' : 'portfolio'));
    // Scroll to Experience section after mode switch
    setTimeout(() => {
      const experienceElement = document.querySelector('#experience');
      if (experienceElement) {
        experienceElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="error-container">
        <p className="error-text">Failed to load resume data</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className={`app ${viewMode}`}>
        <Header
          viewMode={viewMode}
          onViewToggle={handleViewToggle}
          email={resumeData.profile.email}
          linkedInUsername={resumeData.profile.social_networks.find(s => s.network === 'LinkedIn')?.username}
          githubUsername={resumeData.profile.social_networks.find(s => s.network === 'GitHub')?.username}
        />

        <main className="main-content">
          <Hero profile={resumeData.profile} />

          {viewMode === 'portfolio' ? (
            <>
              <Experience experience={resumeData.experience} viewMode={viewMode} />
              <div className="portfolio-footer-section">
                <h2 className="section-title">Want to see more?</h2>
                <p className="portfolio-footer-text">
                  Switch to Full CV view to see detailed skills and publications.
                </p>
                <button onClick={handleViewToggle} className="cta-button">
                  View Full CV
                </button>
              </div>
            </>
          ) : (
            <>
              <Experience experience={resumeData.experience} viewMode={viewMode} />
              <Skills skills={resumeData.skills} />
              <Publications publications={resumeData.publications} />
            </>
          )}
        </main>

        <Footer profile={resumeData.profile} />
      </div>
    </BrowserRouter>
  );
};

export default App;
