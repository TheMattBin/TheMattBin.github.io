import React from 'react';
import type { Education } from '../../types/resume';
import './Education.css';

interface EducationProps {
  education: Education[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>

              <div className="education-content">
                <div className="education-header">
                  <div>
                    <h3 className="institution-name">{edu.institution}</h3>
                    <p className="degree-info">
                      {edu.degree} in {edu.area}
                    </p>
                  </div>
                  <div className="education-meta">
                    <span className="education-date">
                      {formatDate(edu.start_date)} - {formatDate(edu.end_date)}
                    </span>
                    <span className="education-location">{edu.location}</span>
                  </div>
                </div>

                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="education-highlights">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
