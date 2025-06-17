import React from 'react';
import Section  from '../../ui/Section';
import './WorkExperiencePreview.css';

const WorkExperiencePreview = ({ data }) => {
  return (
    <Section title="Work Experience">
      {data.length > 0 ? (
        data.map((work, index) => (
          <div key={index} className="work-item">
            <div className="work-header">
              <h3 className="position">{work.position || 'Position'}</h3>
              <div className="work-dates">
                {work.startDate} {work.endDate ? `- ${work.endDate}` : ''}
              </div>
            </div>
            <div className="company">{work.institution|| 'Company Name'}</div>
            {work.responsibilities && (
              <ul className="responsibilities">
                {work.responsibilities.split('\n').map((item, i) => (
                  item.trim() && <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))
      ) : (
        <p className="no-experience">No work experience added</p>
      )}
    </Section>
  );
};

export default WorkExperiencePreview;