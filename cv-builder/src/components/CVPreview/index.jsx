import React from 'react';
import PersonalInfoPreview from './PersonalInfoPreview';
import EducationPreview from './EducationPreview';
import WorkExperiencePreview from './WorkExperiencePreview';
import SkillsPreview from './SkillsPreview';
import './CVPreview.css';

const CVPreview = ({ cvData }) => {
  return (
    <div className="cv-preview">
      <PersonalInfoPreview data={cvData.personalInfo} />
      <EducationPreview data={cvData.education} />
      <WorkExperiencePreview data={cvData.workExperience} />
      <SkillsPreview data={cvData.skills} />
    </div>
  );
};

export default CVPreview;