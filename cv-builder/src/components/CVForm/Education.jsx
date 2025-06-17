import Section from "../../ui/Section";
import React from "react";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import ListManager from "../../ui/ListManager";

const EducationInfoForm = ({ educationInfo, setEducationInfo }) => {
  const handleItemChange = (index, field, value) => {
    console.log(index, field, value);
    const updated = [...educationInfo]
    updated[index][field] = value;
    setEducationInfo(updated);
  };

  return (
    <Section title="Education">
      <ListManager
        items={educationInfo}
        onAdd={(e) =>
          
          {
            setEducationInfo([...educationInfo, {
          institution: '',
          degree: '',
          startDate: '',
          endDate: ''
        }])
         e.preventDefault();
      
          }}

        onRemove={(index) => setEducationInfo(educationInfo.filter((_, i) => i !== index))}
        renderItem={(item, index) => (
          <>
            <Input
              label="Institution"
              value={item.institution}
              onChange={(e) => handleItemChange(index, 'institution', e.target.value)}
            />
            <Input
              label="Degree"
              value={item.degree}
              onChange={(e) => handleItemChange(index, 'degree', e.target.value)}
            />
            <Input
              label="Start Date"
              type="month"
              value={item.startDate}
              onChange={(e) => handleItemChange(index, 'startDate', e.target.value)}
            />
            <Input
              label="End Date"
              type="month"
              value={item.endDate}
              onChange={(e) => handleItemChange(index, 'endDate', e.target.value)}
            />
          </>
        )}
      />
    </Section>
  );
};

export default EducationInfoForm;
