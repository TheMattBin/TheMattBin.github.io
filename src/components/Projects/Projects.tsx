import React from 'react';
import { Project } from '../../types/resume';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const formatDate = (date?: string) => {
    if (!date) return '';
    return date;
  };

  const getDateRange = (project: Project) => {
    if (project.start_date && project.end_date) {
      return `${formatDate(project.start_date)} - ${formatDate(project.end_date)}`;
    }
    if (project.date) {
      return project.date;
    }
    return '';
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                {getDateRange(project) && (
                  <span className="project-date">{getDateRange(project)}</span>
                )}
              </div>

              <p className="project-summary">{project.summary}</p>

              {project.highlights && project.highlights.length > 0 && (
                <ul className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <span className="highlight-bullet">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <div className="project-footer">
                <span className="project-badge">Open Source</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
