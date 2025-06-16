import Section from "../../ui/Section";
import React from "react";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import ListManager from "../../ui/ListManager";

const WorkExperinceInfoForm = ({
  workExperienceInfo,
  setWorkExperienceInfo,
}) => {
  const handleItemChange = (index, field, value) => {
    console.log(index, field, value);
    const updated = [...workExperienceInfo];
    updated[index][field] = value;
    setWorkExperienceInfo(updated);
  };

  return (
    <Section title="Work Experience">
      <ListManager
        items={workExperienceInfo}
        onAdd={() =>
          setWorkExperienceInfo([
            ...workExperienceInfo,
            {
              institution: "",
              degree: "",
              startDate: "",
              endDate: "",
              responsibilities: "",
            },
          ])
        }
        onRemove={(index) =>
          setWorkExperienceInfo(
            workExperienceInfo.filter((_, i) => i !== index)
          )
        }
        renderItem={(item, index) => (
          <>
            <Input
              label="Job Title"
              value={item.institution}
              onChange={(e) =>
                handleItemChange(index, "institution", e.target.value)
              }
            />
            <Input
              label="Company"
              value={item.degree}
              onChange={(e) =>
                handleItemChange(index, "degree", e.target.value)
              }
            />
            <Input
              label="Start Date"
              type="month"
              value={item.startDate}
              onChange={(e) =>
                handleItemChange(index, "startDate", e.target.value)
              }
            />
            <Input
              label="End Date"
              type="month"
              value={item.endDate}
              onChange={(e) =>
                handleItemChange(index, "endDate", e.target.value)
              }
            />
            <TextArea
              label="Responsibilities"
              name="responsibilities"
              value={item.responsibilities}
              onChange={(e) => handleItemChange(index, 'responsibilities', e.target.value)}
            />
          </>
        )}
      />
    </Section>
  );
};

export default WorkExperinceInfoForm;
