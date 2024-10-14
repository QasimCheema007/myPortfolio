import React from 'react';
import './Skills.css'; // Import the CSS file

const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML','Mysql','Java','Python','Data Structure','React Native','Mongodb','Firebase','Project Management','C Programming','Php','Flutter','Pandas','kili Linux','Ubuntu Linux'];

const Skills = () => (
  <section className="skills">
    <h2 className="skills-heading">Skills</h2>
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index} className="skill-item">{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
