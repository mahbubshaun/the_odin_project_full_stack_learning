import Section from "../../ui/Section";
import React from "react";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";

const PersoanalInfoForm = ({ personalInfo, setPersonalInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  return (
    <Section title="Personal Information">
      <Input
        label="Full name"
        name="name"
        value={personalInfo.name}
        onChange={handleChange}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={personalInfo.email}
        onChange={handleChange}
      />

      <Input
        label="Phone"
        name="phone"
        type="phone"
        value={personalInfo.phone}
        onChange={handleChange}
      />
      <TextArea
        label="Address"
        name="address"
        value={personalInfo.address}
        onChange={handleChange}
      />
    </Section>
  );
};

export default PersoanalInfoForm;
