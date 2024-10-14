import React from 'react';
import './Blog.css'; // Import the CSS file

const articles = [
  { title: 'No articles I have written', link: '#' },
];

const Blog = () => (
  <section className="blog">
    <h2 className="blog-heading">Blog/Articles</h2>
    <ul className="blog-list">
      {articles.map((article, index) => (
        <li key={index} className="blog-item">
          <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
        </li>
      ))}
    </ul>
  </section>
);

export default Blog;
