import React from 'react';
import  Section  from '../../ui/Section';
import './PersonalInfoPreview.css';

const PersonalInfoPreview = ({ data }) => {
  return (
    <Section className="personal-info-preview">
      <div className="header">
        <h1 className="name">{data.name || 'Your Name'}</h1>
        <div className="contact-info">
          {data.email && <span className="contact-item">{data.email}</span>}
          {data.phone && <span className="contact-item">{data.phone}</span>}
          {data.address && <span className="contact-item">{data.address}</span>}
        </div>
      </div>
    </Section>
  );
};

export default PersonalInfoPreview;