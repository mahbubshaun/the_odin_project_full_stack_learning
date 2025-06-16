import React, { useState } from 'react';
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import Button from "../../ui/Button";
import Section from "../../ui/Section";
import './SkillsForm.css';


const SkillsForm = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddSkill();
    }
  };

  return (
    <Section title="Skills">
      <div className="skills-input-container">
        <Input
          label="Add Skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill and press Enter"
        />
        <Button onClick={handleAddSkill} disabled={!newSkill.trim()}>
          Add
        </Button>
      </div>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            <span>{skill}</span>
            <button
              type="button"
              className="skill-remove"
              onClick={() => handleRemoveSkill(index)}
              aria-label={`Remove ${skill}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsForm;