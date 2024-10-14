import React from 'react';
import './Achievements.css'; // Import the CSS file

const achievements = [
  'Developed a Personal Portfolio App',
  'Implemented a Parking Management System',
  'Built a Railway Reservation System',
  'Contributed to Open Source Projects',
  'Created a Real-time Chat Application',
  // Add more achievements as needed
];

const Achievements = () => (
  <section className="achievements">
    <h2 className="achievements-heading">Achievements</h2>
    <ul className="achievements-list">
      {achievements.map((achievement, index) => (
        <li key={index} className="achievement-item">{achievement}</li>
      ))}
    </ul>
  </section>
);

export default Achievements;
