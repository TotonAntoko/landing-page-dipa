import React from 'react';
import './projects.scss';
import ProjectsItem from '../project-item';

const Projects = () => (
  <div className="projects container">
    <div className="header">
      <div className="title-info">
        <p>Our Projects</p>
        <h1>Our Latest cool projects.</h1>
      </div>

      <button type="button">Check our work</button>
    </div>

    <div className="list-project">
      <ProjectsItem
        title="Splitup - Mobile Design"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat dictumst at mattis volutpat in ultrices senectus urna."
        imgLink="assets/image/project/splitup-1.png"
      />
      <ProjectsItem
        title="Stockup - Web Design"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat dictumst at mattis volutpat in ultrices senectus urna."
        imgLink="assets/image/project/stockup-1.png"
      />
      <ProjectsItem
        title="Splitup - Mobile Design"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat dictumst at mattis volutpat in ultrices senectus urna."
        imgLink="assets/image/project/splitup-2.png"
      />
      <ProjectsItem
        title="Splitup - Web Design"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat dictumst at mattis volutpat in ultrices senectus urna."
        imgLink="assets/image/project/stockup-2.png"
      />
    </div>
  </div>
);
export default Projects;
