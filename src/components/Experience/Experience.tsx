import React from 'react';
import type { Experience } from '../../types/resume';
import './Experience.css';

interface ExperienceProps {
  experience: Experience[];
  viewMode: 'portfolio' | 'cv';
}

const Experience: React.FC<ExperienceProps> = ({ experience, viewMode }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-marker">
                <div className="marker-dot"></div>
                {index < experience.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="position">{exp.position}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-date">
                      {formatDate(exp.start_date)} - {exp.end_date === 'present' ? 'Present' : formatDate(exp.end_date)}
                    </span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>

                <ul className="experience-highlights">
                  {(viewMode === 'cv' ? exp.highlights : exp.summary)?.map((item, idx) => (
                    <li key={idx} className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
