import React from 'react';
import './Projects.css'; // Import the CSS file

const projects = [
  {
    title: 'Parking Management System',
    description: 'The Console-Based Parking Management System (PMS) is a text-based application designed to manage parking spaces efficiently. It allows users to reserve, modify, and cancel parking spots while enabling administrators to oversee parking space availability and manage reservations directly from the console.',
    role: 'Designer, Developer, Project Manager',
    tech: 'Java, OOP, DSA',
    outcome: 'The successful completion of the Console-Based Parking Management System will yield a functional tool for parking management while simultaneously serving as an educational experience that cultivates technical skills, teamwork, and problem-solving abilities. This project not only meets its initial objectives but also lays the groundwork for future enhancements and applications.',
  },
  {
    title: 'Railway Reservation System Development',
    description: 'The Railway Reservation System is a web-based application designed to facilitate the booking and management of train tickets. Built using HTML, CSS, JavaScript, PHP, and MySQL, this system provides users with an efficient and user-friendly platform to search for trains, book tickets, and manage reservations, all while ensuring data integrity and security.',
    role: 'Designer, Developer, Project Manager',
    tech: 'HTML, CSS, PHP, MySQL',
    outcome: 'The Railway Reservation System not only meets its initial objectives but also sets the stage for continuous improvement and future enhancements. By addressing user needs and operational challenges, this project demonstrates the potential of modern web technologies to transform the travel booking experience.',
  },
  {
    title: 'Web Application Development using React.js',
    description: 'At Rhombic Technologies, I developed a dynamic web application using React.js, focusing on creating a responsive and user-friendly interface. My role involved designing reusable components, implementing efficient state management with Redux, and integrating RESTful APIs for real-time data fetching. By utilizing CSS frameworks like Bootstrap, I ensured the application was accessible across various devices. Additionally, I conducted thorough testing with Jest and React Testing Library to guarantee reliability and performance. The project resulted in increased user engagement and positive client feedback, significantly enhancing my skills in modern web development.',
    role: 'Designer, Developer, Project Manager',
    tech: 'HTML, CSS, React, JavaScript, Node',
    outcome: 'The web application developed using React.js at Rhombic Technologies resulted in increased user engagement and satisfaction due to its intuitive design and responsive features. Performance was significantly enhanced through optimized loading times and efficient state management, leading to a smoother user experience. Positive feedback from the client highlighted the application’s usability and aesthetic appeal, confirming that it met their requirements. Additionally, the project fostered scalability for future enhancements and strengthened my technical skills in React.js and modern web development practices. Robust testing protocols ensured high-quality code, while improved team collaboration enhanced overall project delivery.',
  },
];

const Projects = () => (
  <section className="projects">
    <h2 className="projects-heading">Projects</h2>
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-role"><strong>Role:</strong> {project.role}</p>
        <p className="project-tech"><strong>Tech Used:</strong> {project.tech}</p>
        <p className="project-outcome"><strong>Outcome:</strong> {project.outcome}</p>
      </div>
    ))}
  </section>
);

export default Projects;
