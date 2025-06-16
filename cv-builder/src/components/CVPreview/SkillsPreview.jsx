import React from 'react';
import Section from '../../ui/Section';
import './SkillsPreview.css';

const SkillsPreview = ({ data }) => {
  return (
    <Section title="Skills">
      <div className="skills-preview-container">
        {data.length > 0 ? (
          <ul className="skills-preview-list">
            {data.map((skill, index) => (
              <li key={index} className="skill-preview-item">
                {skill}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-skills">No skills added</p>
        )}
      </div>
    </Section>
  );
};

export default SkillsPreview;