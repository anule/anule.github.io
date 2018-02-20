import React from 'react';
import './Contact.css';
// import '../public/Anule-Ndukwu-Resume.pdf';

// const resumeLink = 'https://anule.github.io/Anule-Ndukwu-Resume.pdf';

const Contact = () => (
  <section className="slide-out" id="contact">
    <div id="contact-icons">
      <a href="https://www.linkedin.com/in/anule-ndukwu">
        <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
      </a>
      <a href="https://github.com/anule">
        <i className="fa fa-github fa-4x" aria-hidden="true" />
      </a>
      <a href="mailto:anule.ndukwu@gmail.com">
        <i className="fa fa-envelope fa-4x" aria-hidden="true" />
      </a>
      <a href="https://anulendukwu.space">
        <i className="fa fa-camera-retro fa-4x" aria-hidden="true" />
      </a>
    </div>
  </section>
);

export default Contact;
