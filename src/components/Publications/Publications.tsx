import React from 'react';
import { Publication } from '../../types/resume';
import './Publications.css';

interface PublicationsProps {
  publications: Publication[];
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  return (
    <section className="publications" id="publications">
      <div className="publications-container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div className="publication-card" key={index}>
              <div className="publication-number">
                <span className="number-text">{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="publication-content">
                <h3 className="publication-title">{pub.title}</h3>

                <p className="publication-authors">
                  {pub.authors.map((author, idx) => (
                    <span key={idx} className={author.startsWith('*') ? 'highlighted-author' : ''}>
                      {author.replace(/\*/g, '')}
                      {idx < pub.authors.length - 1 && ', '}
                    </span>
                  ))}
                </p>

                <div className="publication-meta">
                  {pub.journal && <span className="publication-journal">{pub.journal}</span>}
                  {pub.date && <span className="publication-date">{pub.date}</span>}
                </div>

                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-link"
                  >
                    <span className="link-icon">🔗</span>
                    View Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
