import React from 'react';
import Section  from '../../ui/Section';
import './EducationPreview.css';

const EducationPreview = ({ data }) => {
  return (
    <Section title="Education">
      {data.length > 0 ? (
        data.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3 className="institution">{edu.institution || 'Institution Name'}</h3>
              <div className="education-dates">
                {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : ''}
              </div>
            </div>
            {edu.degree && <div className="degree">{edu.degree}</div>}
          </div>
        ))
      ) : (
        <p className="no-education">No education information added</p>
      )}
    </Section>
  );
};

export default EducationPreview;