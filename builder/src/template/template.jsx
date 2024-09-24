import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Textarea } from "../components/textarea";


const Resume= () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    techStack: "",
    contact: {
      email: "",
      phone: "",
      linkedin: ""
    },
    education: [
      {
        school: "",
        degree: "",
        details: [""],
        date: ""
      }
    ],
    experience: [
      {
        company: "",
        position: "",
        details: [""],
        date: ""
      }
    ],
    projects: [
      {
        name: "",
        description: "",
        details: [""]
      }
    ],
    skills: [""],
    achievements: [""]
  });

  const handleChange = (e, section, index, subfield) => {
    const { name, value } = e.target;
    setFormData(prevData => {
      if (section) {
        if (Array.isArray(prevData[section])) {
          const newArray = [...prevData[section]];
          if (subfield) {
            newArray[index] = { ...newArray[index], [subfield]: value };
          } else if (Array.isArray(newArray[index])) {
            newArray[index][name] = value;
          } else {
            newArray[index] = value;
          }
          return { ...prevData, [section]: newArray };
        } else {
          return { ...prevData, [section]: { ...prevData[section], [name]: value } };
        }
      }
      return { ...prevData, [name]: value };
    });
  };

  const addField = (section, subfield) => {
    setFormData(prevData => {
      const newArray = [...prevData[section]];
      if (subfield) {
        newArray.push({ [subfield]: [''] });
      } else {
        newArray.push('');
      }
      return { ...prevData, [section]: newArray };
    });
  };

  const removeField = (section, index) => {
    setFormData(prevData => {
      const newArray = [...prevData[section]];
      newArray.splice(index, 1);
      return { ...prevData, [section]: newArray };
    });
  };

  const addSubfield = (section, index, subfield) => {
    setFormData(prevData => {
      const newArray = [...prevData[section]];
      newArray[index][subfield].push('');
      return { ...prevData, [section]: newArray };
    });
  };

  const removeSubfield = (section, index, subfield, subIndex) => {
    setFormData(prevData => {
      const newArray = [...prevData[section]];
      newArray[index][subfield].splice(subIndex, 1);
      return { ...prevData, [section]: newArray };
    });
  };

  const ResumeForm = () => (
    <div className="w-1/2 p-4 overflow-y-auto h-screen">
      <h2 className="text-2xl font-bold mb-4">Resume Form</h2>
      
      <div className="mb-4">
        <Input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => handleChange(e)}
          className="mb-2"
        />
        <Input
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={(e) => handleChange(e)}
          className="mb-2"
        />
        <Input
          name="techStack"
          placeholder="Tech Stack"
          value={formData.techStack}
          onChange={(e) => handleChange(e)}
          className="mb-2"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Contact</h3>
        <Input
          name="email"
          placeholder="Email"
          value={formData.contact.email}
          onChange={(e) => handleChange(e, 'contact')}
          className="mb-2"
        />
        <Input
          name="phone"
          placeholder="Phone"
          value={formData.contact.phone}
          onChange={(e) => handleChange(e, 'contact')}
          className="mb-2"
        />
        <Input
          name="linkedin"
          placeholder="LinkedIn"
          value={formData.contact.linkedin}
          onChange={(e) => handleChange(e, 'contact')}
          className="mb-2"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <Input
              name="school"
              placeholder="School"
              value={edu.school}
              onChange={(e) => handleChange(e, 'education', index, 'school')}
              className="mb-2"
            />
            <Input
              name="degree"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleChange(e, 'education', index, 'degree')}
              className="mb-2"
            />
            <Input
              name="date"
              placeholder="Date"
              value={edu.date}
              onChange={(e) => handleChange(e, 'education', index, 'date')}
              className="mb-2"
            />
            {edu.details.map((detail, detailIndex) => (
              <div key={detailIndex} className="flex items-center mb-2">
                <Input
                  value={detail}
                  onChange={(e) => {
                    const newDetails = [...edu.details];
                    newDetails[detailIndex] = e.target.value;
                    handleChange({ target: { name: 'details', value: newDetails } }, 'education', index, 'details');
                  }}
                  placeholder="Education detail"
                  className="flex-grow mr-2"
                />
                <Button
                  onClick={() => removeSubfield('education', index, 'details', detailIndex)}
                  variant="outline"
                  size="icon"
                >
                  <MinusCircle className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              onClick={() => addSubfield('education', index, 'details')}
              variant="outline"
              size="sm"
              className="mt-2"
            >
              Add Detail
            </Button>
            <Button
              onClick={() => removeField('education', index)}
              variant="destructive"
              size="sm"
              className="mt-2 ml-2"
            >
              Remove Education
            </Button>
          </div>
        ))}
        <Button onClick={() => addField('education')} variant="outline" size="sm">
          Add Education
        </Button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
        {formData.experience.map((exp, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <Input
              name="company"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleChange(e, 'experience', index, 'company')}
              className="mb-2"
            />
            <Input
              name="position"
              placeholder="Position"
              value={exp.position}
              onChange={(e) => handleChange(e, 'experience', index, 'position')}
              className="mb-2"
            />
            <Input
              name="date"
              placeholder="Date"
              value={exp.date}
              onChange={(e) => handleChange(e, 'experience', index, 'date')}
              className="mb-2"
            />
            {exp.details.map((detail, detailIndex) => (
              <div key={detailIndex} className="flex items-center mb-2">
                <Input
                  value={detail}
                  onChange={(e) => {
                    const newDetails = [...exp.details];
                    newDetails[detailIndex] = e.target.value;
                    handleChange({ target: { name: 'details', value: newDetails } }, 'experience', index, 'details');
                  }}
                  placeholder="Experience detail"
                  className="flex-grow mr-2"
                />
                <Button
                  onClick={() => removeSubfield('experience', index, 'details', detailIndex)}
                  variant="outline"
                  size="icon"
                >
                  <MinusCircle className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              onClick={() => addSubfield('experience', index, 'details')}
              variant="outline"
              size="sm"
              className="mt-2"
            >
              Add Detail
            </Button>
            <Button
              onClick={() => removeField('experience', index)}
              variant="destructive"
              size="sm"
              className="mt-2 ml-2"
            >
              Remove Experience
            </Button>
          </div>
        ))}
        <Button onClick={() => addField('experience')} variant="outline" size="sm">
          Add Experience
        </Button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Projects</h3>
        {formData.projects.map((proj, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <Input
              name="name"
              placeholder="Project Name"
              value={proj.name}
              onChange={(e) => handleChange(e, 'projects', index, 'name')}
              className="mb-2"
            />
            <Textarea
              name="description"
              placeholder="Project Description"
              value={proj.description}
              onChange={(e) => handleChange(e, 'projects', index, 'description')}
              className="mb-2"
            />
            {proj.details.map((detail, detailIndex) => (
              <div key={detailIndex} className="flex items-center mb-2">
                <Input
                  value={detail}
                  onChange={(e) => {
                    const newDetails = [...proj.details];
                    newDetails[detailIndex] = e.target.value;
                    handleChange({ target: { name: 'details', value: newDetails } }, 'projects', index, 'details');
                  }}
                  placeholder="Project detail"
                  className="flex-grow mr-2"
                />
                <Button
                  onClick={() => removeSubfield('projects', index, 'details', detailIndex)}
                  variant="outline"
                  size="icon"
                >
                  <MinusCircle className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              onClick={() => addSubfield('projects', index, 'details')}
              variant="outline"
              size="sm"
              className="mt-2"
            >
              Add Detail
            </Button>
            <Button
              onClick={() => removeField('projects', index)}
              variant="destructive"
              size="sm"
              className="mt-2 ml-2"
            >
              Remove Project
            </Button>
          </div>
        ))}
        <Button onClick={() => addField('projects')} variant="outline" size="sm">
          Add Project
        </Button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        {formData.skills.map((skill, index) => (
          <div key={index} className="flex items-center mb-2">
            <Input
              name={`skill-${index}`}
              value={skill}
              placeholder="Skill"
              onChange={(e) => handleChange(e, 'skills', index)}
              className="flex-grow mr-2"
            />
            <Button
              onClick={() => removeField('skills', index)}
              variant="outline"
              size="icon"
            >
              <MinusCircle className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button onClick={() => addField('skills')} variant="outline" size="sm">
          Add Skill
        </Button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Achievements</h3>
        {formData.achievements.map((achievement, index) => (
          <div key={index} className="flex items-center mb-2">
            <Input
              name={`achievement-${index}`}
              value={achievement}
              placeholder="Achievement"
              onChange={(e) => handleChange(e, 'achievements', index)}
              className="flex-grow mr-2"
            />
            <Button
              onClick={() => removeField('achievements', index)}
              variant="outline"
              size="icon"
            >
              <MinusCircle className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button onClick={() => addField('achievements')} variant="outline" size="sm">
          Add Achievement
        </Button>
      </div>
    </div>
  );

  const ResumePreview = () => (
    <div className="w-1/2 p-4 bg-gray-100 h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
      <div className="bg-white p-6 shadow-md rounded-md">
        <h3 className="text-xl font-bold">{formData.name}</h3>
        <p className="text-md font-medium">{formData.title}</p>
        <p className="mt-2">{formData.techStack}</p>
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Contact Information</h4>
          <p>{formData.contact.email}</p>
          <p>{formData.contact.phone}</p>
          <p>{formData.contact.linkedin}</p>
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-semibold">Education</h4>
          {formData.education.map((edu, index) => (
            <div key={index} className="mt-2">
              <h5 className="font-bold">{edu.school}</h5>
              <p>{edu.degree}</p>
              <p>{edu.date}</p>
              <ul className="list-disc pl-5">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-semibold">Work Experience</h4>
          {formData.experience.map((exp, index) => (
            <div key={index} className="mt-2">
              <h5 className="font-bold">{exp.company}</h5>
              <p>{exp.position}</p>
              <p>{exp.date}</p>
              <ul className="list-disc pl-5">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-semibold">Projects</h4>
          {formData.projects.map((proj, index) => (
            <div key={index} className="mt-2">
              <h5 className="font-bold">{proj.name}</h5>
              <p>{proj.description}</p>
              <ul className="list-disc pl-5">
                {proj.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-semibold">Skills</h4>
          <ul className="list-disc pl-5">
            {formData.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-semibold">Achievements</h4>
          <ul className="list-disc pl-5">
            {formData.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex">
      <ResumeForm />
      <ResumePreview />
    </div>
  );
};

export default Resume;
