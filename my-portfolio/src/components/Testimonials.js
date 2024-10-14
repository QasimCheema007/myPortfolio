import React from 'react';
import './Testimonials.css'; // Import the CSS file

const testimonials = [
  'Working with Qasim Mehmood Cheema on our Parking Management System was a game-changer. His expertise in Java and attention to detail led to a seamless implementation that exceeded our expectations. The system is efficient and user-friendly, making it a valuable asset for our operations.',
  'I had the pleasure of collaborating with Qasim Mehmood Cheema on a software development project. His coding skills and problem-solving abilities were instrumental in meeting our tight deadlines. Qasim consistently delivered high-quality work and maintained excellent communication throughout the project.',
  'As a mentor, I’ve seen Qasim Mehmood Cheema grow into a skilled programmer. His dedication to continuous learning and passion for coding are evident in every project he takes on. I highly recommend Qasim for any programming challenges!',
  'I can confidently say that Qasim Mehmood Cheema is one of the most talented programmers I’ve worked with. His ability to tackle complex problems and deliver efficient solutions is impressive. He brings creativity and technical expertise to every project.',
  'I hired Qasim Mehmood Cheema to develop a custom application for our business needs. He not only delivered the project on time but also provided ongoing support to ensure everything ran smoothly. His commitment to quality and customer satisfaction truly sets him apart!'
];

const Testimonials = () => (
  <section className="testimonials">
    <h2 className="testimonials-heading">Testimonials</h2>
    <ul className="testimonials-list">
      {testimonials.map((testimonial, index) => (
        <li key={index} className="testimonial-item">{testimonial}</li>
      ))}
    </ul>
  </section>
);

export default Testimonials;
