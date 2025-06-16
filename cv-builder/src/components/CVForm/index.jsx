import PersoanalInfoForm from "./PersonalInfoForm";
import React from "react";
import EducationInfoForm from "./Education";
import WorkExperinceInfoForm from "./WorkExperince";
import SkillsForm from "./Skills";

const CVForm = ({ cvData, setCvData }) => {
  console.log(cvData);
  return (
    <div className="cv-form">
      <PersoanalInfoForm
        personalInfo={cvData.personalInfo}
        setPersonalInfo={(data) =>
          setCvData({
            ...cvData,
            personalInfo: data,
          })
        }
      />
      <EducationInfoForm
        educationInfo={cvData.education}
        setEducationInfo={(data) => setCvData({ ...cvData, education: data })}
      />
      <WorkExperinceInfoForm
        workExperienceInfo={cvData.workExperience}
        setWorkExperienceInfo={(data) =>
          setCvData({ ...cvData, workExperience: data })
        }
      />
      <SkillsForm
        skills={cvData.skills}
        setSkills={(data) => setCvData({ ...cvData, skills: data })}
      />
    </div>
  );
};

export default CVForm;
