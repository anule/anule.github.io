import React from 'react';
import './Projects.css';
import kitchen from './global-kitchen.png';
import h2store from './h2store.png';
import neo4j from './neo4j-display.png';
import twitter from './Twitter_Logo_Blue.png';

const Projects = () => (
    <section id="projects">
        <h1 className="title">projects</h1>
        <div className="project-tiles">
            <div className="project" id="uncommon-git">
                <h1 className="project-title">Lesser Known Git Commands</h1>
                <div className="project-img">
                    <img src={twitter} alt="Twitter logo" id="twitter-logo" />
                </div>
                <div className="buttons">
                    <a href="http://twitter.com/UncommonGitCmd">
                        <button className="button is-medium is-outlined demo" role="link">
              Demo
                        </button>
                    </a>
                    <a href="https://glitch.com/edit/#!/uncommon-git">
                        <button className="button is-medium is-outlined GitHub" role="link">
              Code
                        </button>
                    </a>
                </div>
                <div className="description">
                    <span className="text">April 2018</span>
                    <br />
                    <p className="text">
            A Twitter bot that tweets nonsense Git commands every 30 minutes.
                    </p>
                    <br />
                    <p className="text">
                        <b>Tech stack:</b> Node.js, Express.js server, Tracery API to create
            the command grammar. Built using Botwiki's<a href="https://glitch.com/~twitterbot">
              Twitter Bot template
                        </a> on Glitch
                    </p>
                </div>
            </div>

            <div className="project" id="h2Store">
                <h1 className="project-title">h2Store</h1>
                <div className="project-img">
                    <img src={h2store} alt="h2store homepage" />
                </div>
                <div className="buttons">
                    <a href="http://h2store.herokuapp.com">
                        <button className="button is-medium is-outlined demo" role="link">
              Demo
                        </button>
                    </a>
                    <a href="https://github.com/anule/h2store">
                        <button className="button is-medium is-outlined GitHub" role="link">
              Code
                        </button>
                    </a>
                </div>
                <div className="description">
                    <span className="text">November 2017</span>
                    <br />
                    <p className="text">
            An e-commerce site which sells varieties of water.
                    </p>
                    <br />
                    <p className="text">
                        <b>Tech stack:</b> Express.js, React/Redux, Sass, PostgreSQL.
            Developed using Agile Development
                    </p>
                </div>
            </div>

            <div className="project" id="who-or-them">
                <h1 className="project-title">Check Your Fave</h1>
                <div className="project-img">
                    <img src={neo4j} alt="Check Your Fave Neo4j graph visualization" />
                </div>
                <div className="buttons">
                    <a href="https://github.com/anule/who-or-them">
                        <button className="button is-medium is-outlined Github" role="link">
              Code
                        </button>
                    </a>
                </div>
                <div className="description">
                    <span className="text">October 2017 - present</span>
                    <p className="text">
            A searchable social graph of celebrities. Inspired by the popular
            podcast, Who Weekly <br />
                        <br /> By mapping out relationships between popular and irrelevant
            celebrities, my next iteration of this application is to write an
            algorithm that will determine the likelihood of an irrelevant
            celebrity to become genuinely famous, based on their existing
            relationships to famous people
                    </p>
                    <p className="text">
                        <b>Tech stack:</b> Node.js, Express.js, Neo4j database hosted on
            GrapheneDB, React.js, Redux.js, CSS, Webpack <br />
                        <br />
                        <b>Testing:</b> Mocha, Chai, Enzyme, Postman
                    </p>
                </div>
            </div>

            <div className="project" id="global-kitchen">
                <h1 className="project-title">Global Kitchen</h1>
                <div className="project-img">
                    <img src={kitchen} alt="Global Kitchen gameplay view" />
                </div>
                <div className="buttons">
                    <a href="http://global-kitchen.herokuapp.com">
                        <button className="button is-medium is-outlined demo" role="link">
              Demo
                        </button>
                    </a>
                    <a href="https://github.com/GH-FoodNetwork/Global-Kitchen">
                        <button className="button is-medium is-outlined GitHub" role="link">
              Code
                        </button>
                    </a>
                </div>
                <div className="description">
                    <span className="text">November 2017 - December 2017</span>
                    <br />
                    <p className="text">
            A time-management simulation game designed to teach players about
            unique foods from around the world
                    </p>
                    <br />
                    <p className="text">
                        <b>Tech stack:</b> Redux, Pixi.js, JavaScript. <br /> Developed
            using Agile Development
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Projects;
