import React from 'react';
import './Experience.css'; // Import the CSS file

const experience = [
  {
    jobTitle: 'Freelance Platform',
    company: 'Fiverr',
    responsibilities: 'Java Developer',
  },
  {
    jobTitle: 'Freelance Platform',
    company: 'Upwork',
    responsibilities: 'Web Developer',
  },
  {
    jobTitle: 'Freelance Platform',
    company: 'Fiverr',
    responsibilities: 'Web Developer',
  },
  {
    jobTitle: 'Web Developer (Internship)',
    company: 'Rhombix Technologies',
    responsibilities: 'Web Developer',
  },
];

const Experience = () => (
  <section className="experience">
    <h2 className="experience-heading">Experience</h2>
    {experience.map((job, index) => (
      <div key={index} className="experience-card">
        <h3 className="experience-title">{job.jobTitle} at {job.company}</h3>
        <p className="experience-responsibilities">{job.responsibilities}</p>
      </div>
    ))}
  </section>
);

export default Experience;
