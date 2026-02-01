import React from 'react';
import { Skill } from '../../types/resume';
import './Skills.css';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Smart split that respects parentheses
  const splitSkills = (details: string): string[] => {
    const tags: string[] = [];
    let current = '';
    let depth = 0;
    
    for (let i = 0; i < details.length; i++) {
      const char = details[i];
      
      if (char === '(') {
        depth++;
        current += char;
      } else if (char === ')') {
        depth--;
        current += char;
      } else if (char === ',' && depth === 0) {
        if (current.trim()) {
          tags.push(current.trim());
        }
        current = '';
      } else {
        current += char;
      }
    }
    
    if (current.trim()) {
      tags.push(current.trim());
    }
    
    return tags;
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3 className="skill-category">{skill.label}</h3>
              <div className="skill-tags">
                {splitSkills(skill.details).map((tag, idx) => (
                  <span key={idx} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
