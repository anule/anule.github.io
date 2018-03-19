import React from 'react';
import './Projects.css';
import projects from './info/projects.json';
// import kitchen from './images/global-kitchen.png';
// import h2store from './images/h2store.png';
// import neo4j from './images/neo4j-display.png';

const Projects = () => (
  <section id="projects">
    <h1 className="title">projects</h1>
    <div className="project-tiles">
      {projects.map(project => (
        <div className="project" key={project.title}>
          <h1 className="project-title">{project.title}</h1>
          <div className="project-img">
            <img src={project.image} alt={project.imageAlt} />
          </div>
          <div className="buttons">
            <a href={project.demo}>
              <button className="button is-medium is-outlined demo" role="link">
                Demo
              </button>
            </a>
            <a href={project.code}>
              <button
                className="button is-medium is-outlined GitHub"
                role="link"
              >
                Code
              </button>
            </a>
          </div>
          <div className="description">
            <span className="text">{project.timeSpan}</span>
            <br />
            <p className="text">{project.description}</p>
            <br />
            <p className="text">
              <b>Tech stack</b>: {project.stack}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
