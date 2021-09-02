import React from 'react';
import './project-item.scss';

const Projects = ({ title, description, imgLink }) => (
  <div className="project-item">
    <img src={imgLink} alt="Splitup Project" />

    <div className="info">
      <h1>
        {title}
      </h1>
      <p>
        {description}
      </p>
    </div>

  </div>
);
export default Projects;
