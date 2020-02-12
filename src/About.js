import React from 'react';
import headshot from './images/profile-pic.jpg';

const About = () => (
  <section id="about">
    <div id="self-portrait">
      <img src={headshot} alt="profile pic" />
    </div>
    <div id="info">
      <div id="bio">
        <h1 className="title">bio</h1>
        <p className="text">Hi, I'm Anule!</p>
        <p className="text">
          I'm a former marketing professional, now a software engineer. In my
          free time, I'm an amateur documentary filmmaker/photographer.
        </p>
        <br />
        <p className="text">
          I love developing applications that are easy to use and accessible for everyone. I'm particularly interested in civic technology and open source software.
        </p>
        <br />
        <p className="text">
          I graduated from the University of Chicago in 2016 and completed The
          Grace Hopper Program at Fullstack Academy in December 2017.
        </p>
      </div>
      <div id="skills">
        <h1 className="title">skills</h1>
        <p className="text">
          Javascript, Node.js, PostgreSQL, SQL, Express.js, Webpack,
          React/Redux, Git, Heroku, PHP, Wordpress
        </p>
      </div>
    </div>
  </section>
);

export default About;
